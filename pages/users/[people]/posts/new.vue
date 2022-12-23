<template>
  <div class="mx-auto w-10/12">
    <div class="container max-w-md mx-auto flex-1 items-center justify-center px-2">
      <div class="bg-white px-6 py-8 text-black w-full">
        <!-- <h1 class="text-3xl text-center">
          {{ $route.query.prefecture }}
        </h1> -->
      </div>
    </div>
    <div class="my-4">
      <label
        class="block text-gray-700 text-sm font-bold mx-2 mb-2"
        for="username"
      >
        タイトル
        <span class="bg-blue-500 text-sm text-white py-1 px-2 rounded-full">必須</span>
      </label>

      <input
        id="username"
        type="text"
        class="block border border-grey-light w-full p-3 rounded mb-4"
        name="email"
        placeholder="田中太郎"
      >
    </div>
    <div class="my-4">
      <label
        class="block text-gray-700 text-sm font-bold mx-2 mb-2"
        for="file_input"
      >
        思い出の写真を選択
        <span class="bg-blue-500 text-sm text-white py-1 px-2 rounded-full">必須</span>
      </label>

      <input
        ref="preview"
        name="file_input"
        type="file"
        class="block w-full text-sm text-gray-500 file:py-2 file:px-6 file:rounded file:border-1 file:border-gray-400  mb-4"
        @change="uploadFile"
      >
    </div>

    <div
      v-if="url"
      class="md:w-1/2"
    >
      <img
        :src="url"
        class="rounded"
      >
    </div>

    <div class="my-4">
      <label
        class="block text-gray-700 text-sm font-bold mx-2 mb-2"
        for="file_input"
      >
        旅行の種類選択（複数選択可能）
        <span class="bg-blue-500 text-sm text-white py-1 px-2 rounded-full">必須</span>
      </label>
      <Genre />
    </div>

    <div class="my-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="birthday"
      >
        訪問時期を入力
      </label>

      <input
        id="birthday"
        type="date"
        class="block border border-grey-light w-full p-3 rounded mb-4"
      >
    </div>

    <div class="my-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="price"
      >
        費用
      </label>

      <select
        class="block border border-grey-light w-full p-3 rounded mb-4"
        aria-label="Default select example"
      >
        <option selected>
          ¥0 ~ ¥1,000
        </option>
        <option value="1">
          ¥1,000 ~ ¥5,000
        </option>
        <option value="2">
          ¥5,000 ~ ¥10,000
        </option>
        <option value="3">
          ¥10,000 ~ ¥30,000
        </option>
        <option value="4">
          ¥30,000 ~ ¥50,000
        </option>
        <option value="5">
          ¥50,000 ~ ¥100,000
        </option>
        <option value="6">
          ¥100,000 ~
        </option>
      </select>
    </div>

    <div class="my-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="birthday"
      >
        詳細説明
      </label>
      <textarea
        id="message"
        rows="10"
        class="block border border-grey-light w-full p-3 rounded mb-4"
      />
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      url:"",
    }
  },
  methods:{
    uploadFile(){
      const file = this.$refs.preview.files[0];
      this.url = URL.createObjectURL(file)
    }
  }
}
</script>

<style>

</style>
