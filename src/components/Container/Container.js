import React from "react";
import PropTypes from "prop-types";
import styles from "./container.module.css";

/**
 * Renders children with a container css class
 * @component
 */
function Container({children}){
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node
}

export default Container;