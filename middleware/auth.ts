export default defineNuxtRouteMiddleware(async () => {
  if (!process.server) {
    const { checkAuthState, token } = useAuth()
    const { infoToaste } = useNotify()
    await checkAuthState()
    if (!token.value) {
      infoToaste('ログインが必要なページです')
      return navigateTo('/login', { replace: true })
    }
  }
})
