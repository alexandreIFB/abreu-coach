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

export const ContainerExpand = styled.View`
  flex-direction: column;
  gap: 4px;
  border-top-width: 1px;
  border-color: #ccc;
  margin-top: 8px;
  padding: 12px 2px;
`;
