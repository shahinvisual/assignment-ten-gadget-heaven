import { parse } from 'postcss';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Banner from './Banner';
import { Helmet } from "react-helmet-async";

const CardDetails = () => {
    const cardDetailsID = useLoaderData();
    const { cardId } = useParams();
    const [cardDetails, setCardDetails] = useState([]);
    // console.log(cardDetails)
    useEffect(() => {
        const filterID = [...cardDetailsID].filter(item => item.id === JSON.parse(cardId));
        setCardDetails(filterID);
    }, [cardDetailsID, cardId])
    // console.log(cardDetailsID, cardId)
    return (
        <>
        <Helmet>
                <title>CardDetails | Gadget Heaven</title>
            </Helmet>
            <Banner
                title={'Product Details'}
                subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
            />
            <div>
                {
                    cardDetails.map((item, index) => <ProductDetails product={item} key={index}></ProductDetails>)
                }
            </div>
        </>
    );
};

export default CardDetails;