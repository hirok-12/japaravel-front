<template>
  <div class="sticky top-0 z-100 bg-white">
    <nav class="flex items-center p-3 flex-wrap">
      <NuxtLink to="/" class="p-2 mr-4 inline-flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          class="fill-current text-gray h-8 w-8 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          />
        </svg>
        <span class="text-xl font-bold tracking-wide"> Japaravel </span>
      </NuxtLink>
      <div class="ml-auto">
        <button
          class="inline-flex p-2 hover:bg-gray-100 rounded"
          @click="toVisit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </button>
        <button
          class="inline-flex p-2 hover:bg-gray-100 rounded"
          @click="toSearch"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <button
          class="inline-flex p-2 hover:bg-gray-100 rounded"
          @click="toggleNav"
        >
          <svg
            v-if="showMenu == false"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            v-if="showMenu == true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div :class="showMenu ? '' : 'hidden'" class="w-full">
        <!-- ログイン中のヘッダー -->
        <div v-if="token" class="flex flex-col">
          <div
            v-if="showMenu == true"
            class="cursor-pointer"
            @click="linkMypage"
          >
            <div :class="showMenu ? 'my-3' : ''" class="flex justify-center">
              <div>
                <img
                  src="https://i.imgur.com/z4YSzDD.jpg"
                  class="rounded-full hover:ring-4"
                  width="70"
                />
              </div>
            </div>
            <div class="flex justify-center underline hover:text-blue-600">
              Hiroki
            </div>
          </div>
          <nuxt-link
            v-for="item in loginHeaderItems"
            :key="item.id"
            class="w-full px-3 py-2 hover:bg-gray-100"
            :to="item.url"
            @click="select(item.event)"
          >
            {{ item.name }}
          </nuxt-link>
          <div
            v-if="showMenu == false"
            class="flex justify-center cursor-pointer"
            @click="linkMypage"
          >
            <div>
              <img
                src="https://i.imgur.com/z4YSzDD.jpg"
                class="rounded-full hover:ring-4"
                width="50"
              />
            </div>
          </div>
        </div>
        <!-- ログインアウト中のヘッダー -->
        <div v-else class="flex flex-col">
          <nuxt-link
            v-for="item in notLoginHeaderItems"
            :key="item.id"
            class="w-full px-3 py-2 hover:bg-gray-100"
            :to="item.url"
            @click="select(item.event)"
          >
            {{ item.name }}
          </nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
  const { signOut } = useAuth()
  const showMenu = ref(false)
  const { token, checkAuthState } = useAuth()
  const runtimeConfig = useRuntimeConfig()

  const linkMypage = () => {
    showMenu.value = !showMenu.value
    return navigateTo('/users/' + 4)
  }

  const select = (itemname) => {
    switch (itemname) {
      case 'logOut':
        signOut()
        showMenu.value = !showMenu.value
        break
      default:
        showMenu.value = !showMenu.value
        break
    }
  }

  const loginRouting = (item) => {
    switch (item.name) {
      case 'プロフィール':
        return { name: 'users-id', params: { id: token } }
      default:
        return item.url
    }
  }

  const toggleNav = () => (showMenu.value = !showMenu.value)

  const toVisit = () => {
    showMenu.value = false
    return navigateTo('/users/' + 4 + '/visits')
  }

  const toSearch = () => {
    showMenu.value = false
    return navigateTo('/search')
  }

  const loginHeaderItems = [
    {
      id: 1,
      url: '/signup',
      name: 'ログアウト',
      event: 'logOut'
    },
    {
      id: 2,
      url: '/terms',
      name: '利用規約',
      event: ''
    },
    {
      id: 3,
      url: runtimeConfig.DEVELOPER_TWITTER,
      name: '開発者へ問い合わせ',
      event: ''
    }
  ]

  const notLoginHeaderItems = [
    {
      id: 1,
      url: '/signup',
      name: '無料登録',
      event: ''
    },
    {
      id: 2,
      url: '/login',
      name: 'ログイン',
      event: ''
    },
    {
      id: 3,
      url: '/terms',
      name: '利用規約',
      event: ''
    },
    {
      id: 4,
      url: runtimeConfig.DEVELOPER_TWITTER,
      name: '開発者へ問い合わせ',
      event: ''
    }
  ]

  onMounted(() => {
    checkAuthState()
  })
</script>
