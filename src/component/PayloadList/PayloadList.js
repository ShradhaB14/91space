import Payload from "../Payload/Payload";
import Pagination from "../Pagination/Pagination";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../store/action";

const PayloadList = props => {
  const tempState = useSelector(state => state.PayloadReducer);
  const dispatch = useDispatch();
  const [payloadList, setPayloadList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [payloadPerPage] = useState(10);

  console.log("PAYYYYYY", tempState);

  const indexOfLastPage = currentPage * payloadPerPage;
  const indexOfFirstPage = indexOfLastPage - payloadPerPage;
  const currrentPageData = payloadList.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = currentPage => setCurrentPage(currentPage);

  useEffect(() => {
    dispatch(action.fetchPayload());
    setPayloadList(tempState.payloadList);
  }, []);

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
