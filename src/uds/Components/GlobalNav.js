import React from "react";
import { Flex, Icon, Text } from "../index";

const GlobalNav = () => {
  return (
    <Flex row split mid bg="white" boxShadow="1">
      <Flex row left mid ml="2">
        <Flex mx="3">
          <img
            src="http://seekvectorlogo.com/wp-content/uploads/2018/09/expedia-vector-logo.png"
            width="100px"
            alt="expedia"
          />
        </Flex>
        <Flex row left mid mx="3" display={["none", "none", "flex"]}>
          <Icon color="neutral__700" mt="1">
            search
          </Icon>
          <Text type300 medium color="neutral__700">
            Shop Travel
          </Text>
        </Flex>
      </Flex>

      <Flex row right mid my="3" mr="2">
        <Icon color="neutral__700" display={["none", "none", "none", "flex"]}>
          work
        </Icon>
        <Icon color="neutral__700" display={["flex", "flex", "none"]}>
          search
        </Icon>
        <Icon color="neutral__700">favorite</Icon>
        <Icon color="neutral__700">account_circle</Icon>
      </Flex>
    </Flex>
  );
};

export default GlobalNav;
