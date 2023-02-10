<template>
  <div class="my-4">
    <label
      class="block text-gray-700 text-sm font-bold mx-2 mb-2"
      for="file_input"
    >
      思い出の写真を選択
      <span class="secondary_btn text-sm py-1 px-2 rounded-full">必須</span>
    </label>
    <div v-if="url" class="md:w-1/2">
      <img :src="url" class="rounded" />
    </div>

    <input
      ref="preview"
      name="file_input"
      type="file"
      class="block w-full text-sm text-gray-500 file:py-2 file:px-6 file:rounded file:border-1 file:border-gray-400 mb-4"
      @change="uploadFile"
    />
  </div>
</template>

<script>
  export default {
    props: {
      url: {
        type: String
      }
    },
    data() {
      return {
        uploadUrl: ''
      }
    },
    methods: {
      uploadFile() {
        const file = this.$refs.preview.files[0]
        this.uploadUrl = URL.createObjectURL(file)
        this.$emit('upload-file', this.uploadUrl)
      }
    }
  }
</script>

<style></style>
