/* eslint-disable react/prop-types */
import React from "react";
import { Stack } from "../primitive";

const Section = props => {
  return (
    <Stack
      horizontal={props.horizontal ? true : false}
      vertical={props.vertical ? true : false}
      p={props.m ? props.m : ["2", "4"]}
      {...props}
    >
      {props.children}
    </Stack>
  );
};
export default Section;
