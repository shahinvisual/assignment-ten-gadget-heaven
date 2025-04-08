import React from 'react';
import Banner from '../components/Banner';
import { Helmet } from "react-helmet-async";

const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Statistics | Gadget Heaven</title>
            </Helmet>
            <Banner
            title={'Statistics'}
            subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
            />
        </div>
    );
};

export default Statistics;