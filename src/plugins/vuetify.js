import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, fa } from 'vuetify/iconsets/fa'


export default (app) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa,
      },
    },
    defaults: {
      VIcon: {
        style: 'font-size: 1.1em',
      },
    },
  });

  app.use(vuetify);
};
