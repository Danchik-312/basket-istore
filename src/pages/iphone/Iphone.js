import React from 'react';
import Card from "../../components/Card";
import iphone from "../../data/iphone";

const Iphone = () => {
    return (
        <div className='container'>
            {
                iphone.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            disc={item.disc}
                        />
                    )
                })
            }
        </div>
    );
};

export default Iphone;