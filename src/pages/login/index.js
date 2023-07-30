import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined
            onClick={() =>
              signIn("google", {
                callbackUrl: "https://pc-builder-chi.vercel.app",
              })
            }
          />
          <GithubOutlined
            onClick={() =>
              signIn("github", {
                callbackUrl: "https://pc-builder-chi.vercel.app",
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
