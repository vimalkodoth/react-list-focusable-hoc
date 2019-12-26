import React from "react";
import styles from "./footer.module.css";
/**
 * Renders a footer
 * @component
 */
function Footer(){
    return (
        <footer className={styles.container}>
            <section>
                <div className={styles.header}></div>
            </section>
        </footer>
    )
}

export default Footer;