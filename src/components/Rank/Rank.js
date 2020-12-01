import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <p className='f2'>{`Hi! ${name}, your entries is ${entries}`}</p>
    </div>
  );
};

export default Rank;
