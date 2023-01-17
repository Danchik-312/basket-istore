import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.css';
import classes from 'classnames';

const Header = () => {
    return (
        <header className={classes(styles.header, 'container')}>
            <nav>
                <ul>
                    <li><NavLink to='/'>Главная</NavLink></li>
                    <li><NavLink to='about'>О нас</NavLink></li>
                    <li><NavLink to='catalog'>Продукция</NavLink></li>
                    <li><NavLink to='/'>Аксессуары</NavLink></li>
                    <li><NavLink to='/'>Гарантия</NavLink></li>
                    <li><NavLink to='/'>В кредит</NavLink></li>
                    <li><NavLink to='/'>Статья</NavLink></li>
                    <li><NavLink to='/'>Контакты</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;