import styled from 'styled-components';

export const MainContainerStyled = styled.main`
  max-width: 96rem;
  font-size: ${(props) => props.theme.font.sizes.medium};
  margin: 0 auto;
  padding: ${(props) => props.theme.spacings.medium};
`;
