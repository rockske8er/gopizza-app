import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Card = styled(RectButton)`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: ${RFValue(104)}px;
  height: ${RFValue(104)}px;
  border-radius: ${RFValue(52)}px;
  margin-right: ${RFValue(20)}px;
`;

export const Details = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  flex: 1;
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.Fonts.TITLE};
  color: ${({ theme }) => theme.Colors.SECONDARY_900};
`;

export const Description = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(20)}px;
  margin-right: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.Fonts.TEXT};
  color: ${({ theme }) => theme.Colors.SECONDARY_400};
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  margin: 12px 0;
  margin-left: 120px;
  background-color: ${({ theme }) => theme.Colors.SHAPE};
`;

export const Identification = styled.View`
  flex-direction: row;
  align-items: center;
`;
