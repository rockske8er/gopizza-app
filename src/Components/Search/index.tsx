import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { Container, InputArea, Input, Button, ClearButton } from "./styles";

type Props = TextInputProps & {
  onSearch: () => void;
  onClear: () => void;
};

const Search = ({ onSearch, onClear, ...rest }: Props) => {
  const { Colors } = useTheme();
  return (
    <Container>
      <InputArea>
        <Input placeholder="Pesquisar" {...rest} />
        <ClearButton onPress={onClear}>
          <Feather size={16} name={"x"} />
        </ClearButton>
      </InputArea>

      <Button onPress={onSearch}>
        <Feather size={16} name={"search"} color={Colors.TITLE} />
      </Button>
    </Container>
  );
};

export { Search };
