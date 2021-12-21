import { useFetchCharacters } from "components/hooks/useFetchCharacters";
import { useFiltersByParams } from "components/hooks/useFiltersByParams";
import CharacterCard from "components/characterCard/CharacterCard";
import Spinner from "components/spinner/Spinner";
import CharactersFiltersQueryParams from "components/charactersFiltersQueryParams/CharactersFiltersQueryParams";

const Characters = () => {
  const { characters, status } = useFetchCharacters();
  const { filteredCharacters } = useFiltersByParams(characters);

  if (status === "idle" || status === "loading") {
    return <Spinner />;
  }

  return (
    <div>
      {status === "success" && characters.length ? (
        <div className="container p-5">
          <CharactersFiltersQueryParams />
          <div className="row row-cols-lg-5 row-cols-md-3 justify-content-center  gy-3">
            {filteredCharacters.map((character) => (
              <CharacterCard key={character.id} {...character} />
            ))}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Characters;
