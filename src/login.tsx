import React  from 'react';
import List from './list';
import { BrowserRouter, Link, Route, Routes,Navigate } from "react-router-dom";


const Login: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <h2 style={style.title}>ログイン</h2>
                <form action="" style={style.form}>
                    <input type="text" style={style.input} placeholder='ユーザー名(必須)'/>
                    <input type="text" style={style.input} placeholder='パスワード(必須)'/>
                    <div>
                        <button style={style.loginbtn}><Link to="/list">ログイン</Link></button>
                    </div>
                </form>
            </div>
            <Routes>
                <Route path="/list" element={<List/>}/>
            </Routes>
        </BrowserRouter>
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