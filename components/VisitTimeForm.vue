<template>
  <div class="my-4">
    <label
      class="block text-gray-700 text-sm font-bold mb-2"
      for="birthday"
    >
      訪問時期を入力
      <span class="secondary_btn text-sm py-1 px-2 rounded-full">必須</span>
    </label>

    <input
      id="birthday"
      v-model="timeOfVisiting"
      type="date"
      class="block border border-grey-light w-full p-3 rounded mb-4"
      @change="uploadTimeOfVisiting"
    >
  </div>
</template>

<script>
export default {
  props: {
    timeOfVisiting: {
      type: String,
    }
  },
  data() {
    return {
    };
  },
  methods: {
    uploadTimeOfVisiting() {
      this.$emit('upload-time-of-visiting', this.timeOfVisiting);
    }
  }
};
</script>

<style></style>
