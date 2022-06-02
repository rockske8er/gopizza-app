import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

type ContainerProps = {
  index: number;
};

export type StatusType = "Preparando" | "Pronto" | "Entregue";

type StatusProps = {
  status: StatusType;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 50%;
  align-items: center;
  padding: ${RFValue(24)}px;

  ${({ theme, index }) => css`
    border-right-width: ${index % 2 > 0 ? 0 : 1}px;
    border-right-color: ${theme.Colors.SHAPE};
  `}
`;

export const Image = styled.Image`
  width: ${RFValue(104)}px;
  height: ${RFValue(104)}px;
  border-radius: ${RFValue(52)}px;
`;

export const Name = styled.Text`
  font-size: ${RFValue(20)}px;
  margin-top: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.Fonts.TITLE};
  color: ${({ theme }) => theme.Colors.SECONDARY_900};
`;

export const Description = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-top: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.Fonts.TEXT};
  color: ${({ theme }) => theme.Colors.SECONDARY_400};
`;

export const Status = styled.View<StatusProps>`
  padding: ${RFValue(4)}px ${RFValue(16)}px;
  border-radius: ${RFValue(12)}px;
  margin-top: ${RFValue(16)}px;
  justify-content: center;
  align-items: center;

  ${({ theme, status }) =>
    status === "Preparando" &&
    css`
      border: 1px solid ${theme.Colors.ALERT_900};
      background-color: ${theme.Colors.ALERT_50};
    `}

  ${({ theme, status }) =>
    status === "Pronto" &&
    css`
      background-color: ${theme.Colors.SECONDARY_900};
    `}

    ${({ theme, status }) =>
    status === "Entregue" &&
    css`
      background-color: ${theme.Colors.SECONDARY_900};
    `}
`;

export const StatusLabel = styled.Text<StatusProps>`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.Fonts.TEXT};

  ${({ status, theme }) => css`
    color: ${status === "Preparando"
      ? theme.Colors.ALERT_900
      : theme.Colors.TITLE};
  `}
`;
