import MainDetails from './MainDetails.vue';

export default {
  title: 'EventForm/MainDetails',
  component: MainDetails,
  tags: ['autodocs'],
  argTypes: {
    uploadImages: { action: 'uploadImages' }
  }
};

const Template = (args) => ({
  components: { MainDetails },
  setup() {
    return { args };
  },
  template: '<MainDetails v-bind="args" />',
  provide: {
    event_form: {
      image_url: 'https://example.com/images/',
      visibility_fields: [
        { id: 'is_public', name: 'public', label: 'Public', color: 'primary' },
        { id: 'is_featured', name: 'featured', label: 'Featured', color: 'success' },
        { id: 'is_draft', name: 'draft', label: 'Draft', color: 'warning' }
      ]
    }
  }
});

export const Default = Template.bind({});
Default.args = {
  modelValue: {
    id: '123',
    url: 'my-event',
    title: 'Sample Event',
    class: 'event-class',
    event_start: '2024-03-20T10:00',
    event_end: '2024-03-20T12:00',
    hero: {
      title: 'Hero Title',
      subtitle: 'Hero Subtitle'
    },
    is_public: true,
    is_featured: false,
    is_draft: false,
    shortdescription: 'This is a short description of the event',
    image: 'sample-image.jpg'
  }
};

export const Empty = Template.bind({});
Empty.args = {
  modelValue: {
    id: '',
    url: '',
    title: '',
    class: '',
    event_start: '',
    event_end: '',
    hero: {
      title: '',
      subtitle: ''
    },
    is_public: false,
    is_featured: false,
    is_draft: true,
    shortdescription: '',
    image: null
  }
};
