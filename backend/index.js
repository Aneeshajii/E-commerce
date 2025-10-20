// const port = 4000;
// const express = require ("express");
// const app = express();
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path = require("path");
// const cors = require("cors");
// const { error, log } = require("console");
// const { type } = require("os");
// const { resourceLimits } = require("worker_threads");

// app.use(express.json());
// app.use(cors());

// // Database connedtion with mongodb
// mongoose.connect("mongodb+srv://aneeshuser:707070@cluster0.qrvwrto.mongodb.net/Ecom")
// .then(() => {
//   console.log("✅ Connected to MongoDB Atlas");
// })
// .catch((err) => {
//   console.error("❌ MongoDB connection error:", err);
// });

// // API creation 
// app.get("/",(req,res)=>{
//     res.send("Express App is running.. ")
// })

// // Image storage engine

// const storage = multer.diskStorage({
//     destination: './upload/images',
//     filename:(req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })

// const upload = multer({storage:storage})

// // Creating Upload Endpoint for Images
// app.use('/images',express.static('upload/images'))

// app.post("/upload",upload.single('product'),(req,res)=>{
//     res.json({
//         success:1,
//         image_url:`http://localhost:${port}/images/${req.file.filename}`
//     })
// })

// // Schema for creting products 
// const Product = mongoose.model("Product",{
//     id:{
//         type:Number,
//         required:true,
//     },
//     name:{
//         type:String,
//         required:true,
//     },
//     image:{
//         type:String,
//         required:true,
//     },
//     category:{
//         type:String,
//         required:true,
//     },
//     new_price:{
//         type:Number,
//         required:true,
//     },
//     old_price:{
//         type:Number,
//         required:true,
//     },
//     date:{
//         type:Date,
//         default:Date.now,
//     },
//     avilable:{
//         type:Boolean,
//         default:true,
//     },

// })

// app.post('/addproduct', async (req, res) => {
//     let products = await Product.find({});
//     let id;
//     if(products.length>0){
//         let last_product_array = products.slice(-1);
//         let last_product = last_product_array[0];
//         id = last_product.id+1;
//     }
//     else{
//         id = 1;
//     }

//     const product = new Product({
//       id:id,
//       name: req.body.name,
//       image: req.body.image,
//       category: req.body.category,
//       new_price: req.body.new_price,
//       old_price: req.body.old_price,
//     });

//     console.log(product);
//     const savedProduct = await product.save();

//     res.json({
//       success: true,
//     //   message: "Product added successfully",
//       name:req.body.name,
//       data: savedProduct
//     });
//   });

// //   Creating api for deleting products

// app.post('/removeproduct', async (req,res)=>{
//     await Product.findOneAndDelete({id:req.body.id});
//     console.log("Removed");
//     res.json({
//         success:true,
//         name:req.body.name
//     })    
// })

// // Creating ApI for getting all product
// app.get('/allproducts',async (req,res)=>{
//     let products = await Product.find({});
//     console.log("all products fetched");
//     res.send(products);
    
// })


// app.listen(port,(error)=>{
//     if(!error){
//         console.log("server running on port "+ port)
//     }
//     else{
//         console.log("error :" + error);
        
//     }
// })







// 


// const port = 4000;
// const express = require ("express");
// const app = express();
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path = require("path");
// const cors = require("cors");
// const { error, log } = require("console");
// const { type } = require("os");

// // Assuming your 'all_product.js' is accessible relative to this file
// // NOTE: You must create and export this file (e.g., module.exports = [ {id: 1, name: '...', ...}, ... ];)
// // const all_product = require("../frontend/src/Components/Assets/all_product"); 
// // New clean import:

// //    jhhhhghghh  tus remebmer...,,.,.,.,,/./,./.,../..,/.//./.,/.,//,/.,////.,/,/.
// const all_product = require("./prdts.json");

// app.use(express.json());
// app.use(cors());


// // Database connection with mongodb
// mongoose.connect("mongodb+srv://aneeshuser:707070@cluster0.qrvwrto.mongodb.net/Ecom")
// .then(() => {
//     console.log("✅ Connected to MongoDB Atlas");
// })
// .catch((err) => {
//     console.error("❌ MongoDB connection error:", err);
// });

// // API creation 
// app.get("/",(req,res)=>{
//     res.send("Express App is running.. ")
// })

// // Image storage engine
// const storage = multer.diskStorage({
//     destination: './upload/images',
//     filename:(req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })




// const upload = multer({storage:storage})

// // Creating Upload Endpoint for Images
// app.use('/images',express.static('upload/images'))

// app.post("/upload",upload.single('product'),(req,res)=>{
//     res.json({
//         success:1,
//         image_url:`http://localhost:${port}/images/${req.file.filename}`
//     })
// })

// // Schema for creating products 
// const Product = mongoose.model("Product",{
//     id:{ type:Number, required:true, unique: true }, // Added unique constraint
//     name:{ type:String, required:true },
//     image:{ type:String, required:true },
//     category:{ type:String, required:true },
//     new_price:{ type:Number, required:true },
//     old_price:{ type:Number, required:true },
//     date:{ type:Date, default:Date.now },
//     avilable:{ type:Boolean, default:true },
// });

// // ... (code above) ...

// // In index.js (no need for BASE_URL constant outside this function)

// app.get('/seedproducts', async (req, res) => {
//     try {
//         const BASE_URL = `http://localhost:${port}/images/`; 

//         // Map the product list to add the full URL string
//         const productsToSeed = all_product.map(product => ({
//             ...product,
//             image: BASE_URL + product.image // Automatically builds the full URL
//         }));
        
//         await Product.deleteMany({}); 
//         await Product.insertMany(productsToSeed);

//         console.log("✅ Database Seeding Complete: All products added.");
//         res.json({ success: true, message: "Database seeded successfully." });

//     } catch (error) {
//         console.error("❌ Error during database seeding:", error);
//         res.status(500).json({ success: false, message: "Failed to seed database.", error: error.message });
//     }
// });

// // ... (code below) ...
// // Existing /addproduct API (for adding single products via admin panel)
// app.post('/addproduct', async (req, res) => {
//     let products = await Product.find({});
//     let id;
//     if(products.length>0){
//         let last_product_array = products.slice(-1);
//         let last_product = last_product_array[0];
//         id = last_product.id + 1;
//     } else {
//         id = 1;
//     }

//     const product = new Product({
//       id:id,
//       name: req.body.name,
//       image: req.body.image,
//       category: req.body.category,
//       new_price: req.body.new_price,
//       old_price: req.body.old_price,
//     });

//     console.log(product);
//     const savedProduct = await product.save();

//     res.json({
//       success: true,
//       name:req.body.name,
//       data: savedProduct
//     });
// });

// // Creating api for deleting products
// app.post('/removeproduct', async (req,res)=>{
//     await Product.findOneAndDelete({id:req.body.id});
//     console.log("Removed");
//     res.json({
//         success:true,
//         name:req.body.name
//     })    
// })

// // Creating ApI for getting all product
// app.get('/allproducts',async (req,res)=>{
//     let products = await Product.find({});
//     console.log("all products fetched");
//     res.send(products);
// })

// // Schema for user creation

// const Users = mongoose.model('Users',{
//     name:{
//         type:String,
//     },
//     email:{
//         type:String,
//     },
//     password:{
//         type:String,
//     },
//     cartData:{
//         type:Object,
//     },
//     date:{
//         type:Date,
//         default:Date.now
//     }
// })
 
// // Craeting Endpoints for registring the user
// app.post('/signup',async (req,res)=>{
//     let check = await Users.findOne({email:req.body.email});
//     if(check) {
//         return res.status(400).json({success:false,errors:"existing user found with the same email address"})
//     }
//     let cart = {};
//     for (let i = 0; i < all_product.length; i++) {
//         cart[i] = 0;
//     }
//     const user = new Users({
//         name:req.body.username,
//         email:req.body.email,
//         password:req.body.password,
//         cartData:cart,
//     })
  
//      await user.save();

//      const data = {
//         user:{
//             id:user.id
//         }
//      }
//      const token = jwt.sign(data,'secrect_ecom');
//      res.json({success:true,token})

// })

// // creating end point for userlogin
// app.post('/login',async (req,res)=>{
//     let user = await Users.findOne({email:req.body.email});
//     if(user) {
//         const passCompare = req.body.password === user.password;
//         if(passCompare){
//             const data = {
//                 user:{
//                     id:user.id
//                 }
//             }
//             const token = jwt.sign(data,'secrect_ecom');
//             res.json({success:true,token})
//         }
//         else{
//             res.json({success:false,errors:"wrong password"});
//         }
//     }
//     else{
//         res.json({success:false,errors:"wrong email Id"})
//     }
// })


// app.listen(port,(error)=>{
//     if(!error){
//         console.log("server running on port "+ port)
//     }
//     else{
//         console.log("error :" + error);
//     }
// })






// 

// const express = require("express");
// const mongoose = require("mongoose");
// const fs = require("fs");
// const path = require("path");
// const cors = require("cors");
// const Product = require("./models/productModel");
// const all_product = require("./prdts.json"); // ✅ works fine in CommonJS

// const app = express();
// const port = 4000;

// app.use(cors());
// app.use(express.json());

// // --- Ensure upload folder exists ---
// const uploadDir = path.join(__dirname, "upload", "images");
// fs.mkdirSync(uploadDir, { recursive: true });

// // --- Serve images statically ---
// app.use("/images", express.static(uploadDir));

// // --- MongoDB connection ---
// mongoose
//   .connect("mongodb://127.0.0.1:27017/ecommdb")
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // --- Copy images from images_source → upload/images ---
// const copyImages = () => {
//   const srcDir = path.join(__dirname, "images_source");
//   const destDir = uploadDir;

//   if (!fs.existsSync(srcDir)) {
//     console.error("❌ Source folder 'images_source' not found!");
//     return;
//   }

//   const files = fs.readdirSync(srcDir);
//   files.forEach((file) => {
//     const srcPath = path.join(srcDir, file);
//     const destPath = path.join(destDir, file);

//     if (!fs.existsSync(destPath)) {
//       fs.copyFileSync(srcPath, destPath);
//       console.log(`📁 Copied: ${file}`);
//     }
//   });
// };

// // --- Seed products into MongoDB ---
// app.get("/seedproducts", async (req, res) => {
//   try {
//     copyImages();

//     const BASE_URL = `http://localhost:${port}/images/`;
//     const productsToSeed = all_product.map((product) => ({
//       ...product,
//       image: BASE_URL + product.image,
//     }));

//     await Product.deleteMany({});
//     await Product.insertMany(productsToSeed);

//     res.json({ message: "✅ Products seeded successfully", count: productsToSeed.length });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to seed products" });
//   }
// });

// // --- Get all products ---
// app.get("/allproducts", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch products" });
//   }
// });

// // --- Start Server ---
// app.listen(port, () => {
//   console.log(`🚀 Server running at http://localhost:${port}`);
// });







// 
// 
// import express from "express";

// import mongoose from "mongoose";
// import jwt from "jsonwebtoken";
// import multer from "multer";
// import path from "path";
// import cors from "cors";
// import fs from "fs";
// import { fileURLToPath } from "url";

// import express from "express";

// // ====== Setup __dirname for ES Module ======
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // ====== Load products JSON ======
// const all_product = JSON.parse(
//   fs.readFileSync(path.join(__dirname, "prdts.json"), "utf-8")
// );

// // ====== Initialize Express ======
// const app = express();
// const port = 4000;

// app.use(express.json());
// app.use(cors());

// // ====== MongoDB connection ======
// mongoose.connect("mongodb+srv://aneeshuser:707070@cluster0.qrvwrto.mongodb.net/Ecom")
//   .then(() => console.log("✅ Connected to MongoDB Atlas"))
//   .catch(err => console.error("❌ MongoDB connection error:", err));

// // ====== Multer setup for image uploads ======
// const storage = multer.diskStorage({
//   destination: './upload/images',
//   filename: (req, file, cb) => {
//     cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
//   }
// });
// const upload = multer({ storage });

// // Serve uploaded images
// app.use('/images', express.static(path.join(__dirname, 'upload/images')));

// // ====== Product Schema ======
// const Product = mongoose.model("Product", new mongoose.Schema({
//   id: { type: Number, required: true, unique: true },
//   name: { type: String, required: true },
//   image: { type: String, required: true },
//   category: { type: String, required: true },
//   new_price: { type: Number, required: true },
//   old_price: { type: Number, required: true },
//   date: { type: Date, default: Date.now },
//   available: { type: Boolean, default: true },
// }));

// // ====== Users Schema ======
// const Users = mongoose.model('Users', new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   cartData: Object,
//   date: { type: Date, default: Date.now }
// }));

// // ====== Copy images from images_source to upload/images ======
// const copyImages = () => {
//   const sourceDir = path.join(__dirname, 'images_source');
//   const destDir = path.join(__dirname, 'upload/images');

//   if (!fs.existsSync(sourceDir)) {
//     console.error("❌ Source folder 'images_source' not found!");
//     return;
//   }
//   if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

//   all_product.forEach(prod => {
//     const src = path.join(sourceDir, prod.image);
//     const dest = path.join(destDir, prod.image);
//     if (fs.existsSync(src)) {
//       fs.copyFileSync(src, dest);
//     } else {
//       console.warn(`⚠️ Image not found: ${prod.image}`);
//     }
//   });
// };

// // ====== Seed products ======
// app.get('/seedproducts', async (req, res) => {
//   try {
//     copyImages(); // Copy images first

//     const BASE_URL = `http://localhost:${port}/images/`;
//     const productsToSeed = all_product.map(prod => ({
//       ...prod,
//       image: BASE_URL + prod.image
//     }));

//     await Product.deleteMany({});
//     await Product.insertMany(productsToSeed);

//     console.log("✅ Database seeding complete.");
//     res.json({ success: true, message: "Database seeded successfully." });
//   } catch (error) {
//     console.error("❌ Seeding error:", error);
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // ====== Get all products ======
// app.get('/allproducts', async (req, res) => {
//   const products = await Product.find({});
//   res.json(products);
// });

// // ====== Add product ======
// app.post('/addproduct', async (req, res) => {
//   const products = await Product.find({});
//   const id = products.length ? products[products.length - 1].id + 1 : 1;

//   const newProduct = new Product({
//     id,
//     name: req.body.name,
//     image: req.body.image,
//     category: req.body.category,
//     new_price: req.body.new_price,
//     old_price: req.body.old_price,
//   });

//   const savedProduct = await newProduct.save();
//   res.json({ success: true, data: savedProduct });
// });

// // ====== Remove product ======
// app.post('/removeproduct', async (req, res) => {
//   await Product.findOneAndDelete({ id: req.body.id });
//   res.json({ success: true, name: req.body.name });
// });

// // ====== Signup ======
// app.post('/signup', async (req, res) => {
//   const existing = await Users.findOne({ email: req.body.email });
//   if (existing) return res.status(400).json({ success: false, errors: "Email already exists" });

//   let cart = {};
//   all_product.forEach((_, idx) => { cart[idx] = 0; });

//   const user = new Users({
//     name: req.body.username,
//     email: req.body.email,
//     password: req.body.password,
//     cartData: cart,
//   });

//   await user.save();
//   const token = jwt.sign({ user: { id: user.id } }, 'secrect_ecom');
//   res.json({ success: true, token });
// });

// // ====== Login ======
// app.post('/login', async (req, res) => {
//   const user = await Users.findOne({ email: req.body.email });
//   if (!user) return res.json({ success: false, errors: "Wrong email" });

//   if (req.body.password !== user.password) return res.json({ success: false, errors: "Wrong password" });

//   const token = jwt.sign({ user: { id: user.id } }, 'secrect_ecom');
//   res.json({ success: true, token });
// });

// // ====== Start server ======
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });




// 
// 
// 
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
// dotenv.config(); // ✅ Load .env variables

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
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB connection error:", err));

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


// // ✅ Initialize Razorpay instance with environment variables
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

        console.log("✅ Database seeding complete.");
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
// // ✅ Create Razorpay order endpoint
// app.post("/order", async (req, res) => {
//   try {
//     const { amount } = req.body;

//     const order = await razorpay.orders.create({
//       amount: amount * 100, // Convert to paise
//       currency: "INR",
//       receipt: "receipt_" + Date.now(),
//     });

//     res.json(order);
//   } catch (error) {
//     console.error("Error creating Razorpay order:", error);
//     res.status(500).json({ message: "Server error creating order" });
//   }
// });

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
