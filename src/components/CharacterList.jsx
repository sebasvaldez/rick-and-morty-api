import { useState, useEffect } from "react";
import { Character } from "./Character";
import NavPage from "./Navpage";
import FindPage from './FindPage'

export const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [findPage, setFindPage] = useState('');

  const fetchApi = async () => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character?page=" + page
    );
    const data = await response.json();
    setCharacters(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, [page]);

const onFindPage = ()=>{
  setPage(parseInt(findPage) )
  
}



  return (
    <div className="container pb-5 ">
      {loading ? (
        <h1>...Loading</h1>
      ) : (
        <>
          <NavPage page={page} setPage={setPage} />

          <FindPage findPage={findPage} setFindPage={setFindPage} onFindPage={onFindPage}/>

          <div className="row">
            {characters.map((character) => {
              return (
                <div className="col-md-4" key={character.id}>
                  <Character character={character} />
                </div>
              );
            })}
          </div>
          <NavPage page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
};
