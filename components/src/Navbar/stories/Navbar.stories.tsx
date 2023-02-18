//@ts-nocheck
import { Meta } from '@storybook/html';
import Navbar from "../src/Navbar";

export default {
  component: Navbar,
  title: 'Navbar Story',
  parameters: {
    docs: {
      description: {}
    }
  },
  argTypes: {}
} as Meta;

const StorybookTemplate = (args) => (<Navbar {...args} />);

export const NavbarStory = StorybookTemplate.bind({});