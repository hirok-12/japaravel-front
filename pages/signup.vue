<template>
  <div class="min-h-screen flex flex-col">
    <div
      class="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2"
    >
      <div class="bg-white px-6 py-8 text-black w-full">
        <h1 class="mb-8 text-3xl text-center">新規登録 🎉</h1>

        <input
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="Email"
          v-model="email"
        />

        <input
          type="password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="password"
          placeholder="Password"
          v-model="password"
        />
        <!-- <input
          type="password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="confirm_password"
          placeholder="Confirm Password"
        /> -->

        <button
          type="submit"
          class="block border border-grey-light w-full p-3 rounded mb-4 bg-indigo-500 hover:bg-indigo-700 text-white"
          @click="register"
        >
          登録
        </button>

        <div class="text-sm text-grey-dark mt-4">
          登録するにあたり、
          <NuxtLink
            class="no-underline border-b border-grey-dark text-grey-dark"
            to="/terms"
          >
            利用規約
          </NuxtLink>
          に同意します
        </div>

        <div class="my-6">
          <button
            class="block border border-gray-300 w-full p-3 rounded-md hover:bg-slate-50 transition duration-300"
            @click="signInWithTwitter"
          >
            <div class="relative flex items-center space-x-4 justify-center">
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
                >Twitterアカウントで登録</span
              >
            </div>
          </button>
        </div>

        <div class="my-6">
          <button
            class="block border border-gray-300 w-full p-3 rounded-md hover:bg-slate-50 transition duration-300"
            @click="signInWithGoogle"
          >
            <div class="relative flex items-center space-x-4 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z"
                />
              </svg>
              <span
                class="block w-max font-semibold tracking-wide text-gray-700 text-sm sm:text-base"
                >Googleアカウントで登録</span
              >
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const { signUp, loginWithGoogle, loginWithTwitter } = useAuth();
    const email = ref("")
    const password = ref("")

    const register = () => {
      signUp(email.value, password.value)
    }

    const signInWithGoogle = () => {
      loginWithGoogle()
    }

    const signInWithTwitter = () => {
      loginWithTwitter()
    }

    return {
      email,
      password,
      register,
      signInWithGoogle,
      signInWithTwitter
    }
  },
}
</script>

<style></style>
