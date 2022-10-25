import './footer.css'
import '../cssGlobal/global.css'

import wpp from '../img/wpp.png'
import insta from '../img/insta.png'
import maps from '../img/maps.png'
import email from '../img/email.png'
import telefone from '../img/telefone.png'

import Map from '../maps/map.js'

export default function Footer(){

    return(
        <div className='footerFundo'>
            
                <div className='setenta footer'>
                    <div className='menu todosFooter'>
                        <h4>Menu</h4>
                        <p>Início</p>
                        <p>Promoções</p>
                        <p>Praia</p>
                        <p>Fitness</p>
                        <p>Night</p>
                        <p>Quem Somos</p>
                    </div>



                <div className='emBaixo todosFooter'>
                    <div className='contato'>
                        <h4>Entre em Contato</h4>
                        <div className='cadaContato'>
                            <img src={wpp}/>
                            <p>552197162-1555</p>
                        </div>
                        <div className='cadaContato'>
                            <img src={telefone}/>
                            <p>+55 21 97162-1555</p>
                        </div>
                        <div className='cadaContato'>
                            <img src={email}/>
                            <p>supremoestilo@gmail.com</p>
                        </div>
                    </div>

                    <div className='siga'>
                        <h4>Siga-nos</h4>
                        <div className='cadaSiga'>
                            <img src={insta}/>
                            <p>@SupremoEstilo</p>
                        </div>   
                    </div>
                </div>

                <div className='endereco todosFooter'>
                        <h4>Endereço</h4>
                        <div className='cadaContato'>
                            <img src={maps}/>
                            <p>R. Piraquara 303, Realengo - RJ</p> 
                        </div>
                        <div className='map'>
                            <Map/>
                        </div>
                    </div>
                
               
            </div>

        <p className='direitos'>Todos os direitos Reservados a SupremoEstilo</p>        
        </div>
    
    )
}