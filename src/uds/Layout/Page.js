/* eslint-disable react/prop-types */
import React from "react";
import { Box } from "../primitive";

const Page = props => {
  return (
    <Box bg="background.1" height="100vh" width="100vw" mx="auto" {...props}>
      {props.children}
    </Box>
  );
};

export default Page;
