<template>
  <div class="my-4">
    <label
      class="block text-gray-700 text-sm font-bold mb-2"
      for="birthday"
    >
      詳細説明
      <span class="secondary_btn text-sm py-1 px-2 rounded-full">必須</span>
    </label>
    <textarea
      id="message"
      v-model="localDescription"
      rows="10"
      class="block border border-grey-light w-full p-3 rounded mb-4"
      @change="uploadDescription"
    />
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
    }
  },
  data() {
    return {
      localDescription: this.description
    };
  },
  methods: {
    uploadDescription() {
      this.$emit('upload-description', this.localDescription);
    }
  }
};
</script>

<style></style>
