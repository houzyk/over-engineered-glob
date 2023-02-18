//@ts-nocheck
import { Meta } from '@storybook/html';
import TemplateComponent from "../src/Template";

export default {
  component: TemplateComponent,
  title: 'TemplateComponent Story',
  parameters: {
    docs: {
      description: {}
    }
  },
  argTypes: {}
} as Meta;

const StorybookTemplate = (args) => (<TemplateComponent {...args} />);

export const TemplateComponentStory = StorybookTemplate.bind({});