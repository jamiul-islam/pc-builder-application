import {
  ProfileOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
  DownOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Dropdown, Space } from "antd";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const { Header, Content, Footer } = Layout;

// dropdown menu item
// category names will come from database
const items = [
  {
    label: <Link href="/products">1st menu item</Link>,
    key: "0",
  },
  {
    label: <Link href="/products">2nd menu item</Link>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
const RootLayout = ({ children }) => {
  return (
    <Layout>
      {/* --------------navigation-------------- */}
      <Header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
          }}
        >
          {/* logo */}
          <div className="brand-logo" style={{ display: "flex" }}>
            {/* logo */}
            <h1>
              <Link
                href="/"
                style={{
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "3px",
                }}
              >
                <Image
                  src="https://www.startech.com.bd/image/catalog/logo.png"
                  title="Star Tech Ltd "
                  width="100"
                  height="45"
                  alt="Star Tech Ltd "
                  style={{
                    paddingTop: "10px",
                  }}
                />
              </Link>
            </h1>
            {/* dropdown */}
            <div style={{ margin: "0 10px" }}>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space style={{ color: "white" }}>
                    Click me
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
          {/* featured categories */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ padding: "0 10px" }}>item</p>
            <p style={{ padding: "0 10px" }}>item</p>
            <p style={{ padding: "0 10px" }}>item</p>
            <p style={{ padding: "0 10px" }}>item</p>
            <p style={{ padding: "0 10px" }}>item</p>
            <p style={{ padding: "0 10px" }}>item</p>
            <p style={{ padding: "0 10px" }}>item</p>
          </div>
          {/* pc builder */}
          <Menu theme="dark" mode="vertical" className={styles.menu_items}>
            {/* TODO */}
            {/* conditionally render button */}
            <Link href="/account" style={{ margin: "0 30px" }}>
              Login
            </Link>
            <Link href="/products">
              <items>
                <ProfileOutlined />
                PC Builder
              </items>
            </Link>
          </Menu>
        </div>
      </Header>

      {/* --------------body-------------- */}
      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      {/* --------------footer-------------- */}
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          PC Builder
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://web.facebook.com/groups/programmingherocommunity">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://web.programming-hero.com/home/">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        made with love in Bangladesh
      </Footer>
    </Layout>
  );
};
export default RootLayout;
