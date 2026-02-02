function B_Bai1(props){
    const info = props.info;

    return(
        <>
        {info.map((user) => (
            <li key={user.id}>
                <h1>Name: {user.name}</h1>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Address: {user.address.street}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p>Company: {user.company.name}</p>
                <p>{user.company.catchPhrase}</p>
               
            </li>
        ))}
        
        </>
    )
}

export default B_Bai1;