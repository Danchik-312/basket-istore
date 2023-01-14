import React from 'react';
import styles from '../styles/Card.module.css'

const Card = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.img} alt="image"/>
            <div className={styles.card__content}>
                <h4 className={styles.card__title}>{props.title}</h4>
                <p className={styles.card__price}>от {props.price} сом</p>
                <button className={styles.card__btn}>Выбрать</button>
            </div>
        </div>
    );
};

export default Card;