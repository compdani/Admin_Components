import { defineStore } from 'pinia'

export const useComponentClipboard = defineStore('componentClipboard', {
  state: () => ({
    element: null,
    path: null,
    isCut: false
  }),
  
  actions: {
    cut(element, path) {
      this.element = JSON.parse(JSON.stringify(element))
      this.path = path
      this.isCut = true
    },
    
    copy(element, path) {
      this.element = JSON.parse(JSON.stringify(element))
      this.path = path
      this.isCut = false
    },
    
    clear() {
      this.element = null
      this.path = null
      this.isCut = false
    },
    
    hasContent() {
      return this.element !== null
    }
  }
}) 