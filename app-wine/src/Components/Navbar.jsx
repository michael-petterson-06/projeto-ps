import { Link } from "react-router-dom";



import styles from '../Styles/Navbar.module.css';
import logo from '../img/logo.jpeg';
import user from '../img/user.jpeg';
import search from "../img/search.jpeg";
import carrinho from "../img/carrinho.jpeg";


function NavBar() {
  return (
    <nav className={ styles.navBar }>
        <div className={styles.containerLinks}>
            <div className={styles.linkLogo}>
                <Link  to="/">
                    <img src={ logo } alt="Costs" />
                </Link>
            </div>
            <ul>
                <li >
                    <Link to="/">Clube</Link>
                </li>
                <li >
                    <Link to="/">Lojas</Link>
                </li>
                <li >
                    <Link to="/">Produtores</Link>
                </li>
                <li >
                    <Link to="/">Eventos</Link>
                </li>
            </ul>
        </div>
        <div className={styles.containerImagens}>
            <img  src={ search } alt="Foto lupinha" />
            <img  src={ user } alt="Foto user" />
            <div className={styles.carrinho}>
                <img  src={ carrinho } alt="Foto sacolinha" />
                <div>0</div>
            </div>
        </div>
    </nav>
  );
}

export default NavBar;


