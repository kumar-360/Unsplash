import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const onSearchSubmit = (term) => {
    let url =
      "https://api.unsplash.com/search/photos/?client_id=pBZKgdO7peIewvnhPdYlADfaEaOiwP1gr8kEk879utk&query=" +
      term;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setImages(data.results));
  };
  return (
    <div style={{ textAlign: "center" }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
