import React from "react";
import { Platform } from "react-native";
import { BackButton } from "@Components/BackButton";

import { Container, Header, Photo } from "./styles";

const Order = () => {
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <Photo source={{ uri: "https://github.com/markus90souza.png" }} />
    </Container>
  );
};

export { Order };
