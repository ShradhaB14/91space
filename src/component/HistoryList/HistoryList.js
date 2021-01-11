import History from "../History/History";
import Pagination from "../Pagination/Pagination";
import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import * as action from "../../store/action";

const HistoryList = () => {
  const tempState = useSelector(state => state.HistoryReducer, shallowEqual);
  const dispatch = useDispatch();
  const [historyList, setHistoryList] = useState([]);
  const [historyPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  const value = useMemo(
    () => ({
      getState: () => tempState
    }),
    [tempState]
  );

  useEffect(() => {
    dispatch(action.fetchHistory());
  }, []);

  useEffect(() => {
    setHistoryList(value.getState().historyList);
  }, [value]);

  const paginate = currentPage => setCurrentPage(currentPage);

  const indexOfLastPage = currentPage * historyPerPage;
  const indexOfFirstPage = indexOfLastPage - historyPerPage;
  const contentPerPage = historyList.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <>
      <History history={contentPerPage} />
      <Pagination
        dataPerPage={historyPerPage}
        totalData={historyList.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default HistoryList;
