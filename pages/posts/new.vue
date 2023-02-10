<template>
  <div class="mx-auto w-10/12">
    <div
      class="container max-w-md mx-auto flex-1 items-center justify-center px-2"
    >
      <div class="bg-white px-6 py-8 text-black w-full">
        <h1 class="text-3xl text-center">
          {{ prefecture }}
        </h1>
      </div>
    </div>

    <!-- 写真 -->
    <PictureForm :url="url" @upload-file="uploadFile($event)" />

    <!-- タイトル -->
    <TitleForm :title="title" @upload-title="uploadTitle($event)" />

    <!-- ジャンル -->
    <div class="my-4">
      <label
        class="block text-gray-700 text-sm font-bold mx-2 mb-2"
        for="file_input"
      >
        旅行の種類選択（複数選択可能）
        <span class="secondary_btn text-sm py-1 px-2 rounded-full">必須</span>
      </label>
      <MainGenre :check-values="genres" />
    </div>

    <!-- 訪問時期 -->
    <VisitTimeForm
      :time-of-visiting="timeOfVisiting"
      @upload-time-of-visiting="uploadVisitTime($event)"
    />

    <!-- 費用 -->
    <PriceForm :price="price" @upload-price="uploadPrice($event)" />

    <!-- 詳細説明 -->
    <DescriptionForm
      :description="description"
      @upload-description="uploadDescription($event)"
    />

    <!-- GoogleMap -->
    <GoogleMapForm
      :search-text="searchText"
      @upload-google-form="uploadGoogleMapForm($event)"
    />

    <!-- ハッシュタグ -->
    <HasTagsForm
      :hash-tags="hashTags"
      @upload-hash-tag-form="uploadHashTagForm($event)"
    />

    <div class="flex justify-center mt-10 w-full">
      <button type="submit" class="pryimary_btn w-full md:w-1/3">更新</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        url: '',
        timeOfVisiting: '',
        price: '',
        description: '',
        searchText: '',
        hashTags: [],
        prefecture: '',
        genres: []
      }
    },

    methods: {
      uploadFile(eventArgs) {
        this.url = eventArgs
      },
      uploadTitle(eventArgs) {
        this.title = eventArgs
      },
      uploadVisitTime(eventArgs) {
        this.timeOfVisiting = eventArgs
      },
      uploadPrice(eventArgs) {
        this.price = eventArgs
      },
      uploadDescription(eventArgs) {
        this.description = eventArgs
      },
      uploadGoogleMapForm(eventArgs) {
        // TODO
      },
      uploadHashTagForm(eventArgs) {
        this.hashTags = eventArgs
      }
    }
  }
</script>

<style></style>
