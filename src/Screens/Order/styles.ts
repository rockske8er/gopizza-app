import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

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
  top: ${RFValue(-100)}px;
  position: relative;
`;

export const Sizes = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${RFValue(40)}px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: ${RFValue(-120)}px;
  padding: ${RFValue(24)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  text-align: center;
  font-family: ${({ theme }) => theme.Fonts.TITLE};
  color: ${({ theme }) => theme.Colors.SECONDARY_900};
`;

export const Label = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.Fonts.TEXT};
  color: ${({ theme }) => theme.Colors.SECONDARY_900};
  margin-bottom: ${RFValue(16)}px;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputGroup = styled.View`
  width: 48%;
`;

export const Price = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.Fonts.TEXT};
  color: ${({ theme }) => theme.Colors.SECONDARY_900};
  margin: ${RFValue(24)}px 0;
  align-self: flex-end;
`;

export const Wrapper = styled.ScrollView`
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
`;
