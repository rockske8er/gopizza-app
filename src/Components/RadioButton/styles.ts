import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export type RadioButtonProps = {
  selected: boolean;
};

export const Container = styled.TouchableOpacity<RadioButtonProps>`
  width: ${RFValue(100)}px;
  height: ${RFValue(80)}px;
  border-radius: ${RFValue(8)}px;
  padding: ${RFValue(14)}px ${RFValue(16)}px;

  ${({ theme, selected }) => css`
    border: 1px solid
      ${selected ? theme.Colors.SUCCESS_900 : theme.Colors.SHAPE};
    background-color: ${selected
      ? theme.Colors.SUCCESS_50
      : theme.Colors.TITLE};
  `}
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.Fonts.TITLE};
  color: ${({ theme }) => theme.Colors.SECONDARY_900};
`;

export const Radio = styled.View`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  border-radius: ${RFValue(10)}px;
  border: 1px solid ${({ theme }) => theme.Colors.SECONDARY_900};
  margin-bottom: ${RFValue(16)}px;
  align-items: center;
  justify-content: center;
`;

export const Selected = styled.View`
  width: ${RFValue(8)}px;
  height: ${RFValue(8)}px;
  border-radius: ${RFValue(4)}px;
  background-color: ${({ theme }) => theme.Colors.SUCCESS_900};
`;
