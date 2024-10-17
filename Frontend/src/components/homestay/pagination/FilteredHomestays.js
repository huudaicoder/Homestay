import React from 'react';
import HomestayCard from './HomestayCard';

const FilteredHomestays = ({homestay}) => {
  return (
    <div className='container mt-5 mx-auto mb-16 max-w-9/10'>
      <div className='mb-16 grid grid-cols-5 gap-6 mt-5 justify-between w-full'>
        {homestay.map(props => (     
          <HomestayCard detail={props}/>       
        ))}
      </div>
    </div>
  );
};

export default FilteredHomestays;