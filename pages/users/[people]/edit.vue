<template>
  <div class="mx-auto w-10/12">
    <div class="my-4">
      <label
        class="block text-gray-700 text-sm font-bold mx-2 mb-2"
        for="username"
      >
        名前
        <span class="secondary_btn text-sm py-1 px-2 rounded-full">必須</span>
      </label>

      <input
        id="username"
        type="text"
        class="block border border-grey-light w-full p-3 rounded mb-4"
        name="email"
        placeholder="田中太郎"
      >

      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="birthday"
      >
        生年月日
      </label>

      <input
        id="birthday"
        type="date"
        class="block border border-grey-light w-full p-3 rounded mb-4"
      >

      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="file_input"
      >
        プロフィール写真
      </label>
      <input
        type="file"
        class="block w-full text-sm text-gray-500 file:py-2 file:px-6 file:rounded file:border-1 file:border-gray-400  mb-4"
      >

      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="birthday"
      >
        自己紹介
      </label>
      <textarea
        id="message"
        rows="10"
        class="block border border-grey-light w-full p-3 rounded mb-4"
        placeholder="旅が好きでよく一人旅行に行きます。

温泉が好きで草津温泉によく行きます。

どうぞよろしくお願いします！"
      />
    </div>

    <div class="flex justify-center">
      <button
        type="submit"
        :class="validInput ? 'bg-indigo-500 hover:bg-indigo-700' : 'bg-gray-500'"
        class="border border-grey-light p-3 rounded mb-4 text-white"
        :disabled="!validInput"
        @click="login"
      >
        更新する
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>