import { useState, useEffect } from 'react';

const Exemplo8 = () => {

    const [users, setUsers] = useState([]);

    // A primeira execução de useEffect irá ocorrer após a renderização do componente (return abaixo). 
    // Logo após, será executado sempre após as próximas renderizações. Neste exemplo, após clicar sobre o btn
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(file => file.json())
            .then(content => {
                console.log(content.users)
                setUsers(content.users);
            });
    }, []);

    const showUsers = () => {
        return users.map(user => {
            return <div key={user.id}>{user.firstName} {user.lastName}</div>;    
        });
    }

    return (
        <>  
            {console.log("Inicio do componente")}
            <p>Dados dos clientes:</p>
            {showUsers()}
            {console.log("Fim do componente")}
        </>
    )
}

export default Exemplo8;