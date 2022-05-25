import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

import { TypeProps } from "./types";

type Props = {
  type: TypeProps;
};

export const Container = styled(TextInput).attrs<Props>(({ theme, type }) => ({
  placeholderTextColor:
    type === "primary" ? theme.Colors.SECONDARY_900 : theme.Colors.PRIMARY_50,
}))<Props>`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  font-size: 14px;
  background-color: transparent;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 20px;
  padding-right: 7px;
  margin-bottom: 16px;

  ${({ theme, type }) => css`
    font-family: ${theme.Fonts.TEXT};
    border: 1px solid ${theme.Colors.SHAPE};
    color: ${type === "primary"
      ? theme.Colors.SECONDARY_900
      : theme.Colors.TITLE};
  `}
`;
