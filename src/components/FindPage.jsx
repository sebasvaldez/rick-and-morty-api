import { useState } from "react";

const FindPage = ({ findPage, setFindPage, onFindPage }) => {
  const onInputChange = ({ target }) => {
    setFindPage(target.value);
  };

  console.log(typeof findPage);

  return (
    <div>
      <input
        type="number"
        placeholder="Find page number"
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
