import React from "react";
import { DetailsPage, Flex, Card, Row } from "./uds";

export default function Main() {
  return (
    <DetailsPage>
      <Card mb="3">
        <Row center>A Row</Row>
        <Flex row split bg="neutral__200">
          <div>hello</div> <div>hello</div>
        </Flex>
        <Flex row split bg="neutral__200">
          <div>hello</div> <div>hello</div>
        </Flex>
      </Card>
    </DetailsPage>
  );
}
