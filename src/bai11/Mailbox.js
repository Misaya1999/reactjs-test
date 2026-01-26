function Mailbox(props){
    {/* props là dữ liệu truyền từ component cha xuống */}
    const xx = props.xx  
    return(
        <div>
            <h1> Hello </h1>    

            {/* toán tử &&: Điều kiện khi xx > 0 thì mới render thẻ h2 */}
            {xx.length > 0 &&
                <h2>
                    you have {xx.length} unread message
                </h2>
            }
        </div>
    );
}

export default Mailbox;