import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { useTheme } from "styled-components/native";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container } from "./styles";
type Props = RectButtonProps;
const BackButton = ({ ...rest }: Props) => {
  const { Colors } = useTheme();
  return (
    <Container {...rest}>
      <MaterialIcons name="chevron-left" size={18} color={Colors.TITLE} />
    </Container>
  );
};

export { BackButton };
