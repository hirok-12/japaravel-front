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
          @click="shoqMap()"
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

    <div class="my-6">
      <button
        class="block border border-gray-300 p-3 rounded-md hover:bg-slate-50 transition duration-300 ml-auto"
        @click="signInWithTwitter"
      >
        <div class="flex items-center space-x-4 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"
            />
          </svg>
          <span
            class="block w-max font-semibold tracking-wide text-gray-700 text-sm sm:text-base"
          >Twitterシェア</span>
        </div>
      </button>
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
    shoqMap() {
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
