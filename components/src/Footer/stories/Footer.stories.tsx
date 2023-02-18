//@ts-nocheck
import { Meta } from '@storybook/html';
import Footer from "../src/Footer";

export default {
  component: Footer,
  title: 'Footer Story',
  parameters: {
    docs: {
      description: {}
    }
  },
  argTypes: {}
} as Meta;

const StorybookTemplate = (args) => (<Footer {...args} />);

export const FooterStory = StorybookTemplate.bind({});