import React, { useState } from "react";
import { Platform } from "react-native";
import { BackButton } from "@Components/BackButton";

import {
  Container,
  Header,
  Photo,
  Sizes,
  Form,
  InputGroup,
  Label,
  Price,
  Row,
  Title,
  Wrapper,
} from "./styles";
import { RadioButton } from "@Components/RadioButton";
import { PizzaTypes } from "./../../Utils/pizzaType";
import { Input } from "@Components/Input";
import { Button } from "@Components/Button";

const Order = () => {
  const [size, setSize] = useState("");
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Wrapper showsVerticalScrollIndicator={false}>
        <Header>
          <BackButton onPress={() => {}} />
        </Header>

        <Photo source={{ uri: "https://github.com/markus90souza.png" }} />

        <Form>
          <Title>Nome da Pizza</Title>
          <Label>Selecione o Tamanho</Label>
          <Sizes>
            {PizzaTypes.map((item) => (
              <RadioButton
                key={item.id}
                title={item.name}
                onPress={() => setSize(item.id)}
                selected={size === item.id}
              />
            ))}
          </Sizes>

          <Row>
            <InputGroup>
              <Label>Numero da Mesa</Label>
              <Input keyboardType="numeric" />
            </InputGroup>

            <InputGroup>
              <Label>Quantidade</Label>
              <Input keyboardType="numeric" />
            </InputGroup>
          </Row>

          <Price>Valor de R$ 00,00</Price>

          <Button title="Confirmar pedido" />
        </Form>
      </Wrapper>
    </Container>
  );
};

export { Order };
