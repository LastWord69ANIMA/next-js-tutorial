const Page = ({ params }: { params: { id: string } }) => {
    return <div className="m-4 font-bold">Blog ID: {params.id}</div>;
  };
  
  export default Page;
  //Dynamic Routes（自動ルーティング）ではディレクトリ名に[]
  //を使うとhttp://localhost:3000/blog/1 と任意の文字でも本ファイルが表示