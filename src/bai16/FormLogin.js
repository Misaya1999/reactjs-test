//Tương tự Form bài 13 nhưng gộp chung các Error vào 1 object
//Các input đều dùng chung 1 hàm onChange

import { useState } from "react";
import FormError from "./FormError";

function FormLogin(props) {

    const [input, setInput] = useState({email:"", password:""})
    const [error, setError] = useState({})

    //handleInput: Hàm onChange dùng chung cho các thẻ input/textarea/...
    const handleInput = (e) => {

        //e.target.name: Lấy name của input để làm key
        const nameInput = e.target.name;

        //e.target.valua: Lấy value của input để làm value
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
        }
        if(input.password == ""){
            errorSubmit.password = "Vui lòng nhập Password";
            flag = false;
        }
        if(input.email != "" && input.password != ""){
            alert ("Đăng nhập thành công");
        }
        if(!flag){
            setError(errorSubmit);
        }
    }

    return(
        <>
            <FormError error = {error} />
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" name="email" onChange={handleInput}/>
                <input type="text" placeholder="Password" name="password" onChange={handleInput}/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default FormLogin;