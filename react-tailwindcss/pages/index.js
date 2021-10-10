import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Next React App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Template made by Samrat Neupane.</h1>
    </div>
  )
}