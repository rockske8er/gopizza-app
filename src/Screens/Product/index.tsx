import React from "react";
import { Platform } from "react-native";
import { BackButton } from "@Components/BackButton";
import { Photo } from "@Components/Photo";

import {
  Container,
  Header,
  Title,
  DeleteButton,
  DeleteButtonLabel,
  Upload,
  PickImageButton,
} from "./styles";

const Product = () => {
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Header>
        <BackButton />
        <Title>Cadastrar</Title>
        <DeleteButton>
          <DeleteButtonLabel>Deletar</DeleteButtonLabel>
        </DeleteButton>
      </Header>

      <Upload>
        <Photo uri={""} />
        <PickImageButton title="Carregar" type="secondary" />
      </Upload>
    </Container>
  );
};

export { Product };
