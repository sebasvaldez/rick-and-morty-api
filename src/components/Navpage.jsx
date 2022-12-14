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
        <div>

        <input type="text" placeholder="Find page number" className="mx-2" />
        <button className="btn btn-secondary btn-sm px-3">Find</button>
        </div>


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
