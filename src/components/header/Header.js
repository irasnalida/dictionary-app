import React from 'react'
import "./Header.css";

const Header = ({word, setWord}) => {
  return (
    <div className='header'>
        <span className='title'>{word?word:"Dictionary"}</span>
    </div>
  );
}

export default Header