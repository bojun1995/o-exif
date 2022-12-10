import { defineStore } from 'pinia'
export const useAppStore = defineStore('app', {
  state: () => {
    return {
      isMaximize: false,
    }
  },
  getters: {},
  actions: {
    setIsMaximize(status) {
      this.isMaximize = status
    },
  },
})
