const fetchApi = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0');
  return response.json();
};

export default fetchApi;