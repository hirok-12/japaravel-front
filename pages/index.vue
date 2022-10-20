<template>
  <div>
    <div class="">
      <img
        src="@/assets/images/main.jpeg"
        :class="pcView ? 'pc-main': 'hideen'"
        class="w-full rounded-lg object-cover lg:h-2/5"
      >
      {{ pcView }}
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  setup(){
    const pcView = ref(true)
    const windowWidth = ref(0)

    const calculateWindowWidth = () => {
      windowWidth.value = window.innerWidth
      return pcView.value = windowWidth.value > 768
    }

    // resizeでウィンドウサイズ変更を検知
    onMounted(() => {
      window.addEventListener('resize', calculateWindowWidth)
    })

    return{
      pcView,
    }
  }
}
</script>

<style scoped>
.pc-main {
  height: 800px;
}
</style>