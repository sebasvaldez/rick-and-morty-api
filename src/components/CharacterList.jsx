import { useState, useEffect } from "react";
import { Character } from "./Character";
import NavPage from "./NavPage";
import FindPage from "./FindPage";
import FindChar from "./FindChar";


export const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [findPage, setFindPage] = useState("");
  const [findChar,setFindChar] = useState('')

  const fetchApi = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();
    setCharacters(data.results);
    setLoading(false);
  };




  const fetchApiChar = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${findChar}`
    );

    const data = await response.json();


    setCharacters(data.results);
    console.log(data.results[0].name);

   
  };




  useEffect(() => {
    fetchApi();
  }, [page]);


  

  const onFindPage = () => {
    setPage(parseInt(findPage));
  };

  const onFindChar = ()=>{
    setFindChar(findChar)
    console.log(findChar)
    fetchApiChar()
    

  }

  return (
    <div className="container pb-5 ">
      {loading ? (
        <h1>...Loading</h1>
      ) : (
        <>
          <NavPage page={page} setPage={setPage} />

          <FindChar
          findChar={findChar}
          setFindChar={setFindChar}
          onFindChar={onFindChar}
          />
          

          <FindPage
            findPage={findPage}
            setFindPage={setFindPage}
            onFindPage={onFindPage}
          />

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
          <FindChar />
        </>
      )}
    </div>
  );
};
