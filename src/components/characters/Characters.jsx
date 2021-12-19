import { useFetchCharacters } from "components/hooks/useFetchCharacters";
import CharacterCard from "components/characterCard/CharacterCard";

const Characters = () => {
  const { characters } = useFetchCharacters();

  return (
    <div className="container p-5">
      <div className="row row-cols-lg-5 row-cols-md-3 justify-content-center  gy-3">
        {characters.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
