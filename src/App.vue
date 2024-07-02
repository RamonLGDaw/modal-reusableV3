<template>
  <div id="app">
    <button @click="openModal">Open Modal</button>
    <Modal>
      <p>Modal Content</p>
      <button @click="closeModal">Close Modal</button>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import Modal from './components/Modal.vue'
import { useModalStore } from './stores/modalStore'

const modalStore = useModalStore()

const openModal = () => {
  modalStore.openModal()
  modalStore.setLoading(true)
  setTimeout(() => {
    modalStore.setLoading(false)
  }, 2000)
}

const closeModal = () => {
  modalStore.closeModal()
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
