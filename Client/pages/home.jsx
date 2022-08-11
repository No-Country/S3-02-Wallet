import { signOut } from "next-auth/react";
import { getSession } from "next-auth/react";
import styles from "../styles/home.module.scss";
import { motion } from "framer-motion";
import CardSelector from "../components/CardSelector"
export default function Home({ user }) {
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
      {/* <h3>Signed in as {user.name}</h3>
      <h3>Your email is {user.email}</h3>
      <img src={user.image} alt={user.name} referrerPolicy="no-referrer" />
      <button onClick={() => signOut({ callbackUrl: "/login" })}>
        Sign out
      </button> */}
      <p>Home</p>
      <div>
      <p>Content</p>
      <CardSelector cards={[
    { provider: "visa", level: "base", number: 8888777766665555 },
    { provider: "mc", level: "black", number: 8888777766668555 },
    { provider: "mc", level: "platinum", number: 8888777766664555 }
  ]}/>
      </div>
      <p>Footer</p>
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
