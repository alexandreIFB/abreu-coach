import styled from 'styled-components/native';

interface ViewProps {
}
export const View = styled.View<ViewProps>`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  flex: 1;
`;

export const ViewPress = styled.Pressable<ViewProps>`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  flex: 1;
`;
