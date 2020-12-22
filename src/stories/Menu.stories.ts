import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import Button from './button.component';
import Menu from './menu.component';

export default {
  title: 'Example/Menu',
  component: Menu,
  decorators: [
    moduleMetadata({
      declarations: [Button],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<Menu> = (args: Menu) => ({
  component: Menu,
  props: args,
});

export const MenuExpanded = Template.bind({});
MenuExpanded.args = {
  user: {},
};
/*
export const LoggedOut = Template.bind({});
LoggedOut.args = {};
*/