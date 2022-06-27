import React from 'react';
import Button from 'react-bootstrap/Button';
import './Button.Module.css';

const ButtonList = (props) => {
  const { content, bgColor, color } = props;

  return (
    <>
      <div className='button-list'>
        <Button variant='primary' style={{ backgroundColor: bgColor, color: color }}>{content}
        </Button>
      </div>
    </>
  )
}

export default ButtonList;