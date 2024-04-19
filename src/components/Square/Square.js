import React from 'react';
import './square.css';

export default function Square({ value, handleClick }) {
  return (
    <button
      type='button'
      className='square'
      onClick={handleClick}
    >{value}</button>
  )
}
