<template>
  <div>
    <div class="container max-w-md mx-auto flex-1 items-center justify-center px-2">
      <div class="bg-white px-6 py-8 text-black w-full">
        <h1 class="text-3xl text-center">
          都道府県
        </h1>
      </div>
    </div>

    <select
      class="form-select appearance-none
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      aria-label="Default select example"
    >
      <option selected>
        都道府県選択
      </option>
      <option value="1">
        北海道
      </option>
      <option value="2">
        青森
      </option>
      <option value="3">
        秋田
      </option>
    </select>
    <div class="container max-w-md mx-auto flex-1 items-center justify-center px-2">
      <div class="bg-white px-6 py-8 text-black w-full">
        <h1 class="text-3xl text-center">
          ジャンル
        </h1>
      </div>
    </div>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-grill-fork"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path d="M5 5l11.5 11.5" />
              <path d="M19.347 16.575l1.08 1.079a1.96 1.96 0 0 1 -2.773 2.772l-1.08 -1.079a1.96 1.96 0 0 1 2.773 -2.772z" />
              <path d="M3 7l3.05 3.15a2.9 2.9 0 0 0 4.1 -4.1l-3.15 -3.05" />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-leaf"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path d="M5 21c.5 -4.5 2.5 -8 7 -10" />
              <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z" />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-mountain"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path d="M3 20h18l-6.921 -14.612a2.3 2.3 0 0 0 -4.158 0l-6.921 14.612z" />
              <path d="M7.5 11l2 2.5l2.5 -2.5l2 3l2.5 -2" />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-bath"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1z" />
              <path d="M6 12v-7a2 2 0 0 1 2 -2h3v2.25" />
              <path d="M4 21l1 -1.5" />
              <path d="M20 21l-1 -1.5" />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-confucius"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path d="M9 19l3 2v-18" />
              <path d="M4 10l8 -2" />
              <path d="M4 18l8 -10" />
              <path d="M20 18l-8 -8l8 -4" />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-mood-happy"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <circle
                cx="12"
                cy="12"
                r="9"
              />
              <line
                x1="9"
                y1="9"
                x2="9.01"
                y2="9"
              />
              <line
                x1="15"
                y1="9"
                x2="15.01"
                y2="9"
              />
              <path d="M8 13a4 4 0 1 0 8 0m0 0h-8" />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-pool"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
              <path d="M2 16a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
              <path d="M15 12v-7.5a1.5 1.5 0 0 1 3 0" />
              <path d="M9 12v-7.5a1.5 1.5 0 0 0 -3 0" />
              <line
                x1="15"
                y1="5"
                x2="9"
                y2="5"
              />
              <line
                x1="9"
                y1="10"
                x2="15"
                y2="10"
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-shirt-sport"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
              <path d="M10.5 11h2.5l-1.5 5" />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-building-carousel"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <circle
                cx="12"
                cy="12"
                r="6"
              />
              <circle
                cx="5"
                cy="8"
                r="2"
              />
              <circle
                cx="12"
                cy="4"
                r="2"
              />
              <circle
                cx="19"
                cy="8"
                r="2"
              />
              <circle
                cx="5"
                cy="16"
                r="2"
              />
              <circle
                cx="19"
                cy="16"
                r="2"
              />
              <path d="M8 22l4 -10l4 10" />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-mood-tongue-wink-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <circle
                cx="12"
                cy="12"
                r="9"
              />
              <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
              <path d="M15 10h-.01" />
              <path d="M10 14v2a2 2 0 1 0 4 0v-2m1.5 0h-7" />
              <path d="M7 10c.5 -1 2.5 -1 3 0" />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-building-church"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <line
                x1="3"
                y1="21"
                x2="21"
                y2="21"
              />
              <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
              <line
                x1="10"
                y1="5"
                x2="14"
                y2="5"
              />
              <line
                x1="12"
                y1="3"
                x2="12"
                y2="8"
              />
              <path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-building-arch"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <line
                x1="3"
                y1="21"
                x2="21"
                y2="21"
              />
              <path d="M4 21v-15a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v15" />
              <path d="M9 21v-8a3 3 0 0 1 6 0v8" />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-evernote"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path d="M4 8h5v-5" />
              <path d="M17.9 19c.6 -2.5 1.1 -5.471 1.1 -9c0 -4.5 -2 -5 -3 -5c-1.906 0 -3 -.5 -3.5 -1c-.354 -.354 -.5 -1 -1.5 -1h-2l-5 5c0 6 2.5 8 5 8c1 0 1.5 -.5 2 -1.5s1.414 -.326 2.5 0c1.044 .313 2.01 .255 2.5 .5c1 .5 2 1.5 2 3c0 .5 0 3 -3 3s-3 -3 -1 -3" />
              <path d="M15 10h1" />
            </svg>
            <div class="w-full text-lg font-semibold">その他</div>
            <div class="w-full text-sm">その他</div>
          </div>
        </label>
      </li>
    </ul>

    <div class="flex justify-center mt-10 w-full">
      <button
        type="submit"
        class="pryimary_btn w-full md:w-1/3"
      >
        検索するx
      </button>
    </div>
  </div>
</template>

<script setup>
  const genres = [
    {
      id: 1,
      name: 'グルメ',
    },
    {
      id: 2,
      name: '自然',
    },
    {
      id: 3,
      name: '絶景',
    },
    {
      id: 4,
      name: '温泉',
    },
    {
      id: 5,
      name: '買い物',
    },
    {
      id: 6,
      name: '日本文化',
    },
    {
      id: 7,
      name: '祭り',
    },
    {
      id: 8,
      name: 'レジャー施設',
    },
    {
      id: 9,
      name: 'スポーツ観戦',
    },
    {
      id: 10,
      name: 'テーマパーク',
    },
    {
      id: 11,
      name: 'エンタメ',
    },
    {
      id: 12,
      name: '歴史',
    },
    {
      id: 13,
      name: '聖地巡礼',
    },
    {
      id: 14,
      name: 'その他',
    }
  ]
</script>

<style></style>
