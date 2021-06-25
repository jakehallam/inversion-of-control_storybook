import React from 'react';

import { Menu } from './Menu';

export default {
  title: 'Example/Menu',
  component: Menu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Menu {...args} />;

export const MenuDropdown = Template.bind({});
MenuDropdown.args = {
  backgroundColor: "#DC002E",
  borderLeft: "5px solid #191E3D",
  color: "white",
};