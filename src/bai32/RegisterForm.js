import { useState } from "react";
import FormError from "../bai16/FormError"; 

function RegisterForm(props){

    const [input, setInput] = useState({email:"", password:"", sex:"", avatar:""})
    const [error, setError] = useState({})
    const sexArr = [
        { id: "", name: "Choose Gender" },
        { id: 1, name: "Male" },
        { id: 2, name: "Female" }
    ];

    function handleInput(e){
        const name = e.target.name;
        const value = e.target.value;
        setInput (state => ({...state, [name]:value}))
    }

    const handleFile = (e) => {
        const file = e.target.files[0];
        setInput(state => ({
            ...state,
            avatar: file
        }));
    };

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

        if(input.sex == ""){
            errorSubmit.sex = "Vui lòng chọn giới tính";
            flag = false;
        }

        if(input.avatar == ""){
            errorSubmit.avatar = "Vui lòng chọn avatar";
            flag = false;
        }else{
            const allowType = ["png", "jpg", "jpeg", "PNG", "JPG"];
            const size = input.avatar.size;
            const name = input.avatar.name;

            const ext = name.split(".").pop();

            if (!allowType.includes(ext)) {
                errorSubmit.avatar = "Avatar phải là hình ảnh (png, jpg, jpeg)";
                flag = false;
            }
            if (size > 1024*1024){
                errorSubmit.avatar = "Avatar phải nhỏ hơn 1MB";
                flag = false;
            }
        }

        if(!flag){
            setError(errorSubmit);
        }else{
            // localStorage.setItem("email", input.email);
            // localStorage.setItem("password", input.password);
            console.log ({
                email: input.email,
                password: input.password,
                sex: input.sex,
                avatar: {
                    name: input.avatar.name,
                    type: input.avatar.type,
                    size: input.avatar.size
                }
            });
            alert ("Đăng kí thành công");
        }
    }

    return(
        <>
        <FormError error = {error} />
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input type="email" name="email" placeholder="Email" onChange={handleInput}/>
            <input type="password" name="password" placeholder="Password" onChange={handleInput}/>
            <input type="file" name="avatar" onChange={handleFile}/>
             <select name="sex" onChange={handleInput}>
                {sexArr.map((item, index) => (
                    <option key={index} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
            <button type="submit">Register</button>
        </form>
        </>
    )
}

export default RegisterForm;