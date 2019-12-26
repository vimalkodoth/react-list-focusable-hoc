import React, { useEffect } from "react";
import styles from "./list.module.css";
import ListItem from "../ListItem/ListItem";
import withFocusable from "../../HOC/withFocusable";
import listStyles from "../ListItem/listItem.module.css";

function ListWrapper({
  data,
  itemRef,
  setCurrentFocusId,
  setFocusedClassName,
  focusedClassName,
  setCurrentIndex,
  onElementFocus,
  setFocus
}) {
  useEffect(() => {
    setFocusedClassName(`${listStyles.focused}`);
    setCurrentFocusId("item0");
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    if (focusedClassName) {
      onElementFocus("item0");
    }
  }, [focusedClassName]);

  return (
    <div className={styles.list} ref={itemRef}>
      {data.map((item, i) => {
        return (
          <ListItem
            key={i}
            item={item}
            index={i}
            setCurrentFocusId={setCurrentFocusId}
            setCurrentIndex={setCurrentIndex}
            setFocus={setFocus}
          />
        );
      })}
    </div>
  );
}

export default React.memo(
  withFocusable(
    React.forwardRef((props, ref) => {
      return <ListWrapper {...props} />;
    })
  )
);
