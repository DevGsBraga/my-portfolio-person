import './styleindex.css';
import imgCat from '../assets/img/cat-error.png';

import { Link } from "react-router-dom"




export const PageNot = () => {
  return (
    <div className="container-page-not">
        <h1>ERROR 404</h1>
        <p className='description-not'>Ops! Parece que o explorador se perdeu no código. A página que você está procurando está em algum lugar por aqui. Vamos ajudá-lo a encontrar o caminho de volta!</p>
        <div className='container-img-not'>
        <img className='img-not' src={imgCat} alt="" />
        </div>
        <Link to={'/'}>Voltar ao site</Link>
    </div>
  )
}

