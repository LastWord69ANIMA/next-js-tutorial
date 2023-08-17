import './globals.css';
import { Inter } from 'next/font/google';
import { CounterProvider } from './context/CounterProvider';

const intr = Inter({ subsets: ['latin'] });

<link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />

export const metadata = {
  title: {
    default: 'Next.js App',
    template: `%s | Next.js App`,
  },
  description: 'つたないですが、いずれどうにかしますのでよろしくお願いします。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={intr.className}>
        <CounterProvider>{children}</CounterProvider>
      </body>
    </html>
  );
}

//当ファイルのメタデータ（head内に含まれる奴）を変更するのは
//Static Metadataという･･･defaultがそれ
//tempateは必ず表示

//Dynamic MetadataはDynamic Routesを利用したもの

//文字フォントは5行目の関数を変更すればok (Interを~~へ)