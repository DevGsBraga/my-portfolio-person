// MEU CSS
import './styleProfile.css';

import ImgProfile from '../../assets/img/my-portfolio-img.png';
import  Button  from '../Buttons/Button';

// ICONS
import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

import { Link } from 'react-router-dom';




// IMPORTES ANIMAÇÕES
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';



function ContainerProfile() {
    // CONTS PARA DEFINER O TEMPO DE CADA ANIMAÇÃO
    const timeLine = gsap.timeline({duration:1});

    const animationSpanRef = useRef(null);
    const animationH2Ref = useRef(null);
    const animationPRef = useRef(null);
    const animationImgRef = useRef(null);
    const animationGitRef = useRef(null);
    const animationLinkedinRef = useRef(null);

    useEffect(() => {
        // ANIMAÇÃO DOS TITLES
        const spanAnimation = animationSpanRef.current;
        const h2Animation = animationH2Ref.current;
        const pAnimation = animationPRef.current;
        const imgAnimation = animationImgRef.current;
        const iconGit = animationGitRef.current;
        const linkedin = animationLinkedinRef.current;

        function animarTitles(element, interval, start, end) {
            timeLine.fromTo(element, {
                opacity: 0,
                x: start,
            },{
                opacity: 1,
                x: end
            }, `${interval}`)
        }

        animarTitles(spanAnimation, 0.50, -100,0);
        animarTitles(h2Animation, 0.75, -100,0);
        animarTitles(pAnimation, 0.95, -100,0);
        animarTitles(imgAnimation, 1.1, 100,0);
        animarTitles(iconGit, 1.3, 200, 0);
        animarTitles(linkedin, 1.5, 200, 0);
    })


    return(
        <>

        <main className='container__profile'>
            <div className='profile__informations'>
                <span ref={animationSpanRef}>Olá, sejam bem vindo(a) ao meu portfólio. Me chamo</span>
                <h2 className='my-name' ref={animationH2Ref}>Gabriel <b className='bold-name'>Braga.</b> </h2>
                <p className='my-description' ref={animationPRef}>Sou um entusiasta da programação em constante evolução, focado no universo do Desenvolvimento Front-end. <br /><br /> Ao longo dos últimos 9 meses, mergulhei nos estudos, especialmente em React e Javascript, e adquiri habilidades sólidas em diversas tecnologias, como React, Angular, Typescript, HTML, CSS, Bootstrap, Git, GitHub, Node.js, API Rest e Responsividade. <br /><br />
                Minha jornada incluiu uma experiência de quatro meses como Freelancer, onde tive o prazer de entregar soluções não apenas eficazes, mas também visualmente atraentes. Sou movido pela proatividade, comunicação efetiva, capacidade de adaptação e um compromisso sólido com prazos e entregas.</p>
                <div className='cv-redes-socias'>
                <Button title={'Download CV'} link={'https://docs.google.com/document/d/10PgXk3cNKuewCwUQtThUlB3EntL5lfwQxgOccJexG3U/edit?usp=sharing'}></Button>
                <div className='redes'>
                <Link ref={animationGitRef} className='link-redes1' to={'https://github.com/DevGsBraga?tab=repositories'} target='_blank'>
                    <FaGithub size={30} color='#22B2A9' />
                </Link>
                <Link ref={animationLinkedinRef} className='link-redes' to={'https://www.linkedin.com/in/gabriel-braga-dev/'} target='_blank'>
                <FaLinkedin size={30} color='#22B2A9'/>

                </Link>

                </div>

                </div>
            </div>
            <div className='profile__imagem'>
                <img ref={animationImgRef} src={ImgProfile} alt='Foto de perfil com a blusa preta' className='imagem-profile' title='Minha foto' />
            </div>
        </main>













        </>
    )
}


export default ContainerProfile;
