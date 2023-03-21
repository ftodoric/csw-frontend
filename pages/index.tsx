import Head from "next/head";
import { Inter } from "next/font/google";
import { LoginForm } from "@modules/LoginForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Cyber Warfare | Educational game in cyber intelligence warfare
        </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <LoginForm />
    </>
  );
}
