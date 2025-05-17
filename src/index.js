import ComponentEditor from "./components/ComponentEditor.vue";
import EventMainDetails from "./components/EventForm/MainDetails.vue";
export default {
  install(app, options = {}) {
    // Register components
    app.component("ComponentEditor", ComponentEditor);

    // Use a provided store instance if you need
    if (options.componentClipboard) {
      // Provide it for injection, if desired
      app.provide("componentClipboard", options.componentClipboard);
    }
    if (options.event_form) {
      app.provide("event_form", options.event_form);
    } else {
      app.provide("event_form", {
        image_url: "https://api.dreia.org/api/files/events/",
        visibility_fields: [
          {
            id: "mainpage",
            color: "blue",
            label: "DREIA.com?",
          },
          {
            id: "public",
            color: "green",
            label: "Public",
          },
          {
            id: "formOn",
            color: "red",
            label: "Form",
          },
          {
            id: "url_is_redirect",
            color: "purple",
            label: "Is it a redirect?",
          },
          {
            id: "is_modal",
            color: "yellow",
            label: "Is it a modal?",
          },
        ],
      });
    }
  },
};

export { EventMainDetails }