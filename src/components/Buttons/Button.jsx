import './styleButton.css';



import gsap from 'gsap';
import { useEffect, useRef } from 'react';

// eslint-disable-next-line react/prop-types
const Button = ({ title, link, id }) => {
    const animationButtonRef = useRef(null);


    useEffect(() => {
        const button = animationButtonRef.current;



        function animarButton(element, start, end) {
        gsap.fromTo(element, {
            opacity: 0,
            x: start,
            y: 100
        }, {
            opacity: 1,
            x: end,
            y: 0,
            duration: 2
        })
    }



    animarButton(button, -100, 0);

});






  return (
    <div className="container-button" ref={animationButtonRef}>
    <a href={link} className="button" id={id}>
      {title}
    </a>
    </div>
  )
}

export default Button;
