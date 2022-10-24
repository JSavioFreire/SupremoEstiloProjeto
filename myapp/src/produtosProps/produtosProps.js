import './produtosProps.css'


export default function Produtos(props){

    return(
        <div className='produtos'>
            <div>
                <img className='imgProduto' src={props.img}/>
                <div className='sobreProduto'>
                    <h2>{props.nomeProduto}</h2>
                    <div className='dePor'>
                        <p>De:</p>
                        <p>Por:</p>
                    </div>
                    <div className='valor'>
                        <p>R$ {props.valorAnterior}</p>
                        <h4>R$ {props.novoValor}</h4>
                    </div>
                    <p className='parcela'>{props.parcelas}</p>
                    
                    
                </div>
                
           </div>
        </div>
    )
}