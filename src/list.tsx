import React, {useState,useContext,useEffect} from "react";
import axios from "axios";
import { AuthContext } from "./param";
import { before } from "node:test";

type ProductType={
    product_id:number;
    product_name:string;
    price:number;
    description:string;
  }

const List: React.FC = () => {
    const [product,setProduct]=useState<ProductType[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3000").then((response) => {
          const { products } = response.data;
          setProduct(products);
        });
      }, []);

    const param = useContext(AuthContext);
    return(
        <div style={param?.value?style.open:style.close}>
            <h2 style={style.title}>商品一覧</h2>
            <div style={style.addArea}>
                <button style={style.addbtn}>商品を追加する<span style={style.icon}>＞</span></button>
            </div>
            <table style={style.listTable}>
                <tr>
                    <th style={style.listTh}>ID</th>
                    <th style={style.listTh}>商品名</th>
                    <th style={style.listTh}>単価</th>
                    <th style={style.listTh}>説明</th>
                    <th style={style.listTh}>状況</th>
                    <th style={style.listTh}>編集</th>
                </tr>
                {product.map((products) => (
                    <tr>
                        <td style={(products.product_id)%2===0?style.listTd2n:style.listTd2n1}>{products.product_id}</td>
                        <td style={(products.product_id)%2===0?style.listTd2n:style.listTd2n1}>{products.product_name}</td>
                        <td style={(products.product_id)%2===0?style.listTd2n:style.listTd2n1}>{products.price}</td>
                        <td style={(products.product_id)%2===0?style.listTd2n:style.listTd2n1}>{products.description}</td>
                        <td style={(products.product_id)%2===0?style.listTd2n:style.listTd2n1}>在庫処理</td>
                        <td style={(products.product_id)%2===0?style.listTd2n:style.listTd2n1}><a href="/" style={style.edit}>編集する</a></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

const style: {[key: string]: React.CSSProperties} = {
    close:{

    },
    open:{
        marginLeft:"200px"
    },
    title:{
        fontFamily:"Yu Gothic",
        margin:"30px 0px 10px 30px"
    },
    addArea:{
        display:"flex",
        fontFamily:"Yu Gothic",
        margin:"0px 0px 10px 30px",
    },
    icon:{
        background:"#ff7c3c",
        color:"#fff",
        marginLeft:"5px",
        display:"inline-block",
        transform:"rotate(90deg)"
    },
    addbtn:{
        width:"150px",
        height:"30px",
        background:"#ff7c3c",
        border:"solid 1px #fff",
        color:"#fff",
        borderRadius:"1px",
    },
    listTable:{
        borderCollapse:"collapse",
        marginLeft:"40px",
    },
    listTh:{
        width:"auto",
        borderBottom:"solid 1.5px #444444",
        background:"#eaeaea",
        color:"#444444",
        fontFamily:"Yu Gothic",
        padding:"15px 20px",
    },
    listTd2n1:{
        width:"auto",
        borderBottom:"solid 1.5px #444444",
        background:"#fff",
        color:"#444444",
        fontFamily:"Yu Gothic",
        padding:"15px 20px",
    },
    listTd2n:{
        width:"auto",
        borderBottom:"solid 1.5px #444444",
        background:"#eaeaea",
        color:"#444444",
        fontFamily:"Yu Gothic",
        padding:"15px 20px",
    },
    edit:{
        textDecoration:"none",
        color:"#444444"
    }

}

export default List;