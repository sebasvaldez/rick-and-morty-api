

const NavPage = ({ page, setPage }) => {
  return (
    <header className="d-flex justify-content-evenly ">
      <button
        className="btn btn-success btn-md   "
        onClick={
          page > 1
            ? () => {
                setPage(page - 1);
              }
            : null
        }
      >
        {page == 1 ? `Main page: ${page}` : `Previous page: ${page - 1}`}
      </button>
      
          
      <button
        className="btn btn-primary btn-md "
        onClick={page<42 ?() =>  setPage(page + 1): null}
      >
        Next page: {page + 1}
      </button>
    </header>
  );
};

export default NavPage;
