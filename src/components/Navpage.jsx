

const NavPage = ({ page, setPage }) => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <button
        className="btn btn-success btn-sm   "
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
        className="btn btn-primary btn-sm "
        onClick={() => setPage(page + 1)}
      >
        Next page: {page + 1}
      </button>
    </header>
  );
};

export default NavPage;
