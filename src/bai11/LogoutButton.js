function LogoutButton(props){
    return(
        <div>
            <h1>Logout</h1>
            <button onClick={props.onClick}>Logout</button>
        </div>    
    );
}

export default LogoutButton;