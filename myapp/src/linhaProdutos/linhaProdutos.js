import './linhaProdutos.css'
import '../cssGlobal/global.css'
import produto1 from '../img/night.png'

import Produtos from '../produtosProps/produtosProps'

export default function LinhaProdutos(){

    return(
        <div className='fundo'>
            <div className='setenta'>
                <div className='linha'>
                    
                    <Produtos img={produto1} nomeProduto='Vestido NightStyle Rosa' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                    <Produtos img={produto1} nomeProduto='Vestido NightStyle Rosa' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                    <Produtos img={produto1} nomeProduto='Vestido NightStyle Rosa' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                    <Produtos img={produto1} nomeProduto='Vestido NightStyle Rosa' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                </div>
                <div className='linha'>

                    <Produtos img={produto1} nomeProduto='Vestido NightStyle Rosa' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                    <Produtos img={produto1} nomeProduto='Vestido NightStyle Rosa' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                    <Produtos img={produto1} nomeProduto='Vestido NightStyle Rosa' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                    <Produtos img={produto1} nomeProduto='Vestido NightStyle Rosa' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                </div>
                <div className='linha'>

                    <Produtos img={produto1} nomeProduto='Vestido NightStyle Rosa' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                    <Produtos img={produto1} nomeProduto='Vestido NightStyle Rosa' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                    <Produtos img={produto1} nomeProduto='Vestido NightStyle Rosa' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>
                    
                    <Produtos img={produto1} nomeProduto='Vestido NightStyle Rosa' valorAnterior='129,99' novoValor='99,90' parcelas='2x sem juros'/>

                </div>
            </div>
        </div>
    )
}