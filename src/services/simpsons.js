export const fetchSimpsons = async () => {
  const response = await fetch(
    `https://thesimpsonsquoteapi.glitch.me/quotes?count=20`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
