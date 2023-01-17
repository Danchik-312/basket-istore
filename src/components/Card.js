import React from 'react';
import styles from '../styles/Card.module.css'
import classes from 'classnames';

const Card = (props) => {
    const disc = props.disc;
    const price = props.price;
    const classDisc = disc > 0 ? 'flex' : 'none';
    const sale = Math.trunc(price/100*disc);

    return (
        <div className={styles.card}>
            <span className={classDisc}>{disc}%</span>
            <img src={props.img} alt="image"/>
            <div className={styles.card__content}>
                <h4 className={styles.card__title}>{props.title}</h4>
                <p className={classes(styles.card__price)}>{disc > 0 ? price-sale: price}</p>
                <button className={styles.card__btn}>Выбрать</button>
            </div>
        </div>
    );
};

export default Card;