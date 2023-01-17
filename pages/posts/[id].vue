<template>
  <div class="mx-auto w-10/12">
    <div>
      <div>
        <img
          src="@/assets/images/japaravel.png"
          class="w-full rounded-lg object-cover lg:h-2/5"
        >
      </div>
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
      <!-- .ml-auto は左側に最大限のマージンをつけます。 -->
      <div class="ml-auto">
        <!-- モバイルサイズ以上のボタン -->
        <TwitterShareButton
          text="nuxtアプリ"
          hash-tag="#nuxt"
          class="hidden md:block"
        />
        <!-- スマホサイズのボタン -->
        <div class="md:hidden">
          <button
            class="rounded-full border-2 leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              class="w-3 h-full mx-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <p class="text-sm md:text-xl">
      {{ post.detail }}
    </p>

    <div class="my-4 flex items-center">
      <p
        class="text-gray-700 text-xl md:text-2xl mx-2 mb-2"
      >
        <spanc class="line1" />
        場所： 大阪
      </p>
      <div class="ml-auto">
        <!-- モバイルサイズ以上のボタン -->
        <div class="my-6">
          <button
            class="border border-gray-300 p-3 rounded-md hover:bg-slate-50 transition duration-300 hidden md:block"
            @click="showMap()"
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
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span
                class="block w-max font-semibold tracking-wide text-gray-700 text-sm sm:text-base"
              >地図表示</span>
            </div>
          </button>
          <!-- スマホサイズのボタン -->
          <div class="md:hidden">
            <button
              class="rounded-full border-2 leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
              @click="showMap()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 h-full mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </button>
          </div>
        </div>
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
  z-index: -10;
}

.overlay_prefecture {
  position: absolute;
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
