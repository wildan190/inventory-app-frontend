"use client";

import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";

const AuthForm = ({ isLogin = true, isForgotPassword = false, onFinish }) => {
  return (
    <Form
      name={isForgotPassword ? "forgotPassword" : "basic"}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
    >
      {/* Form hanya menampilkan email jika Forgot Password */}
      {!isForgotPassword && !isLogin && (
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input size="large" />
        </Form.Item>
      )}

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      {/* Password hanya ditampilkan jika bukan Forgot Password */}
      {!isForgotPassword && (
        <>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password size="large" />
          </Form.Item>

          {!isLogin && (
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>
          )}

          {isLogin && (
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          )}
        </>
      )}

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
          size="large"
          style={{
            background: "#00b96b",
            borderColor: "#00b96b",
            fontWeight: "bold",
          }}
        >
          {isForgotPassword ? "Send Reset Instructions" : isLogin ? "Login" : "Register"}
        </Button>
      </Form.Item>

      {isForgotPassword ? (
        <div style={{ textAlign: "center" }}>
          <Link href="/login" style={{ color: "#00b96b" }}>
            Back to Login
          </Link>
        </div>
      ) : isLogin ? (
        <div style={{ textAlign: "center" }}>
          <Link href="/forgot-password" style={{ color: "#00b96b" }}>
            Forgot Password
          </Link>{" "}
          |{" "}
          <Link href="/register" style={{ color: "#00b96b" }}>
            Register
          </Link>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <Link href="/login" style={{ color: "#00b96b" }}>
            Already have an account? Login
          </Link>
        </div>
      )}
    </Form>
  );
};

export default AuthForm;
