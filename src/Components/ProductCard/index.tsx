import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  Card,
  Image,
  Description,
  Details,
  Identification,
  Line,
  Name,
} from "./styles";
import { useTheme } from "styled-components/native";

export type ProductProps = {
  id: string;
  photo_url: string;
  name: string;
  description: string;
};

type Props = RectButtonProps & {
  data: ProductProps;
};

const ProductCard = ({ data, ...rest }: Props) => {
  const { Colors } = useTheme();
  return (
    <Container>
      <Card {...rest}>
        <Image source={{ uri: data.photo_url }} />

        <Details>
          <Identification>
            <Name>{data.name}</Name>
            <Feather name="chevron-right" size={18} color={Colors.SHAPE} />
          </Identification>

          <Description>{data.description}</Description>
        </Details>
      </Card>

      <Line />
    </Container>
  );
};

export { ProductCard };
