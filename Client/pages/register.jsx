import { useState } from "react";

import { useRouter } from "next/router";

import { motion } from "framer-motion";
import { ArrowIosBack } from "@styled-icons/evaicons-solid/ArrowIosBack";

import Input from "../components/Input";
import styles from "../styles/register.module.scss";

const Register = () => {
  const router = useRouter();

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
      <span className={styles.arrow}>
        <ArrowIosBack width={"2.5rem"} onClick={() => router.back()} />
      </span>

      <div className={styles.content}>
        <h1 className={styles.title}>Create an account</h1>

        <form className={styles.form}>
          <Input
            method="input"
            type="text"
            id="name"
            label="Name"
            autoComplete="given-name"
          />
          <Input
            method="input"
            type="text"
            id="lastName"
            label="Last Name"
            autoComplete="family-name"
          />
          <Input
            method="input"
            type="email"
            id="email"
            label="Email"
            autoComplete="email"
          />
          <Input
            method="input"
            type="password"
            id="password"
            label="Password"
            autoComplete="new-password"
          />
          <Input
            method="input"
            type="password"
            id="repeatPassword"
            label="Repeat Password"
            autoComplete="new-password"
          />
          <Input
            method="input"
            type="number"
            id="DNI"
            label="DNI"
            autoComplete="dni"
          />
          <Input
            method="input"
            type="date"
            id="birthDay"
            label="Birth Day"
            autoComplete="bday"
          />
          <Input type="text" id="sex" label="Sex" autoComplete="sex" />
        </form>

        <span className={styles.checkbox}>
          <input type="checkbox" name="" id="" />
          <p>I´m over 18 years old</p>
        </span>

        <button className={styles.button}>Sign Up</button>
      </div>
    </motion.div>
  );
};

export default Register;
