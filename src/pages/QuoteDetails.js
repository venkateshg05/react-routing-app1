import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuotesDetails = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>QuotesDetails</h1>
      <p>{params.quoteId}</p>
      <Route path={"/quotes/:quoteId/comments"}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuotesDetails;
