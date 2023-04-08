import Head from 'next/head'

import { LoginForm } from '@modules/LoginForm'

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Cyber Warfare Game | Log In</title>
      </Head>

      <LoginForm />
    </>
  )
}
