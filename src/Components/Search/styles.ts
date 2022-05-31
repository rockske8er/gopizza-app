import { TextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 ${RFValue(24)}px;
  margin-top: -${RFValue(30)}px;
`;

export const InputArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.Colors.TITLE};
  border: 1px solid ${({ theme }) => theme.Colors.SHAPE};
`;

export const Input = styled(TextInput)`
  flex: 1;
  height: ${RFValue(52)}px;
  padding-left: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.Fonts.TEXT};
`;

export const ClearButton = styled.TouchableOpacity`
  margin-right: ${RFValue(8)}px;
`;

export const Button = styled(RectButton)`
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.Colors.SECONDARY_900};
  margin-left: ${RFValue(8)}px;
`;
