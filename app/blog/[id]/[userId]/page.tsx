const Page = ({
    params,
  }: {
    params: { id: string, userId: string, categoryId: string },
  }) => {
    console.log(params);
    return <div className="m-4 font-bold">Blog ID: </div>;
  };
  
  export default Page;
  
  //http://localhost:3000/1/2/3 と打つとターミナルには
  //{ id: '1', userId: '2', categoryId: '3' }と表示