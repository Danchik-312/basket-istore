import React from 'react';
import Card from "../../components/Card";
import apple_watch from "../../data/apple-watch";

const AppleWatch = () => {
    return (
        <div className='container'>
            {
                apple_watch.map(((item, index) => {
                    return(
                        <Card
                            key={index}
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            disc={item.disc}
                        />
                    )
                }))
            }
        </div>
    );
};

export default AppleWatch;