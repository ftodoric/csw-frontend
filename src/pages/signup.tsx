import Head from 'next/head'

import { SignUpForm } from '@modules/SignUpForm'

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>Cyber Warfare Game | Sign Up</title>
      </Head>

      <SignUpForm />
    </>
  )
}
