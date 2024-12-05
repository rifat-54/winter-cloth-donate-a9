import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({item}) => {
    const{id,title,image,description,division,status}=item;
    return (
        <div className="card bg-base-100  shadow-xl">
  <figure>
    <img
    className='w-11/12 mt-4 rounded-lg h-[220px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='my-3'>{description}</p>
    <div className="card-actions justify-center">
      <Link state={item} to={'/details'} className="btn btn-primary">Donate Now</Link>
    </div>
  </div>
</div>
    );
};

export default DonationCard;