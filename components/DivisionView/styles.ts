import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  padding: 10px;
  gap: 12px;
  border-bottom-width: 1px;
  border-color: #ccc;
`;

export const TitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 10px;
`;


export const DescribeContainer = styled.View`
  width: 100%;
  gap: 8px;
`;
