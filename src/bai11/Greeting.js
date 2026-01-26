function HamTrue(){
    return (
        <div>
            Greeting "true"
        </div>
    )
}

function HamFalse(){
    return(
        <div>
            Greeting "false"
        </div>
    )
}

function Greeting(props){
    const xx = props.xx

    if (xx){
        return <HamTrue />;
    }
    return <HamFalse />;
}

export default Greeting;