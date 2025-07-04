import React, { useEffect, useState } from 'react';
import style from './ProvaSocial.module.css';

function ProvaSocial() {

    const [users, setUsers] = useState(null);
    
    useEffect(()=>{
        fetch('https://wilton-filho.github.io/PFJS-GitHub/APIs/fetch/versao01/03/js/users.json')
            .then(response => response.json())
            .then(dados => setUsers(dados.users))
    },[]);

    function showUsers() {
        return (
            <>
            {users.map(user => <div>{user.name} ({user.level}:{user.score})</div>)}   
            </>
        )
    }

    return (
        <section>
            <h2>Prova social</h2>
            <div className={style.container}>
                {users && showUsers()}
            </div>
        </section>
    );
}

export default ProvaSocial;