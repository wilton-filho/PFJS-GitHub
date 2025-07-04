import React, { useState, useEffect } from 'react';

function UseEffect01() {

  const [cont1, setCont1] = useState(0);
  const [cont2, setCont2] = useState(0);

  useEffect(()=>{
    console.log(Math.random());
//   })
//   }, [])
//   }, [cont1])
  }, [cont1, cont2])


  return (
    <>
      <form action="">
        <input type="button" onClick={()=>setCont1(cont1+1)} value="Incrementar +1"/>
        <input type="button" onClick={()=>setCont2(cont2+2)} value="Incrementar +2"/>
      </form>

      <p>Contador 1: {cont1}</p>
      <p>Contador 2: {cont2}</p>
    </>
  );
}

export default UseEffect01;