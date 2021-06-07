import React from "react";
import Footer from "components/Footer";
import Navbar from "components/nav/Navbar";
import SearchResult from "./SearchResult";

const SearchView = ({ match }) => {
  return (
    <div>
      <Navbar match={match} />
      <SearchResult />
      <Footer />
    </div>
  );
};

export default SearchView;
