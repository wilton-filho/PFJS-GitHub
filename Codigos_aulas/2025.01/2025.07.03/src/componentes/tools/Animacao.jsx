import { Fragment, useEffect } from "react";
import ScrollReveal from 'scrollreveal';

export default function Animacao({css_identifier}) {

    useEffect(() => {
        ScrollReveal({reset:true}).reveal(`${css_identifier}`, { 
            duration: 2000,
            scale:0.1,
            easing: 'ease-in',
            rotate: {x:0, y:0, z:180}
        });
    },[]);

    return (
        <Fragment/>
    )
}