import { Link } from 'react-router-dom';
import './Footer.css';

// ASSENTS
import Dnc_logo from '../../assets/dnc_logo.svg'
import Face from '../../assets/facebook-icon.svg'
import Insta from '../../assets/insta-icon.svg'
import Linke from '../../assets/linkedin-icon.svg'
import Twit from '../../assets/twitter-icon.svg'
import Brazuca from '../../assets/brazuca-icon.svg'
import Usa from '../../assets/usa-icon.svg'

function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='d-flex'>
                    <div className='footer-logo-col'>
                        <Link to='/'><img src={Dnc_logo} alt="erro" /></Link>
                        <p className='grey-color'>A escola que prepara você para as <br />
                            profissões em alta no mercado de <br />trabalho.</p>
                        <div className='d-flex social-links'>
                            <a href="https://github.com/FLECHA777" target='_blank'><img src={Face} alt="" /></a>
                            <a href="https://github.com/FLECHA777" target='_blank'><img src={Twit} alt="" /></a>
                            <a href="https://github.com/FLECHA777" target='_blank'><img src={Linke} alt="" /></a>
                            <a href="https://github.com/FLECHA777" target='_blank'><img src={Insta} alt="" /></a>

                        </div>
                    </div>
                    <div className='footer-grid d-flex jc-end'>
                        <div className='footer-links grey-color'>
                            <h2 className='grey-s-color'>Pages</h2>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/About'>Sobre</Link></li>
                                <li><Link to='/Projects'>Projetos</Link></li>
                                <li><Link to='/Contact'>Contato</Link></li>
                            </ul>
                        </div>
                        <div className='contact grey-s-color'>
                            <h2>Contact</h2>
                            <p>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                            <p>suporte@escoladnc.com.br</p>
                            <p>(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className='footer-copy d-flex jc-space-bet'>
                        <p>Copyright © DNC - 2024</p>
                        <div className='footer-lan d-flex jc-space-arr'>
                            <img src={Brazuca} alt="erro" />
                            <img src={Usa} alt="erro" />
                        </div>
                    </div>
            </div>

        </footer>
    )
}

export default Footer