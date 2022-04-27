export const fetchSimpsons = async () => {
  const params = new URLSearchParams();
  params.set('count', 20);
  const response = await fetch(
    `https://thesimpsonsquoteapi.glitch.me/quotes?${params.toString()}`
  );
  const data = response.json();
  return data;
};
