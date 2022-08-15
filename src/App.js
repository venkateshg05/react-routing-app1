import { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AddQuotes from "./pages/AddQuote";
import QuotesDetails from "./pages/QuoteDetails";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <Fragment>
      <MainNavigation />
      <main>
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
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
