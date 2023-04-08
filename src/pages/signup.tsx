import Head from 'next/head'

import { SignUpForm } from '@modules/SignUpForm'

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>CS Wargame | Sign Up</title>
      </Head>

      <SignUpForm />
    </>
  )
}
