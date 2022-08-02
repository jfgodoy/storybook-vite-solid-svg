import { StoryFn, Meta} from "@storybook/html"
import { Component, ComponentProps } from 'solid-js'
import {Button} from "./Button"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComponentStoryFn<T extends Component<any>> = StoryFn<ComponentProps<T>>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComponentMeta<T extends Component<any>> = Meta<ComponentProps<T>>

export default {
  title: 'Example/Button',
  argTypes: {
    count: { control: 'number' },
  },
} as ComponentMeta<typeof Button>

const Template = (args => <Button {...args} />) as ComponentStoryFn<typeof Button>


export const OneButton = Template.bind({})
OneButton.args = {count:1}

export const TwoButtons = Template.bind({})
TwoButtons.args = {count:2}

export const ThreeButtons = Template.bind({})
ThreeButtons.args = {count:3}
