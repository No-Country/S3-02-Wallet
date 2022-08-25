import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./Services.module.scss";

const Services = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          ease: "easeIn",
          duration: 0.3,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          ease: "easeOut",
          duration: 0.3,
        },
      }}
      className={styles.container}
    >
      <div className={styles.category}>
        <h4>Popular</h4>
        <span className={styles.services}>
          <div className={styles.serviceItem}>
            <Image
              src="/img/Logo Services/SUBE.png"
              height="100px"
              width="100px"
            />
            <h4>SUBE</h4>
          </div>
          <div className={styles.serviceItem}>
            <Image
              src="/img/Logo Services/Visa.jpg"
              height="100px"
              width="100px"
            />
            <h4>VISA</h4>
          </div>
          <div className={styles.serviceItem}>
            <Image
              src="/img/Logo Services/MasterCard.jpg"
              height="100px"
              width="100px"
            />
            <h4>MasterCard</h4>
          </div>
        </span>
      </div>

      <div className={styles.category}>
        <h4>Cellphone</h4>
        <span className={styles.services}>
          <div className={styles.serviceItem}>
            <Image
              src="/img/Logo Services/Claro.jpg"
              height="100px"
              width="100px"
            />
            <h4>Claro</h4>
          </div>
          <div className={styles.serviceItem}>
            <Image
              src="/img/Logo Services/Movistar.jpg"
              height="100px"
              width="100px"
            />
            <h4>Movistar</h4>
          </div>
          <div className={styles.serviceItem}>
            <Image
              src="/img/Logo Services/Personal.jpg"
              height="100px"
              width="100px"
            />
            <h4>Personal</h4>
          </div>
        </span>
      </div>

      <div className={styles.category}>
        <h4>Airlines</h4>
        <span className={styles.services}>
          <div className={styles.serviceItem}>
            <Image
              src="/img/Logo Services/Aerolineas Argentinas.jpg"
              height="100px"
              width="100px"
            />
            <h4>Aerolineas...</h4>
          </div>
          <div className={styles.serviceItem}>
            <Image
              src="/img/Logo Services/Jet Smart.jpg"
              height="100px"
              width="100px"
            />
            <h4>Jet Smart</h4>
          </div>
          <div className={styles.serviceItem}>
            <Image
              src="/img/Logo Services/Flybondi.jpg"
              height="100px"
              width="100px"
            />
            <h4>Flybondi</h4>
          </div>
        </span>
      </div>

      <div className={styles.category}>
        <h4>Taxi</h4>
        <span className={styles.services}>
          <div className={styles.serviceItem}>
            <Image
              src="/img/Logo Services/Uber.jpg"
              height="100px"
              width="100px"
            />
            <h4>Uber</h4>
          </div>
          <div className={styles.serviceItem}>
            <Image
              src="/img/Logo Services/Cabify.jpg"
              height="100px"
              width="100px"
            />
            <h4>Cabify</h4>
          </div>
          <div className={styles.serviceItem}>
            <Image
              src="/img/Logo Services/Beat.jpg"
              height="100px"
              width="100px"
            />
            <h4>Beat</h4>
          </div>
        </span>
      </div>

      <div className={styles.category}>
        <h4>Internet</h4>
        <span className={styles.services}>
          <div className={styles.serviceItem}>
            <Image
              src="/img/Logo Services/Fibertel.jpg"
              height="100px"
              width="100px"
            />
            <h4>Fibertel</h4>
          </div>
          <div className={styles.serviceItem}>
            <Image
              src="/img/Logo Services/Telecentro.jpg"
              height="100px"
              width="100px"
            />
            <h4>Telecentro</h4>
          </div>
          <div className={styles.serviceItem}>
            <Image
              src="/img/Logo Services/DirectTV.jpg"
              height="100px"
              width="100px"
            />
            <h4>DirectTV</h4>
          </div>
        </span>
      </div>
    </motion.div>
  );
};

export default Services;
