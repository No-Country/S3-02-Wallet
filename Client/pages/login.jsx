import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

import { motion } from "framer-motion";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { Google } from "@styled-icons/boxicons-logos/Google";
import { toast } from "react-toastify";
// import axios from "axios";

import styles from "../styles/login.module.scss";
import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" && password === "") {
      setError(true);
      toast.error("Email and password cannot be empty", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        toastId: 1,
      });
      setTimeout(() => {
        setError(false);
      }, 2500);
    } else {
      const res = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      if (res.status === 401) {
        console.log(res.error);
      }

      router.push("/home");
    }
  };

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

        <form className={styles.form} onSubmit={handleSubmit} id="form">
          <div className={styles.formContainer1}>
            <input
              type="email"
              id="email"
              placeholder=" "
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={error ? styles.inputError : styles.input}
            />
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
          </div>

          <div className={styles.formContainer2}>
            <input
              type="password"
              id="password"
              placeholder=" "
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={error ? styles.inputError : styles.input}
            />
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
          </div>
        </form>

        <span className={styles.checkbox}>
          <input type="checkbox" name="" id="" />
          <p>Remember me</p>
        </span>

        <p className={styles.linkText}>Forgot password?</p>

        <div className={styles.secondContent}>
          <button
            type="submit"
            form="form"
            className={styles.button}
            onClick={(e) => handleSubmit(e)}
          >
            Sign In
          </button>
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
      </div>
    </motion.div>
  );
};

export default Login;
