import { title } from "process";
import React from "react";

const List: React.FC = () => {
    return(
        <div>
            <h2 style={style.title}>商品一覧</h2>
            <div style={style.addArea}>
                <div style={style.icon}>〇</div>
                <button style={style.addbtn}>商品を追加する</button>
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
                <tr>
                    <td style={style.listTd2n1}>1</td>
                    <td style={style.listTd2n1}>aaaaaa</td>
                    <td style={style.listTd2n1}>111111</td>
                    <td style={style.listTd2n1}></td>
                    <td style={style.listTd2n1}>在庫処理</td>
                    <td style={style.listTd2n1}>編集する</td>
                </tr>
                <tr>
                    <td style={style.listTd2n}>2</td>
                    <td style={style.listTd2n}>bbbbbb</td>
                    <td style={style.listTd2n}>222222</td>
                    <td style={style.listTd2n}></td>
                    <td style={style.listTd2n}>在庫処理</td>
                    <td style={style.listTd2n}>編集する</td>
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
    addArea:{
        display:"flex",
        fontFamily:"sans-serif",
        margin:"0px 0px 10px 30px",
    },
    icon:{
        background:"#ff7c3c",
        color:"#fff",
    },
    addbtn:{
        width:"150px",
        height:"30px",
        background:"#ff7c3c",
        border:"solid 1px #fff",
        color:"#fff",
        borderRadius:"1px"
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

export default List;