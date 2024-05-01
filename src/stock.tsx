import React, {useState,useContext,useEffect} from "react";
import { AuthContext } from "./param"
import axios from "axios";

type ProductType={
    product_id:number;
    product_name:string;
    price:number;
    description:string;
    stock:number;
  }

const Stock: React.FC = () => {
    const param = useContext(AuthContext);
    const [select,setSelect]=useState(0);
    const [count,setCount]=useState<number>(0);
    const [onContent,setOnContent]=useState(true);
    const [check,setCheck]=useState(false)
    const [product,setProduct]=useState<ProductType[]>([]);
    const [value,setValue]=useState({product_id:0,product_name:"",price:0,description:"",stock:0});

    useEffect(() => {
        axios.get("http://localhost:3000").then((response) => {
          const { products } = response.data;
          setProduct(products);
        });
      }, []);

      useEffect(() => {
        console.log(typeof count)
      }, [count]);

    const selectValue=(e:any)=>{
        setValue(product[e.target.value-1])
    }

    const selectCount=(e:any)=>{
        const a=parseInt(e.target.value)
        setCount(a)
    }   

    return(
        <div style={param?.value?style.open:style.close}>
            <div style={style.menuArea}>
                <h3 style={style.title}>商品在庫管理</h3>
                <ul style={style.tab}>
                    <li style={style.sell} onClick={()=>setOnContent(true)}>商品を仕入れる</li>
                    <li style={style.buy} onClick={()=>setOnContent(false)}>商品を卸す</li>
                </ul>
            </div>
            {onContent?
            <>
            <div style={style.container}>
                <div style={style.product2}>
                    <h3 style={style.subTitle}>商品名</h3>
                    <select style={style.selectProduct} onChange={(e)=>selectValue(e)}>
                        {product.map((products)=>(
                            <option value={products.product_id}>{products.product_name}</option>
                        ))}
                    </select>
                </div>
                <div style={style.items2}>
                    <h3 style={style.subTitle}>数量</h3>
                    <input type="text" style={style.itemsInput} onChange={(e)=>selectCount(e)}/>
                </div>
                <div style={style.stock2}>
                  <h3 style={style.subTitle}>在庫数</h3>
                  {check?<span style={style.preStock}>0</span>
                  :<span style={style.preStock}>{value.stock}</span>}
                  <span style={style.mark}>➡</span>
                  {check?<span style={style.postStock}>0</span>
                  :<span style={style.postStock}>{count+value.stock}</span>}
                </div>
                <div style={style.total2}>
                    <h3 style={style.subTitle}>合計金額</h3>
                    <span style={style.totalCount}>￥{value.price*count}</span>
                    <button style={style.confirm}>確定</button>
                </div>
            </div>
            </>:
            <>
            <div style={style.container}>
                <div style={style.product}>
                    <h3 style={style.subTitle}>商品名</h3>
                    <select style={style.selectProduct} onChange={(e)=>selectValue(e)}>
                        {product.map((products)=>(
                            <option value={products.product_id}>{products.product_name}</option>
                        ))}
                    </select>
                </div>
                <div style={style.items}>
                    <h3 style={style.subTitle}>数量</h3>
                    <input type="text" style={style.itemsInput} onChange={(e)=>selectCount(e)}/>
                </div>
                <div style={style.stock}>
                  <h3 style={style.subTitle}>在庫数</h3>
                  {check?<span style={style.preStock}>0</span>
                  :<span style={style.preStock}>{value.stock}</span>}
                  <span style={style.mark}>➡</span>
                  {check?<span style={style.postStock}>0</span>
                  :<span style={style.postStock}>{count+value.stock}</span>}
                </div>
                <div style={style.total}>
                    <h3 style={style.subTitle}>合計売上</h3>
                    <span style={style.totalCount}>￥{value.price*count}</span>
                    <button style={style.confirm}>確定</button>
                </div>
            </div>
            </>}
    </div>
    )
}

const style: {[key: string]: React.CSSProperties} = {
    open:{
        marginLeft:"200px"
    },
    close:{

    },
    menuArea:{
        display:"flex",
        margin:"30px 0px 0px 40px",
        background:"#fff",
        // border:"solid 1px #ff7c3c"
    },
    title:{
        fontFamily:"Yu Gothic",
    },
    tab:{
        display:"flex",
        listStyle:"none",
        justifyContent:"center",
        alignItems:"center",
    },
    sell:{
        background:"#ff7c3c",
        width:"120px",
        padding:"8px 10px",
        cursor:"pointer",
    },
    buy:{
        background:"#eaeaea",
        width:"120px",
        padding:"8px 10px",
        marginLeft:"0px",
        cursor:"pointer",
    },
    tabContent:{
        display:"block"
    },
    container:{
        background:"#ff7c3c",
        margin:"-16px 0 0 30px",
        width:"60%",
    },
    product:{
        display:"flex",
        background:"#eaeaea",
    },
    items:{
        display:"flex",
        background:"#eaeaea",
    },
    stock:{
        display:"flex",
        background:"#eaeaea",
    },
    total:{
        display:"flex",
        background:"#eaeaea",
    },
    product2:{
        display:"flex",
        background:"#ff7c3c",
    },
    items2:{
        display:"flex",
        background:"#ff7c3c",
    },
    stock2:{
        display:"flex",
        background:"#ff7c3c",
    },
    total2:{
        display:"flex",
        background:"#ff7c3c",
    },
    subTitle:{
        margin:"20px 100px 20px 30px",
        fontFamily:"Yu Gothic",
        width:"100px"
    },
    selectProduct:{
        padding:"5px 20px",
        height:"35px",
        width:"400px",
        margin:"auto 20px auto -60px",
        textAlign:"left",
        fontSize:"14px",
    },
    itemsInput:{
        padding:"5px 0px",
        height:"25px",
        width:"100px",
        margin:"auto 40px auto 80px",
        textAlign:"center",
        fontSize:"16px",
    },
    preStock:{
        padding:"5px 0px",
        height:"25px",
        width:"100px",
        margin:"auto 0px auto 20px",
        background:"#fff",
        border:"solid 1px #444444",
        textAlign:"center",
        fontSize:"16px",
    },
    mark:{
        margin:"auto 10px",
    },
    postStock:{
        padding:"5px 0px",
        height:"25px",
        width:"100px",
        margin:"auto 0px",
        background:"#fff",
        border:"solid 1px #444444",
        textAlign:"center",
        fontSize:"16px",
    },
    totalCount:{
        padding:"5px 0px",
        height:"25px",
        width:"100px",
        margin:"auto 0px auto 100px",
        background:"#fff",
        border:"solid 1px #444444",
        textAlign:"center",
        fontSize:"16px",
    },
    confirm:{
        padding:"5px 20px",
        height:"35px",
        width:"100px",
        margin:"auto 20px auto 220px",
        textAlign:"center",
        fontSize:"16px",
        background:"#fff",
        border:"solid 1px #444444",
        writingMode:"horizontal-tb"
    },
    disTitle:{
        fontFamily:"Yu Gothic",
        margin:"30px 0px 0px 40px",
    },
    disArea:{
        margin:"0px 0px 30px 30px",
        display:"flex"
    },
    disInput:{
        display:"block",
        width:"240px",
        height:"35px",
        background:"#eaeaea",
        borderTop:"solid 1px #fff",
        borderRight:"solid 1px #fff",
        borderLeft:"solid 1px #fff",
        borderBottom:"solid 1px #eaeaea",
        borderRadius:"1px"
    },
    disInput2:{
        display:"block",
        width:"240px",
        height:"35px",
        background:"#eaeaea",
        borderTop:"solid 1px #fff",
        borderRight:"solid 1px #fff",
        borderLeft:"solid 1px #fff",
        borderBottom:"solid 1px #eaeaea",
        borderRadius:"1px"
    },
    disbtn:{
        background:"#ff7c3c",
        color:"#fff",
        border:"solid 1px #fff",
        borderRadius:"1px",
        padding:"7px 14px",
        width:"120px",
        margin:"0 0 0 20px"
    },
    disbtn2:{
        background:"#ff7c3c",
        color:"#fff",
        border:"solid 1px #fff",
        borderRadius:"1px",
        padding:"7px 14px",
        width:"120px",
        margin:"0 20px 0 0"
    },
    listTable:{
        borderCollapse:"collapse",
        marginLeft:"30px",

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
    }
}

export default Stock;