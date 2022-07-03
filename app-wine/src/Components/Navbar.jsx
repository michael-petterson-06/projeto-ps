import React, { useState, useContext } from 'react';
import CarContext from '../context/CarContext';
import { Link } from "react-router-dom";
import styles from '../Styles/Navbar.module.css';
import logo from '../img/logo.jpeg';
import user from '../img/user.jpeg';
import search from "../img/search.jpeg";
import carrinho from "../img/carrinho.jpeg";


function NavBar() {

  //   Essa aux aparêntemente sem uso, faz a atualização da tela no carrinho
  const { aux } = useContext(CarContext); 
    
  
  let valor = JSON.parse(localStorage.getItem('car'))
  let valueCar;
  if (!valor) {
    valueCar = 0 
  } else {
    valueCar = valor.length
  }
  

  return (
    <nav className={ styles.navBar }>
        <div className={styles.containerLinks}>
            <div className={styles.linkLogo}>
                <Link  to="/">
                    <img src={ logo } alt="Costs" />
                </Link>
            </div>
            <ul className={ styles.ulNav}>
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
                <div>{ valueCar }</div>
            </div>
        </div>
    </nav>
  );
}

export default NavBar;


