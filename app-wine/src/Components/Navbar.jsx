import { Link } from "react-router-dom";




// IoSearchCircleOutline


import search from "../img/search.svg";

function NavBar() {
  return (
    <nav>
      
        <Link to="/">
          <img src={ search } alt="Costs" />
        </Link>
        <ul >
          <li >
            <Link to="/">Clube</Link>
          </li>
          <li >
            <Link>Lojas</Link>
          </li>
          <li >
            <Link>Produtores</Link>
          </li>
          <li >
            <Link>Eventos</Link>
          </li>
        </ul>
      
    </nav>
  );
}

export default NavBar;


