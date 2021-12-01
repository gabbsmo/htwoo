import React from 'react';
import { Meta, Story } from '@storybook/react';

import HOOPivotButton, {
  IHOOPivotButtonProps
} from './HOOPivotButton';

export default {
  title: 'Atoms/HOOPivotButton',
  component: HOOPivotButton,
} as Meta;

const Template: Story<IHOOPivotButtonProps> = (args) => <HOOPivotButton {...args} />;

export const Basic = Template.bind({});
Basic.args = { label: "Pivot Button", isActive: true, onClick: () => { alert("Clicked"); } } as IHOOPivotButtonProps;

export const Extend = Template.bind({});
const rea: React.HTMLAttributes<HTMLButtonElement> = { style: { backgroundColor: "red" } };
Extend.args = { label: "Pivot Button", isActive: true, onClick: () => { alert("Clicked"); }, rootElementAttributes: rea } as IHOOPivotButtonProps;