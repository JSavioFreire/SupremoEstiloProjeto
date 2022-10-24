import './linhaProdutos.css'
import '../cssGlobal/global.css'
import produto1 from '../img/night.png'

import Produtos from '../produtosProps/produtosProps'

export default function LinhaProdutos(){

    return(
        <div className='fundo'>
            <div className='setenta'>
                <div className='linha'>
                    <Produtos img={produto1}/>
             
                </div>
            </div>
        </div>
    )
}