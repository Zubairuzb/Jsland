import React from 'react';

const Birthday = ({name, year, img}) => {
  return <div className="birthday">
        <img src={img} alt="" className="b-image" />
<div className="b-detail">
        <h3>{name}</h3>
        <h4>{year}</h4>
    </div>
  </div>;
};

export default Birthday;
