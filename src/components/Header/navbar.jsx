// MEU CSS
import './styleHeader.css';

import logoPng from '../../assets/img/logo.png';

import { Link } from 'react-router-dom';


import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const NavBar = () => {
    const animationRef = useRef(null);
    const animationImgRef = useRef(null);
    const animationListRef = useRef(null);
    const animationListRef2 = useRef(null);
    const animationListRef3 = useRef(null);

    useEffect(() => {
        // CONSTANTE PARA CRIAR UMA TIMELINE QUE VAI DEFINIR UM PADRÃO DE TEMPO ENTRE AS ANIMAÇÕES.
        const timeLine = gsap.timeline({duration:1})

        // ANIMAÇÕES
        const titleAnimation = animationRef.current;
        const imgAnimation = animationImgRef.current;
        const listAnimation = animationListRef.current;
        const listAnimation2 = animationListRef2.current;
        const listAnimation3 = animationListRef3.current;

        function animation(animation, time) {
            timeLine.fromTo(animation, {
                opacity: 0,
                y: -100
            },{
                opacity: 1,
                y: 0
            }, `${time}`)
        }

        animation(titleAnimation, 0.30);
        animation(imgAnimation, 0.50);
        animation(listAnimation, 0.70);
        animation(listAnimation2, 0.90);
        animation(listAnimation3, 1);
    })







const navRef = useRef(null);

  useEffect(() => {
    const navElement = navRef.current;

    gsap.to(navElement, {
        backgroundColor: '#000000',
        height: 50,
        duration:0.1,
        scrollTrigger: {
          trigger: navElement,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }, []);








  return (
    <>
    <nav className='container__nav' ref={navRef}>
            <div className='nav-title' ref={animationRef}>
                <h1>GB-DevGsBraga</h1>
            </div>
            <div ref={animationImgRef}>
                 <img src={logoPng} alt='' className='img-nav' />
            </div>
            <div className='container__list'>
                <ul className='list__navegacao'>
                    <li ref={animationListRef}>
                       <Link to={'/'} className='gp-links'>Home</Link>
                    </li>
                    <li ref={animationListRef2}>
                    <Link to={'/projects'} className='gp-links'>Projects</Link>
                    </li>
                    <li ref={animationListRef3}>
                    <Link to={'/contacts'} className='gp-links'>Contacts</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

