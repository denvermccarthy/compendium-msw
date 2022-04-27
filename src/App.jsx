import { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import { fetchSimpsons } from './services/simpsons';
import QuoteView from './views/QuoteView/QuoteView';

export default function App() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchSimpsons();
      setQuotes(data);
    };
    fetch();
  }, []);
  return (
    <>
      <h1>Simpson Quotes</h1>
      <Search />
      <QuoteView {...{ quotes }} />
    </>
  );
}
