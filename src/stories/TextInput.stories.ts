// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {
  Story,
  Meta
} from '@storybook/angular/types-6-0';
import TextInput from './text-input.component';

export default {
  title: 'Example/Text-input',
  component: TextInput,
  argTypes: {
    light: {
      control: 'boolean'
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story < TextInput > = (args: TextInput) => ({
  component: TextInput,
  props: args,
});


export const TextInputNormal = Template.bind({});
TextInputNormal.args = {
  light: false,
  label: 'Label',
  placeholder: 'Normal text input',
  helper: 'Helper for text input',
};

export const TextInputLight = Template.bind({});
TextInputLight.args = {
  light: true,
  label: 'Label',
  placeholder: 'Light text input',
  helper: 'Helper for text input',
};
