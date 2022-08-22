import { useState } from "react";

import Image from "next/image";

import { useDispatch } from "react-redux";
import { CloseCircle } from "@styled-icons/ionicons-outline/CloseCircle";
import { LineHorizontal1 } from "@styled-icons/fluentui-system-filled/LineHorizontal1";
import { SaveAlt } from "@styled-icons/material-twotone/SaveAlt";
import { CameraOutline } from "@styled-icons/typicons/CameraOutline";
import { motion } from "framer-motion";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import { setShowProfile } from "../../store/profileSlice";
import styles from "./Profile.module.scss";

const Profile = ({ user }) => {
  const dispatch = useDispatch();
  const dimensions = useWindowDimensions();
  const [error, setError] = useState(false);

  const variants = {
    hidden: { x: 0, y: 800 },
    enter: { x: 0, y: 0, transition: { duration: 0.4 } },
    exit: { x: 0, y: 800, transition: { duration: 0.4 } },
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
          duration: 0.4,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          ease: "easeOut",
          duration: 0.4,
        },
      }}
      className={styles.modal}
    >
      <motion.div
        drag={dimensions.width < 720 ? "y" : false}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        dragElastic={{ top: 0, left: 0, right: 0, bottom: 0.5 }}
        onDragEnd={(event, info) => {
          if (info.offset.y > 200) {
            dispatch(setShowProfile(false));
          }
        }}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        className={styles.modalBody}
      >
        <span className={styles.close}>
          <CloseCircle onClick={() => dispatch(setShowProfile(false))} />
        </span>
        <span className={styles.line}>
          <LineHorizontal1 />
        </span>
        <div className={styles.modalContent}>
          <div className={styles.image}>
            <Image
              src={user.image}
              alt={user.name}
              width="200px"
              height="200px"
            />
            <input
              type="file"
              name="img"
              style={{ display: "none" }}
              accept="image/*"
              id="input_img"
            />
            <label htmlFor="input_img" className={styles.camera}>
              <CameraOutline />
            </label>
          </div>

          <form className={styles.form}>
            <div className={styles.formContainer1}>
              <input
                type="text"
                name="name"
                placeholder={user.name.split(" ")[0]}
                id="name"
                autoComplete="given-name"
                className={error ? styles.inputError : styles.input}
              />
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
            </div>

            <div className={styles.formContainer2}>
              <input
                type="text"
                name="lastName"
                placeholder={user.name.split(" ")[1]}
                id="lastName"
                autoComplete="family-name"
                className={error ? styles.inputError : styles.input}
              />
              <label htmlFor="lastName" className={styles.label}>
                Lastname
              </label>
            </div>

            <div className={styles.formContainer3}>
              <input
                type="email"
                name="email"
                placeholder={user.email}
                id="email"
                autoComplete="email"
                className={error ? styles.inputError : styles.input}
              />
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
            </div>

            {/* <div className={styles.formContainer4}>
              <input
                type="password"
                name="password"
                placeholder="********"
                id="password"
                autoComplete="current-password"
                className={error ? styles.inputError : styles.input}
              />
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
            </div>

            <div className={styles.formContainer5}>
              <input
                type="password"
                name="re-password"
                placeholder="********"
                id="re-password"
                autoComplete="current-password"
                className={error ? styles.inputError : styles.input}
              />
              <label htmlFor="re-password" className={styles.label}>
                Repeat Password
              </label>
            </div> */}

            <div className={styles.formContainer6}>
              <input
                type="tel"
                name="phone"
                placeholder="+54923567889"
                id="phone"
                className={error ? styles.inputError : styles.input}
              />
              <label htmlFor="phone" className={styles.label}>
                Phone
              </label>
            </div>

            <div className={styles.formContainer7}>
              <input
                type="text"
                name="birthday"
                placeholder="1995-03-24"
                id="birthday"
                className={error ? styles.inputError : styles.input}
              />
              <label htmlFor="birthday" className={styles.label}>
                Birthday
              </label>
            </div>

            <div className={styles.formContainer8}>
              <input
                type="tel"
                name="dni"
                placeholder="32123654"
                id="dni"
                className={error ? styles.inputError : styles.input}
              />
              <label htmlFor="dni" className={styles.label}>
                DNI
              </label>
            </div>

            <div className={styles.formContainer9}>
              <input
                type="text"
                name="address"
                placeholder="AV. San Martin 123"
                id="address"
                className={error ? styles.inputError : styles.input}
              />
              <label htmlFor="name" className={styles.label}>
                Address
              </label>
            </div>

            <div className={styles.formContainer10}>
              <input
                type="text"
                name="cuil"
                placeholder="20 - 32123654 - 5"
                id="cuil"
                className={error ? styles.inputError : styles.input}
              />
              <label htmlFor="cuil" className={styles.label}>
                CUIL
              </label>
            </div>
          </form>

          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                ease: "easeIn",
                duration: 0.6,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                ease: "easeOut",
                duration: 0.6,
              },
            }}
            className={styles.save}
          >
            <SaveAlt />
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Profile;
