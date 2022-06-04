import React, { useEffect, useState } from "react";
import { Alert, Platform } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Firestore from "@react-native-firebase/firestore";

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

import { Input } from "@Components/Input";
import { Button } from "@Components/Button";
import { RadioButton } from "@Components/RadioButton";
import { BackButton } from "@Components/BackButton";
import { PizzaTypes } from "@Utils/pizzaType";
import { OrderNavigationProps } from "@Types/navigation";
import { ProductProps } from "@Components/ProductCard";
import { useAuth } from "@Hooks/Auth";

type Response = ProductProps & {
  price_size: {
    [key: string]: number;
  };
};

const Order = () => {
  const [size, setSize] = useState("");
  const [pizza, setPizza] = useState<Response>({} as Response);
  const [quantity, setQuantity] = useState(0);
  const [tableNumber, settableNumber] = useState("");
  const [sendingOrder, setSendingOrder] = useState(false);
  const { user } = useAuth();
  const { navigate, goBack } = useNavigation();
  const route = useRoute();
  const { id } = route.params as OrderNavigationProps;

  const amount = size ? pizza.price_size[size] * quantity : "0,00";

  const handleGoBack = () => {
    goBack();
  };

  const handleOrder = async () => {
    if (!size) {
      return Alert.alert("Pedido", "Informe o tamanha da pizza");
    }

    if (!tableNumber) {
      return Alert.alert("Pedido", "Informe o numero da mesa");
    }

    if (!quantity) {
      return Alert.alert("Pedido", "Informe a quantidade");
    }

    setSendingOrder(true);

    Firestore()
      .collection("orders")
      .add({
        pizza: pizza.name,
        quantity,
        photo: pizza.photo_url,
        size,
        amount,
        table_number: tableNumber,
        status: "Preparando",
        waiter_id: user?.id,
      })
      .then(() => navigate("Home"))
      .catch(() => {
        Alert.alert("Pedido", "Erro ao fazer o pedido");
        setSendingOrder(false);
      });
  };

  useEffect(() => {
    if (id) {
      Firestore()
        .collection("pizzas")
        .doc(id)
        .get()
        .then((response) => setPizza(response.data() as Response))
        .catch(() => Alert.alert("Pedido", "erro ao cadastra"));
    }
  }, [id]);

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Wrapper showsVerticalScrollIndicator={false}>
        <Header>
          <BackButton onPress={handleGoBack} />
        </Header>

        <Photo source={{ uri: pizza.photo_url }} />

        <Form>
          <Title>{pizza.name}</Title>
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
              <Input keyboardType="numeric" onChangeText={settableNumber} />
            </InputGroup>

            <InputGroup>
              <Label>Quantidade</Label>
              <Input
                keyboardType="numeric"
                onChangeText={(value) => setQuantity(Number(value))}
              />
            </InputGroup>
          </Row>

          <Price>Valor de R$ {amount}</Price>

          <Button
            title="Confirmar pedido"
            isLoading={sendingOrder}
            onPress={handleOrder}
          />
        </Form>
      </Wrapper>
    </Container>
  );
};

export { Order };
