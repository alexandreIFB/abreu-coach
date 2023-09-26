import styled from 'styled-components/native';


export const Container = styled.View`
  flex-direction: column;
  padding: 12px;
  background-color: ${({theme }) => theme.COLORS.CARDBACKGROUND};
  border-radius: 8px;
  gap: 12px;
`;


export const RowInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
