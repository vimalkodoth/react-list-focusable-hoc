import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./listItem.module.css";

/**
 * Item to render within List
 * @component
 */
function ListItem({
  item,
  index,
  setCurrentFocusId,
  setCurrentIndex,
  focus,
  setFocus
}) {
  // console.log(item, index, itemRef);
  const src = item["content"]["images"]["landscape"]["url"];

  function focusItem(e) {
    setCurrentFocusId(e.target.getAttribute("id"));
    setCurrentIndex(index);
  }

  return (
    <div
      tabIndex={0}
      id={`item${index}`}
      className={styles.listItem}
      onFocus={focusItem}
    >
      <img src={src} />
    </div>
  );
}

ListItem.propTypes = {
  /** Desscription for item */
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

ListItem.defaultProps = {
  index: 0
};

export default React.memo(ListItem);
