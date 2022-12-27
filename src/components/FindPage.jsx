const FindPage = ({ findPage, setFindPage, onFindPage }) => {
  const onInputChange = ({ target }) => {
    setFindPage(target.value);
  };

  return (
    <div className=" my-3 d-flex justify-content-center">
      <input
        type="number"
        placeholder="Page"
        className="mx-2"
        value={findPage}
        onChange={onInputChange}
        min="0"
        step="1"
        max="42"
      />
      <button className="btn btn-secondary btn-sm px-3" onClick={onFindPage}>
        Find
      </button>
    </div>
  );
};

export default FindPage;
