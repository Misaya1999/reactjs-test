function Map(props){
    const numbers = props.numbers;

    return (
        <>
        {numbers.map((number) => (
            <li key={number}>{number}</li>
        ))}
        </>
    );
}

export default Map;