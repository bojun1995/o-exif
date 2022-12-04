import { defineStore } from 'pinia'
export const useAppStore = defineStore('app', {
  state: () => {
    return {
      themeName: '123123',
    }
  },
  getters: {},
  actions: {},
})
