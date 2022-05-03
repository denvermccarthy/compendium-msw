import React, { useState } from 'react';
import Quote from '../../components/Quote/Quote';

export default function QuoteView({ quotes }) {
  return (
    <ul>
      {quotes.map((quote) => (
        <Quote key={quote.quote} {...quote} />
      ))}
    </ul>
  );
}
