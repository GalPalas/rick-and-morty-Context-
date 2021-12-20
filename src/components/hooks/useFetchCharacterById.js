import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchCharactersById = (id) => {
  const [status, setStatus] = useState("idle");
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const fetchCharactersById = async () => {
      setStatus("loading");
      try {
        const { data } = await axios(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setCharacter(data);
        setStatus("success");
      } catch (ex) {
        setStatus("error");
      }
    };

    if (id) {
      fetchCharactersById();
    }
  }, [id]);

  return { character, status };
};
