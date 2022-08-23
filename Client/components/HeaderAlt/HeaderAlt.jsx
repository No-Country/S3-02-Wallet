import { useSelector, useDispatch } from "react-redux";
import { IosArrowLeft } from "@styled-icons/fluentui-system-filled/IosArrowLeft";
import { motion } from "framer-motion";

import styles from "./HeaderAlt.module.scss";
import { setSection } from "../../store/footerSlice";

const HeaderAlt = () => {
  const dispatch = useDispatch();
  const section = useSelector((state) => state.footer.section);

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
      <IosArrowLeft onClick={() => dispatch(setSection("home"))} />
      <h3>{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
      <span></span>
    </motion.div>
  );
};

export default HeaderAlt;
