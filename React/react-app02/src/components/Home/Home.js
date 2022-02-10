import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <section class="container column">
                <div class="left">
                    <h1>Seja bem-vindo!</h1>     
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nesciunt quidem expedita facilis accusamus laudantium, alias fugiat odit soluta perspiciatis dolores adipisci ipsum officiis eos aliquam? Ab inventore blanditiis amet.
                    Quasi, voluptatibus. Minima debitis dolorem facilis dolorum fuga architecto molestiae odit ipsum, iure, ducimus numquam voluptas suscipit nemo maiores dicta similique voluptates accusamus ex aliquam eius nostrum in quae dignissimos?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nesciunt quidem expedita facilis accusamus laudantium, alias fugiat odit soluta perspiciatis dolores adipisci ipsum officiis eos aliquam? Ab inventore blanditiis amet.
                    Quasi, voluptatibus. Minima debitis dolorem facilis dolorum fuga architecto molestiae odit ipsum, iure, ducimus numquam voluptas suscipit nemo maiores dicta similique voluptates accusamus ex aliquam eius nostrum in quae dignissimos?</p>
                    
                    <h2>Portfólio</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nesciunt quidem expedita facilis accusamus laudantium, alias fugiat odit soluta perspiciatis dolores adipisci ipsum officiis eos aliquam? Ab inventore blanditiis amet.
                    Quasi, voluptatibus. Minima debitis dolorem facilis dolorum fuga architecto molestiae odit ipsum, iure, ducimus numquam voluptas suscipit nemo maiores dicta similique voluptates accusamus ex aliquam eius nostrum in quae dignissimos?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nesciunt quidem expedita facilis accusamus laudantium, alias fugiat odit soluta perspiciatis dolores adipisci ipsum officiis eos aliquam? Ab inventore blanditiis amet.
                    Quasi, voluptatibus. Minima debitis dolorem facilis dolorum fuga architecto molestiae odit ipsum, iure, ducimus numquam voluptas suscipit nemo maiores dicta similique voluptates accusamus ex aliquam eius nostrum in quae dignissimos? <br/><Link to="/portfolio">[Leia mais]</Link></p>
                    
                    <h2>Sobre a empresa</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nesciunt quidem expedita facilis accusamus laudantium, alias fugiat odit soluta perspiciatis dolores adipisci ipsum officiis eos aliquam? Ab inventore blanditiis amet.
                    Quasi, voluptatibus. Minima debitis dolorem facilis dolorum fuga architecto molestiae odit ipsum, iure, ducimus numquam voluptas suscipit nemo maiores dicta similique voluptates accusamus ex aliquam eius nostrum in quae dignissimos?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nesciunt quidem expedita facilis accusamus laudantium, alias fugiat odit soluta perspiciatis dolores adipisci ipsum officiis eos aliquam? Ab inventore blanditiis amet.
                    Quasi, voluptatibus. Minima debitis dolorem facilis dolorum fuga architecto molestiae odit ipsum, iure, ducimus numquam voluptas suscipit nemo maiores dicta similique voluptates accusamus ex aliquam eius nostrum in quae dignissimos? <br/><Link to="/sobre">[Leia mais]</Link></p>
                    
                    <h2>Fale conosco</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nesciunt quidem expedita facilis accusamus laudantium, alias fugiat odit soluta perspiciatis dolores adipisci ipsum officiis eos aliquam? Ab inventore blanditiis amet.
                    Quasi, voluptatibus. Minima debitis dolorem facilis dolorum fuga architecto molestiae odit ipsum, iure, ducimus numquam voluptas suscipit nemo maiores dicta similique voluptates accusamus ex aliquam eius nostrum in quae dignissimos?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nesciunt quidem expedita facilis accusamus laudantium, alias fugiat odit soluta perspiciatis dolores adipisci ipsum officiis eos aliquam? Ab inventore blanditiis amet.
                    Quasi, voluptatibus. Minima debitis dolorem facilis dolorum fuga architecto molestiae odit ipsum, iure, ducimus numquam voluptas suscipit nemo maiores dicta similique voluptates accusamus ex aliquam eius nostrum in quae dignissimos? <br/><Link to="/faleconosco">[Leia mais]</Link></p>
                </div>
            </section>
        );
    }
}

export default Home;