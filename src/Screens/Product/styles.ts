import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "@Components/Button";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  ${({ theme }) => css`
    font-family: ${theme.Fonts.TITLE};
    color: ${theme.Colors.TITLE};
  `}
`;

export const DeleteButton = styled.TouchableOpacity``;

export const DeleteButtonLabel = styled.Text`
  font-size: ${RFValue(14)}px;
  ${({ theme }) => css`
    font-family: ${theme.Fonts.TEXT};
    color: ${theme.Colors.TITLE};
  `}
`;

export const Upload = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${RFValue(32)}px 0;
`;

export const PickImageButton = styled(Button)`
  max-width: ${RFValue(90)}px;
  margin-left: ${RFValue(32)}px;
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.Colors.GRADIENT,
}))`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${getBottomSpace() + RFValue(32)}px ${RFValue(20)}px ${RFValue(24)}px;
`;
