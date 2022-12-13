<template>
  <div class="mx-auto lg:flex lg:flex-row w-10/12">
    <div class="lg:flex-none flex justify-center">
      <div class="lg:flex-none ">
        <img
          src="https://i.imgur.com/z4YSzDD.jpg"
          class="rounded-full hover:ring-4"
          width="150"
        >
      </div>
    </div>
    <div class="lg:grow lg:mt-0 lg:mx-10 mt-10">
      <div class="text-lg">
        名前:ひろき
      </div>
      <div>誕生日:1990-12-05</div>
      <div class="my-10">
        私は旅が好きです私は旅が好きです私は旅が好きです。私は旅が好きです私は旅が好きです私は旅が好きです。
      </div>
    </div>
    <div class="lg:flex-none flex justify-center">
      <div>
        <button
          type="button"
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          @click="toEdit"
        >
          プロフィールを編集する
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "/json/user.json"

const toEdit = () => {
  return navigateTo('/users/' + 4  + '/edit')
}
</script>

<style>

</style>