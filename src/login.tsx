import React, {useState,useContext, useEffect} from "react";
import List from './list';
import { BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import { AuthContext } from "./param"
import { error } from "console";


const Login: React.FC = () => {
    const param = useContext(AuthContext);
    const navigate=useNavigate();
  
    const correctValue={correctUserName:"Hello",correctPassword:"Hello123"};
    const error={userName:"",password:""};
    const [formValue,setFormValue]=useState({userName:"",password:""});

    const handleChnage=(e:any)=>{
        setFormValue({...formValue, [e.target.name]:e.target.value});
    }

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        validate(formValue);
        param?.setFormError(error);
        if(formValue.userName==correctValue.correctUserName&&formValue.password==correctValue.correctPassword){
            param?.setIsSubmit(true);
            param?.setIsError(true);
            navigate("/list")
        }else{
            param?.setIsSubmit(false)
            param?.setIsError(false)
        }
    }

    const validate=(value:any)=>{
        if(value.userName!=correctValue.correctUserName){
            error.userName="ユーザー名が異なります";
        }else{
            error.userName="";
        }
        if(value.password!=correctValue.correctPassword){
            error.password="パスワードが異なります"
        }else{
            error.password="";
        }
        return error;
    }

    return (
            <div style={param?.value?style.open:style.close}>
                <h2 style={style.title}>ログイン</h2>
                <form action="" style={style.form}>
                    <input type="text" name="userName" style={style.input} placeholder='ユーザー名(必須)' onChange={(e)=>handleChnage(e)}/>
                    <p style={param?.isError?style.nonError:style.errorMessage}>{param?.formError.userName}</p>
                    <input type="text" name="password" style={style.input} placeholder='パスワード(必須)' onChange={(e)=>handleChnage(e)}/>
                    <p style={param?.isError?style.nonError:style.errorMessage}>{param?.formError.password}</p>
                    <div>
                        <button style={style.loginbtn} onClick={(e)=>handleSubmit(e)}>ログイン
                        </button>
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
    errorMessage:{
        color:"#D93934",
        fontFamily:"Yu Gothic",
        alignSelf:"flex-start",
        margin:"-25px auto auto 87px",
        fontSize:"15px"
    },
    nonError:{

    }
}

export default Login;