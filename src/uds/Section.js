/* eslint-disable react/prop-types */
import React from "react";
import { Stack } from "./primitive";

const Section = props => {
  return (
    <div>
      {props.horizontal ? (
        <Stack
          horizontal
          width={props.size ? props.size : "100%"}
          height="auto"
          m={props.m? props.m : ["2","4"]}
          {...props}
        >
          {props.children}
        </Stack>
      ) : (
        <Stack
          vertical
          width={"100%"}
          height="auto"
          m={props.m? props.m : ["2","4"]}
          {...props}
        >
          {props.children}
        </Stack>
      )}
    </div>
  );
};
export default Section;
