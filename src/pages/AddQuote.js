import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const AddQuotes = () => {
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.replace("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default AddQuotes;
