import {
  ProfileOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
  DownOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Dropdown, Space, Button } from "antd";
import { useSession, signOut } from "next-auth/react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/helper/categories";

const { Header, Content, Footer } = Layout;

// dropdown menu items
let items = [];
categories?.forEach((categoryName) => {
  items.push({
    label: (
      <Link href={`/products/${categoryName}`}>
        {categoryName.toUpperCase()}
      </Link>
    ),
    key: categoryName,
  });
});

const RootLayout = ({ children }) => {
  const { data: session } = useSession();

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
                    Categories
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
            {categories.map((categoryName) => (
              <Link
                key={categoryName}
                style={{ padding: "0 10px" }}
                href={"products/" + categoryName}
              >
                {categoryName.toUpperCase()}
              </Link>
            ))}
          </div>
          {/* pc builder and authentication  */}
          <Menu theme="dark" mode="vertical" className={styles.menu_items}>
            {!session?.user?.email ? (
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  margin: "0 30px",
                }}
                href="/login"
              >
                <items>Login</items>
              </Link>
            ) : (
              <items>
                <Button
                  type="primary"
                  danger
                  onClick={() => signOut()}
                  style={{ margin: "0 30px" }}
                >
                  Logout
                </Button>
              </items>
            )}
            <Link href="/pc-builder">
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
