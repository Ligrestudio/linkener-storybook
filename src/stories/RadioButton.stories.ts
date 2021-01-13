// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {
    Story,
    Meta
  } from '@storybook/angular/types-6-0';
  import Radiobutton from './radio-button.component';
  
  export default {
    title: 'Example/Radiobutton',
    component: Radiobutton,
    argTypes: {
      type: {
        control: {
          type: 'select',
          options: ['normal', 'disabled'],
        },
      },
    },
  } as Meta;
  
  const Template: Story < Radiobutton > = (args: Radiobutton) => ({
    component: Radiobutton,
    props: args,
  });
  
  export const Normal = Template.bind({});
  Normal.args = {
    type: 'normal',
    label: 'Radio-button label',
  };
    
  export const Disabled = Template.bind({});
  Disabled.args = {
    type: 'disabled',
    label: 'Radio-button label',
  };

  