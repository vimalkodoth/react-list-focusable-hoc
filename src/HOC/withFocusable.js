import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
/**
 * Focusable HOC with focus functionality
 */
function Focusable(props) {
  const [currentId, setCurrentId] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [focusedClassName, setFocusedClassName] = useState("");
  const itemRef = React.createRef();

  useEffect(() => {
    if (itemRef.current) {
      init();
    }
    return function() {
      destroy();
    };
  }, [currentId]);

  function init() {
    destroy();
    attachListener(itemRef.current, "keydown", onKeydownHandler);
  }

  const getCurrentElementById = id => {
    if (!id) {
      return;
    }
    const elm = document.querySelector(`#${id}`);
    return elm;
  };

  const attachListener = (elm, event, fn) => {
    document.addEventListener(event, fn);
  };

  const destroy = () => {
    document.removeEventListener("keydown", onKeydownHandler);
  };

  const onKeydownHandler = e => {
    if (!itemRef.current) return;
    switch (e.keyCode) {
      case 40:
        moveFocusDown(e);
        break;
      case 38:
        moveFocusUp(e);
        break;
      case 37:
        moveFocusLeft(e);
        break;
      case 39:
        moveFocusRight(e);
        break;
      case 13:
        if (props.onSelected) {
          props.onSelected(e, props.data[currentIndex]);
        }
        break;
    }
    e.preventDefault();
  };

  const onElementFocus = (id, e) => {
    const nodes = Array.prototype.slice.call(itemRef.current.children);
    const element = document.querySelector(`#${id}`);
    const currentIdx = nodes.indexOf(element);
    if (id) {
      clearFocus(currentId);
      setFocus(id);
      if (props.onFocused) {
        props.onFocused(e, props.data[currentIdx]);
      }
    }
  };

  const moveFocusRight = e => {
    let elm = getCurrentElementById(e.target.getAttribute("id"));
    if (!elm) {
      return;
    }
    const id =
      elm.nextElementSibling && elm.nextElementSibling.getAttribute("id");
    if (id) {
      onElementFocus(id, e);
    }
  };

  const moveFocusLeft = e => {
    let elm = getCurrentElementById(e.target.getAttribute("id"));
    if (!elm) {
      return;
    }
    const id =
      elm.previousElementSibling &&
      elm.previousElementSibling.getAttribute("id");
    if (id) {
      onElementFocus(id, e);
    }
  };

  const moveFocusUp = e => {
    let elm = getCurrentElementById(e.target.getAttribute("id"));
    const nodes = Array.prototype.slice.call(itemRef.current.children);
    const currentIdx = nodes.indexOf(elm);
    const nextIdx = currentIdx - 4;
    const id = nodes[nextIdx] && nodes[nextIdx].getAttribute("id");
    if (id) {
      onElementFocus(id, e);
    }
  };

  const moveFocusDown = e => {
    let elm = getCurrentElementById(e.target.getAttribute("id"));
    const nodes = Array.prototype.slice.call(itemRef.current.children);
    const currentIdx = nodes.indexOf(elm);
    const nextIdx = currentIdx + 4;
    const id = nodes[nextIdx] && nodes[nextIdx].getAttribute("id");
    if (id) {
      onElementFocus(id, e);
    }
  };

  const clearFocus = id => {
    if (!id) {
      return;
    }
    const elm = document.querySelector(`#${id}`);
    if (elm && focusedClassName) {
      elm.blur();
      elm.classList.remove(focusedClassName);
      return elm;
    }
  };
  const setFocus = id => {
    const elm = document.querySelector(`#${id}`);
    if (elm && focusedClassName) {
      elm.focus();
      elm.classList.add(focusedClassName);
      return elm;
    }
  };
  const C = props.component;
  return (
    <C
      {...props}
      itemRef={itemRef}
      setCurrentFocusId={setCurrentId}
      setFocusedClassName={setFocusedClassName}
      focusedClassName={focusedClassName}
      setCurrentIndex={setCurrentIndex}
      onElementFocus={onElementFocus}
    />
  );
}

/**
 * withFocusable HOC extends with focus functionality
 * @component
 */
function withFocusable(component) {
  return props => {
    return <Focusable component={component} {...props} />;
  };
}

withFocusable.propTypes = {
  component: PropTypes.node,
  options: PropTypes.object
};

export default withFocusable;
