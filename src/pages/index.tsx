import Head from 'next/head';
import Hero from '../sections/Hero';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-0 justify-center items-center">
      <Head>
        <title>Kôlnička</title>
      </Head>

      <main className="flex flex-col flex-grow justify-center">
        <Hero />
      </main>

      <footer className="flex w-full h-24 border-gray-400 border-t justify-center items-center">
        <span>Kôlnička 2021</span>
      </footer>
    </div>
  );
}
