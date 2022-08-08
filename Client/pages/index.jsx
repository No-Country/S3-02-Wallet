import Head from "next/head";
import { useRouter } from "next/router";
// import { useState } from "react";
// import { addUser } from "../store/usersSlice";
// import { increment } from "../store/countSlice";
// import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/index.module.scss";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();
  // const dispatch = useDispatch();
  // const [name, setName] = useState("");
  // const count = useSelector((state) => state.counter.count);
  // const users = useSelector((state) => state.users.users);

  // const addUsers = () => {
  //   dispatch(addUser(name));
  // };

  // const handleChange = (event) => {
  //   setName(event.target.value);
  // };

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
      <Head>
        <title>Wallet App</title>
        <meta name="description" content="Wallet App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div>
        <span>
          <h1>New User: </h1>
          <input type="text" value={name} onChange={handleChange} />
          <button onClick={addUsers}>Add</button>
        </span>

        <div>
          <h3>User List:</h3>
          <ol>
            {users &&
              users.map((user) => (
                <li key={user}>
                  <b>{user}</b>
                </li>
              ))}
          </ol>
        </div>
      </div>

      <div>
        <h1>Counter: {count}</h1>

        <button onClick={() => dispatch(increment())}>Add to Count</button>
      </div> */}

      <div className={styles.content}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              translateY: 100,
              opacity: 0,
            },
            visible: {
              translateY: 0,
              opacity: 1,
              transition: {
                delay: 0.4,
                duration: 0.8,
              },
            },
          }}
          className={styles.welcomeText}
        >
          <h1>Best way to tracking your money</h1>
          <p>
            Best payment method, connects your money with your family and
            friends.
          </p>
        </motion.div>

        <motion.button
          initial="hidden"
          animate="visible"
          onTap={() => router.push("/login")}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 1,
                duration: 0.8,
              },
            },
          }}
          className={styles.button}
        >
          Get Started
        </motion.button>
      </div>
    </motion.div>
  );
}
