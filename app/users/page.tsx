import UserList from './UserList';

const Page = async () => {
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ一覧</h1>
      /* @ts-expect-error Async Server Component */
      <UserList />
    </div>
  );
};

export default Page;

/*以下、変更前

import UserList from '../users/UserList';

const Page = async () => {
  const response = await fetch('http://localhost:3000/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'John',
      email: 'john@example.com',
    }),
  });

  const data = await response.json();

  console.log(data);

  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ一覧</h1>
      
      <UserList />
    </div>
  );
};

export default Page;

たとえサンプルコードであってもエラーには従うこと
例えば上位ファイルからのimportは ../~~~ と点二つ

なお、api/route.tsにより、
ブラウザ上でusersディレクトリにアクセスするとターミナルにて
{ res: { name: 'John', email: 'john@example.com' } }

/*･･･通常はPOSTメソッド（入力フォーム）をサーバーへ送るそうです。*/
