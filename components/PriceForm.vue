<template>
  <div class="my-4">
    <label
      class="block text-gray-700 text-sm font-bold mb-2"
      for="price"
    > 費用 </label>

    <select
      v-model="price"
      class="block border border-grey-light w-full p-3 rounded mb-4"
      aria-label="Default select example"
      @change="uploadPrice"
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
</template>

<script>
export default {
  props: {
    price: {
      type: String,
    }
  },
  data() {
    return {
    };
  },
  methods: {
    uploadPrice() {
      this.$emit('upload-price', this.price);
    }
  }
};
</script>

<style></style>
