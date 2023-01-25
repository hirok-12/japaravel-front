<template>
  <div class="mx-auto w-10/12">
    <div class="container max-w-md mx-auto flex-1 items-center justify-center px-2">
      <div class="bg-white px-6 py-8 text-black w-full">
        <h1 class="text-3xl text-center">
          {{ prefecture }}
        </h1>
      </div>
    </div>

    <!-- 写真 -->
    <PictureForm
      :url="url"
      @upload-file="uploadFile($event)"
    />

    <!-- タイトル -->
    <TitleForm
      :title="title"
      @upload-title="uploadTitle($event)"
    />

    <!-- ジャンル -->
    <div class="my-4">
      <label
        class="block text-gray-700 text-sm font-bold mx-2 mb-2"
        for="file_input"
      >
        旅行の種類選択（複数選択可能）
        <span class="secondary_btn text-sm py-1 px-2 rounded-full">必須</span>
      </label>
      <Genre :check-values="genres" />
    </div>

    <!-- 訪問時期 -->
    <VisitTimeForm
      :time-of-visiting="timeOfVisiting"
      @upload-time-of-visiting="uploadVisitTime($event)"
    />

    <!-- 費用 -->
    <PriceForm
      :price="price"
      @upload-price="uploadPrice($event)"
    />


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
      <button
        type="submit"
        class="pryimary_btn w-full md:w-1/3"
      >
        更新
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "サンプル１１１",
      url: "https://camo.qiitausercontent.com/58ca700865bb91a65bbf4c4868aafaac0ec61989/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3238363039342f64643033333963312d663338642d396637322d623461652d3466323661633731303231352e706e67",
      timeOfVisiting: "2022-01-01",
      price: "2",
      description: "ああああああああああああああああああああああああ",
      searchText: "東京ディズニーランド",
      hashTags: ["神景色","琵琶湖"],
      prefecture: "岐阜",
      genres: ["other"]
    };
  },

  methods: {
    uploadFile(eventArgs) {
      this.url = eventArgs;
    },
    uploadTitle(eventArgs) {
      this.title = eventArgs;
    },
    uploadVisitTime(eventArgs) {
      this.timeOfVisiting = eventArgs;
    },
    uploadPrice(eventArgs) {
      this.price = eventArgs;
    },
    uploadDescription(eventArgs) {
      this.description = eventArgs;
    },
    uploadGoogleMapForm(eventArgs) {
      // TODO
    },
    uploadHashTagForm(eventArgs) {
      this.hashTags = eventArgs;
    },
  }
};
</script>

<style></style>
