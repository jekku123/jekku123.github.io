/* eslint-disable react-hooks/exhaustive-deps */
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import { auth } from "../../auth/firebase"
import AuthForm from "./AuthForm"

const initState = {
  email: "",
  password: "",
}

type FormState = typeof initState

export default function Login() {
  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth)

  const onSubmit = async (values: FormState) => {
    const { email, password } = values
    if (!email || !password) return
    await signInWithEmailAndPassword(email, password)
  }

  return (
    <AuthForm
      {...{
        initState,
        onSubmit,
        loading,
        error,
      }}
    />
  )
}
