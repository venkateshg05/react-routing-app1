import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AddQuotes from "./pages/AddQuote";
import QuotesDetails from "./pages/QuoteDetails";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
