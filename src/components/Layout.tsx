import React, { PropsWithChildren } from 'react';
import Head from 'next/head';

type Props = PropsWithChildren<{
  title: string;
}>;

function Layout({ children, title }: Props) {
  return (
    <div className="flex flex-col min-h-screen py-0 justify-center items-center">
      <Head>
        <title>{title}</title>
      </Head>

      <header className="bg-pink-500 w-full h-40 text-white" />

      <main className="my-8 mx-14 md:my-16 md:mx-24">{children}</main>

      <footer className="flex w-full h-24 bg-pink-500 text-white justify-center items-center font-bold uppercase text-xl">
        <span>Kôlnička 2021</span>
      </footer>
    </div>
  );
}

export default Layout;
