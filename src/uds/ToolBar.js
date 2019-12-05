/* eslint-disable react/prop-types */
import React from "react";
import { Stack, Box } from "./primitive";

import { MdSearch } from "react-icons/md";
import theme from "../theme";

const ToolBar = () => {
  return (
    <Stack
      horizontal
      split
      mid
      width="calc(100vw - 32px)"
      height="48px"
      bg="white"
      boxShadow="1"
      px="4"
    >
      <Box ml="4">
        <MdSearch color={theme.colors.neutral__700} size="24px" />
      </Box>
      
    </Stack>
  );
};

export default ToolBar;
