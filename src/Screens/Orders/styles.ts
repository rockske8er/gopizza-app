import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.Colors.GRADIENT,
}))`
  padding: ${getStatusBarHeight() + RFValue(32)}px 0 ${RFValue(32)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  text-align: center;
  font-family: ${({ theme }) => theme.Fonts.TITLE};
  color: ${({ theme }) => theme.Colors.TITLE};
`;
