import style from './Produto.module.css';
import PropTypes from 'prop-types';

const Produto = (props) => {

    const desconto = () => {
        if (props.desconto > 0) return <p>Desconto:{props.desconto}%</p>;
        else return <p>Parcele em até 10x sem juros</p>;
    }
    const corpoComponente = () => {
        return (
            <>
                <img src={props.img} alt=""/>
                <p className={style.nomeProduto}>{props.nome}</p>
                <p>{props.valor}</p>
                {/* 2ª Forma condicional: uso de função */}
                {desconto()}
                {/* 3ª Forma condicional: notação simplificada do React */}
                {props.desconto > 0 && (
                    <p>Use CUPOM{props.desconto}</p>
                )}
            </>
        );
    }
    return(
        <>
            {/* 1ª Forma condicional: uso do operador ternário */}
            {props.destaque === true ? 
                <div className={style.boxProduto+ ' ' +style.destaqueProduto}>
                    {corpoComponente()}
                </div>
                :
                <div className={style.boxProduto}>
                    {corpoComponente()}
                </div>
            }
        </>
    );
}

Produto.propTypes = {
    desconto: PropTypes.number
}
Produto.defaultProps = {
    desconto: 0
}

export default Produto;