import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import {
  Container,
  Header,
  Greating,
  GreatingEmoji,
  GreatingMessage,
  SignOut,
} from "./styles";

import happyIcon from "@Assets/happy.png";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "styled-components/native";

const Home = () => {
  const { Colors } = useTheme();
  return (
    <Container>
      <Header>
        <Greating>
          <GreatingEmoji source={happyIcon} />
          <GreatingMessage>OLa</GreatingMessage>
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
    </Container>
  );
};

export { Home };
