/* eslint-disable react/prop-types */
import React from "react";
import { Box } from "./primitive";

const Spacing = props => {
  return (
    <div>
      {props.horizontal ? (
        <Box width={props.size ? props.size : "2"} height="1px">
          {props.children}
        </Box>
      ) : (
        <Box height={props.size ? props.size : "2"} width="1px">
          {props.children}
        </Box>
      )}
    </div>
  );
};
export default Spacing;
