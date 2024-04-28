import React, {useState,useContext,useEffect} from "react";
import axios from "axios";
import { AuthContext } from "./param";
import { before } from "node:test";
import { table } from "console";
import { object } from "prop-types";
import Stock from "./stock";

type ProductType={
    product_id:number;
    product_name:string;
    price:number;
    description:string;
    stock:number;
  }

const List: React.FC = () => {
    const [product,setProduct]=useState<ProductType[]>([]);
    const [value,setValue]=useState({product_id:0,product_name:"",price:0,description:"",stock:0});
    const [isForm,setIsForm]=useState(false);
    const param = useContext(AuthContext);

    const addEvent=()=>{
        setIsForm(!isForm);
        const id=(Object.keys(product).length)+1;
        setValue({...value,product_id:id})
    }

    const submitEvent=async(e:any)=>{
        e.preventDefault();
        setProduct([...product,value])
        await axios.post("http://localhost:3000/add",{
            product_id:value.product_id,
            product_name:value.product_name,
            price:value.price,
            description:value.description,
            stock:value.stock
        }).then((response)=>{
            console.log(response.data);
        })
    }

    const deleteEvent=async(id:number)=>{
        await axios.delete("http://localhost:3000/delete",{
            data:{id},
        }).then((response)=>{
            console.log(response.data)
        })
    }

    const handleChnage=(e:any)=>{
        setValue({...value, [e.target.name]:e.target.value})
    }

    useEffect(() => {
        axios.get("http://localhost:3000").then((response) => {
          const { products } = response.data;
          setProduct(products);
        });
      }, []);

    return(
        <div style={isForm?style.overlay:style.close}>
                {isForm && (
                    <form style={style.onForm} onSubmit={(e)=>submitEvent(e)}>
                        <button style={style.cancelBtn}>✖</button>
                        <input name="product_name" type="text" placeholder="商品名" style={style.input} onChange={(e)=>handleChnage(e)}/>
                        <input name="price" type="text" placeholder="価格" style={style.input} onChange={(e)=>handleChnage(e)}/>
                        <input name="description" type="text" placeholder="商品説明" style={style.input} onChange={(e)=>handleChnage(e)}/>
                        <input name="stock" type="text" placeholder="在庫数 " style={style.input} onChange={(e)=>handleChnage(e)}/>
                        <div style={style.btnArea}>
                            <button style={style.addProduct1}>取り消し</button>
                            <button type="submit" style={style.addProduct2}>追加</button>
                        </div>

                    </form>
                )}
            <div style={param?.value?style.open:style.close}>
                <div style={isForm?style.content1:style.content2}>
                <h2 style={style.title}>商品一覧</h2>
                <div style={style.addArea}>
                    <button style={style.addbtn} onClick={()=>addEvent()}>商品を追加する<span style={style.icon}>＋</span></button>
                </div>

                <table style={style.listTable}>
                    <tr>
                        <th style={style.listTh}>ID</th>
                        <th style={style.listTh}>商品名</th>
                        <th style={style.listTh}>単価</th>
                        <th style={style.listTh}>説明</th>
                        <th style={style.listTh}>在庫数</th>
                        <th style={style.listTh}>編集</th>
                    </tr>
                    {product.map((products) => (
                        <tr>
                            <td style={(products.product_id)%2===0?style.listTd2n:style.listTd2n1}>{products.product_id}</td>
                            <td style={(products.product_id)%2===0?style.listTd2n:style.listTd2n1}>{products.product_name}</td>
                            <td style={(products.product_id)%2===0?style.listTd2n:style.listTd2n1}>{products.price}</td>
                            <td style={(products.product_id)%2===0?style.listTd2n:style.listTd2n1}>{products.description}</td>
                            <td style={(products.product_id)%2===0?style.listTd2n:style.listTd2n1}>{products.stock}</td>
                            <td style={(products.product_id)%2===0?style.listTd2n:style.listTd2n1}>
                                <button style={style.edit} key={products.product_id} onClick={()=>deleteEvent(products.product_id)}>編集する</button>
                            </td>
                        </tr>
                    ))}
                </table>
                </div>
                
            </div>
        </div>
       
    )
}

const style: {[key: string]: React.CSSProperties} = {
    close:{

    },
    content1:{
        display:"none",
    },
    overlay:{
        position:"fixed",
        top:"0",
        left:"0",
        width:"100%",
        height:"100%",
        background:"rgba(0,0,0,0.5)",
        zIndex:"-10"
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
        cursor: "pointer",
    },
    listTable:{
        borderCollapse:"collapse",
        marginLeft:"40px",
        zIndex:"20",
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
    },
    onForm:{
        position:"fixed",
        top:"50%",
        left:"50%",
        width:"40%",
        height:"70%",
        transform:"translate(-50%,-50%)",
        background:"#fff"
    },
    cancelBtn:{
        marginLeft:"467px",
        background:"#ff7c3c",
        border:"solid 1px #fff",
        color:"#fff",
    },
    input:{
        display:"block",
        margin:"25px auto",
        width:"420px",
        height:"40px",
    },
    btnArea:{
        background:"#eaeaea",
        width:"420px",
        height:"40px",
        margin:"0 auto",
        display:"flex"
    },
    addProduct1:{
        background:"#444",
        border:"solid 1px #fff",
        color:"#fff",
        borderRadius:"1px",
        cursor: "pointer",
        width:"210px",
        height:"40px",
    },
    addProduct2:{
        background:"#ff7c3c",
        border:"solid 1px #fff",
        color:"#fff",
        borderRadius:"1px",
        cursor: "pointer",
        width:"210px",
        height:"40px",
    },
}

export default List;