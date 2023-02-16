// Refatorando o Exemplo08.js
import { useState, useEffect } from 'react';
import ShowUsers_Exemplo9 from './ShowUsers_Exemplo9';

const Exemplo8 = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(file => file.json())
            .then(content => {
                console.log(content.users)
                setUsers(content.users);
            });
    }, []);

    return (
        <>  
            {console.log("Inicio do componente")}
            <p>Dados dos clientes:</p>
            <ShowUsers_Exemplo9 usuarios={users}/>
            {console.log("Fim do componente")}
        </>
    )
}

export default Exemplo8;