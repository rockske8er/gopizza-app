import { Button } from "@Components/Button";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
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

export const MenuHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${RFValue(24)}px ${RFValue(24)}px 0;
  padding-bottom: ${RFValue(24)}px; //22
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.Colors.SHAPE};
`;

export const MenuHeaderNumber = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.Fonts.TEXT};
  color: ${({ theme }) => theme.Colors.SECONDARY_900};
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.Fonts.TITLE};
  color: ${({ theme }) => theme.Colors.SECONDARY_900};
`;

export const AddProductButton = styled(Button)`
  margin: 0 ${RFValue(24)}px;
  margin-bottom: ${getBottomSpace() + RFValue(12)}px;
`;

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
