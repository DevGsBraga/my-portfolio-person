// MEU CSS
import './styleProfile.css';

import ImgProfile from '../../assets/img/my-photo-teste.png';
import  Button  from '../Buttons/Button';


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

    useEffect(() => {
        // ANIMAÇÃO DOS TITLES
        const spanAnimation = animationSpanRef.current;
        const h2Animation = animationH2Ref.current;
        const pAnimation = animationPRef.current;
        const imgAnimation = animationImgRef.current;

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
    })


    return(
        <>

        <main className='container__profile'>
            <div className='profile__informations'>
                <span ref={animationSpanRef}>Olá, sejam bem vindo(a) ao meu portfólio. Me chamo</span>
                <h2 className='my-name' ref={animationH2Ref}>Gabriel <b className='bold-name'>Braga.</b> </h2>
                <p className='my-description' ref={animationPRef}>Desenvolvedor Front-end com 9 meses de estudos, especializado em Javascript e Angular. Habilidades técnicas incluem React, Typescript, HTML, CSS, Bootstrap, Git, GitHub, Node.js, API Rest e Responsividade. <br /> <br /> Experiência de quatro meses como Freelancer, entregando soluções eficazes e visualmente atraentes. Proativo, comunicativo, adaptável e responsável, busco crescimento contínuo. Determinado a expandir conhecimentos e aprofundar expertise em tecnologias front-end. Paixão pela programação e entusiasmo para enfrentar novos desafios.</p>
                <Button title={'Download CV'}></Button>
            </div>
            <div className='profile__imagem'>
                <img ref={animationImgRef} src={ImgProfile} alt='Foto de perfil com a blusa preta' className='imagem-profile' title='Minha foto' />
            </div>
        </main>













        </>
    )
}


export default ContainerProfile;
