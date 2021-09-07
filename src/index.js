import './style.css';

const fetchApi = async () => {
  try {
    const getNinePokes = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9');
    console.log(getNinePokes.json());
  } catch (error) {
    console.log(error);
  }
};