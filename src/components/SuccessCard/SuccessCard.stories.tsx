import { Story, Meta } from '@storybook/react';

import { SuccessCard } from './index';
import { SuccessCardProps } from './SuccessCard.types';

export default {
  title: 'SuccessCard',
  component: SuccessCard,
} as Meta;

const Template: Story<SuccessCardProps> = (args) => <SuccessCard {...args} />;

export const Success = Template.bind({}) as Story<SuccessCardProps>;
Success.args = {
  image: 'smail',
  alt: 'smail',
  isLoading: false,
  userName: 'Alex',
  logout: () => console.log('logout'),
};
export const Loading = Template.bind({}) as Story<SuccessCardProps>;
Loading.args = {
  image: 'smail',
  alt: 'smail',
  isLoading: true,
  userName: 'Alex',
  logout: () => console.log('logout'),
};
