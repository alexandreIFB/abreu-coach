import styled from 'styled-components/native';

type NavBarProps = {
  active?: boolean
}

export const Container = styled.View`
  flex-direction: row;
  background-color: #fff;
`;

export const TabButton = styled.TouchableOpacity<NavBarProps>`
  flex: 1;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 2px;
  border-color: ${({active}) => (active ? '#717ed7' : 'transparent')};
`;

export const TabText = styled.Text<NavBarProps>`
  color: ${({active}) => (active ? '#717ed7' : '#7a7d84')};
  font-weight: bold;
`;
