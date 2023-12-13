import styled, { css } from 'styled-components';

export const HeadingContainer = styled.h2`
  ${(props) => css`
    font-size: ${props.theme.font.sizes.large};
  `}
`;
