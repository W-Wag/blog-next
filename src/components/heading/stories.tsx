
import { Meta, StoryFn } from "@storybook/react";
import { Heading, HeadingProps } from ".";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../styles/theme";
import { GlobalStyles } from "../../styles/global";

const meta: Meta<typeof Heading> = {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Template Text'
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    )
  ]
}

export const HeadingText: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

export default meta

