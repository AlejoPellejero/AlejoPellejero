import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <header className="container-nav-bar">
            <div className="left-container">
                <div className='first-container'>
                    <h1 className='title-brand'>A-Pellejeros</h1>
                </div>
                <div className='middle-container'>
                    <ul className='middle-list'>
                        <li>Home</li>
                        <li>Shop</li>
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
