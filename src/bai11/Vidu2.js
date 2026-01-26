import Mailbox from "./Mailbox";

function Vidu2(){
    const message = ['reactjs', 'angualr', 'vue', 'nest']

    return(
        <div>
            {/* Truyền biến message sang component Mailbox dưới tên xx */}
            <Mailbox xx = {message} /> 
        </div>
    );
}

export default Vidu2;