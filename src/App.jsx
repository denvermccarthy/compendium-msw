import { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import { fetchSimpsons } from './services/simpsons';
import QuoteView from './views/QuoteView/QuoteView';

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  const handleSearch = (search) => {
    setIsFilter(!!search.length);
    const filtered = quotes.filter(({ character }) =>
      character.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filtered);
  };

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
      <Search handler={handleSearch} />
      <QuoteView quotes={isFilter ? filtered : quotes} />
    </>
  );
}
