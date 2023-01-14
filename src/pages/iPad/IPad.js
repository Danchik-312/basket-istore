import React from 'react';
import Card from "../../components/Card";
import styles from '../../styles/Card.module.css'
import ipad from "../../data/ipad";

const IPad = () => {
    return (
        <div className='container'>
            {
                ipad.map((item) => {
                    return (
                        <Card
                            img={item.img}
                            title={item.title}
                            price={item.price}
                        />
                    )
                })
            }
        </div>
    );
};

export default IPad;