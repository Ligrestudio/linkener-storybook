import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import Button from './button.component';
import FilterDb from './filter-db.component';

export default {
  title: 'Example/FilterDb',
  component: FilterDb,
  decorators: [
    moduleMetadata({
      declarations: [Button],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<FilterDb> = (args: FilterDb) => ({
  component: FilterDb,
  props: args,
});

export const FilterDbDashboard = Template.bind({});
FilterDbDashboard.args = {
  user: {},
};
/*
export const LoggedOut = Template.bind({});
LoggedOut.args = {};
*/