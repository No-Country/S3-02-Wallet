import Link from "next/link";
import styles from "../styles/login.module.scss";
import { useState } from "react";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { Google } from "@styled-icons/boxicons-logos/Google";
import { signIn } from "next-auth/react";
import Input from "../components/Input";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          ease: "easeIn",
          duration: 1.2,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          ease: "easeInOut",
          duration: 0.8,
        },
      }}
      className={styles.container}
    >
      <div className={styles.content}>
        <div className={styles.welcomeText}>
          <h1>Welcome back!</h1>
          <p>We´re happy to see you back!, please login to continue</p>
        </div>

        <form className={styles.form}>
          <Input
            method="input"
            type="email"
            id="email"
            label="Email"
            autocomplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            method="input"
            type="password"
            id="password"
            label="Password"
            autocomplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        <span className={styles.checkbox}>
          <input type="checkbox" name="" id="" />
          <p>Remember me</p>
        </span>

        <p className={styles.linkText}>Forgot password?</p>

        <button className={styles.button}>Sign In</button>
        <span className={styles.line}></span>

        <span className={styles.social}>
          <Facebook
            width={"3rem"}
            color="#3b5998"
            className={styles.socialButtons}
            onClick={() => signIn("facebook", { callbackUrl: "/home" })}
          />
          <Google
            width={"3rem"}
            color="#dd4b39"
            className={styles.socialButtons}
            onClick={() => signIn("google", { callbackUrl: "/home" })}
          />
        </span>

        <Link href={"/register"}>
          <h3 className={styles.linkText}>
            Don´t have an account?, Register now!
          </h3>
        </Link>
      </div>
    </motion.div>
  );
};

export default Login;
