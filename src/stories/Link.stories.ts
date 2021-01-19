// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {
    Story,
    Meta
  } from '@storybook/angular/types-6-0';
  import Link from './link.component';
  
  export default {
    title: 'Example/Link',
    component: Link,
    argTypes: {
      size: {
        control: {
          type: 'inline-radio',
          options: ['small', 'medium', 'large'],
        },
      },
      type: {
        control: {
          type: 'inline-radio',
          options: ['normal', 'inline'],
        },
      },
    },
  } as Meta;
  
  const Template: Story < Link > = (args: Link) => ({
    component: Link,
    props: args,
  });
  
  export const Normal = Template.bind({});
  Normal.args = {
    type: 'normal',
    label: 'Link',
  };
  
  export const Inline = Template.bind({});
  Inline.args = {
    type: 'inline',
    label: 'Link',
  };
  
  
/* size */
  
  export const Large = Template.bind({});
  Large.args = {
    size: 'large',
    label: 'Link',
  };
  
  export const Medium = Template.bind({});
  Medium.args = {
    size: 'medium',
    label: 'Link',
  };
  
  export const Small = Template.bind({});
  Small.args = {
    size: 'small',
    label: 'Link',
  };
  