import type { Metadata } from 'next';
import { type User } from '../UserList';

async function getUser(id: string) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        next: {
          revalidate: 5,
        },
      }
    );
    return response.json();
  }
  //fetch関数のnext:{ revelidate: } にて、~秒後に内容を更新する
  //ここではアクセスしてから5秒後に、ファイルの内容変更を反映
  //これにより、静的ファイルでも内容更新可。

export async function generateMetadata({
  params,
}: {
  params: { id: string },
}): Promise<Metadata> {
  const user = await getUser(params.id);
  return { title: user.name };
}

//以下のgenerateStaticParam関数はDynamic Routesもビルド時（本番環境）に静的となる
//ここではidファイルのみ静的（変わらない内容）表示をする
export async function generateStaticParams() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await response.json();
  
    return users.slice(0,3).map((user) => ({
      id: user.id.toString(),
    }));
  }
/*user.sliceで指定したidのみ静的ファイルに変更

export function generateStaticParams() {
  return [{ id: '1' }, { id: '4' }, { id: '8' }];
}

でも可。
*/

const Page = async ({ params }: { params: { id: string } }) => {
  const user: User = await getUser(params.id);

  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ詳細</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Page;


//users/page.tsxをブラウザ上で表示後、各名前ごとのリンクを設定
//generateMetadata関数にて、Dynamic(毎回変わるよう)にタイトルを設定