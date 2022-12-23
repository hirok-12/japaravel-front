<template>
  <ul class="grid gap-6 w-full md:grid-cols-3">
    <li>
      <input
        id="meal"
        type="checkbox"
        value=""
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
        type="checkbox"
        value=""
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
        type="checkbox"
        value=""
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
        type="checkbox"
        value=""
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
        type="checkbox"
        value=""
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
        type="checkbox"
        value=""
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
        type="checkbox"
        value=""
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
        type="checkbox"
        value=""
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
        type="checkbox"
        value=""
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
        type="checkbox"
        value=""
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
        type="checkbox"
        value=""
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
        type="checkbox"
        value=""
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
        type="checkbox"
        value=""
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
</script>/
