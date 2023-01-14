import React from 'react';
import Card from "../../components/Card";
import apple_watch from "../../data/apple-watch";

const AppleWatch = () => {
    return (
        <div className='container'>
            {
                apple_watch.map((item => {
                    return(
                        <Card
                            img={item.img}
                            title={item.title}
                            price={item.price}
                        />
                    )
                }))
            }
        </div>
    );
};

export default AppleWatch;