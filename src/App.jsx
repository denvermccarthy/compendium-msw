import { useEffect, useState } from 'react';
import { fetchSimpsons } from './services/simpsons';

export default function App() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchSimpsons();
      setQuotes(data);
    };
    fetch();
  }, []);
  return <h1>Hello World</h1>;
}
