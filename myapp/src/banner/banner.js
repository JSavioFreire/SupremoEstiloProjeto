import './banner.css'
import ControlledCarousel from './fotoBanner'
import '../cssGlobal/global.css'

//img
import caminhao from '../img/caminhao.png'
import card from '../img/card.png'
import seg from '../img/seguranca.png'

export default function Banner(){

    return(
        <div className='fundo'>
            <div className='flex setenta'>
                <div className='banners'>
                    <ControlledCarousel />
                </div>

                <div className='boxGiant'>
                    <div className='boxMenor'>
                        <img src={caminhao}/>
                        <p>Entregamos para todo o Brasil</p>
                    </div>
                    <div className='boxMenor'>
                        <img src={card}/>
                        <p>Parcelamos em até 6x no Cartão</p>
                    </div>
                    <div className='boxMenor'>
                        <img src={seg}/>
                        <p>Site 100% Seguro</p>
                    </div>
                </div>
            </div>
   
        </div>
    )
}