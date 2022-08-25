import { getSession } from "next-auth/react";

import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import Home from "../components/Home/Home";
import Header from "../components/Header/Header";
import HeaderAlt from "../components/HeaderAlt/HeaderAlt";
import { Footer } from "../components/Footer/Footer";
import styles from "../styles/home.module.scss";
import CardsPage from "../components/CardsPage/CardsPage";
import Services from "../components/Services/Services";

export default function HomePage({ user }) {
  const section = useSelector((state) => state.footer.section);

  return (
    <>
      <AnimatePresence>
        {section === "home" ? <Header user={user} /> : <HeaderAlt />}
      </AnimatePresence>
      <div className={styles.pageContainer}>
        <AnimatePresence>
          {section === "home" && <Home user={user} />}
        </AnimatePresence>
        <AnimatePresence>
          {section === "cards" && <CardsPage />}
        </AnimatePresence>
        {/* <AnimatePresence>{section === "transfer" && null}</AnimatePresence> */}
        {/* <AnimatePresence>{section === "analytics" && null}</AnimatePresence> */}
        <AnimatePresence>
          {section === "services" && <Services />}
        </AnimatePresence>

        <Footer />
      </div>
    </>
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
