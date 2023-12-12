import styled, { css } from 'styled-components';

export const PostCardContainer = styled.div`
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const PostCardCover = styled.div`
  margin-bottom: ${(props) => props.theme.spacings.small};

  img {
    object-fit: fill;
    width: 100%;
    display: block;
  }
`;

export const PostCardHeading = styled.h2`
  ${(props) => css`
    font-size: ${props.theme.font.sizes.medium};

    a {
      color: ${props.theme.colors['gray-300']};
    }
  `}
`;
