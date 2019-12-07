import React from "react";
import { Page, GlobalNav, Flex, Button } from "../index";

export default function ListingPage(props) {
  return (
    <Page>
      <GlobalNav />
      <Flex column stretch m="3">
        <Flex row left mb="3">
          <Button icon="tune" secondary fullwidth mr="1">
            Sort & Filter
          </Button>
          <Button icon="map" secondary fullwidth ml="1">
            Map
          </Button>
        </Flex>
        {props.children}
      </Flex>
    </Page>
  );
}
