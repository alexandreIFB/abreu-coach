import styled from 'styled-components/native';

interface ViewProps {
}
export const View = styled.Text<ViewProps>`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND}
`;
