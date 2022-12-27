const FindChar = ({ findChar, setFindChar, onFindChar }) => {



  const onInputChange = ({ target }) => {
    setFindChar(target.value);
  };



  return (
    <div className="my-3 d-flex justify-content-center">
      <input
        className="mx-2"
        type="text"
        placeholder="Find char"
        value={findChar}
        onChange={onInputChange}

      />
      <button className="btn btn-secondary  btn-sm px-3" onClick={onFindChar}>
        Find
      </button>
    </div>
  );
};

export default FindChar;
