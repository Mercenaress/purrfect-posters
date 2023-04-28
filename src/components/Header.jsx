import logo from './images/cat-logo.svg'
import menu from './images/menu.svg'

function Header() {
    return ( 
        <header>
            <img src={logo} alt="" />
            <h1>Purrfect Posters</h1>
            <img src={menu} alt="" />
        </header>
     );
}

export default Header;