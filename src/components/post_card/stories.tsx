import { Meta, StoryFn } from '@storybook/react';
import { PostCard, PostCardProps } from '.';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../styles/theme';
import { GlobalStyles } from '../../styles/global';

const meta: Meta<typeof PostCard> = {
  title: 'Post Card',
  component: PostCard,
  args: {
    slug: 'default-slug',
    title: 'Default Title',
    cover: '/images/typescript-cover.png',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    ),
  ],
};

export const TypescriptCover: StoryFn<PostCardProps> = (args) => (
  <PostCard {...args} />
);
export const JavascriptCover: StoryFn<PostCardProps> = (args) => (
  <PostCard {...args} />
);
JavascriptCover.args = {
  cover: '/images/javascript-cover.png',
};

export default meta;
