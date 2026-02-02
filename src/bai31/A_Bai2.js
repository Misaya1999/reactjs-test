import B_Bai2 from "./B_Bai2";

function A_Bai2(){
    const info2 = 
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
            }
        }


    return (
        <B_Bai2 info={info} />
    )
}

export default A_Bai2;