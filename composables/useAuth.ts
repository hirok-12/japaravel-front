import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider
} from 'firebase/auth'

export const useAuth = () => {
  const token = useState<string>('token', () => null)
  const { successToaste, errorToaste } = useNotify();

  // メールアドレス新規登録関数
  async function signUp(email:string, password:string){
    return await new Promise((resolve, reject)=>{
      // getAuth()でAuthを取得
      const auth = getAuth()
      // メールアドレスとパスワードでアカウントを作成する
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        userCredential.user
        .getIdToken()
          .then((idToken) => {
            token.value = idToken
            successToaste('新規登録完了🎉')
            resolve('成功')
            navigateTo('/')
          })
        .catch(reject)
      })
      .catch((error) => {
        console.log(`エラー: ${error}`)
        const errorMessage = error.message;
        errorToaste('新規登録に失敗しました😭')
        resolve(errorMessage)
      })
    })
  }

  // メールアドレスとパスワードでログインする関数
  async function signIn(email: string, password: string) {
    return await new Promise<void>((resolve, reject) => {
      const auth = getAuth()
      // メールアドレスとパスワードでログインする
      return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          userCredential.user
            .getIdToken()
              .then((idToken) => {
                token.value = idToken
                successToaste('ログインしました🎉')
                resolve()
                navigateTo('/')
              })
            .catch(reject)
        })
        .catch((error) => {
          console.log(`エラー: ${error}`)
          const errorMessage = error.message;
          errorToaste('ログインに失敗しました😭')
          resolve(errorMessage)
        })
    })
  }

  // ログアウトする関数
  async function signOut() {
    return await new Promise<void>((resolve, reject) => {
      const auth = getAuth()
      // ログアウトする
      firebaseSignOut(auth)
        .then(() => {
          token.value = null
          successToaste('ログアウトしました🎉')
          resolve()
          navigateTo('/')
        })
        .catch((error) => {
          errorToaste('ログアウトに失敗しました😭')
          reject(error)
        })
    })
  }

  // ログイン状態確認関数
  async function checkAuthState() {
    return await new Promise<void>((resolve, reject) => {
      // client only
      if (process.server) return resolve()
      const auth = getAuth()
      onAuthStateChanged(
        auth,
        (user) => {
          if (user) {
            user
              .getIdToken()
              .then((idtoken) => {
                token.value = idtoken
                resolve()
              })
              .catch(reject)
          } else {
            token.value = null
            resolve()
          }
        },
        (error) => {
          reject(error)
        }
      )
    })
  }

  // google認証関数
  async function loginWithGoogle() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        successToaste('ログインしました🎉')
        console.log({ credential, token, user });
        navigateTo('/')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        errorToaste('ログイン失敗しました😭')
        console.log({ errorCode, errorMessage, email, credential });
    });
  }

  // twitter認証関数
  async function loginWithTwitter() {
    const auth = getAuth();
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        successToaste('ログインしました🎉')
        console.log({ credential, token, user });
        navigateTo('/')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = TwitterAuthProvider.credentialFromError(error);
        errorToaste('ログイン失敗しました😭')
        console.log({ errorCode, errorMessage, email, credential });
    });
  }



  return {
    signUp,
    signIn,
    signOut,
    token,
    checkAuthState,
    loginWithGoogle,
    loginWithTwitter
  }
}