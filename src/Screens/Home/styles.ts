import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
`;

export const Greating = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const GreatingEmoji = styled.Image`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  margin-right: ${RFValue(12)}px;
`;

export const GreatingMessage = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.Fonts.TITLE};
  color: ${({ theme }) => theme.Colors.TITLE};
`;

export const SignOut = styled(BorderlessButton)``;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.Colors.GRADIENT,
}))`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${getStatusBarHeight() + RFValue(32)}px ${RFValue(24)}px
    ${RFValue(58)}px;
`;
