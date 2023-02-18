//@ts-nocheck
import { Meta } from '@storybook/html';
import Template from '../src/Template';

export default {
  component: Template,
  title: 'Template Story',
  parameters: {
    docs: {
      description: {}
    }
  },
  argTypes: {}
} as Meta;

const StoryBookTemplate = () => (<Template />);

export const TemplateStory = StoryBookTemplate.bind({});