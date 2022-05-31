import React, { useEffect, useState, useCallback } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, RectButton } from "react-native-gesture-handler";
import { useTheme } from "styled-components/native";
import Firestore from "@react-native-firebase/firestore";
import {
  Container,
  Header,
  Greating,
  GreatingEmoji,
  GreatingMessage,
  MenuHeader,
  MenuHeaderNumber,
  Title,
  AddProductButton,
} from "./styles";

import happyIcon from "@Assets/happy.png";
import { Search } from "@Components/Search";
import { ProductCard, ProductProps } from "@Components/ProductCard";
import { Alert } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const Home = () => {
  const [pizzas, setPizzas] = useState<ProductProps[]>([]);
  const [search, setSearch] = useState("");
  const { Colors } = useTheme();
  const { navigate } = useNavigation();

  const getPizza = (name: string) => {
    const nameFormatted = name.toLocaleLowerCase().trim();

    Firestore()
      .collection("pizzas")
      .orderBy("name_insensitive")
      .startAt(nameFormatted)
      .endAt(`${nameFormatted}\uf8ff`)
      .get()
      .then((response) => {
        const data = response.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as ProductProps[];

        setPizzas(data);
      })
      .catch(() => Alert.alert("Busca", " Erro ao Buscar"));
  };

  const handleSearch = () => {
    getPizza(search);
  };

  const handleSearchClear = () => {
    setSearch("");
    getPizza("");
  };

  const handleOpen = (id: string) => {
    navigate("product", {
      id,
    });
  };

  const handleAdd = () => {
    navigate("product", {});
  };

  useFocusEffect(
    useCallback(() => {
      getPizza("");
    }, [])
  );

  return (
    <Container>
      <Header>
        <Greating>
          <GreatingEmoji source={happyIcon} />
          <GreatingMessage>Olá {"Marcos"}</GreatingMessage>
        </Greating>
        <RectButton
          style={{
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons name="logout" size={24} color={Colors.TITLE} />
        </RectButton>
      </Header>

      <Search
        onChangeText={setSearch}
        value={search}
        onSearch={handleSearch}
        onClear={handleSearchClear}
      />

      <MenuHeader>
        <Title>Cardápio</Title>
        <MenuHeaderNumber>{pizzas.length} Pizzas</MenuHeaderNumber>
      </MenuHeader>

      <FlatList
        data={pizzas}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <ProductCard data={item} onPress={() => handleOpen(item.id)} />
        )}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 124,
          marginHorizontal: 24,
        }}
      />

      <AddProductButton
        title="Cadastrar Pizza"
        type="secondary"
        onPress={handleAdd}
      />
    </Container>
  );
};

export { Home };
