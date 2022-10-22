import './header1.css';

//img
import logo from '../img/logo.png'
import carrinho from '../img/carrinho.png'
import chat from '../img/chat.png'
import search from '../img/search.png'
import user from '../img/user.png'

export default function Header1(){

    return(
        <div className="header1Fundo">
            <div className='header1Noventa'>

            
                <img src={logo} className="header1Logo"/>

                <div className='header1Pesquisa'>
                    <input placeholder='Busque aqui' className='header1PesquisaInput'/>
                    <div className='header1BtSearch'>
                        <img src={search}/>
                    </div>
                </div>
                

                <div className='header1Box'>
                    <div className='header1MiniBox'>
                        <img src={user} className='header1MiniImg'/>
                        <p className='header1MiniTexto'>Meu Perfil</p>
                    </div>
                    <div className='header1MiniBox'>
                        <img src={chat} className='header1MiniImg'/>
                        <p className='header1MiniTexto'>Atendimento</p>
                    </div>
                    <div className='header1MiniBox header1MiniBoxCarrinho'>
                        <img src={carrinho} className='header1MiniImg'/>
                        <p className='header1MiniTexto'>Meu Carrinho</p>
                    </div>
                </div>
            

                

            </div>    
        </div>
    )
}