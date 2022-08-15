import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AddQuotes = React.lazy(() => import("./pages/AddQuote"));
const QuotesDetails = React.lazy(() => import("./pages/QuoteDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Quotes = React.lazy(() => import("./pages/Quotes"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path={"/"} exact>
            <Redirect to={"/quotes"} />
          </Route>
          <Route path={"/quotes"} exact>
            <Quotes />
          </Route>
          <Route path={"/quotes/:quoteId"}>
            <QuotesDetails />
          </Route>
          <Route path={"/new-quote"}>
            <AddQuotes />
          </Route>
          <Route path={"*"}>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
