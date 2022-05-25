import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { TypeProps } from "./types";

type Props = {
  type: TypeProps;
};

export const Container = styled(RectButton)<Props>`
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.Colors.SUCCESS_900 : theme.Colors.PRIMARY_800};
`;

export const Title = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.Fonts.TEXT};
    color: ${theme.Colors.TITLE};
  `}
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.Colors.TITLE,
}))``;
