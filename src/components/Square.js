import React from 'react';
import '../App.css'


const Square = ({ value, onClick }) => (


    
    <button onClick={onClick} className="squareStyle">
        {value}
    </button>
);

export default Square;