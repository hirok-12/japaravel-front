<template>
  <div class="mx-auto w-10/12">
    <div class="pic_container">
      <img
        src="@/assets/images/japaravel.png"
        class="w-full rounded-lg object-cover lg:h-2/5"
      >
      <p class="overlay_prefecture">
        {{ post.japanese_prefecture }}
      </p>
    </div>

    <div class="my-4 flex items-center">
      <div>
        <p
          class="text-gray-700 text-xl md:text-3xl mx-2 mb-2"
        >
          <spanc class="line1" />
          <span class="font-bold">{{ post.title }}</span> <span class="ml-2">{{ post.time_of_visiting }}</span>
        </p>
      </div>
      <div class="ml-auto">
        <button
          class="pryimary_btn p-2 rounded-full text-sm md:text-xl"
          @click="showMap()"
        >
          地図表示
        </button>
      </div>
    </div>

    <p
      v-show="isMap == true"
      class="text-gray-700 text-xl mx-2 mb-2"
    >
      {{ post.address }}
    </p>

    <div
      v-show="isMap == true"
      id="map"
      class="mb-4"
      style="width: 100%; height: 600px; z-index: -1;"
    />

    <p class="text-sm md:text-xl">
      {{ post.detail }}
    </p>

    <div class="my-4">
      <p
        class="text-gray-700 text-xl md:text-2xl mx-2 mb-2"
      >
        <spanc class="line1" />
        予算費用 ¥<span class="font-bold">{{ post.price }}円</span>
      </p>
    </div>

    <div class="bg-white px-6 text-black w-full mt-3">
      <div class="flex flex-wrap">
        <div
          v-for="hashTag in post.hash_tags"
          class="secondary_btn rounded-full mr-2"
        >
          {{ hashTag }}
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <div class="my-6 mr-2">
        <NuxtLink
          class="block border border-gray-300 p-3 rounded-md hover:bg-slate-50 transition duration-300"
          to="/posts/4/edit"
        >
          <div class="flex items-center space-x-4 justify-center">
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            <span
              class="block w-max font-semibold tracking-wide text-gray-700 text-sm sm:text-base"
            >編集</span>
          </div>
        </NuxtLink>
      </div>
      <TwitterShareButton
        text="nuxtアプリ"
        hash-tag="#nuxt"
      />
    </div>
  </div>
</template>

<script>
import post from "/json/post.json";
import { Loader } from "@googlemaps/js-api-loader";

export default {
  data() {
    return {
      post: {},
      google: null,
      marker: null,
      isMap: false,
    };
  },

  async mounted() {
    this.post = post
  },

  methods: {
    showMap() {
      const runtimeConfig = useRuntimeConfig()
      new Loader({
      apiKey: runtimeConfig.GOOGLE_MAP_API_KEY,
      // 動作が安定したバージョン。この段階のバージョンは、バグ修正で変更されることはある。
      version: "Release",
      // 追加のライブラリを読み込む場合はライブラリ（複数可）の名前を指定
      // 参照：https://developers.google.com/maps/documentation/javascript/libraries?hl=ja
      libraries: ["places", "geometry"],
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

        this.marker = new this.google.maps.Marker({
                        map: vm.map,
                        position: { lat: 35.692195, lng: 139.759854 },
                        draggable: false,
                      });
        this.map.setCenter({ lat: 35.692195, lng: 139.759854 });
        this.isMap = true
      })
      .catch((e) => {
        console.error(e);
      });
    },
  }
};
</script>

<style scoped>
.line1 {
  border-left:5px solid #000000; /*線の設定*/
  padding:2px 8px; /*余白の設定*/
}

.pic_container {
  position: relative;
  z-index: -1;
}

.overlay_prefecture {
  border-radius: 30px;
  border: solid;
  position: absolute;
  padding: 10px;
  margin:0;
  background-color: #fff;
  right: 5px;
  bottom: 15px;
}

.map {
  width: 100vw;
  height: 100vh;
}
</style>
