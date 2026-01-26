function LoginButton(props){
    return(
        <div>
            <h1>Login</h1>
            <button onClick={props.onClick}>Login</button>
        </div>
    );
}

export default LoginButton;