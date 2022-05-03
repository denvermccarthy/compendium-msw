import React from 'react';

export default function Quote({ character, quote, image }) {
  return (
    <div>
      <h4>{character}</h4>
      <img src={image} alt={`A picture of ${character}`} />
      <p>{quote}</p>
    </div>
  );
}
