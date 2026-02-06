import info2 from "./A_Bai2"

function B_Bai2(){

    return(
        <div>
            <h1>Name: {info2.name}</h1>
            <p>Username: {info2.username}</p>
            <p>Email: {info2.email}</p>
            <p>Address: {info2.address.street}</p>
            <p>Phone: {info2.phone}</p>
            <p>Website: {info2.website}</p>
            <p>Company: {info2.company.name}</p>
            <p>{info2.company.catchPhrase}</p>
        </div>
    );
}

export default B_Bai2;