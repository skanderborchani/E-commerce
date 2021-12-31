import './Navbar.css';
import { link } from 'react-router-dom';
function Navbar({click}) {
    return (
        <nav className="navbar">
            <div className="Navbarlogo">
                <img src='./public/identity.png' alt='logo'></img>
                <h2>identity</h2>
            </div>
            <ul className='Navbarlinks'>
                <li>
                    <link to="/cart" className='cartlink'>
                        <i className="fas fa-shopping-cart"></i>
                        <span>cart</span>
                        <span className='cartlogobadge'> 0</span>
                    </link>
                </li>
                <li>
                    <link to="/">
                       Shop

                    </link>
                </li>
            </ul>
            <div className='menu'>
                  <div></div>
                  <div></div> 
                  <div></div>
            </div>

        </nav>
    );
};

export default Navbar;
