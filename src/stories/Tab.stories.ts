// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Tab from './tab.component';

export default {
  title: 'Example/Tab',
  component: Tab,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Tab> = (args: Tab) => ({
  component: Tab,
  props: args,
});

export const Active = Template.bind({});
Active.args = {
  active: true,
  label: 'Tab',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Tab',
};
