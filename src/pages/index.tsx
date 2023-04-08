import Head from 'next/head'

import { LoginForm } from '@modules/LoginForm'

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>CS Wargame | Log In</title>
      </Head>

      <LoginForm />
    </>
  )
}
