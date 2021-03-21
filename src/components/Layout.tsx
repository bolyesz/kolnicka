import { PropsWithChildren } from 'react';
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

      <main className="my-8 mx-14 md:my-16 md:mx-24">{children}</main>

      <footer className="flex w-full h-24 border-gray-400 border-t justify-center items-center">
        <span>Kôlnička 2021</span>
      </footer>
    </div>
  );
}

export default Layout;
