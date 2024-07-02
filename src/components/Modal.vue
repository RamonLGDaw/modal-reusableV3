<!-- src/components/Modal.vue -->
<template>
    <div v-if="isModalOpen" class="modal-overlay">
      <div class="modal">
        <div v-if="isLoading" class="spinner"></div>
        <div v-else class="modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useModalStore } from '../stores/modalStore'
  
  export default defineComponent({
    setup() {
      const modalStore = useModalStore()
      const isModalOpen = computed(() => modalStore.isModalOpen)
      const isLoading = computed(() => modalStore.isLoading)
  
      return {
        isModalOpen,
        isLoading
      }
    }
  })
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #000;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  </style>
  