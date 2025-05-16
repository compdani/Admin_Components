import { inject } from 'vue';

export const commonComponents = [
  { title: "Card", component: "v-card", props: {} },
  { title: "Card Title", component: "v-card-title", props: {} },
  { title: "Card Text", component: "v-card-text", props: {} },
  { title: "Card Actions", component: "v-card-actions", props: {} },
  { title: "Div", component: "div", props: {} },
  { title: "Row", component: "v-row", props: {} },
  { title: "Col", component: "v-col", props: {} },
  { title: "H1", component: "h1", props: {} },
  { title: "H2", component: "h2", props: {} },
  { title: "H3", component: "h3", props: {} },
  { title: "H4", component: "h4", props: {} },
  { title: "H5", component: "h5", props: {} },
  { title: "Paragraph", component: "p", props: {} },
  { title: "Span", component: "span", props: {} },
  { title: "List", component: "v-list", props: {} },
  { title: "List Item", component: "v-list-item", props: {} },
  { title: "IFrame", component: "iframe", props: {} },
];

export function useComponentOptions(json) {
  const clipboard = inject('componentClipboard');

  const removeElement = (path) => {
    const temp = [...json.value];
    const parent = path.slice(0, -1).reduce((acc, curr) => acc[curr], temp);
    if (parent) {
      const index = path[path.length - 1];
      parent.splice(index, 1);
    }
    json.value = temp;
  };

  const pasteElement = (path, position) => {
    if (!clipboard.hasContent()) return;

    const temp = [...json.value];
    const element = JSON.parse(JSON.stringify(clipboard.element));
    
    switch (position) {
      case 'prepend':
        temp.splice(path[path.length - 1], 0, element);
        break;
      case 'append':
        temp.splice(path[path.length - 1] + 1, 0, element);
        break;
      case 'child':
        const parent = path.reduce((acc, curr) => acc[curr], temp);
        if (!parent.children) parent.children = [];
        parent.children.push(element);
        break;
    }
    
    json.value = temp;
    if (clipboard.isCut) {
      clipboard.clear();
    }
  };

  const insertElement = (path, element) => {
    const temp = [...json.value];
    const parent = path.reduce((acc, curr) => acc[curr], temp);
    if (!parent.children) parent.children = [];
    parent.children.push(element);
    json.value = temp;
  };

  return {
    removeElement,
    pasteElement,
    insertElement
  };
}

export function registerInsertOptions(insertElement, path) {
  return {
    label: "Insert",
    children: commonComponents.map(comp => ({
      label: comp.title,
      onClick: () => insertElement(path, { ...comp })
    }))
  };
}
