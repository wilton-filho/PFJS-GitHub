
// Opção 1: Componente sem uso de props
const Nome = () => { 
    return (
        <p>Nome: Wilton Filho</p>
    );
}

// Opção 2: Componente com uso de props
// O nome do parâmetro "props" pouco importa
/*const Nome = (props) => { 
    return (
        <p>Nome: {props.name}</p>
    );
}*/

// Opção 3: Componente: varios valores passados por parâmetro
// O nome do parâmetro "props" pouco importa
/*const Nome = (props) => { 
    return (
        //props.name = "Maria"; // Não pode, pois props é somente leitura
        <p>Nome: {props.name} {props.surname}</p>
    );
}*/

// Opção 4: Passando atributos para o componente usando struct do JS
//const Nome = ({surname, name, age}) => { // a ordem não importa
/*const Nome = ({name, surname, age}) => { 
    return (
        <p>Nome: {name} {surname} e Idade: {age}</p>
    );
}*/

// Opção 5: Adicionando funções ao componente
/*const Nome = (props) => { 

    const Maiusculo = (texto) => {
        return texto.toUpperCase();
    }

    const getFullName = () => {
        return props.name + " " + props.surname;
    }

    return (
        <p>Nome: {Maiusculo(getFullName())}</p>
    );
}*/

// Opção 6: definição de tipo de dados para props, props obrigatório, props com valor default
/*import PropTypes from 'prop-types';
const Nome = (props) => {
    return (
        <p>Nome: {props.name}</p>
    )
}
Nome.propTypes = {
    name: PropTypes.string.isRequired
}*/
// Libere o comentário abaixo quando for chamar o componente assim <Nome/>
// Nome.defaultProps = {
//     name: 'Não informado'
// }

export default Nome;