import styled from 'styled-components/native';


export const Container = styled.TouchableOpacity`
  flex-direction: column;
  background-color: ${({theme }) => theme.COLORS.CARDBACKGROUND};
  border-radius: 8px;
`;

export const ContainerHeader = styled.View`
  flex-direction: column;
  padding: 12px;
  border-radius: 8px;
  gap: 4px;
`;

export const RowExpand = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -12px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: #ccc; /* Cor do separador */
`;

export const CardContainer = styled.View`
  flex-direction: column;
  padding: 12px;
  border-radius: 8px;
  gap: 12px;
  width: 100%;
  background-color: #bbb;
  border-radius: 8px;
`;
