/** @type { import('@storybook/vue3').Preview } */
import { setup } from '@storybook/vue3';
import { withVuetifyTheme } from './withVeutifyTheme.decorator';
import vuetify from '../src/plugins/vuetify';
import {useComponentClipboard} from './provides/componentClipboard';
import { createPinia } from 'pinia';
const pinia = createPinia();
setup(app => {
  app.use(pinia);
  app.use(vuetify);
  app.provide('componentClipboard', useComponentClipboard());

});

const preview = {
  decorators: [withVuetifyTheme],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;