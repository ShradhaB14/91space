import Payload from "../Payload/Payload";
import Pagination from "../Pagination/Pagination";
import { useState, useEffect } from "react";
import axios from "axios";
const PayloadList = () => {
  const [payloadList, setPayloadList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [payloadPerPage] = useState(10);

  useEffect(() => {
    const fetchPayloadList = async () => {
      const res = await axios.get("https://api.spacexdata.com/v3/payloads");
      setPayloadList(res.data);
    };
    fetchPayloadList();
  }, []);

  const indexOfLastPage = currentPage * payloadPerPage;
  const indexOfFirstPage = indexOfLastPage - payloadPerPage;
  const currrentPageData = payloadList.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = currentPage => setCurrentPage(currentPage);

  return (
    <>
      <Payload payload={currrentPageData} />
      <Pagination
        dataPerPage={payloadPerPage}
        totalData={payloadList.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default PayloadList;
