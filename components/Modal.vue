<template>
  <teleport to="body">
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="showModal" class="bg-grey-200">
        <div
          class="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50"
        >
          <!-- modal -->
          <div
            ref="modal"
            class="bg-white shadow-xl w-2/3 md:w-1/2 p-4 rounded-lg"
            role="dialog"
          >
            <!-- modal header-->
            <div class="border-b px-4 py-2 flex justify-between items-center">
              <h3>{{ title }}</h3>
              <button class="text-black" @click="closeModal">&cross;</button>
            </div>
            <!-- modal body-->
            <div class="p-3">
              <slot />
            </div>
            <div class="flex justify-end items-center w-100 border-t p-3">
              <button
                class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1"
                @click="closeModal"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'タイトル',
    },
  },

  setup(props, context) {
    const showModal = ref(false)
    const modal = ref(null)

    function closeModal() {
      context.emit('close')
    }

    watch(
      () => props.show,
      (show) => {
        showModal.value = show
      }
    )

    return { showModal, closeModal, modal }
  },
}
</script>
