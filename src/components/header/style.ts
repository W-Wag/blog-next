import styled, { css } from 'styled-components';

export const ContainerHeader = styled.header`
  ${(props) => css`
    background: ${props.theme.colors.primary};
    color: ${props.theme.colors.white};
    font-size: ${props.theme.font.sizes.large};
    padding: ${props.theme.spacings.medium};
    text-align: center;
  `}

  a {
    color: ${(props) => props.theme.colors['gray-100']};
  }
`;
