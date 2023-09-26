import styled from 'styled-components/native';


export const Container = styled.TouchableOpacity`
  flex-direction: column;
  padding: 12px;
  background-color: ${({theme }) => theme.COLORS.CARDBACKGROUND};
  border-radius: 8px;
  gap: 4px;
`;


export const RowInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RowExpand = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -8px;
`;

export const ContainerExpand = styled.View`
  flex-direction: column;
  gap: 4px;
  border-top-width: 1px;
  border-color: #ccc;
  margin-top: 8px;
  padding: 12px 0px;
`;
