import type { AppProps } from 'next/app';
import 'tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className='flex items-center justify-center w-screen h-screen'>
      <Component {...pageProps} />
    </main>
  );
}
