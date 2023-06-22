import { Link } from "react-router-dom"
import TituloPrincipal from "../../componentes/TituloPrincipal"
import { formatador } from "../../utils/formatador-moeda"
import { AbBotao } from "ds-alurabooks"
import ItemCarinho from "./ItemCarinho"
import './Carrinho.css'
import { useCarrinhoContext } from "../../contextApi/carrinho"
import LoadingCarrinho from "../../componentes/LoadingCarrinho"

const Carrinho = () => {
    const { carrinho, carregando } = useCarrinhoContext()
    return (<section className="pagina-carrinho">
        {carregando && <LoadingCarrinho />}
        <TituloPrincipal texto="Minha Sacola" />
        <div className="conteudo">
            <h4 className="titulo-secundario">
                Itens selecionados
            </h4>
            <div>
                {carrinho?.itens.map((item, index) =>
                    <ItemCarinho key={index} item={item} />)}
            </div>
            <div>
                <Link to='/'>Continuar comprando</Link>
            </div>
            <footer>
                <ul>
                    <li>Total de compra</li>
                    <li><strong>{formatador.format(carrinho?.total || 0)}</strong></li>
                    <li>
                        <AbBotao texto="Finalizar compra" />
                    </li>
                </ul>
            </footer>
        </div>
    </section>)
}

export default Carrinho