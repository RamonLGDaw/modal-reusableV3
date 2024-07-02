// src/stores/modalStore.ts
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    isModalOpen: false,
    isLoading: false,
  }),
  actions: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    setLoading(loading: boolean) {
      this.isLoading = loading;
    }
  }
})
