<template>
  <div class="my-6">
    <button
      class="block border border-gray-300 p-3 rounded-md hover:bg-slate-50 transition duration-300 ml-auto"
      @click="twitterShare"
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
</template>

<script>
export default {
  props: {
    text: String,
    hashTag: String
  },
  methods: {
    twitterShare() {
      window.open(this.twitterURL())
    },
    url() {
      // 本番公開後にURL変更
      // return `https://ja.nuxtjs.org${this.$route.path}`;
      return `http://localhost:3000${this.$route.path}`;
    },
    textAndHashTag() {
      // encodeURIComponent は引数に指定した URI の中で使われる文字列の中の特別な文字をエンコードする
      // 例）let uri = 'https://www.example.com/ブログ/park.html'
      // console.log(encodeURI(uri));
      // >> https://www.example.com/%E3%83%96%E3%83%AD%E3%82%B0/park.html
      return encodeURIComponent(`${this.text} ${this.hashTag}`);
    },
    twitterURL() {
      // twitterにシェアする場合、https://twitter.com/intent/tweetでシェアするページに移動する
      // 投稿文とハッシュタグをつけてシェアさせたいので、propsには、text（投稿文）とhashTag（ハッシュタグ）を記述する
      return `https://twitter.com/intent/tweet?url=${this.url()}&text=${this.textAndHashTag()}`;
    },
  },
}
</script>