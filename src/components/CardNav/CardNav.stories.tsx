import { Story, Meta } from '@storybook/react';

import { MemoryRouter } from 'react-router';
import { CardNav } from './index';
import { CardNavProps } from './CardNav.types';

export default {
  title: 'CardNav',
  component: CardNav,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story<CardNavProps> = (args) => <CardNav {...args} />;

export const Default = Template.bind({}) as Story<CardNavProps>;
Default.args = {
  isLink: true,
};
export const noLink = Template.bind({}) as Story<CardNavProps>;
noLink.args = {
  isLink: false,
};
