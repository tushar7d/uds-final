import React from "react";
import { DetailsPage, Card, Row, Button, Text } from "./uds";

export default function Main() {
  return (
    <DetailsPage>
      <Card mb="3" p="0">
        <Row center p="4" color="neutral__900">
          A Row
        </Row>
        <Row split p="2">
          <Button icon="settings" primary>
            Check
          </Button>
          <Text type700 medium color="neutral__900">
            I am text
          </Text>
        </Row>
      </Card>
    </DetailsPage>
  );
}
