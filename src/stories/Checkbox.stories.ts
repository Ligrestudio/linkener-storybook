// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {
    Story,
    Meta
  } from '@storybook/angular/types-6-0';
  import Checkbox from './checkbox.component';
  
  export default {
    title: 'Example/Checkbox',
    component: Checkbox,
    argTypes: {
      type: {
        control: {
          type: 'select',
          options: ['normal', 'indeterminate', 'disabled', 'noLabel'],
        },
      },
    },
  } as Meta;
  
  const Template: Story < Checkbox > = (args: Checkbox) => ({
    component: Checkbox,
    props: args,
  });
  
  export const Normal = Template.bind({});
  Normal.args = {
    type: 'normal',
    label: 'Checkbox label',
  };
  
  export const Indeterminate = Template.bind({});
  Indeterminate.args = {
    type: 'indeterminate',
    label: 'Checkbox label',
  };
  
  export const Disabled = Template.bind({});
  Disabled.args = {
    type: 'disabled',
    label: 'Checkbox label',
  };
  
  export const NoLabel = Template.bind({});
  NoLabel.args = {
    type: 'noLabel',
    label: 'Checkbox label',
  };
  