import logo from '/images/cat-logo.svg'
import style from './Header.module.scss'

function Header() {
    return ( 
        <header className={style.header}>
            <img src={logo} alt="" />
            <h1>Purrfect Posters</h1>
        </header>
     );
}

export default Header;