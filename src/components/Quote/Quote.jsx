import React from 'react';

export default function Quote({ character, quote, image }) {
  return (
    <div>
      <h4>{character}</h4>
      <img src={image} alt="" />
      <p>{quote}</p>
    </div>
  );
}
