import './linhaProdutos.css'
import '../cssGlobal/global.css'

import produto1 from '../imgProdutos/night.png'
import produto2 from '../imgProdutos/praia.png'
import produto3 from '../imgProdutos/fit.png'
import produto4 from '../imgProdutos/conjuntofitcolorido.png'
import produto5 from '../imgProdutos/maiobrasil-.png'
import produto6 from '../imgProdutos/conjuntopreto.png'
import produto7 from '../imgProdutos/bolsa.png'
import produto8 from '../imgProdutos/maioBrasil.png'
import produto9 from '../imgProdutos/vestidoverde.png'
import produto10 from '../imgProdutos/vestidorosaa.png'
import produto11 from '../imgProdutos/conjuntoGirl.png'
import produto12 from '../imgProdutos/biquiniBasicCoracao.png'

import Produtos from '../produtosProps/produtosProps'

export default function LinhaProdutos(){

    return(
        <div className='fundo'>
            <div className='oitenta'>
                <div className='linha'>
                    
                    <Produtos img={produto1} nomeProduto='Vestido NightStyle Rosa' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                    <Produtos img={produto2} nomeProduto='Maiô Brasil' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                    <Produtos img={produto3} nomeProduto='Conjunto Academia Laranja' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                    <Produtos img={produto4} nomeProduto='Conjunto Academia Roxo' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                </div>
                <div className='linha'>

                    <Produtos img={produto5} nomeProduto='Maiô Trançado Brasil' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                    <Produtos img={produto6} nomeProduto='Conjunto Night Preto' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                    <Produtos img={produto7} nomeProduto='Bolsa Rosa' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                    <Produtos img={produto8} nomeProduto='Maiô Colection Brasil' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                </div>
                <div className='linha'>

                    <Produtos img={produto9} nomeProduto='Vestido Basic Verde' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                    <Produtos img={produto10} nomeProduto='Body NightStyle Rosa' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                    <Produtos img={produto11} nomeProduto='Conjunto Basic Azul' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>
                    
                    <Produtos img={produto12} nomeProduto='Biquini Basic Corações' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                </div>
            </div>
        </div>
    )
}