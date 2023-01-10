import React from "react";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { ReactComponent as ThemeSwitch } from "assets/icons/theme-switch.svg";
import styles from "./header.module.scss";
import { useTheme } from "hooks/useTheme";

const Header = () => {
  const { toggleTheme } = useTheme();
  return (
    <div className={styles.container}>
      <a href="/" aria-label="home">
        <Logo className={styles.logo} />
      </a>
      <button
        className={styles.theme_btn}
        aria-label="switch theme"
        onClick={toggleTheme}
      >
        <ThemeSwitch />
      </button>
    </div>
  );
};
export default Header;
