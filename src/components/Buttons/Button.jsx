import './styleButton.css';





// eslint-disable-next-line react/prop-types
const Button = ({ title, link, id }) => {
  return (
    <div className="container-button">
    <a href={link} className="button"  target='_blank' rel='noreferrer' id={id}>
      {title}
    </a>
    </div>
  )
}

export default Button;
