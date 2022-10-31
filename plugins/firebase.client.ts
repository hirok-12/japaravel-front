import { initializeApp } from 'firebase/app'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
    authDomain: config.FIREBASE_AUTH_DOMAIN,
    projectId: config.FIREBASE_PROJECT_ID,
    storage_bucket: config.FIREBASE_STORAGE_BUCKET,
    messaging_sender_id: config.FIREBASE_MESSAGING_SENDER_ID,
    api_id: config.FIREBASE_API_ID,
    measurement_id: config.FIREBASE_MEASUREMENT_ID,
  }
  initializeApp(firebaseConfig)
})