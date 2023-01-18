<template>
  <div class="mx-auto w-10/12">
    <div class="container max-w-md mx-auto flex-1 items-center justify-center px-2">
      <div class="bg-white px-6 py-8 text-black w-full">
        <h1 class="text-3xl text-center">
          {{ $route.query.prefecture }}
        </h1>
      </div>
    </div>

    <!-- 写真 -->
    <div class="my-4">
      <label
        class="block text-gray-700 text-sm font-bold mx-2 mb-2"
        for="file_input"
      >
        思い出の写真を選択
        <span class="secondary_btn text-sm py-1 px-2 rounded-full">必須</span>
      </label>
      <div
        v-if="url"
        class="md:w-1/2"
      >
        <img
          :src="url"
          class="rounded"
        >
      </div>

      <input
        ref="preview"
        name="file_input"
        type="file"
        class="block w-full text-sm text-gray-500 file:py-2 file:px-6 file:rounded file:border-1 file:border-gray-400 mb-4"
        @change="uploadFile"
      >
    </div>

    <!-- タイトル -->
    <div class="my-4">
      <label
        class="block text-gray-700 text-sm font-bold mx-2 mb-2"
        for="username"
      >
        タイトル
        <span class="secondary_btn text-sm py-1 px-2 rounded-full">必須</span>
      </label>

      <input
        id="username"
        type="text"
        class="block border border-grey-light w-full p-3 rounded mb-4"
        name="email"
        placeholder="田中太郎"
      >
    </div>

    <!-- ジャンル -->
    <div class="my-4">
      <label
        class="block text-gray-700 text-sm font-bold mx-2 mb-2"
        for="file_input"
      >
        旅行の種類選択（複数選択可能）
        <span class="secondary_btn text-sm py-1 px-2 rounded-full">必須</span>
      </label>
      <Genre />
    </div>

    <!-- 訪問時期 -->
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
        type="date"
        class="block border border-grey-light w-full p-3 rounded mb-4"
      >
    </div>

    <!-- 費用 -->
    <div class="my-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="price"
      > 費用 </label>

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

    <!-- 詳細説明 -->
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
        rows="10"
        class="block border border-grey-light w-full p-3 rounded mb-4"
      />
    </div>

    <!-- GoogleMap -->
    <div class="my-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="place"
      >
        場所を記録しよう
        <span class="secondary_btn text-sm py-1 px-2 rounded-full">必須</span>
      </label>
      <div class="flex">
        <input
          id="place"
          v-model="searchText"
          class="block border border-grey-light p-3 rounded mb-4 w-full"
          placeholder="例）東京ディズニーランド"
        >
        <button
          class="pryimary_btn rounded-full ml-auto"
          @click="addressSearch"
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      v-show="isMap == true"
      id="map"
      style="width: 100%; height: 600px"
    />

    <!-- ハッシュタグ -->
    <div class="my-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="hashtag"
      >
        ハッシュタグ
      </label>
    </div>
    <div class="flex">
      <input
        id="hashtag"
        v-model="hashTag"
        class="block border border-grey-light p-3 rounded mb-4 w-full"
        placeholder="例）#景色最高"
      >
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
          v-for="hashTag, index in hashTags"
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

    <div class="flex justify-center mt-10 w-full">
      <button
        type="submit"
        class="pryimary_btn w-full md:w-1/3"
      >
        保存
      </button>
    </div>
  </div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";

export default {
  data() {
    return {
      url: "",
      map: null,
      google: null,
      marker: null,
      searchText: null,
      isMap: false,
      hashTag: "",
      hashTags: [],
    };
  },

  methods: {
    addressSearch() {
      const runtimeConfig = useRuntimeConfig()
      new Loader({
      apiKey: runtimeConfig.GOOGLE_MAP_API_KEY,
      // 動作が安定したバージョン。この段階のバージョンは、バグ修正で変更されることはある。
      version: "Release",
      // 追加のライブラリを読み込む場合はライブラリ（複数可）の名前を指定
      // 参照：https://developers.google.com/maps/documentation/javascript/libraries?hl=ja
      libraries: ["places", "drawing", "geometry", "visualization"],
      language: "ja",
    })
      .load()
      .then((google) => {
        this.google = google;
        // 地図の初期化
        this.map = new google.maps.Map(document.getElementById("map"), {
          // コントロールの概要設定
          zoom: 17, // 初期表示設定
          center: { lat: 35.692195, lng: 139.759854 }, // マルティスープ本社
          fullscreenControl: false, // 全画面モードで地図を開くコントロールを無効
          mapTypeControl: false, // 地図タイプ（地図や航空写真など）を切り替える地図タイプのコントロールを無効
          streetViewControl: true, // ユーザーがストリートビュー パノラマの有効
          streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM,
          },
          zoomControl: true, // ズーム コントロールの有効
          zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM,
          },
          scaleControl: true, // 簡単な地図の縮尺調整機能を表示するスケール コントロールを有効
        });
        const geocoder = new this.google.maps.Geocoder();
        const vm = this;
        if (geocoder) {
          // コールバックでは、results と status のコードをこの順序で保持する 2 つのパラメータを渡す必要がある
          geocoder.geocode({ address: this.searchText }, function (results, status) {
            if (vm.marker) {
              // Maps JavaScript APIの公式ドキュメントによるとMarker.setMap(null)で削除できるらしい.. がObjectの関連は消えるが地図上からは消えなかった。。
              // 事前にMarker.setVisible(false)することで解決(trueなら表示状態、falseなら非表示状態になる。)
              vm.marker.setVisible(false);
              vm.marker.setMap(null);
              vm.marker = null;
            }
            if (status === vm.google.maps.GeocoderStatus.OK) {
              // マーカーの設定
              vm.marker = new vm.google.maps.Marker({
                map: vm.map,
                position: results[0].geometry.location,
                draggable: false,
              });

              // 地図の位置座標をセットすると同時に、表示もその位置に変更する
              vm.map.setCenter(results[0].geometry.location);
            }
          });
        }
        this.isMap = true
      })
      .catch((e) => {
        console.error(e);
      });
    },

    uploadFile() {
      const file = this.$refs.preview.files[0];
      this.url = URL.createObjectURL(file);
    },
    addHashTag() {
      const result =  /#/.test(this.hashTag);
      console.log(result)
      if (!result) {
        const validHashTag = '#' + this.hashTag
        this.hashTags.push(validHashTag);
      } else {
        this.hashTags.push(this.hashTag);
      }
    },
    deleteHashTag(index){
      this.hashTags.splice(index, 1);
    }
  },
};
</script>

<style></style>
