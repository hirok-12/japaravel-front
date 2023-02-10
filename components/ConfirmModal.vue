<template>
  <div id="overlay" @click="clickEvent">
    <div id="content" class="rounded-xl w-3/4 md:w-2/4" @click="stopEvent">
      <div class="text-center p-3 flex-auto justify-center leading-6">
        <h2 class="text-xl py-4">
          <slot />
        </h2>
      </div>
      <div class="p-3 mt-2 text-center space-x-4 md:block">
        <button class="pryimary_btn" @click="clickTrue">はい</button>
        <button class="secondary_btn" @click="clickFalse">いいえ</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    setup(_, context) {
      const clickFalse = () => {
        context.emit('from-child')
      }

      const clickTrue = () => {
        context.emit('confrime-true')
      }

      const stopEvent = (event) => {
        event.stopPropagation()
      }
      return {
        stopEvent,
        clickTrue,
        clickFalse
      }
    }
  }
</script>

<style scoped>
  #overlay {
    /*要素を重ねた時の順番*/
    z-index: 10;

    /*画面全体を覆う設定*/
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    /*画面の中央に要素を表示させる設定*/
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #content {
    z-index: 2;
    padding: 1em;
    background: #fff;
  }
</style>
