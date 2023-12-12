import styled, { css } from 'styled-components';

export const ContainerFooter = styled.header`
  ${(props) => css`
    color: ${props.theme.colors['gray-100']};
    font-size: ${props.theme.font.sizes.small};
    text-align: center;
  `}
`;
