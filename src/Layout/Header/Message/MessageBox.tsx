
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { H5, LI, UL } from "../../../AbstractElements";
import { CheckAll } from "../../../utils/Constant";
import {  RootState } from "../../../ReaduxToolkit/Store"; // ✅ Import RootState

const MessageBox = () => {

  // ✅ Correctly access Redux state
  const { messages, loading, error } = useSelector((state: RootState) => state.fetchMessages);


  return (
    <UL className="simple-list">
      {loading && <LI>Loading messages...</LI>}
      {error && <LI className="text-danger">{error}</LI>}
      {!loading && !error && messages.length > 0 ? (
        messages.map((data: { title: string; body: string }, index: number) => (
          <LI key={index}>
            <div className="d-flex align-items-start">
              <div className="flex-grow-1">
                <H5 className="mb-1">
                  <Link to={`../message/messageDetail?&${index}`}>{data.title}</Link>
                </H5>
                <p>{data.body.length > 50 ? `${data.body.slice(0, 50)}...` : data.body}</p> {/* Truncate body */}
              </div>
              <div className="notification-right">
       
              </div>
            </div>
          </LI>
        ))
      ) : (
        !loading && !error && <LI>No messages available</LI>
      )}
      <LI>
        <Link className="f-w-700" to={`../message/messageDetail`}>
          {CheckAll}
        </Link>
      </LI>
    </UL>
  );
};

export default MessageBox;
