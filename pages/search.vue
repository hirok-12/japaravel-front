<template>
  <div>
    <div
      class="container max-w-md mx-auto flex-1 items-center justify-center px-2"
    >
      <div class="bg-white px-6 py-8 text-black w-full">
        <h1 class="text-3xl text-center">都道府県</h1>
      </div>
    </div>

    <select
      class="block border border-grey-light w-full p-3 rounded mb-4"
      aria-label="Default select example"
    >
      <option selected>都道府県選択</option>
      <option value="1">北海道</option>
      <option value="2">青森</option>
      <option value="3">秋田</option>
    </select>
    <div
      class="container max-w-md mx-auto flex-1 items-center justify-center px-2"
    >
      <div class="bg-white px-6 py-8 text-black w-full">
        <h1 class="text-3xl text-center">ジャンル</h1>
      </div>
    </div>
    <MainGenre />
    <div class="flex justify-center mt-10 w-full">
      <button
        type="submit"
        class="pryimary_btn w-full md:w-1/3"
        @click="search()"
      >
        検索する
      </button>
    </div>
  </div>
</template>

<script setup>
  const genres = [
    {
      id: 1,
      name: 'グルメ'
    },
    {
      id: 2,
      name: '自然'
    },
    {
      id: 3,
      name: '絶景'
    },
    {
      id: 4,
      name: '温泉'
    },
    {
      id: 5,
      name: '買い物'
    },
    {
      id: 6,
      name: '日本文化'
    },
    {
      id: 7,
      name: '祭り'
    },
    {
      id: 8,
      name: 'レジャー施設'
    },
    {
      id: 9,
      name: 'スポーツ観戦'
    },
    {
      id: 10,
      name: 'テーマパーク'
    },
    {
      id: 11,
      name: 'エンタメ'
    },
    {
      id: 12,
      name: '歴史'
    },
    {
      id: 13,
      name: '聖地巡礼'
    },
    {
      id: 14,
      name: 'その他'
    }
  ]

  const search = () => {
    return navigateTo('search_results')
  }
</script>

<style></style>
