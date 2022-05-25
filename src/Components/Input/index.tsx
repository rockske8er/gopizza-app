import React from "react";
import { TextInputProps } from "react-native";

import { Container } from "./styles";
import { TypeProps } from "./types";

type Props = TextInputProps & {
  type?: TypeProps;
};

const Input = ({ type = "primary", ...rest }: Props) => {
  return <Container type={type} {...rest} />;
};

export { Input };
