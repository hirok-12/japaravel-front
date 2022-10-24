<template>
  <div class="w-11/12 mx-auto">
    <Modal :title="タイトル" :show="showModal" @close="showModal = false">
      ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
    </Modal>
    <Header :show="showModal" @cutom="parentMethos" />
    <slot />
    <Footer />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const showModal = ref(false)

    function parentMethos(e) {
      showModal.value = e
    }
    return {
      showModal,
      parentMethos,
    }
  },
}
</script>
-->
