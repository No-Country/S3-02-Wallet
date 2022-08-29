import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

import styles from "./Services.module.scss";
import { setPaymentDetails } from "../../store/paySlice";

const Services = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const PayDetails = (name, imgPath) => {
    dispatch(setPaymentDetails({ name: name, imgPath: imgPath, amount: 0 }));
    router.push({ pathname: "/payment/pay", query: { service: name } });
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
          <div
            onClick={() => PayDetails("SUBE", "/img/Logo Services/SUBE.png")}
            className={styles.serviceItem}
          >
            <Image
              src="/img/Logo Services/SUBE.png"
              height="100px"
              width="100px"
            />
            <h4>SUBE</h4>
          </div>
          <div
            onClick={() => PayDetails("VISA", "/img/Logo Services/Visa.jpg")}
            className={styles.serviceItem}
          >
            <Image
              src="/img/Logo Services/Visa.jpg"
              height="100px"
              width="80px"
            />
            <h4>VISA</h4>
          </div>
          <div
            onClick={() =>
              PayDetails("MasterCard", "/img/Logo Services/MasterCard.jpg")
            }
            className={styles.serviceItem}
          >
            <Image
              src="/img/Logo Services/MasterCard.jpg"
              height="100px"
              width="80px"
            />
            <h4>MasterCard</h4>
          </div>
        </span>
      </div>

      <div className={styles.category}>
        <h4>Cellphone</h4>
        <span className={styles.services}>
          <div
            onClick={() => PayDetails("Claro", "/img/Logo Services/Claro.jpg")}
            className={styles.serviceItem}
          >
            <Image
              src="/img/Logo Services/Claro.jpg"
              height="100px"
              width="100px"
            />
            <h4>Claro</h4>
          </div>
          <div
            onClick={() =>
              PayDetails("Movistar", "/img/Logo Services/Movistar.jpg")
            }
            className={styles.serviceItem}
          >
            <Image
              src="/img/Logo Services/Movistar.jpg"
              height="100px"
              width="100px"
            />
            <h4>Movistar</h4>
          </div>
          <div
            onClick={() =>
              PayDetails("Personal", "/img/Logo Services/Personal.jpg")
            }
            className={styles.serviceItem}
          >
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
          <div
            onClick={() =>
              PayDetails(
                "Aerolineas Argentinas",
                "/img/Logo Services/Aerolineas Argentinas.jpg"
              )
            }
            className={styles.serviceItem}
          >
            <Image
              src="/img/Logo Services/Aerolineas Argentinas.jpg"
              height="100px"
              width="100px"
            />
            <h4>Aerolineas...</h4>
          </div>
          <div
            onClick={() =>
              PayDetails("Jet Smart", "/img/Logo Services/Jet Smart.jpg")
            }
            className={styles.serviceItem}
          >
            <Image
              src="/img/Logo Services/Jet Smart.jpg"
              height="100px"
              width="80px"
            />
            <h4>Jet Smart</h4>
          </div>
          <div
            onClick={() =>
              PayDetails("Flybondi", "/img/Logo Services/Flybondi.jpg")
            }
            className={styles.serviceItem}
          >
            <Image
              src="/img/Logo Services/Flybondi.jpg"
              height="100px"
              width="80px"
            />
            <h4>Flybondi</h4>
          </div>
        </span>
      </div>

      <div className={styles.category}>
        <h4>Taxi</h4>
        <span className={styles.services}>
          <div
            onClick={() => PayDetails("Uber", "/img/Logo Services/Uber.jpg")}
            className={styles.serviceItem}
          >
            <Image
              src="/img/Logo Services/Uber.jpg"
              height="100px"
              width="80px"
            />
            <h4>Uber</h4>
          </div>
          <div
            onClick={() =>
              PayDetails("Cabify", "/img/Logo Services/Cabify.jpg")
            }
            className={styles.serviceItem}
          >
            <Image
              src="/img/Logo Services/Cabify.jpg"
              height="100px"
              width="100px"
            />
            <h4>Cabify</h4>
          </div>
          <div
            onClick={() => PayDetails("Beat", "/img/Logo Services/Beat.jpg")}
            className={styles.serviceItem}
          >
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
          <div
            onClick={() =>
              PayDetails("Fibertel", "/img/Logo Services/Fibertel.jpg")
            }
            className={styles.serviceItem}
          >
            <Image
              src="/img/Logo Services/Fibertel.jpg"
              height="100px"
              width="100px"
            />
            <h4>Fibertel</h4>
          </div>
          <div
            onClick={() =>
              PayDetails("Telecentro", "/img/Logo Services/Telecentro.jpg")
            }
            className={styles.serviceItem}
          >
            <Image
              src="/img/Logo Services/Telecentro.jpg"
              height="100px"
              width="100px"
            />
            <h4>Telecentro</h4>
          </div>
          <div
            onClick={() =>
              PayDetails("DirectTV", "/img/Logo Services/DirectTV.jpg")
            }
            className={styles.serviceItem}
          >
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
