<template>
  <div>
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
  </div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";

export default {
  props: {
    searchText: {
      type: String,
    }
  },
  data() {
    return {
      map: null,
      google: null,
      marker: null,
      isMap: false
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
        this.uploadGoogleForm()
      })
      .catch((e) => {
        console.error(e);
      });
    },
    uploadGoogleForm() {
      this.$emit('upload-google-form', "sample");
    }
  }
};
</script>

<style></style>
