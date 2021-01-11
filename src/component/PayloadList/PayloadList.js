import Payload from "../Payload/Payload";
import Pagination from "../Pagination/Pagination";
import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import * as action from "../../store/action";

const PayloadList = () => {
  const tempState = useSelector(state => state.PayloadReducer, shallowEqual);

  const dispatch = useDispatch();
  const [payloadList, setPayloadList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [payloadPerPage] = useState(10);

  const value = useMemo(
    () => ({
      getState: () => tempState
    }),
    [tempState]
  );

  const indexOfLastPage = currentPage * payloadPerPage;
  const indexOfFirstPage = indexOfLastPage - payloadPerPage;
  const currrentPageData = payloadList.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = currentPage => setCurrentPage(currentPage);

  useEffect(() => {
    dispatch(action.fetchPayload());
  }, []);

  useEffect(() => {
    setPayloadList(value.getState().payloadList);
  }, [value]);

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
