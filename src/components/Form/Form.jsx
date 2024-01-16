import './styleForm.css';
import emailjs from 'emailjs-com';

const MyForm = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {};
        formData.forEach((value, key) => {
          data[key] = value;
        });

        // Substitua com suas próprias chaves de API do Email.js
        const publicKey = 'MoQHvScPSmheckiyQ';
        const privateKey = 'SC8bXFhykPSPIGgmHIsmU';

        try {
          await emailjs.send('default_service', 'template_id', data, publicKey, privateKey);
          alert('Email enviado com sucesso!');
        } catch (error) {
          console.error('Erro ao enviar o email:', error);
        }
      };

  return (

    <div className="container-form">
        <div className='form-description'>

            <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" name="nome" required />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" required />
            </label>
            <br />
            <label>
                Mensagem:
                <textarea name="mensagem" required />
            </label>
            <br />
            <button type="submit">Enviar</button>
            </form>
        </div>
    </div>

  );
};

export default MyForm;
