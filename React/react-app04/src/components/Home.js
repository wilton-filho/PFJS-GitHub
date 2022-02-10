import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <main>
                <section className="container column">
                    <div className="left">
                        <h1>Seja bem-vindo!</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus iure id eum rerum sed architecto eos laborum dolorum nostrum, repellendus itaque nihil modi quae fuga ipsum repellat alias quisquam.
                        Eius, quidem quas aperiam omnis aspernatur corrupti sit hic ratione! Repudiandae dolor modi velit sit nostrum ullam unde at incidunt labore tempora magni rem quis officia, eos inventore praesentium illo?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus iure id eum rerum sed architecto eos laborum dolorum nostrum, repellendus itaque nihil modi quae fuga ipsum repellat alias quisquam.
                        Eius, quidem quas aperiam omnis aspernatur corrupti sit hic ratione! Repudiandae dolor modi velit sit nostrum ullam unde at incidunt labore tempora magni rem quis officia, eos inventore praesentium illo?</p>

                        <h2>Portifólio</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus iure id eum rerum sed architecto eos laborum dolorum nostrum, repellendus itaque nihil modi quae fuga ipsum repellat alias quisquam.
                        Eius, quidem quas aperiam omnis aspernatur corrupti sit hic ratione! Repudiandae dolor modi velit sit nostrum ullam unde at incidunt labore tempora magni rem quis officia, eos inventore praesentium illo?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus iure id eum rerum sed architecto eos laborum dolorum nostrum, repellendus itaque nihil modi quae fuga ipsum repellat alias quisquam.
                        Eius, quidem quas aperiam omnis aspernatur corrupti sit hic ratione! Repudiandae dolor modi velit sit nostrum ullam unde at incidunt labore tempora magni rem quis officia, eos inventore praesentium illo? [<Link to="/portfolio">Leia mais</Link>]</p>

                        <h2>Sobre</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus iure id eum rerum sed architecto eos laborum dolorum nostrum, repellendus itaque nihil modi quae fuga ipsum repellat alias quisquam.
                        Eius, quidem quas aperiam omnis aspernatur corrupti sit hic ratione! Repudiandae dolor modi velit sit nostrum ullam unde at incidunt labore tempora magni rem quis officia, eos inventore praesentium illo?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus iure id eum rerum sed architecto eos laborum dolorum nostrum, repellendus itaque nihil modi quae fuga ipsum repellat alias quisquam.
                        Eius, quidem quas aperiam omnis aspernatur corrupti sit hic ratione! Repudiandae dolor modi velit sit nostrum ullam unde at incidunt labore tempora magni rem quis officia, eos inventore praesentium illo? [<Link to="/sobre">Leia mais</Link>]</p>

                        <h2>Fale Conosco</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus iure id eum rerum sed architecto eos laborum dolorum nostrum, repellendus itaque nihil modi quae fuga ipsum repellat alias quisquam.
                        Eius, quidem quas aperiam omnis aspernatur corrupti sit hic ratione! Repudiandae dolor modi velit sit nostrum ullam unde at incidunt labore tempora magni rem quis officia, eos inventore praesentium illo?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus iure id eum rerum sed architecto eos laborum dolorum nostrum, repellendus itaque nihil modi quae fuga ipsum repellat alias quisquam.
                        Eius, quidem quas aperiam omnis aspernatur corrupti sit hic ratione! Repudiandae dolor modi velit sit nostrum ullam unde at incidunt labore tempora magni rem quis officia, eos inventore praesentium illo? [<Link to="/faleconosco">Leia mais</Link>]</p>

                    </div>
                </section>
            </main>
        );
    }
}

export default Home;
