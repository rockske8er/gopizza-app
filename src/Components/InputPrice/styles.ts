import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native-gesture-handler";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: ${RFValue(56)}px;
  border-radius: ${RFValue(12)}px;
  border: 1px solid ${({ theme }) => theme.Colors.SHAPE};
  margin-bottom: ${RFValue(8)}px;
`;

export const Size = styled.View`
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.Colors.SHAPE};
  margin-right: ${RFValue(18)}px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.Fonts.TEXT};
  color: ${({ theme }) => theme.Colors.SECONDARY_900};
`;

export const Input = styled(TextInput)`
  flex: 1;
  margin-left: ${RFValue(8)}px;
`;
