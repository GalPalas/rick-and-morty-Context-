import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchCharacters = () => {
  const [status, setStatus] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const { data } = await axios("https://rickandmortyapi.com/api/character");
      setCharacters(data.results);
      setStatus(true);
    };

    fetchCharacters();
  }, []);

  return { characters, status };
};
