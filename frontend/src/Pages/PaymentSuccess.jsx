import React from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/PaymentSuccess.css";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="payment-success">
      <h2>🎉 Payment Successful!</h2>
      <p>Thank you for your purchase.</p>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default PaymentSuccess;
