import AuthForm from "@/components/AuthForm";
import { Row, Col, Card } from "antd";
import Image from "next/image";

// Impor file CSS dari folder public
import "/public/img/auth/auth-style.css";

const LoginPage = () => {
  return (
    <div className="login-layout">
      <Row justify="center" align="middle" className="login-card">
        {/* Kolom Kiri: Gambar */}
        <Col xs={0} sm={0} md={12} lg={12} className="left-column">
          <div className="image-container">
            <Image
              src="/img/auth/loginasset.png" // Path gambar
              alt="Login Asset"
              fill
              style={{
                objectFit: "contain", // Gambar menyesuaikan area tanpa terdistorsi
              }}
            />
          </div>
        </Col>

        {/* Kolom Kanan: Form Login */}
        <Col xs={24} sm={24} md={12} lg={12} className="right-column">
          <Card
            title={
              <div style={{ textAlign: "center" }}>
                <h1 style={{ margin: 0 }}>Login</h1>
              </div>
            }
            bordered={false}
            style={{
              boxShadow: "none",
            }}
          >
            <AuthForm isLogin={true} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;