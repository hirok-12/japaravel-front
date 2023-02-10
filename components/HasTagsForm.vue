<template>
  <div>
    <div class="my-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="hashtag">
        ハッシュタグ
      </label>
    </div>
    <div class="flex">
      <input
        id="hashtag"
        v-model="hashTag"
        class="block border border-grey-light p-3 rounded mb-4 w-full"
        placeholder="例）#景色最高"
      />
      <button
        class="pryimary_btn rounded-full ml-auto"
        @click="addHashTag(name)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
    <div class="bg-white px-6 text-black w-full">
      <div class="flex flex-wrap">
        <div
          v-for="(hashTag, index) in hashTags"
          class="secondary_btn rounded-full mr-2 flex"
          @click="deleteHashTag(index)"
        >
          {{ hashTag }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      hashTags: {
        type: Array,
        default: [],
        required: true
      }
    },
    data() {
      return {
        hashTag: ''
      }
    },
    methods: {
      addHashTag() {
        const result = /#/.test(this.hashTag)
        // hashタグマークの自動生成
        if (!result) {
          const validHashTag = '#' + this.hashTag
          this.hashTags.push(validHashTag)
        } else {
          this.hashTags.push(this.hashTag)
        }
        this.uploadHashTagForm()
      },
      deleteHashTag(index) {
        this.hashTags.splice(index, 1)
      },
      uploadHashTagForm() {
        this.$emit('upload-hash-tag-form', this.hashTags)
      }
    }
  }
</script>

<style></style>
