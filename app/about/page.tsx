import Link from 'next/link';

const Page = async () => {
  return (
    <div className="flex flex-col items-center">
      <Link href="/users" className="underline">
        User
      </Link>
      <h1 className="text-2xl">About</h1>
    </div>
  );
};

export default Page;

//1行目により、Linkコンポーネントにてページ遷移が可能
// <Link href="/">~文字~</Link> にて当ディレクトリより上位ページへ