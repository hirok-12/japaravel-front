export default defineEventHandler(async () => {
  await $fetch('http://localhost:3001/users')
})

// 下記のような感じで呼び出し側コンポーネントでapi呼ぶ
// const { data } = await useFetch('/api/hello')