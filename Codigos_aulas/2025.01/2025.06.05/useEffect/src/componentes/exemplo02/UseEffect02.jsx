import React, { useEffect, useState } from 'react';
import style from './UseEffect02.module.css';

function UseEffect02() {

    const [usuarios, setUsuarios] = useState(null);

    useEffect(() => {
        fetch('https://wilton-filho.github.io/PFJS-GitHub/APIs/fetch/versao01/04/js/users.json')
            .then(response => response.json())
            .then(data => setUsuarios(data.users))
    }, []);

    function showRanking() {
        return (
            <ul>
                {usuarios.map(user => <li><span className={style.nome}>{user.name}</span> ({user.level}: {user.score})</li>)}
            </ul>
        )
    }

    return (
        <>
            <h2>Ranking:</h2>
            {usuarios && showRanking()}
        </>
    );
}

export default UseEffect02;