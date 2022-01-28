import React from 'react';

function Card({ children, reverse }) {
    const cardMode = {
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color : reverse ? "#fff":"#333",
      };
    
      return (
        <div className="card" style={cardMode}>
          {children}
        </div>
      );
}

export default Card;
