/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="https://github.com/hesamoon" target="_blank">Hesamoon</a> | React.js
        </p>
      </header>

      {children}

      <footer className={styles.footer}>
        <p>Developed by hesamoon with ❤</p>
      </footer>
    </>
  );
}

export default Layout;
