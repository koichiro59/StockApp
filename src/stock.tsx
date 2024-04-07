import React from "react";

const Stock: React.FC = () => {
    return(
        <div>
            <h2 style={style.title}>商品在庫管理</h2>
            <h3 style={style.disTitle}>在庫処理</h3>
            <div style={style.disArea}>
                <input type="text" placeholder="商品名" style={style.disInput}/>
                <input type="text" placeholder="数量" style={style.disInput}/>
                <button style={style.disbtn}>商品を入れる</button>
                <button style={style.disbtn2}>商品を卸す</button>
            </div>
            <h3 style={style.disTitle}>在庫管理</h3>
            <table style={style.listTable}>
                <tr>
                    <th style={style.listTh}>処理種別</th>
                    <th style={style.listTh}>処理日時</th>
                    <th style={style.listTh}>単価</th>
                    <th style={style.listTh}>数量</th>
                    <th style={style.listTh}>価格</th>
                    <th style={style.listTh}>在庫数</th>
                </tr>
                <tr>
                    <td style={style.listTd2n1}>1</td>
                    <td style={style.listTd2n1}>2023-05-21-09:00:00</td>
                    <td style={style.listTd2n1}></td>
                    <td style={style.listTd2n1}>400</td>
                    <td style={style.listTd2n1}></td>
                    <td style={style.listTd2n1}></td>
                </tr>
            </table>
        </div>
    )
}

const style: {[key: string]: React.CSSProperties} = {
    title:{
        fontFamily:"sans-serif",
        margin:"30px 0px 10px 30px"
    },
    disTitle:{
        fontFamily:"sans-serif",
        margin:"0px 0px 10px 30px",
    },
    disArea:{
        margin:"0px 0px 10px 30px",
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
    disbtn:{
        margin:"10px 10px 10px 0px",
        background:"#ff7c3c",
        color:"#fff",
        border:"solid 1px #fff",
        borderRadius:"1px",
        padding:"7px 14px",
        width:"120px"
    },
    disbtn2:{
        margin:"10px 0px 10px -15px",
        background:"#ff7c3c",
        color:"#fff",
        border:"solid 1px #fff",
        borderRadius:"1px",
        padding:"7px 14px",
        width:"120px"
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
        fontFamily:"sans-serif",
        padding:"15px 20px",
    },
    listTd2n1:{
        width:"auto",
        borderBottom:"solid 1.5px #444444",
        background:"#fff",
        color:"#444444",
        fontFamily:"sans-serif",
        padding:"15px 20px",
    },
    listTd2n:{
        width:"auto",
        borderBottom:"solid 1.5px #444444",
        background:"#eaeaea",
        color:"#444444",
        fontFamily:"sans-serif",
        padding:"15px 20px",
    }

}

export default Stock;