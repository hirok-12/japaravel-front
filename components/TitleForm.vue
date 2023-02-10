<template>
  <div class="my-4">
    <label
      class="block text-gray-700 text-sm font-bold mx-2 mb-2"
      for="username"
    >
      タイトル
      <span class="secondary_btn text-sm py-1 px-2 rounded-full">必須</span>
    </label>

    <input
      v-model="title"
      type="text"
      class="block border border-grey-light w-full p-3 rounded mb-4"
      name="email"
      placeholder="田中太郎"
      @change="uploadTitle"
    />
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      }
    },
    data() {
      return {}
    },
    methods: {
      uploadTitle() {
        this.$emit('upload-title', this.title)
      }
    }
  }
</script>

<style></style>
