import React from 'react';
// import './Label.Module.css';

const TitleList = (props) => {
  const { title } = props;

  return (
    <>
      <div className='mb-4 title-list'>
        <h4 style={{ fontWeight: 'bold' }}>{title}</h4>
      </div>
    </>
  )
}

export default TitleList;