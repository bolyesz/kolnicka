import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-0 justify-center items-center">
      <Head>
        <title>Kôlnička</title>
      </Head>

      <main className="flex flex-col flex-grow justify-center">
        <h1 className="text-6xl">Ahoj Kôlnička!</h1>
      </main>

      <footer className="flex w-full h-24 border-gray-400 border-t justify-center items-center">
        <span>Kôlnička 2021</span>
      </footer>
    </div>
  );
}
