<template>
  <div>
    <div class="">
      <img
        src="@/assets/images/japaravel.png"
        :class="pcView ? 'pc-main' : ''"
        class="w-full rounded-lg object-cover lg:h-2/5"
      >
    </div>
    <section class="text-gray-600 body-font">
      <div>
        <div class="mt-3">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font text-gray-900"
          >
            探す🔍
          </h1>
          <div>
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 h-max gap-2">
        <div class="mb-4">
          <figure class="relative">
            <a href="#">
              <img
                src="@/assets/images/japanese_food.jpeg"
                class="rounded-lg h-32 md:h-80 lg:h-96"
              >
            </a>
            <figcaption class="absolute bottom-6 px-2 text-lg text-white">
              <p>食べる</p>
            </figcaption>
          </figure>
        </div>
        <div class="mb-4">
          <figure class="relative">
            <a href="#">
              <img
                src="@/assets/images/culture.jpeg"
                class="rounded-lg h-32 md:h-80 lg:h-96"
              >
            </a>
            <figcaption class="absolute bottom-6 px-2 text-lg text-white">
              <p>自然</p>
            </figcaption>
          </figure>
        </div>
        <div class="mb-4">
          <figure class="relative">
            <a href="#">
              <img
                src="@/assets/images/nature.jpeg"
                class="rounded-lg h-32 md:h-80 lg:h-96"
              >
            </a>
            <figcaption class="absolute bottom-6 px-2 text-lg text-white">
              <p>日本文化</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  setup() {
    const pcView = ref(true)
    const windowWidth = ref(0)

    const calculateWindowWidth = () => {
      windowWidth.value = window.innerWidth
      return (pcView.value = windowWidth.value > 768)
    }

    // resizeでウィンドウサイズ変更を検知
    onMounted(() => {
      window.addEventListener('resize', calculateWindowWidth)
    })

    return {
      pcView,
    }
  },
}
</script>

<style scoped>
.pc-main {
  height: 800px;
}
</style>
