import { useState, useEffect } from 'react';

const Exemplo6 = () => {

    const [time, setTime] = useState(10);
    const [play, setPlay] = useState(false);

    useEffect(() => {
        //console.log(play);
        if (play === true) {
            if (time <= 0) return;
            const idTime = setInterval(() => setTime(time - 1), 1000);
            return () => clearInterval(idTime);
        }
    }, [time, play]);

    return (
        <>
            <p>Cronometro regressivo: {time}</p>
            <button onClick={() => setPlay(true)}>Play</button>
            <button onClick={() => setPlay(false)}>False</button>
        </>
    )
}

export default Exemplo6;