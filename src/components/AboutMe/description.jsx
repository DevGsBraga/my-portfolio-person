
// MEU CSS
import './styleDescription.css';

// IMPORTE DE ANIMAÇÃO
import { gsap } from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {

    // ANIMAÇÃO DE SCROLL
    useEffect(() => {
        gsap.to(".container__animation", {

            opacity: 1,
            y: -50,
            duration:1,
            scrollTrigger: {
                trigger:".container__about",
                start: "top center",
                end: "bottom center"
            }
        })
    })







    return(
        <>
        <div className='container__about' >
            <div className='container__animation'>
            <h3 className='about-title'>
                About me
            </h3>
            <div className='container__description'>
            <p className='about-description'>
            Desenvolvedor Front-end com 9 meses de estudos, especializado em Javascript e Angular. Habilidades técnicas incluem React, Typescript, HTML, CSS, Bootstrap, Git, GitHub, Node.js, API Rest e Responsividade. Experiência de quatro meses como Freelancer, entregando soluções eficazes e visualmente atraentes. Proativo, comunicativo, adaptável e responsável, busco crescimento contínuo. Determinado a expandir conhecimentos e aprofundar expertise em tecnologias front-end. Paixão pela programação e entusiasmo para enfrentar novos desafios.
            </p>
            </div>
            </div>
        </div>













        </>
    )
}


export default AboutMe;
