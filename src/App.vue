<!-- src/App.vue -->
<template>
  <div id="app">
    <button @click="openModal">Open Modal</button>
    <Modal>
      <p>Modal Content</p>
      <button @click="closeModal">Close Modal</button>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Modal from './components/Modal.vue'
import { useModalStore } from './stores/modalStore'

export default defineComponent({
  components: {
    Modal
  },
  setup() {
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

    return {
      openModal,
      closeModal
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
