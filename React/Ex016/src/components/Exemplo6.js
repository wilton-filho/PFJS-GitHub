import { useState, useEffect } from 'react';

const Exemplo5 = () => {

    const [time, setTime] = useState(10);
    const [play, setPlay] = useState(false);

    useEffect(() => {
        if (play === true) {
            if (time <= 0) return;
            let idTime = setInterval(() => setTime(time - 1), 1000);
            return () => clearInterval(idTime);
        }
    }, [time, play]);

    return (
        <>
            <p>Cronometro regressivo: {time}</p>
            <button onClick={() => setPlay(true)}>Play</button>
        </>
    )
}

export default Exemplo5;