import React from "react";
import { Page, GlobalNav, Flex, Box } from "../index";

export default function DetailsPage(props) {
  return (
    <Page>
      <GlobalNav />
      <Box maxWidth="1440px" mx="auto">
        <Flex column stretch m="3">
          {props.children}
        </Flex>
      </Box>
    </Page>
  );
}
