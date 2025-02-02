import Link from "next/link";
import { Button } from "antd"; // Impor komponen Button dari Ant Design

export default function Home() {
  return (
    <div style={{ textAlign: "center", paddingTop: 50 }}>
      <h1>Welcome to Inventory App</h1>
      <div>
        <Link href="/login">
          <Button type="primary" style={{ marginRight: 10 }}>
            Login
          </Button>
        </Link>
        <Link href="/register">
          <Button type="primary">Register</Button>
        </Link>
      </div>
    </div>
  );
}