{
  // Asynchronous ts
  //   for static data
  interface IData {
    name: string;
    age: number;
    address: string;
  }

  const data: IData = {
    name: "Fahim",
    age: 45,
    address: "Khulna, Bangladesh",
  };

  const showMessage = (): Promise<IData> => {
    return new Promise((resolve, reject) => {
      if (resolve) {
        resolve(data);
      }
      reject("No data found");
    });
  };

  //   const result = showMessage();
  //   console.log(result);

  const showResult = async () => {
    const result = await showMessage();
    console.log(result);
  };

  //   showResult();

  // for fetch API

  interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const fetchData = async (): Promise<IPost[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    // console.log(data);
    return data;
  };

  //   const result1 = fetchData();
  //   console.log(result1);

  const showResult1 = async () => {
    const result1 = await fetchData();
    console.log(result1);
  };

  showResult1();

  //
}
