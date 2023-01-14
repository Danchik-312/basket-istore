import React from 'react';
import Card from "../../components/Card";
import iphone from "../../data/iphone";

const Iphone = () => {
    return (
        <div className='container'>
            {
                iphone.map((item) => {
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

export default Iphone;