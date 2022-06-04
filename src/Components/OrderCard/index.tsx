import React from "react";
import { TouchableOpacityProps } from "react-native";

import {
  Container,
  Description,
  Image,
  Name,
  Status,
  StatusLabel,
  StatusType,
} from "./styles";

export type OrderProps = {
  id: string;
  pizza: string;
  photo: string;
  status: StatusType;
  table_number: string;
  quantity: string;
};

type Props = TouchableOpacityProps & {
  index: number;
  data: OrderProps;
};

const OrderCard = ({ index, data, ...rest }: Props) => {
  return (
    <Container index={index} {...rest}>
      <Image source={{ uri: data.photo }} />

      <Name>{data.pizza}</Name>

      <Description>
        Mesa {data.table_number} ● Qnt: {data.quantity}
      </Description>
      <Status status="Preparando">
        <StatusLabel status={data.status}>{data.status}</StatusLabel>
      </Status>
    </Container>
  );
};

export { OrderCard };
