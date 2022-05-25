import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(12)}px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.Colors.PRIMARY_100};
`;
