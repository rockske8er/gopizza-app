import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Wrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + RFValue(48),
  },
})`
  width: 100%;
  padding-left: ${RFValue(32)}px;
  padding-right: ${RFValue(32)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  margin-bottom: ${RFValue(24)}px;
  align-self: flex-start;
  ${({ theme }) => css`
    font-family: ${theme.Fonts.TITLE};
    color: ${theme.Colors.TITLE};
  `}
`;

export const Brand = styled.Image.attrs({ resizeMode: "contain" })`
  height: ${RFValue(340)}px;
  margin-top: ${RFValue(64)}px;
  margin-bottom: ${RFValue(32)}px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: ${RFValue(20)}px;
`;

export const ForgotPasswordLabel = styled.Text`
  font-size: ${RFValue(14)}px;

  ${({ theme }) => css`
    font-family: ${theme.Fonts.TEXT};
    color: ${theme.Colors.TITLE};
  `}
`;

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.Colors.GRADIENT,
  start: {
    x: 0,
    y: 1,
  },
  end: {
    x: 0.5,
    y: 0.5,
  },
}))`
  flex: 1;
  justify-content: center;
`;
