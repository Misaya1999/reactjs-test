import { useState } from "react";

function Form1(){

const [getItem1, setItem1] = useState("")
const [getItem2, setItem2] = useState("")
const [getContent, setContent] = useState("")
const [getOption, setOption] = useState("")

//Tạo biến err để hiển thị error khi input trống
const [err1, setErr1] = useState("")
const [err2, setErr2] = useState("")

//Hàm change1 để lưu value trong in put và đưa vào getItem1 để thay đổi giá trị useState
// e là sự kiện (event) xảy ra khi người dùng gõ vào ô input
// e.target chính là thẻ <input>
// e.target.value là nội dung hiện tại của ô input
// setItem1(...) cập nhật giá trị đó vào state getItem1
function change1(e){
    setItem1(e.target.value)
}
function change2(e){
    setItem2(e.target.value)
}
function change3(e){
    setContent(e.target.value)
}
function change4(e){
    setOption(e.target.value)
}

function checkForm(e){
    e.preventDefault();
    if(getItem1 === ""){
        setErr1("Vui long nhap tai khoan")
    }else{
        setErr1("")
    }
    if(getItem2 === ""){
        setErr2("Vui long nhap mat khau")
    }else{
        setErr2("")
    }
    if(getItem1 && getItem2 != ""){
        alert("Thanh cong")
    }
}
    return(
        <>
        <h1>Form testing {getOption}</h1>
        <form onSubmit={checkForm}>
            <input type="text" value={getItem1} onChange={change1}></input>
            <p>{err1}</p>
            <input type="text" value={getItem2} onChange={change2}></input>
            <p>{err2}</p>
            <textarea type="text" onChange={change3}>{getContent}</textarea>
            <p></p>
            <select value={getOption} onChange={change4}>
                <option>Vui long chon</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <button>Login</button>
        </form>
        </>
    )
}

export default Form1;