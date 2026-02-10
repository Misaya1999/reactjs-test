import { useState } from "react";
import FormError from "../bai16/FormError";

function LoginForm(props){

    const [input, setInput] = useState({email:"", password:""})
    const [error, setError] = useState({})

    //Lấy Data từ LocalStorage của Register ra để so
    const emailLocal = localStorage.getItem("email");
    const passwordLocal = localStorage.getItem("password");


    function handleInput(e){
        const nameInput = e.target.name;
        const value = e.target.value;
        setInput (state => ({...state, [nameInput]:value}))
    }

    function handleSubmit(e){
        e.preventDefault();

        let errorSubmit = {};
        let flag = true;

        if(input.email == ""){
            errorSubmit.email = "Vui lòng nhập Email";
            flag = false;
        }else{
            let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexEmail.test(input.email)) {
                errorSubmit.email = "Email không đúng định dạng";
                flag = false;
            }
        }
        if(input.password == ""){
            errorSubmit.password = "Vui lòng nhập Password";
            flag = false;
        }

        if (flag){
            if (input.email != "" && input.password != "" && input.email === emailLocal && input.password === passwordLocal){
                alert ("Đăng nhập thành công");
            }else{
                errorSubmit.login = "Sai email hoặc mật khẩu";
                flag = false;
            }
        }
       
        if(!flag){
            setError(errorSubmit);
        }
    }

    return(
        <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="Email" onChange={handleInput}/>
            <input type="password" name="password" placeholder="Password" onChange={handleInput}/>
            <button type="submit">Login</button>
            <FormError error = {error} />
        </form>
        </>
    )
}

export default LoginForm;