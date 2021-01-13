// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {
    Story,
    Meta
  } from '@storybook/angular/types-6-0';
  import Tag from './tag.component';
  
  export default {
    title: 'Example/Tag',
    component: Tag,
    argTypes: {
      type: {
        control: {
          type: 'select',
          options: ['blue', 'green', 'grey', 'orange', 'purple', 'red', 'yellow'],
        },
      },
    },
  } as Meta;
  
  const Template: Story < Tag > = (args: Tag) => ({
    component: Tag,
    props: args,
  });
  
  export const Blue = Template.bind({});
  Blue.args = {
    type: 'blue',
    label: 'Tag text',
  };
  
  export const Green = Template.bind({});
  Green.args = {
    type: 'green',
    label: 'Tag text',
  };
  
  export const Grey = Template.bind({});
  Grey.args = {
    type: 'grey',
    label: 'Tag text',
  };
  
  export const Orange = Template.bind({});
  Orange.args = {
    type: 'orange',
    label: 'Tag text',
  };
  
  export const Purple = Template.bind({});
  Purple.args = {
    type: 'purple',
    label: 'Tag text',
  };
  
  export const Red = Template.bind({});
  Red.args = {
    type: 'red',
    label: 'Tag text',
  };
  
  export const Yellow = Template.bind({});
  Yellow.args = {
    type: 'yellow',
    label: 'Tag text',
  };
  
  