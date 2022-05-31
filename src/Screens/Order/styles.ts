import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.Colors.GRADIENT,
}))`
  padding: ${getStatusBarHeight() + RFValue(34)}px ${RFValue(24)}px 0;
  height: ${RFPercentage(28)}px;
`;

export const Photo = styled.Image`
  width: ${RFValue(200)}px;
  height: ${RFValue(200)}px;
  border-radius: ${RFValue(100)}px;
  align-self: center;
  margin-top: ${RFValue(-100)}px;
  position: relative;
`;
