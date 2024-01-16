
// MEU CSS
import './styleSkills.css';

// IMPORTE DA ANIMAÇÃO
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);


function HardSkills() {



    //ANIMAÇÃO DE SCROLL DAS MINHAS HARDsKILLS
    useEffect(() => {


        gsap.fromTo('.title-hardSkills', {
            opacity: 0,
            y: -100
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.dad-HardSkills',
                start: 'top 80% center',
                end: 'bottom center',
            }
        })



        gsap.fromTo('.hardSkill__Javascript', {
            opacity: 0,
            x: -100,
        }, {
            opacity:1,
            x: 0,
            duration:1.5,
            scrollTrigger: {
                trigger: '.dad-HardSkills',
                start: 'top 80% center',
                end: 'bottom center',
            }
        },

        gsap.fromTo('.hardSkill__React', {
            opacity: 0,
            y: 100,
        }, {
            opacity:1,
            y: 0,
            duration:1.8,
            scrollTrigger: {
                trigger: '.dad-HardSkills',
                start: 'top 80% center',
                end: 'bottom center',
            }
        },

        gsap.fromTo('.hardSkill__Angular', {
            opacity: 0,
            y: -100,
        }, {
            opacity:1,
            y: 0,
            duration:2.2,
            scrollTrigger: {
                trigger: '.dad-HardSkills',
                start: 'top 80% center',
                end: 'bottom center',
            }
        },

        gsap.fromTo('.hardSkill__NodeJs', {
            opacity: 0,
            x: 100,
        }, {
            opacity:1,
            x: 0,
            duration:2.5,
            scrollTrigger: {
                trigger: '.dad-HardSkills',
                start: 'top 80% center',
                end: 'bottom center',
            }

        })))

        )
    } );











    return(
    <>
        <h2 className='title-hardSkills'>Hard Skills</h2>
    <div className='dad-HardSkills'>
    <div className='container_hardSkills'>
        <div className='hardSkill__Javascript'>
            <img src='https://bognarjunior.files.wordpress.com/2018/01/1crcyaithv7aiqh1z93v99q.png' className='gp-img-skills' alt='' title='Minhas HardsSkills em Javascript' />
            <p>JavaScript</p>
            <span className='gp-description-skills'>Com sólido conhecimento em JavaScript, traduzo conceitos complexos em código coeso, oferecendo dinamismo e interatividade para otimizar a experiência do usuário na web.</span>

        </div>
        <div className='hardSkill__React'>
            <img src='https://bognarjunior.files.wordpress.com/2018/03/if_react-js_logo_1174949.png' className='gp-img-skills' alt='' title='Minhas HardsSkills em React' />
            <p>React</p>
            <span className='gp-description-skills'>Especializado em React, desenvolvo interfaces que combinam elegância e eficiência, proporcionando experiências visuais cativantes e funcionais. <br /><br /> Essa Page e esse Card foi desenvolvida em React</span>
        </div>
        <div className='hardSkill__Angular'>
            <img src='https://images.prismic.io/blogadevindev/58129589-de25-4254-99a9-507859e01db4_angular-logo.png?auto=compress,format' className='gp-img-skills' alt='' title='Minhas HardsSkills em Angular' />
            <p>Angular 17</p>
            <span className='gp-description-skills'>Conhecedor do Angular, orquestro o desenvolvimento de aplicações complexas, unindo estrutura sólida e inovação para alcançar resultados excepcionais.</span>
        </div>
        <div className='hardSkill__NodeJs'>
            <img src='https://chris-noring.gallerycdn.vsassets.io/extensions/chris-noring/node-snippets/1.3.3/1636325666317/Microsoft.VisualStudio.Services.Icons.Default' className='gp-img-skills' alt='Imagem de NodeJs' title='Minhas HardsSkills em NodeJs' />
            <p>Node Js 20.0</p>
            <span className='gp-description-skills'>Conhecimento sólido em Node.js, construo servidores robustos que impulsionam aplicações, assegurando desempenho e eficiência notáveis em ambientes de produção.</span>
        </div>
    </div>

    </div>













    </>
    )
  }


  export default HardSkills;
