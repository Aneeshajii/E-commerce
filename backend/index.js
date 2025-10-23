

import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import multer from "multer";
import cors from "cors";
import path from "path";
import fs from "fs";
import { error, log } from "console";
// import Razorpay from "razorpay";
// import dotenv from "dotenv";
// dotenv.config(); //  Load .env variables

// -------------------- Read JSON --------------------
const __dirname = path.resolve(); // current directory
const all_product = JSON.parse(fs.readFileSync(path.join(__dirname, "prdts.json"), "utf-8"));

// -------------------- Config --------------------
const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());
app.use('/images', express.static('upload/images'));

// -------------------- MongoDB --------------------
mongoose.connect("mongodb+srv://aneeshuser:707070@cluster0.qrvwrto.mongodb.net/Ecom")
.then(() => console.log(" Connected to MongoDB Atlas"))
.catch(err => console.error(" MongoDB connection error:", err));

// -------------------- Multer --------------------
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});
const upload = multer({ storage: storage });

// -------------------- Schemas --------------------
const Product = mongoose.model("Product", {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    new_price: { type: Number, required: true },
    old_price: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    avilable: { type: Boolean, default: true },
});

const Users = mongoose.model('Users', {
    name: String,
    email: String,
    password: String,
    cartData: Object,
    date: { type: Date, default: Date.now }
});


// //  Initialize Razorpay instance with environment variables
// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });


// -------------------- Routes --------------------
app.get("/", (req, res) => res.send("Express App is running.."));

// Upload single image
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Seed Products with .png.png fallback
app.get('/seedproducts', async (req, res) => {
    try {
        const BASE_URL = `http://localhost:${port}/images/`;
        const srcFolder = './images_source/';
        const destFolder = './upload/images/';

        const productsToSeed = all_product.map(product => {
            let filename = product.image;
            let srcPath = path.join(srcFolder, filename);

            // check .png.png fallback
            if (!fs.existsSync(srcPath) && fs.existsSync(srcPath + '.png')) {
                srcPath += '.png';
                filename += '.png';
            }

            // copy image if exists
            if (fs.existsSync(srcPath)) {
                fs.copyFileSync(srcPath, path.join(destFolder, filename));
            } else {
                console.warn(`⚠️ Image not found: ${filename}`);
            }

            return { ...product, image: BASE_URL + filename };
        });

        await Product.deleteMany({});
        await Product.insertMany(productsToSeed);

        console.log(" Database seeding complete.");
        res.json({ success: true, message: "Database seeded successfully." });
    } catch (error) {
        console.error("❌ Error during database seeding:", error);
        res.status(500).json({ success: false, message: "Failed to seed database.", error: error.message });
    }
});

// -------------------- Product APIs --------------------

// Get all products
app.get('/allproducts', async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// Add product
app.post('/addproduct', async (req, res) => {
    const products = await Product.find({});
    const id = products.length ? products[products.length - 1].id + 1 : 1;

    const newProduct = new Product({
        id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });

    const savedProduct = await newProduct.save();
    res.json({ success: true, data: savedProduct });
});

// Remove product
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    res.json({ success: true, name: req.body.name });
});

// -------------------- User APIs --------------------

// Signup
app.post('/signup', async (req, res) => {
    const existing = await Users.findOne({ email: req.body.email });
    if (existing) return res.status(400).json({ success: false, errors: "Email already exists" });

    let cart = {};
    all_product.forEach((_, idx) => { cart[idx] = 0; });

    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    });

    await user.save();
    const token = jwt.sign({ user: { id: user.id } }, 'secrect_ecom');
    res.json({ success: true, token });
});

// Login
app.post('/login', async (req, res) => {
    const user = await Users.findOne({ email: req.body.email });
    if (!user) return res.json({ success: false, errors: "Wrong email" });

    if (req.body.password !== user.password) return res.json({ success: false, errors: "Wrong password" });

    const token = jwt.sign({ user: { id: user.id } }, 'secrect_ecom');
    res.json({ success: true, token });
});

// End point for newcollection
app.get('/newcollections',async (req,res)=>{
        let products = await Product.find({});
        let newcollection = products.slice(1).slice(-8);
        console.log("NewArraivals fetched");
        res.send(newcollection);
        
});

// Endpoint for popular

app.get('/popularproducts', async(req,res)=>{
    let products = await Product.find({});
    let popularproducts = products.slice(1).slice(-12);
    console.log("popularproducts fetched");
    res.send(popularproducts);
});



// Creating middleware to fetch user
const fetchUser = async (req,res,next) => {
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Please authenticate using valid token"})
    }
    else{
        try {
            const data = jwt.verify(token, 'secrect_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors:"please authenticate using vlaid token"})
        }
    }
}


// cerating endpoint for cartitmens
app.post('/addtocart',fetchUser,async (req,res)=>{
    console.log("Added", req.body.itemId);

    // console.log(req.body,req.user);
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    // res.send("Added")
     res.json({ message: "Added successfully" });
    
})

// creating endpoint to remove from cartdata
app.post('/removefromcart',fetchUser,async (req,res)=>{
    console.log("removed", req.body.itemId);
    
     let userData = await Users.findOne({_id:req.user.id});
     if( userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    // res.send("removed")
     res.json({ message: "Removed successfully" });

})

// creating saving cartData
app.post('/getcart',fetchUser, async(req,res)=>{
    console.log("GetCart");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})
// -------------------- Start Server --------------------
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
