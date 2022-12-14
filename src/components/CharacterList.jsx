import { useState, useEffect } from "react";
import { Character } from "./Character";
import NavPage from "./Navpage";






export const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)

  const fetchApi = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character?page='+page);
    const data = await response.json();
    setCharacters(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, [page]);

  return (
    <div className="container pb-5 ">
     
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <h1>...Loading</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}

            <NavPage page={page} setPage={setPage} />

    </div>
  );
};
