import React, { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import Firestore from "@react-native-firebase/firestore";
import { OrderCard, OrderProps } from "@Components/OrderCard";
import { Separator } from "@Components/Separator";

import { Container, Header, Title } from "./styles";
import { useAuth } from "@Hooks/Auth";

const Orders = () => {
  const [orders, setOrders] = useState<OrderProps[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const subscriber = Firestore()
      .collection("orders")
      .where("waiter_id", "==", user?.id)
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as OrderProps[];

        setOrders(data);
      });

    return () => subscriber();
  }, []);

  const handleOrderDelivered = (id: string) => {
    Alert.alert("Pedido", "Confirmar pizza entregue", [
      { text: "Não", style: "cancel" },
      {
        text: "Sim ",
        onPress: () => {
          Firestore().collection("orders").doc(id).update({
            status: "Entregue",
          });
        },
      },
    ]);
  };

  return (
    <Container>
      <Header>
        <Title>Pedidos Feitos</Title>
      </Header>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ index, item }) => (
          <OrderCard
            index={index}
            data={item}
            disabled={item.status === "Entregue"}
            onPress={() => handleOrderDelivered(item.id)}
          />
        )}
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
