import { Component } from "react";
import styles from "./navbar.module.css";

class NavbarModule extends Component {
  render() {
    return (
      <>
        <div className={styles.nav}>
          <div className={styles.title}>MOVIE APP </div>
          <div className={styles.cartIconContainer}>
            <img
              className={styles.cartIcon}
              alt="Cart-icon"
              src="https://cdn-icons-png.flaticon.com/128/3643/3643914.png"
            />
            <span className={styles.cartCount}>5</span>
          </div>
        </div>
      </>
    );
  }
}

export default NavbarModule;
