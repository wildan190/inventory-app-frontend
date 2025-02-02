"use client";

import { useState } from "react";
import { Row, Col, Card, message } from "antd";
import Image from "next/image";
import AuthForm from "@/components/AuthForm";
import "/public/img/auth/auth-style.css";

const ForgotPasswordPage = () => {
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = (values) => {
    setLoading(true);
    console.log("Forgot Password Request:", values);

    // Simulasi API Call untuk reset password
    setTimeout(() => {
      setLoading(false);
      message.success("Reset instructions sent to your email!");
    }, 2000);
  };

  return (
    <div className="login-layout">
      <Row justify="center" align="middle" className="login-card">
        {/* Kolom Kiri: Gambar */}
        <Col xs={0} sm={0} md={12} lg={12} className="left-column">
          <div className="image-container">
            <Image
              src="/img/auth/loginasset.png"
              alt="Forgot Password Asset"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </Col>

        {/* Kolom Kanan: Form Forgot Password */}
        <Col xs={24} sm={24} md={12} lg={12} className="right-column">
          <Card
            title={<h1 style={{ textAlign: "center" }}>Forgot Password</h1>}
            bordered={false}
            style={{ boxShadow: "none" }}
          >
            <AuthForm isForgotPassword={true} onFinish={handleForgotPassword} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ForgotPasswordPage;
