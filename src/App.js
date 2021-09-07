import { useEffect, useState } from "react";
import "./App.css";
import { Characters } from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharacterList([...response.results]))
      .catch((error) => console.log(error));
  }, [page]);

  const nextPage = () => {
    if (page < 34) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="App">
      <Characters data={[...characterList]} />

      {page > 1 ? (
        <button className="navButton navButton--left" onClick={prevPage}>
          <i class="fas fa-chevron-left"></i>
        </button>
      ) : null}
      {page < 34 ? (
        <button className="navButton navButton--right" onClick={nextPage}>
          <i class="fas fa-chevron-right"></i>
        </button>
      ) : null}
    </div>
  );
}

export default App;
