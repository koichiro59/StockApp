import React, {useState,useContext} from "react";
import List from './list';
import { BrowserRouter, Link, Route, Routes,Navigate } from "react-router-dom";
import { AuthContext } from "./param"


const Login: React.FC = () => {
    const param = useContext(AuthContext);

    return (
            <div style={param?.value?style.open:style.close}>
                <h2 style={style.title}>ログイン</h2>
                <form action="" style={style.form}>
                    <input type="text" style={style.input} placeholder='ユーザー名(必須)'/>
                    <input type="text" style={style.input} placeholder='パスワード(必須)'/>
                    <div>
                        <button style={style.loginbtn}><Link to="/list">ログイン</Link></button>
                    </div>
                </form>
            </div>
    )
}

const style: {[key: string]: React.CSSProperties} = {
    title:{
        textAlign:"center",
        fontFamily:"Yu Gothic",
        fontSize:"24px",
        fontWeight:"bold",
        marginTop:"50px"
    },
    form:{
        margin:"-10px auto 0 auto",
        width:"600px",
        height:"300px"
    },
    input:{
        display:"block",
        margin:"25px auto",
        width:"420px",
        height:"40px",
        background:"#eaeaea",
        border:"solid 1px #fff",
        borderBottom:"solid 1.5px #444444"
    },
    loginbtn:{
        display:"block",
        margin:"40px auto",
        fontFamily:"Yu Gothic",
        width:"420px",
        height:"35px",
        background:"#ff7c3c",
        color:"#fff",
        border:"solid 1px #fff",
        fontSize:"15px",
        borderRadius:"1px"
    },
}

export default Login;