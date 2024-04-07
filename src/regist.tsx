import React from "react";

const Regist: React.FC = () => {
    return(
        <div>
            <h2 style={style.title}>売上一括登録</h2>
            <div style={style.rigistArea}>
                <div style={style.message}>同期でファイル取込</div>
                <input type="text" style={style.rigistInput}/>
                <button style={style.rigistbtn}>登録</button>
            </div>
            <div style={style.rigistArea}>
                <div style={style.message}>非同期でファイル取込</div>
                <input type="text"  style={style.rigistInput}/>
                <button style={style.rigistbtn}>登録</button>
            </div>
            <div>
                <div style={style.message}>年月ごとの在庫処理数集計</div>
                <table style={style.listTable}>
                    <tr>
                        <th style={style.listTh}>処理月</th>
                        <th style={style.listTh}>合計数量</th>
                    </tr>
                    <tr>
                        <td style={style.listTd2n1}>2023-04-01-09:00:00</td>
                        <td style={style.listTd2n1}>400</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

const style: {[key: string]: React.CSSProperties} = {
    title:{
        fontFamily:"sans-serif",
        margin:"30px 0px 10px 30px"
    },
    message:{
        display:"block",
        fontFamily:"sans-serif",
        margin:"10px 0 -2px 30px",      
    },
    rigistArea:{
        fontFamily:"sans-serif",
        margin:"20px 0px"
    },
    rigistbtn:{
        width:"60px",
        height:"30px",
        background:"#ff7c3c",
        border:"solid 1px #fff",
        color:"#fff",
        borderRadius:"1px"
    },
    rigistInput:{
        width:"200px",
        height:"30px",
        marginLeft:"30px"
    },
    listTable:{
        borderCollapse:"collapse",
        marginLeft:"20px",
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

export default Regist;