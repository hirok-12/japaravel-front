<template>
  <div>
    <div class="container max-w-md mx-auto flex-1 items-center justify-center px-2">
      <div class="bg-white px-6 py-8 text-black w-full">
        <h1 class="text-3xl text-center">
          検索結果 🔎
        </h1>
      </div>
    </div>
    <div class="md:flex md:flex-wrap">
      <div
        v-for="spot in data.spots"
        :key="spot.id"
        class="max-w-sm rounded overflow-hidden shadow-lg md:mr-3 mb-3 hover:cursor-pointer hover:bg-slate-50"
      >
        <img
          class="w-full"
          src="@/assets/images/japanese_food.jpeg"
        >
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            {{ spot.title }}
          </div>
          <p class="text-gray-700 text-base">
            {{ omittedText(spot.summary) }}
          </p>
          <p class="text-gray-700 text-base">
            ￥{{ spot.price }}
          </p>
        </div>
        <div class="px-6 pt-2 pb-2">
          <span
            v-for="type in spot.types"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#{{ type.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "/json/spots.json";

const omittedText = (text) => {
  return text.length > 50 ? text.slice(0, 50) + "…" : text;
}

</script>

<style scoped>
</style>
