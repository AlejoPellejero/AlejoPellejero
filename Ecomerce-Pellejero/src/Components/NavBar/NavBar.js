import './NavBar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <header className="container-nav-bar">
            <div className="left-container">
                <div className='first-container'>
                    <h1 className='title-brand'><Link to={`/`}>A-Pellejeros</Link></h1>
                </div>
                <div className='middle-container'>
                    <ul className='middle-list'>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/category/batman`} >Cuadros</Link></li>
                        <li>Otros</li>
                        <li>About-us</li>
                    </ul>
                </div>
            </div>
            <div className='end-container'>
                <h2 className='hamburger-cont'>P</h2>
                {/*La idea de la P es que al hacer HOVER
                 diga PROYECTOS y muestre una lista de Proyectos*/}
                <CartWidget />
            </div>
        </header>
    );
}

export default NavBar;
