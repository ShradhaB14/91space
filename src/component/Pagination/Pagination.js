const Pagination = ({ dataPerPage, totalData, paginate, currentPage }) => {
  const number = totalData / dataPerPage;
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(number); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <div className="row">
        <div className="col right">
          <ul className="pagination">
            <li className="disabled">
              <a onClick={() => paginate(currentPage - 1)} href="#!">
                <i className="material-icons">chevron_left</i>
              </a>
            </li>
            {pageNumber.map(number => {
              return (
                <li
                  className={currentPage === number ? "active " : null}
                  key={number}
                >
                  <a onClick={() => paginate(number)} href="#!">
                    {number}
                  </a>
                </li>
              );
            })}
            <li className="waves-effect">
              <a href="#!" onClick={() => paginate(currentPage + 1)}>
                <i className="material-icons">chevron_right</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Pagination;
