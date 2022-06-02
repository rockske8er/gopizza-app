import React from "react";
import { TouchableOpacityProps, View } from "react-native";

import {
  Container,
  Description,
  Image,
  Name,
  Status,
  StatusLabel,
} from "./styles";

type Props = TouchableOpacityProps & {
  index: number;
};

const OrderCard = ({ index, ...rest }: Props) => {
  return (
    <Container index={index} {...rest}>
      <Image source={{ uri: "https://github.com/markus90souza.png" }} />

      <Name>4 Queijos</Name>

      <Description>Mesa 5 ● Qnt: 1</Description>
      <Status status="Preparando">
        <StatusLabel status="Preparando">Preparando</StatusLabel>
      </Status>
    </Container>
  );
};

export { OrderCard };
