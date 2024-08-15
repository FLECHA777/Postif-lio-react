import {Link} from 'react-router-dom';

// ASSENTS
import Dnc_logo from '../../assets/dnc_logo.svg'
import './Header.css';

function Header (){
    return(
        <header>
            <div className='container'>
                <div className='al-center d-flex jc-space-bet'>
                    <Link to='/'><img src = {Dnc_logo} /></Link>
                    <nav>
                    <ul className='d-flex '>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/About'>About us</Link></li>
                        <li><Link to='/Projects'>Projects</Link></li>
                        <li><Link to='/Contact'>Contact</Link></li>
                    </ul>
                </nav>
                </div>
                
            </div>
        </header>
    )
}

export default Header