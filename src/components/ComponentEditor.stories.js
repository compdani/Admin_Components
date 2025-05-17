import ComponentEditor from "./ComponentEditor.vue";
import { ref } from "vue";
import { useComponentClipboard } from "../../.storybook/provides/componentClipboard.js";
export default {
  title: "Components/ComponentEditor",
  component: ComponentEditor,
  tags: ["autodocs"],
  argTypes: {
    modelValue: {
      control: "object",
      description: "The JSON data model for the component editor",
    },
  },
};

const Template = (args) => ({
  components: { ComponentEditor },
  setup() {
    const modelValue = ref(args.modelValue);
    return { modelValue };
  },
  template: '<ComponentEditor v-model="modelValue" />',
  provide: {
    componentClipboard: useComponentClipboard(),
  },
});

// Basic story with empty components array
export const Empty = Template.bind({});
Empty.args = {
  modelValue: [],
};

// Story with some pre-populated components
export const WithComponents = Template.bind({});
WithComponents.args = {
  modelValue: [
    {
      component: "v-card",
      props: {
        title: "Sample Card",
        elevation: 2,
      },
      children: [
        {
          component: "v-card-text",
          props: {
            text: "This is a sample card component",
          },
        },
      ],
    },
    {
      component: "v-btn",
      props: {
        color: "primary",
        text: "Click Me",
      },
    },
  ],
};

// Story with nested components
export const NestedComponents = Template.bind({});
NestedComponents.args = {
  modelValue: [
    {
      component: "v-container",
      props: {},
      children: [
        {
          component: "v-row",
          props: {},
          children: [
            {
              component: "v-col",
              props: { cols: 6 },
              children: [
                {
                  component: "v-card",
                  props: { title: "Left Card" },
                },
              ],
            },
            {
              component: "v-col",
              props: { cols: 6 },
              children: [
                {
                  component: "v-card",
                  props: { title: "Right Card" },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// Story with form components
export const FormComponents = Template.bind({});
FormComponents.args = {
  modelValue: [
    {
      component: "v-form",
      props: {},
      children: [
        {
          component: "v-text-field",
          props: {
            label: "Username",
            placeholder: "Enter your username",
          },
        },
        {
          component: "v-text-field",
          props: {
            label: "Password",
            type: "password",
            placeholder: "Enter your password",
          },
        },
        {
          component: "v-btn",
          props: {
            color: "primary",
          },
          textContent: "Click Me",
        },
      ],
    },
  ],
};
