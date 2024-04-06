import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={style.header}>
        {/* ハンバーガーメニュー */}
        <div style={style.menuArea}>
            <div style={style.hamburger} onClick={() => setIsOpen(!isOpen)}>
                <span style={isOpen?style.nonspan1:style.span1}></span>
                <span style={isOpen?style.nonspan2:style.span2}></span>
                <span style={isOpen?style.nonspan3:style.span3}></span>
            </div>
            <nav>
                <ul style={isOpen?style.active:style.nonActive}>
                    <li style={style.sideNav}><a href="#" style={style.anker}>商品一覧</a></li>
                    <li style={style.sideNav}><a href="#" style={style.anker}>売上一括登録</a></li>
                </ul>
         </nav>
         {/* ヘッダーロゴ */}
            <div style={style.logo}>在庫管理システム</div>
        </div>
        {/* ログアウトボタン */}
        <div style={style.navArea}>
            <button style={style.logoutBtn}>ログアウト</button>
        </div>
    </header>
  );
}

const style: {[key: string]: React.CSSProperties} = {
    header:{
        display:"flex",
        alignItems:"center",
        height:"60px",
        margin:"-10px -10px",
        background:"#fff",
        color:"#444444",
        borderBottom:"solid 2px #eaeaea"
    },
    span1:{
        position:"absolute",
        height:"3px",
        width:"45%",
        top:"10px",
        left:"10px",
        background:"#444444",
    },
    span2:{
        position:"absolute",
        height:"3px",
        width:"45%",
        top:"16px",
        left:"10px",
        background:"#444444",
    },
    span3:{
        position:"absolute",
        height:"3px",
        width:"45%",
        top:"22px",
        left:"10px",
        background:"#444444",
    },
    nonspan1:{
        position:"absolute",
        height:"3px",
        width:"45%",
        top:"10px",
        left:"10px",
        background:"#444444",
        transform: "translateY(6px) rotate(-45deg)",
    },
    nonspan2:{
        display:"none"
    },
    nonspan3:{
        position:"absolute",
        height:"3px",
        width:"45%",
        top:"22px",
        left:"10px",
        background:"#444444",
        transform: "translateY(-6px) rotate(45deg)",
    },
    active:{
        position:"absolute",
        background:"#eaeaea",
        width:"15%",
        height:"100%",
        marginLeft:"-60px",
        marginTop:"30px"
    },
    nonActive:{
        display:"none"
    },
    sideNav:{
        listStyle:"none",
        padding:"15px 20px",
        fontSize:"18px",
        marginLeft:"-30px",
        borderBottom:"solid 1px #444444"
    },
    anker:{
        textDecoration:"none",
        color:"#444444",
        fontFamily:"sans-serif"
    },
    logo:{
        marginLeft:"10px",
        marginTop:"5px",
        fontFamily:"sans-serif",
        fontSize:"18px",
        fontWeight:"500"
    },
    menuArea:{
        display:"flex",
        alignItems:"center",
        marginLeft:"20px",
        marginRight:"20px"
    },
    hamburger:{
        position: "relative",
        width: "35px",
        height:"35px",
        borderRadius: "5px",
        cursor: "pointer",
    },
    menu:{
        marginRight:"10px"
    },
    navArea:{
        display:"flex",
        marginLeft:"auto"
    },
    logoutBtn:{
        marginTop:"5px",
        marginRight:"50px",
        background:"#ff7c3c",
        color:"#fff",
        fontFamily:"sans-serif",
        padding:"7px 14px",
        border:"solid 0px #fff",
        fontSize:"14px",
        borderRadius:"1px"
    }
};

export default Header;