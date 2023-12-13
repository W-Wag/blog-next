import styled, { css } from 'styled-components';

export const ContainerPostCover = styled.div`
  ${(props) => css`
    max-width: 100%;
    margin-bottom: ${props.theme.spacings.medium};
    margin-top: ${props.theme.spacings.medium};
  `}

  img {
    object-fit: fill;
    width: 100%;
    height: 400px;
  }
`;
