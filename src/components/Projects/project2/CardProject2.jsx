//  MEU CSS
import './styleProject2.css';
import gsap from 'gsap';
import { useEffect } from 'react';

// FOTO DO PROJETO
import logoimg from '../../../assets/img/shortsSumary.jpeg'

// ICONS
import {TiHtml5} from 'react-icons/ti';
import {FaCss3Alt} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io5';

import Button from '../../Buttons/Button';




export const CardProject2 = () => {

  useEffect(() => {

    function animarCard2(element, eixoX, eixoY, elementRef, time) {
      gsap.fromTo(element, {
        opacity: 0,
        x: eixoX,
        y: eixoY,
      }, {
        opacity: 1,
        x: 0,
        y: 0,
        duration:time,
        scrollTrigger: {
          trigger: elementRef,
          start: "top center",
          end: "bottom center",
        }
      })
    }

    animarCard2('.left-info2', 200, -200, '.container-projects2', .5);
    animarCard2('.left-title2', 200, 0, '.container-projects2', .75);
    animarCard2('.left-description2', 200, 100, '.container-projects2', 1);
    animarCard2('.redes-sociais', -200, 100, '.container-projects2', 1.3);
    animarCard2('.container-aling2', -200, 200, '.container-projects2', 1.5);






    //  FUNÇÃO PARA DESFOCAR MINHA IMAGEM

  const myButton = document.getElementById('btn-project2');
  const myImg = document.querySelector('.photo-project2');

  myButton.addEventListener('mouseover', () => {
    myImg.classList.add('defoque');
  })
  myButton.addEventListener('mouseout', () => {
    myImg.classList.remove('defoque');
  });


  })
















  return (
    <div className='container-projects2'>
      <div className='container-right2' >
        <div className='container-aling2' >
          <img src={logoimg}  alt="" className='photo-project2' />
        </div>
        </div>






      <div className='container-left2'>
        <span className='left-info2' >#2</span>
        <h2 className='left-title2' >Shorts Summary</h2>


        <div className='left-description2' >
          <p className='description-text2' >Projeto desenvolvido utilizando as tecnologias HTML, CSS e JavaScript, no qual integrei uma API junto com uma inteligência artificial (IA). O objetivo principal é converter o áudio de vídeos curtos, como shorts, em texto de forma eficiente.</p>
        </div>
        <div className='redes-sociais'>
          <TiHtml5 size={40} color='#21697A' />
          <FaCss3Alt size={40} color='#21697A' />
          <IoLogoJavascript size={40} color='#21697A' />
          <Button title='Repositório' link={'https://github.com/DevGsBraga/SummaryShorts/tree/main/nlwia'} id={'btn-project2'}></Button>
        </div>
      </div>


      </div>


  )
}

