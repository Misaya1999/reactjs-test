import { useState } from "react";

function Test() {

  // const: khai báo biên cố đinh

  // luu gia tri vao bien state (dung dc trong 1 component )
  const [getItem, setItem] = useState(123)

  const [getItem1, setItem1] = useState(123)

  const [getItem2, setItem2] = useState(true)

  const [getItem3, setItem3] = useState(true)

  function thaydoi() {
    setItem(456)
  }
  function toggle() {
    setItem1(getItem1 == 123 ? 456 : 123)
  }
  function thaydoi2() {
    setItem2(false)
  }
  function thaydoi3() {
    setItem3(!getItem3)
  }

  return (
    <>
      <h1>xử lý sự kiện: {getItem}</h1>
      <button onClick={thaydoi}>click</button>

      <h1>xử lý sự kiện (toggle): {getItem1}</h1>
      <button onClick={toggle}>click</button>

      <h1>thuật toán 3 ngôi</h1>
      <button onClick={thaydoi2}>click</button>
      {getItem2 == true ? "đang là true" : "đang là false"}

      <h1>thuật toán 3 ngôi (toggle)</h1>
      <button onClick={thaydoi3}>click</button>
      {getItem3 == true ? "đang là true" : "đang là false"}
      
    </>

  );
}
   
export default Test;
