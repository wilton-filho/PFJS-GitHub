import style from './BoxProdutos.module.css';
import Produto from './Produto';

const BoxProdutos = () => {
    return(
        <div className={style.boxProdutos}>
            <Produto img="./img/celular.jpg" nome="Samsung V10" valor="R$3.000,00" destaque={true} desconto={20}/>
            <Produto img="./img/fone.jpg" nome="Miao L550" valor="R$800,00" destaque={false} desconto={10}/>
            <Produto img="./img/fone.jpg" nome="Miao L550" valor="R$800,00" destaque={true} desconto={15}/>
            {/* Repare que o Produto abaixo está sendo chamado sem o atributo desconto (proposital para o componente tratá-to) */}
            <Produto img="./img/celular.jpg" nome="Samsung V10" valor="R$3.000,00" destaque={false}/>
        </div>
    );
}
export default BoxProdutos;