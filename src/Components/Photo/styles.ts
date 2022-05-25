import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Image = styled.Image`
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;
  border-radius: ${RFValue(80)}px;
`;

export const Placeholder = styled.View`
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;
  border-radius: ${RFValue(80)}px;
  justify-content: center;
  align-items: center;
  border: 1px dashed ${({ theme }) => theme.Colors.SECONDARY_900};
`;

export const PlaceholderTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.Fonts.TEXT};
    color: ${theme.Colors.SECONDARY_900};
  `}
`;

export const Upload = styled.View`
  width: 100%;
  flex-direction: row;
`;
