
// MEU CSS
import './styleSkills.css';

// ICONS
import {IoLogoJavascript} from 'react-icons/io5';
import {FaReact} from 'react-icons/fa';
import {FaAngular} from 'react-icons/fa';
import {FaNode} from 'react-icons/fa';



// IMPORTE DA ANIMAÇÃO
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);





export const HardsSkills = () => {


    const titleH2Ref = useRef(null);
    const titleJavascriptRef = useRef(null);
    const titleReactRef = useRef(null);
    const titleAngularRef = useRef(null);
    const titleNodeRef = useRef(null);






    useEffect(() => {

        const h2 = titleH2Ref.current;
        const javascript = titleJavascriptRef.current;
        const react = titleReactRef.current;
        const angular = titleAngularRef.current;
        const node = titleNodeRef.current;


        function animarHardSkills(element, startX, startY, endX, endY, inicio, time) {
            gsap.fromTo(element, {
                opacity: 0,
                x: startX,
                y: startY,
            }, {
                opacity: 1,
                x:endX ,
                y:endY ,
                duration: time,
                scrollTrigger: {
                    trigger: inicio,
                    start: "top center",
                    bottom: "bottom center",
                }
            })
        }


        //  CHAMADA DAS ANIMAÇÕES
        animarHardSkills(h2, -200, 0, 0, 0, '.title-hardSkills', 0.5);
        animarHardSkills(javascript, -200, -200, 0, 0, '.title-hardSkills', 0.75);
        animarHardSkills(react, 0, 200,0 ,0, '.title-hardSkills', 0.95);
        animarHardSkills(angular, 0, -200,0, 0, '.title-hardSkills', 1.1);
        animarHardSkills(node, 200, -200,0,0, '.title-hardSkills', 1.3);
    })














  return (
   <>
   <h2 className='title-hardSkills' ref={titleH2Ref}>Hard Skills</h2>
<div className='dad-HardSkills'>
<div className='container_hardSkills'>
  <div className='hardSkill__Javascript' ref={titleJavascriptRef}>
      <IoLogoJavascript size={120} color='yellow' />
      <p>JavaScript</p>
      <span className='gp-description-skills'>Com sólido conhecimento em JavaScript, traduzo conceitos complexos em código coeso, oferecendo dinamismo e interatividade para otimizar a experiência do usuário na web.</span>

  </div>
  <div className='hardSkill__React' ref={titleReactRef}>
    <FaReact size={120} color='#00FFFF' />
      <p>React</p>
      <span className='gp-description-skills'>Especializado em React, desenvolvo interfaces que combinam elegância e eficiência, proporcionando experiências visuais cativantes e funcionais. <br /><br /> Essa Page e esse Card foi desenvolvida em React</span>
  </div>
  <div className='hardSkill__Angular' ref={titleAngularRef}>
    <FaAngular size={120} color='red' />
      <p>Angular 17</p>
      <span className='gp-description-skills'>Conhecedor do Angular, orquestro o desenvolvimento de aplicações complexas, unindo estrutura sólida e inovação para alcançar resultados excepcionais.</span>
  </div>
  <div className='hardSkill__NodeJs' ref={titleNodeRef}>
    <FaNode size={120} color='green' />
      <p>Node Js 20.0</p>
      <span className='gp-description-skills'>Conhecimento sólido em Node.js, construo servidores robustos que impulsionam aplicações, assegurando desempenho e eficiência notáveis em ambientes de produção.</span>
  </div>
</div>

</div>
   </>
  )
}
