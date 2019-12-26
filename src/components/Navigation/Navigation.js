import React from "react";
import styles from "./navigation.module.css";
/**
 * Renders a header
 * @component
 */
function Navigation(){
    return (
        <header className={styles.container}>
            <section>
                <div className={styles.header}>
                    <div className={styles.left}>
                        <div className={styles.logo}>
                            <img src="http://assets.viaplay.tv/frontend-2017080106/images/header-logo-large.png" alt="Viaplay" width="144" height="35" />
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Navigation;