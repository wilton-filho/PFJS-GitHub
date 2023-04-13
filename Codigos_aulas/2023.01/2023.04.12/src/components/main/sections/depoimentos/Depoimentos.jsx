import TituloSection from "../TituloSection";
import AvaliacaoCliente from "./AvalicaoCliente";

export default function Depoimentos() {

    const avaliacoes = [
        {   foto:"foto01.jpg", 
            nome:"Ana Bruck", 
            avaliacao01:"Estou muito feliz ...",  
            avaliacao02:"Recomendo essa corretora para todos ..."
        },
        {   foto:"foto02.jpg", 
            nome:"Dani Shutz", 
            avaliacao01:"Foi uma satisfação tão grande ...", 
            avaliacao02:"Adorei a minha aquisição ..."
        },
        {   foto:"foto03.jpg", 
            nome:"Bia Wolf", 
            avaliacao01:"Não poderia ter tido uma compra tão  ...",
            avaliacao02:"Espero que todos tenha a mesma sorte ..."
        }
    ]

    function showAvaliacoes() {
        let avaliacoesClientes = [];

        for(let i=0; i<avaliacoes.length; i++) {
            avaliacoesClientes.push(
                <AvaliacaoCliente 
                    foto={avaliacoes[i].foto}
                    nome={avaliacoes[i].nome}
                    avaliacao01={avaliacoes[i].avaliacao01}
                    avaliacao02={avaliacoes[i].avaliacao02}/>                
            );
        }

        return avaliacoesClientes;
    }

    return (
        <section>
            <TituloSection 
                titulo="Cliente felizes. Novos amigos ;)" 
                subtitulo="(DEPOIMENTOS DE ALGUNS CLIENTES REAIS)"/>

            {showAvaliacoes()}
        </section>
    )
}