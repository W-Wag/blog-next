import styled from 'styled-components';

export const HomeContainerStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${(props) => props.theme.spacings.large};
`;

export const CategoryTitle = styled.h1`
  color: ${(props) => props.theme.colors['gray-300']};
  text-align: center;
  font-size: ${(props) => props.theme.font.sizes.large};
  font-weight: bold;
  padding: ${(props) => props.theme.spacings.medium} 0;
`;

export const AllPostLink = styled.div`
  margin: ${(props) => props.theme.spacings.large};
  text-align: center;
`;
