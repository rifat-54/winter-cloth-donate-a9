import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationCard from './DonationCard';

const DonationCampain = () => {
    const data=useLoaderData()
    // console.log(data)
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-14'>All the campaigns running </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 lg:gap-6'>
                {
                    data.map(item=><DonationCard key={item.id} item={item}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default DonationCampain;