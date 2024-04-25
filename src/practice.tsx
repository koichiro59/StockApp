import { useEffect, useState } from "react";
import axios from "axios";

type DbType={
  product_id:number;
  product_name:string;
  price:number;
  description:string;
}

const Practice:React.FC=()=>{
   const [db,setDb]=useState<DbType[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000").then((response) => {
      console.log(response.data.todos);
      const { todos } = response.data;
      setDb(todos);
    });
  }, []);

  return (
    <>
       {db.map((todo) => (
        <p key={todo.product_id}>{todo.product_name}</p>
      ))}
    </>
  );
}

export default Practice;