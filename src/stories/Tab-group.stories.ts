import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import Tab from './tab.component';
import TabGroup from './tab-group.component';

export default {
  title: 'Example/TabGroup',
  component: TabGroup,
  decorators: [
    moduleMetadata({
      declarations: [Tab],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<TabGroup> = (args: TabGroup) => ({
  component: TabGroup,
});

export const TabGroupNormal = Template.bind({});

/*
export const LoggedOut = Template.bind({});
LoggedOut.args = {};
*/