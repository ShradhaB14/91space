import History from "../History/History";
import Pagination from "../Pagination/Pagination";
import { useState, useEffect } from "react";
import axios from "axios";

const HistoryList = () => {
  const [historyList, setHistoryList] = useState([]);
  const [historyPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchHistoryList = async () => {
      const res = await axios.get("https://api.spacexdata.com/v3/history");
      setHistoryList(res.data);
    };
    fetchHistoryList();
  }, []);

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
