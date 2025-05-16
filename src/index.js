import ComponentEditor from './components/ComponentEditor.vue';

export default {
    install(app, options = {}) {
      // Register components
      app.component('ComponentEditor', ComponentEditor)
  
      // Use a provided store instance if you need
      if (options.componentClipboard) {
        // Provide it for injection, if desired
        app.provide('componentClipboard', options.componentClipboard)
      }
    }
  }