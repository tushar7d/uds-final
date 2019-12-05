/* eslint-disable react/prop-types */
import React from "react";
import { Stack } from "../primitive";

const Container = props => {
  return (
    <Stack
      vertical
      top
      center
      width="calc(100% - 24px)"
      height="auto"
      m="3"
      {...props}
    >
      {props.children}
    </Stack>
  );
};
export default Container;
