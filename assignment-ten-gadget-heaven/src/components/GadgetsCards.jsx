import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';
import { useEffect, useState } from 'react';

const GadgetsCards = () => {
    const gadgetsData = useLoaderData();
    const { categoryId } = useParams();
    const [gadget, setGadget] = useState([]);
   
    useEffect(() => {
        if (categoryId) {
            const gadgetsID = [...gadgetsData].filter(item => item.category === categoryId);
            setGadget(gadgetsID);
        } else {
            setGadget(gadgetsData);
        }
    }, [gadgetsData, categoryId])



    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                gadget.map((item, index) => <Card gadgets={item} key={index}></Card>)
            }
        </div>
    );
};

export default GadgetsCards;