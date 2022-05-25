import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title, Loading } from "./styles";
import { TypeProps } from "./types";

interface Props extends RectButtonProps {
  title: string;
  type?: TypeProps;
  isLoading?: boolean;
}

const Button = ({
  title,
  type = "primary",
  isLoading = false,
  ...rest
}: Props) => {
  return (
    <Container {...rest} type={type} enabled={!isLoading}>
      {isLoading ? <Loading /> : <Title>{title}</Title>}
    </Container>
  );
};

export { Button };
