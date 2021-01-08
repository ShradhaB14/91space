import { useHistory, Link } from "react-router-dom";

const Pagination = ({ dataPerPage, totalData, paginate, currentPage }) => {
  const number = totalData / dataPerPage;
  const pageNumber = [];
  const history = useHistory();

  for (let i = 1; i <= Math.ceil(number); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <div className="row">
        <div className="col right">
          <ul className="pagination">
            <li className={currentPage === 1 ? "disabled" : null}>
              <Link
                onClick={
                  currentPage > 1 ? () => paginate(currentPage - 1) : null
                }
                to={history.location.pathname}
              >
                <i className="material-icons">chevron_left</i>
              </Link>
            </li>
            {pageNumber.map(number => {
              return (
                <li
                  className={currentPage === number ? "active " : null}
                  key={number}
                >
                  <Link
                    onClick={() => paginate(number)}
                    to={history.location.pathname}
                  >
                    {number}
                  </Link>
                </li>
              );
            })}
            <li
              className={
                currentPage === number ? "disabled waves-effect" : null
              }
            >
              <Link
                to={history.location.pathname}
                onClick={
                  currentPage === number
                    ? null
                    : () => paginate(currentPage + 1)
                }
              >
                <i className="material-icons">chevron_right</i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Pagination;
