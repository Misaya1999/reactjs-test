import { useState } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function Login1(){

    const [isToggle, setIsToggle] = useState(false)

    function handleLoginClick(){
        setIsToggle(!isToggle);
    }

    function handleLogoutClick(){
        setIsToggle(!isToggle);
    }

    function renderButton(){
        let button;
        if (isToggle){
            button = <LogoutButton onClick={handleLogoutClick} />
        }else{
            button = <LoginButton onClick={handleLoginClick} />
        }
        return button;
    }

    return(
        <div>
            {renderButton()}
        </div>
    );
}

export default Login1;