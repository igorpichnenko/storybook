import { Story, Meta } from '@storybook/react';

import { MemoryRouter } from 'react-router';
import { CardNav } from './index';
import { CardNavProps } from './CardNav.types';

export default {
  title: 'CardNav',
  component: CardNav,
} as Meta;

const Template: Story<CardNavProps> = (args) => (
  <MemoryRouter>
    <CardNav {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({}) as Story<CardNavProps>;
Default.args = {
  isSimpleHeader: true,
};
export const noLink = Template.bind({}) as Story<CardNavProps>;
noLink.args = {
  isSimpleHeader: false,
};
