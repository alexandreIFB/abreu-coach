import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: ${({theme}) => theme.COLORS.CARDBACKGROUND};
  border-radius: 8px;
  gap: 12px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;

export const ClientInfo = styled.View`
  flex: 1;
  gap: 2px;
`;

