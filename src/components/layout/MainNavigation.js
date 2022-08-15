import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <h1>Great Quotes</h1>
      <nav>
        <ul>
          <div>
            <Link to={"/quotes"}>All Quotes</Link>
          </div>
          <div>
            <Link to={"/new-quote"}>Add a Quote</Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
