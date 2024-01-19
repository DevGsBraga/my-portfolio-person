//  MEU CSS
import './styleProject1.css';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

// ICONS
import {TiHtml5} from 'react-icons/ti';
import {FaCss3Alt} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io5';



import Button from '../../Buttons/Button';




export const CardProject = () => {

  const animationSpanref = useRef(null);
  const animationH2ref = useRef(null);
  const animationPref = useRef(null);
  const animationImgref = useRef(null);
  const animationTechRef = useRef(null);

  useEffect(() => {
   const timeLine = gsap.timeline({duration: 0.50})



    const span = animationSpanref.current;
    const h2 = animationH2ref.current;
    const p = animationPref.current;
    const img = animationImgref.current;
    const tech = animationTechRef.current;

    function animationTitles(element, start, end) {


      timeLine.fromTo(element, {
        opacity: 0,
        x:start
      },{
        opacity: 1,
        x:end
      })

    }




    animationTitles(span, -100, 0);
    animationTitles(h2, 100, 0)
    animationTitles(tech, 100, 0);
    animationTitles(img, 100, 0);


    function animationTitlesEixoY(element, start, end) {
      timeLine.fromTo(element, {
        opacity: 0,
        y:start,
      },{
        opacity: 1,
        y:end

      })
    }


    animationTitlesEixoY(p, 100, 0);


    //  FUNÇÃO PARA DESFOCAR MINHA IMAGEM

    const butao = document.getElementById('btn-project');
    const imgDesfocada = document.querySelector('.photo-project');
    butao.addEventListener('mouseover', () => {
      imgDesfocada.classList.add('defoque');
    })
    butao.addEventListener('mouseout', () => {
      imgDesfocada.classList.remove('defoque');
    })
  })


















  return (
    <div className='container-projects'>
      <div className='container-left'>
        <span className='left-info' ref={animationSpanref}>#1</span>
        <h2 className='left-title' ref={animationH2ref}>Projeto GitFind</h2>


        <div className='left-description' ref={animationPref}>
          <p className='description-text' >O projeto consiste em desenvolver uma aplicação ou script que utilize a API do GitHub para buscar dinamicamente os repositórios públicos de um usuário específico. A aplicação deve permitir autenticação, consulta à API para obter informações sobre os repositórios, e exibição dos resultados de forma interativa. O objetivo é criar uma ferramenta que atualize dinamicamente a lista de repositórios conforme o usuário interage com a aplicação.</p>
        </div>
        <div className='user-skills' ref={animationTechRef}>
          <TiHtml5 size={40} color='#21697A' />
          <FaCss3Alt size={40} color='#21697A' />
          <IoLogoJavascript size={40} color='#21697A' />
          <Button title={'Repositório'} link={'https://github.com/DevGsBraga/GitFind'} id={'btn-project'}></Button>
        </div>
      </div>

      <div className='container-right' >
        <div className='container-aling' ref={animationImgref}>
          <img src='https://github.com/DevGsBraga/GitFind/blob/main/src/assets/projeto.jpg?raw=true'  alt="Projeto GitFind" className='photo-project' />
        </div>

        </div>
      </div>
  )
}

