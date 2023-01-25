<template>
  <ul class="grid gap-6 w-full md:grid-cols-3">
    <li>
      <input
        id="meal"
        v-model="checkValues"
        type="checkbox"
        value="meal"
        class="hidden peer"
        required=""
      >
      <label
        for="meal"
        class="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div class="block">
          <IconGrill />
          <div class="w-full text-lg font-semibold">グルメ</div>
          <div class="w-full text-sm">美味しいレストラン情報等</div>
        </div>
      </label>
    </li>
    <li>
      <input
        id="nature"
        v-model="checkValues"
        type="checkbox"
        value="nature"
        class="hidden peer"
        required=""
      >
      <label
        for="nature"
        class="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div class="block">
          <IconLeaf />
          <div class="w-full text-lg font-semibold">自然</div>
          <div class="w-full text-sm">登山やラフティングなどのアクティビティ情報</div>
        </div>
      </label>
    </li>
    <li>
      <input
        id="view"
        v-model="checkValues"
        type="checkbox"
        value="view"
        class="hidden peer"
        required=""
      >
      <label
        for="view"
        class="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div class="block">
          <IconMountain />
          <div class="w-full text-lg font-semibold">絶景</div>
          <div class="w-full text-sm">夜景や絶景情報</div>
        </div>
      </label>
    </li>
    <li>
      <input
        id="hot-spa"
        v-model="checkValues"
        type="checkbox"
        value="hot-spa"
        class="hidden peer"
        required=""
      >
      <label
        for="hot-spa"
        class="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div class="block">
          <IconBath />
          <div class="w-full text-lg font-semibold">温泉</div>
          <div class="w-full text-sm">日本各地の温泉情報</div>
        </div>
      </label>
    </li>
    <li>
      <input
        id="japanese-culture"
        v-model="checkValues"
        type="checkbox"
        value="japanese-culture"
        class="hidden peer"
        required=""
      >
      <label
        for="japanese-culture"
        class="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div class="block">
          <IconConfucius />
          <div class="w-full text-lg font-semibold">日本文化</div>
          <div class="w-full text-sm">日本にしかない日本文化情報</div>
        </div>
      </label>
    </li>
    <li>
      <input
        id="festival"
        v-model="checkValues"
        type="checkbox"
        value="festival"
        class="hidden peer"
        required=""
      >
      <label
        for="festival"
        class="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div class="block">
          <IconMoodHappy />
          <div class="w-full text-lg font-semibold">祭り</div>
          <div class="w-full text-sm">祇園祭などの祭り情報</div>
        </div>
      </label>
    </li>
    <li>
      <input
        id="leisure"
        v-model="checkValues"
        type="checkbox"
        value="leisure"
        class="hidden peer"
        required=""
      >
      <label
        for="leisure"
        class="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div class="block">
          <IconPool />
          <div class="w-full text-lg font-semibold">レジャー施設</div>
          <div class="w-full text-sm">プールなどのレジャー施設情報</div>
        </div>
      </label>
    </li>
    <li>
      <input
        id="sports"
        v-model="checkValues"
        type="checkbox"
        value="sports"
        class="hidden peer"
        required=""
      >
      <label
        for="sports"
        class="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div class="block">
          <IconShirtSport />
          <div class="w-full text-lg font-semibold">スポーツ観戦</div>
          <div class="w-full text-sm">サッカーや野球などのスポーツ情報</div>
        </div>
      </label>
    </li>
    <li>
      <input
        id="amusement-park"
        v-model="checkValues"
        type="checkbox"
        value="amusement-park"
        class="hidden peer"
        required=""
      >
      <label
        for="amusement-park"
        class="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div class="block">
          <IconBuildingCarousel />
          <div class="w-full text-lg font-semibold">テーマパーク</div>
          <div class="w-full text-sm">USJやディズニーなどのテーマパーク情報</div>
        </div>
      </label>
    </li>
    <li>
      <input
        id="entertainment"
        v-model="checkValues"
        type="checkbox"
        value="entertainment"
        class="hidden peer"
        required=""
      >
      <label
        for="entertainment"
        class="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div class="block">
          <IconMoodTongueWink2 />
          <div class="w-full text-lg font-semibold">エンタメ</div>
          <div class="w-full text-sm">お笑いや演劇などのエンタメ情報</div>
        </div>
      </label>
    </li>
    <li>
      <input
        id="history"
        v-model="checkValues"
        type="checkbox"
        value="history"
        class="hidden peer"
        required=""
      >
      <label
        for="history"
        class="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div class="block">
          <IconBuildingChurch />
          <div class="w-full text-lg font-semibold">歴史</div>
          <div class="w-full text-sm">お寺や神社などの歴史関連情報</div>
        </div>
      </label>
    </li>
    <li>
      <input
        id="seichi-place"
        v-model="checkValues"
        type="checkbox"
        value="seichi-place"
        class="hidden peer"
        required=""
      >
      <label
        for="seichi-place"
        class="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div class="block">
          <IconBuildingArch />
          <div class="w-full text-lg font-semibold">聖地巡礼</div>
          <div class="w-full text-sm">アニメで有名なスポット情報</div>
        </div>
      </label>
    </li>
    <li>
      <input
        id="other"
        v-model="checkValues"
        type="checkbox"
        value="other"
        class="hidden peer"
        required=""
      >
      <label
        for="other"
        class="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div class="block">
          <IconBrandEvernote />
          <div class="w-full text-lg font-semibold">その他</div>
          <div class="w-full text-sm">その他</div>
        </div>
      </label>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  checkValues: {
    type:  Array,
    default: () => []
  },
});
</script>
