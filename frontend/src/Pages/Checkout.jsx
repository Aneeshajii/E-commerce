import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import "./CSS/Checkout.css";

const Checkout = () => {
  const { getTotalCartAmount } = useContext(ProductContext);
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    const amount = getTotalCartAmount();

    try {
      // ✅ Call backend to create order
      const res = await fetch("http://localhost:4000/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();

      if (!data.id) {
        alert("Failed to create Razorpay order. Please try again.");
        return;
      }

      const options = {
        key: "rzp_test_1234567890abc", // Your test key
        amount: data.amount,
        currency: "INR",
        name: "My E-Commerce Store",
        description: "Payment for your order",
        order_id: data.id,
        handler: function (response) {
          alert("✅ Payment Successful!");
          navigate("/success");
        },
        prefill: {
          name: address.name,
          contact: address.phone,
        },
        theme: { color: "#3399cc" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-form">
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} />
        <input name="street" placeholder="Street Address" onChange={handleChange} />
        <input name="city" placeholder="City" onChange={handleChange} />
        <input name="state" placeholder="State" onChange={handleChange} />
        <input name="pincode" placeholder="Pincode" onChange={handleChange} />
      </div>
      <button onClick={handlePayment}>Pay ₹{getTotalCartAmount()}</button>
    </div>
  );
};

export default Checkout;
