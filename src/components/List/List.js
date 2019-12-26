import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ListWrapper from "./ListWrapper";
/**
 * Renders a list
 * @component
 */
function List({ data, isLoading, error }) {
  const onSelected = (e, item) => {
    // console.log(e);
    // console.log(item);
  };
  const onFocused = (e, item) => {
    // console.log(e);
    // console.log(item);
  };
  if (isLoading) {
    return <div>Loading list data ...</div>;
  } else if (error) {
    return <div>Error occured while fetching...</div>;
  } else if (data) {
    return (
      <ListWrapper data={data} onSelected={onSelected} onFocused={onFocused} />
    );
  } else {
    return <div>Invalid</div>;
  }
}

List.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string
};

export default List;
