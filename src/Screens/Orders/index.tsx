import React from "react";
import { FlatList } from "react-native";
import { OrderCard } from "@Components/OrderCard";
import { Separator } from "@Components/Separator";

import { Container, Header, Title } from "./styles";

const Orders = () => {
  return (
    <Container>
      <Header>
        <Title>Pedidos Feitos</Title>
      </Header>

      <FlatList
        data={["1", "2", "3"]}
        keyExtractor={(i) => i}
        renderItem={({ index, item }) => <OrderCard index={index} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: 120,
        }}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
};

export { Orders };
