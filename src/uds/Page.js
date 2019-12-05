/* eslint-disable react/prop-types */
import React from "react";
import { Stack } from "../uds/primitive";

const Page = props => {
  return (
    <Stack vertical center top  width="calc(100vw - 32px)" minHeight="100vh" bg="neutral__200" px="4">
      
      {props.children}
      
    </Stack>
  );
};

export default Page;
