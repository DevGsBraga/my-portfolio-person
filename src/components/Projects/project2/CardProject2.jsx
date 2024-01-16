//  MEU CSS
import './styleProject2.css';
import gsap from 'gsap';
import { useEffect } from 'react';




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
        delay:time,
        scrollTrigger: {
          trigger: elementRef,
          start: "top center",
          end: "bottom center"
        }
      })
    }










    animarCard2('.left-info2', 200, -200, '.container-projects2', .5);
    animarCard2('.left-title2', 200, 0, '.container-projects2', .75);
    animarCard2('.left-description2', 200, 100, '.container-projects2', 1);
    animarCard2('.redes-sociais', -200, 100, '.container-projects2', 1.3);
    animarCard2('.container-aling2', -200, 200, '.container-projects2', 1.5);


  })











  return (
    <div className='container-projects2'>
      <div className='container-right2' >
        <div className='container-aling2' >
          <img src='https://github.com/DevGsBraga/GitFind/blob/main/src/assets/projeto.jpg?raw=true'  alt="" className='photo-project2' />
        </div>
        </div>






      <div className='container-left2'>
        <span className='left-info2' >Featured project</span>
        <h2 className='left-title2' >Example Project</h2>


        <div className='left-description2' >
          <p className='description-text2' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit dolore iste enim natus dicta quisquam modi ut ab quibusdam rerum praesentium asperiores iusto, nulla, a assumenda quae necessitatibus illo tempore.</p>
        </div>
        <div className='redes-sociais'>
          3 imagens das tecnologias
        </div>
      </div>


      </div>


  )
}

