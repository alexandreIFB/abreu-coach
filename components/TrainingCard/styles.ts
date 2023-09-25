import styled from 'styled-components/native';

type ContainerProps = {
  isExpired?: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: column;
  padding: 12px;
  background-color: ${({theme, isExpired}) =>
    isExpired
      ? theme.COLORS.CARDNEGATIVE
      :  theme.COLORS.CARDBACKGROUND};
  border-radius: 8px;
  gap: 12px;
`;


export const RowInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
