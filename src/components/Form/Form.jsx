import './styleForm.css';
import  EmailJSResponseStatus  from '@emailjs/browser';
import { useEffect } from 'react';
import gsap from 'gsap';

const MyForm = () => {

// VALIDAÇÃO DE FORMULÁRIO

  const sendEmail = (e) => {
    e.preventDefault();

    EmailJSResponseStatus.sendForm('meuIdservice', 'template_k5x5ych', e.target, 'cdtUm1lRVd31PkyAG')
      .then(() => {
          alert("Mensagem enviada com sucesso! Em breve retorno o contato!");
      }, (error) => {
          alert(error.text);
      });
      e.target.reset();
  };

// ANIMAÇÃO DO FORMULÁRIO



useEffect(() => {
  const tl = gsap.timeline({duration: 1});


  function animationForm(element, startX, startY, time) {
    tl.fromTo(element, {
        opacity: 0,
        x: startX,
        y: startY
    },{
        opacity: 1,
        x: 0,
        y: 0
    }, `${time}`)
}



animationForm(".description-title", 200, 0, .3);
animationForm(".gp-input1", 200, 0, .5);
animationForm(".gp-input", -200, 0, .7);
animationForm(".gp-input-msg", 0, 200, .9);
animationForm(".btn-3", 0, 200, 1.2);
});




  return (

    <div className="container-form">
          <div className='description-title'>
            <h2>Entre em contato</h2>
          </div>
          <div className='form-description'>
            <form className='forms' onSubmit={sendEmail}>
            <label>

                <input type="text" className='gp-input1' placeholder='Digite seu nome' name="nome" required />
            </label>
            <br />
            <label>

                <input type="email" className='gp-input' placeholder='Digite seu e-mail (exemplo@exemplo.com.br)' name="email" required />
            </label>
            <br />
            <label>
                <textarea name="mensagem" className='gp-input-msg' placeholder='Fique a vontade para deixar uma mensagem!' required />
            </label>
            <br />
            <div>
            <button type="submit" value={"Enviar"} className='btn-3' ><span>Enviar!</span></button>
            </div>
            </form>
        </div>
    </div>
  );
};

export default MyForm;
