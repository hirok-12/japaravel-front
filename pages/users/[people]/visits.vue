<template>
  <div>
    <OpenModal
      v-show="showContent"
      @from-child="closeModal"
      @link-new-post="linkPost(e)"
    >
      {{ prefecture }}はまだ観光記録が保存されていません。
    </OpenModal>
    <div class="container max-w-md mx-auto flex-1 items-center justify-center px-2">
      <div class="bg-white px-6 py-8 text-black w-full">
        <h1 class="mb-8 text-3xl text-center">
          観光記録🗼
        </h1>
        <p class="mb-8 text-xl text-center">
          観光クリア：１/47都道府県
        </p>
        <p class="mb-8 text-xl text-center">
          日本全国制覇率: 10%
        </p>
      </div>
    </div>
    <div class="ml:w-4/5 mx-auto">
      <div class="bg-white px-6 text-black w-full">
        <p class="mb-8 text-xl ml-3">
          北海道・東北
        </p>
        <button
          v-for="item in data.Hokkaidou_touhoku"
          :key="item.id"
          :class="[item.isVisit == true ? 'pryimary_btn font-bold py-2 px-4 rounded-full ml-3 mb-3' : 'secondary_btn font-bold py-2 px-4 rounded-full ml-3 mb-3']"
          @click="openModal(item)"
        >
          {{ item.jpName }}
        </button>
      </div>

      <div class="bg-white px-6 text-black w-full">
        <p class="mb-8 text-xl ml-3 mt-3">
          関東
        </p>
        <button
          v-for="item in data.Kantou"
          :key="item.id"
          :class="[item.isVisit == true ? 'pryimary_btn font-bold py-2 px-4 rounded-full ml-3 mb-3' : 'secondary_btn font-bold py-2 px-4 rounded-full ml-3 mb-3']"
          @click="openModal(item)"
        >
          {{ item.jpName }}
        </button>
      </div>

      <div class="bg-white px-6 text-black w-full">
        <p class="mb-8 text-xl ml-3 mt-3">
          中部
        </p>
        <button
          v-for="item in data.Chubu"
          :key="item.id"
          :class="[item.isVisit == true ? 'pryimary_btn font-bold py-2 px-4 rounded-full ml-3 mb-3' : 'secondary_btn font-bold py-2 px-4 rounded-full ml-3 mb-3']"
          @click="openModal(item)"
        >
          {{ item.jpName }}
        </button>
      </div>

      <div class="bg-white px-6 text-black w-full">
        <p class="mb-8 text-xl ml-3 mt-3">
          近畿
        </p>
        <button
          v-for="item in data.Kantou"
          :key="item.id"
          :class="[item.isVisit == true ? 'pryimary_btn font-bold py-2 px-4 rounded-full ml-3 mb-3' : 'secondary_btn font-bold py-2 px-4 rounded-full ml-3 mb-3']"
          @click="openModal(item)"
        >
          {{ item.jpName }}
        </button>
      </div>

      <div class="bg-white px-6 text-black w-full">
        <p class="mb-8 text-xl ml-3 mt-3">
          中国・四国
        </p>
        <button
          v-for="item in data.Tyugoku_shikoku"
          :key="item.id"
          :class="[item.isVisit == true ? 'pryimary_btn font-bold py-2 px-4 rounded-full ml-3 mb-3' : 'secondary_btn font-bold py-2 px-4 rounded-full ml-3 mb-3']"
          @click="openModal(item)"
        >
          {{ item.jpName }}
        </button>
      </div>

      <div class="bg-white px-6 text-black w-full">
        <p class="mb-8 text-xl ml-3 mt-3">
          九州・沖縄
        </p>
        <button
          v-for="item in data.Kyushu_okinawa"
          :key="item.id"
          :class="[item.isVisit == true ? 'pryimary_btn font-bold py-2 px-4 rounded-full ml-3 mb-3' : 'secondary_btn font-bold py-2 px-4 rounded-full ml-3 mb-3']"
          @click="openModal(item)"
        >
          {{ item.jpName }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import data from "/json/visits.json";

const showContent = ref(false);
const prefecture = ref('');
const router = useRouter()
const route = useRoute()

const openModal = (item) => {
  prefecture.value = item.jpName
  if(item.isVisit == false) {
    showContent.value = true;
  }
};

const closeModal = () => {
  showContent.value = false;
};

const linkPost = () => {
  // router.push('/users/' + 4 + '/posts/new')
  return navigateTo({
    path: '/users/' + 4 + '/posts/new',
    query: {
      prefecture: `${prefecture.value}`
    }
  });
}
</script>

<style scoped>
.visited {
  background-color: blue;
}

.not_visited {
    background-color: red;
}
</style>
