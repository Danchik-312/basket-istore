import React from 'react';
import styles from './CatalogList.module.css'
import catalog from "../../data/catalog";

const CatalogCard = (props) => {
    return (
        <a href={props.link} className={styles.card}>
            <img src={props.img} alt="image"/>
            <div className={styles.card__content}>
                <h4 className={styles.card__title}>{props.title}</h4>
                <a href={props.link} className={styles.link}>Перейти</a>
            </div>
        </a>
    )
}

const CatalogList = () => {
    return (
        <div className='container'>
            {
                catalog.map((item)=> {
                    return (
                        <CatalogCard
                            img={item.img}
                            title={item.title}
                            link={item.link}
                        />
                    )
                })
            }
        </div>
    );
};

export default CatalogList;