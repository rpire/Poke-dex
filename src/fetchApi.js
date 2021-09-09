const fetchApi = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=18&offset=0');
  return response.json();
};

export default fetchApi;