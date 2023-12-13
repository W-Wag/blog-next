import styled from 'styled-components';

export const PostDetailsContainer = styled.div`
  color: ${(props) => props.theme.colors['gray-100']};
  font-size: ${(props) => props.theme.font.sizes.small};
  margin: ${(props) => props.theme.spacings.medium};
  font-style: italic;

  span {
    font-weight: bold;
  }
`;
