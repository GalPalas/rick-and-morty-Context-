import { useFetchCharacters } from "components/hooks/useFetchCharacters";
import CharacterCard from "components/characterCard/CharacterCard";
import Spinner from "components/spinner/Spinner";

const Characters = () => {
  const { characters, status } = useFetchCharacters();

  if (status === "idle" || status === "loading") {
    return <Spinner />;
  }

  return (
    <div>
      {status === "success" && characters.length ? (
        <div className="container p-5">
          <div className="row row-cols-lg-5 row-cols-md-3 justify-content-center  gy-3">
            {characters.map((character) => (
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
