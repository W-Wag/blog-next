import styled from 'styled-components';

export const HomeContainerStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${(props) => props.theme.spacings.large};
`;
