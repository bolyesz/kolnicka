import React from 'react';
import Head from 'next/head';

type Props = {
  children: React.ReactNode;
  title: string;
};

function Layout({ children, title }: Props) {
  return (
    <div className="flex flex-col min-h-screen py-0 justify-center items-center">
      <Head>
        <title>{title}</title>
      </Head>

      <header className="h-40 w-full bg-pink-500" />

      <main className="my-8 mx-14 lg:my-16 lg:mx-24">{children}</main>

      <footer className="flex w-full h-24 bg-pink-500 justify-center items-center text-white text-xl font-bold uppercase">
        <span>Kôlnička 2021</span>
      </footer>
    </div>
  );
}

export default Layout;
