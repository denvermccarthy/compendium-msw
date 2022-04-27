import React, { useState } from 'react';
import Quote from '../../components/Quote/Quote';

export default function QuoteView({ quotes }) {
  return (
    <div>
      {quotes.map((quote) => (
        <Quote key={quote.quote} {...quote} />
      ))}
    </div>
  );
}
