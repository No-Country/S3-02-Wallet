import { getSession } from "next-auth/react";

import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

import Header from "../components/Header/Header";
import Balance from "../components/Balance/Balance";
import CardSelector from "../components/CardSelector";
import { Footer } from "../components/Footer";
import { setOpen } from "../store/dropdownSlice";
import { setShowProfile } from "../store/profileSlice";
import styles from "../styles/home.module.scss";
import MiddleMenu from "../components/MiddleMenu/MiddleMenu";

export default function Home({ user }) {
  const dispatch = useDispatch();

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
      onClick={() =>
        dispatch(setOpen(false)) && dispatch(setShowProfile(false))
      }
    >
      <Header user={user} />
      <div className={styles.content}>
        <Balance />
        <MiddleMenu />
        <CardSelector
          cards={[
            { provider: "visa", level: "base", number: 8888777766665555 },
            { provider: "mc", level: "black", number: 8888777766668555 },
            { provider: "mc", level: "platinum", number: 8888777766664555 },
          ]}
        />
      </div>
      <Footer />
    </motion.div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
    return {};
  }

  return {
    props: {
      user: session.user,
    },
  };
}
