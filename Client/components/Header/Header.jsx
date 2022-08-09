import styles from "../../styles/header.module.scss";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useState, useRef, useEffect } from "react";
import { Settings } from "@styled-icons/feather/Settings";
import { IosArrowRight } from "@styled-icons/fluentui-system-filled/IosArrowRight";
import { Person } from "@styled-icons/bootstrap/Person";
import { CSSTransition } from "react-transition-group";
import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort";
import { Logout } from "@styled-icons/material-outlined/Logout";
import { Notifications } from "@styled-icons/material-outlined/Notifications";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { setOpen } from "../../store/dropdownSlice";

const Header = ({ user }) => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.dropdown.open);

  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <div className={styles.welcomeText}>
        <h2>Hey user!</h2>
        <p>Welcome back</p>
      </div>

      <ul className={styles.profile}>
        <Image
          src={user.image}
          alt={user.name}
          width="50px"
          height="50px"
          className={styles.profileImg}
          priority
          referrerPolicy="no-referrer"
          onClick={() => dispatch(setOpen(!open))}
        />

        <AnimatePresence>{open && <DropdownMenu />}</AnimatePresence>
      </ul>
    </div>
  );
};

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(e) {
    const height = e.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className={styles.menuItem}
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className={styles.iconButton}>{props.leftIcon}</span>

        {props.children}

        {props.rightIcon && (
          <span className={styles.iconRight}>{props.rightIcon}</span>
        )}
      </a>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          ease: "easeInOut",
          duration: 0.3,
        },
        animationFillMode: "forwards",
      }}
      exit={{
        opacity: 0,
        transition: {
          ease: "easeInOut",
          duration: 0.5,
        },
      }}
      className={styles.dropdown}
      style={{ height: menuHeight }}
    >
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: styles.menuPrimaryEnter,
          enterActive: styles.menuPrimaryEnterActive,
          exit: styles.menuPrimaryExit,
          exitActive: styles.menuPrimaryExitActive,
        }}
        onEnter={calcHeight}
      >
        <div className={styles.menu}>
          <DropdownItem leftIcon={<Notifications />}>
            Notifications
          </DropdownItem>
          <DropdownItem leftIcon={<Person />}>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<Settings />}
            rightIcon={<IosArrowRight />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
          <DropdownItem leftIcon={<Logout />}>
            <p
              onClick={() => signOut({ callbackUrl: "/login" })}
              style={{ width: "14.5rem" }}
            >
              Logout
            </p>
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: styles.menuSecondaryEnter,
          enterActive: styles.menuSecondaryEnterActive,
          exitActive: styles.menuSecondaryExitActive,
        }}
        onEnter={calcHeight}
      >
        <div className={styles.menu}>
          <DropdownItem leftIcon={<ArrowLeftShort />} goToMenu="main" />
          <DropdownItem>Switch theme</DropdownItem>
        </div>
      </CSSTransition>
    </motion.div>
  );
}

// function ProfileItem(props) {
//   const [open, setOpen] = useState(false);

//   return (
//     <li className={styles.profileItem}>
//       <a href="#" className={styles.iconButton} onClick={() => setOpen(!open)}>
//         {props.icon}
//       </a>

//       {open && props.children}
//     </li>
//   );
// }

export default Header;
