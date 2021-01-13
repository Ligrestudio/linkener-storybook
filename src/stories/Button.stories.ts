// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {
  Story,
  Meta
} from '@storybook/angular/types-6-0';
import Button from './button.component';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large', 'full-bleed'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'danger', 'ghost', 'tertiary-danger', 'ghost-danger'],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story < Button > = (args: Button) => ({
  component: Button,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'tertiary',
  label: 'Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: 'ghost',
  label: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  label: 'Button',
};

export const TertiaryDanger = Template.bind({});
TertiaryDanger.args = {
  type: 'tertiary-danger',
  label: 'Button',
};

export const GhostDanger = Template.bind({});
GhostDanger.args = {
  type: 'ghost-danger',
  label: 'Button',
};

export const FullBleed = Template.bind({});
FullBleed.args = {
  size: 'full-bleed',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
