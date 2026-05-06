import { useEffect, useState } from "react";

function App() {
  const films = [
    { title: "Inception", genere: "Fantascienza" },
    { title: "Il Padrino", genere: "Thriller" },
    { title: "Titanic", genere: "Romantico" },
    { title: "Batman", genere: "Azione" },
    { title: "Interstellar", genere: "Fantascienza" },
    { title: "Pulp Fiction", genere: "Thriller" },
  ];

  // stati globali
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredFilms, setFilteredFilms] = useState(films);

  // foreach per controllare se un genere si ripete
  const generiUnici = []; // array vuoto dove vengono inseriti i generi
  films.forEach(film => {
    if (!generiUnici.includes(film.genere)) {
      generiUnici.push(film.genere);
    }
  });
  

  // useEffect per la scelta del genere
  useEffect(() => {
    if (selectedGenre === "") {
      setFilteredFilms(films);
    } else {
      const filtrati = films.filter(film => film.genere === selectedGenre);
      setFilteredFilms(filtrati);
    }
  }, [selectedGenre, films]);

  return (
    <div className="container mt-4">
      <h1>Lista Film</h1>

      <div className="mb-3">
        <label className="form-label">
          Scegli un genere
        </label>
        <select
          className="form-select"
          value={selectedGenre}
          onChange={(event) => setSelectedGenre(event.target.value)}
        >
          {/* map per selezionare ogni genere usato index perchè l'array di oggetti non aveva un id e per non modificarlo in questo caso uso index */}
          <option value="">-- Tutti i generi --</option>
          {generiUnici.map((genere, index) => (
            <option key={index} value={genere}>
              {genere}
            </option>
          ))}
        </select>
      </div>

      {/* controllo in caso non ci fosse il genere del film  */}
      {/* map per creare un array con solo i film che contengono il genere e stamparli con una lista  */}
      <div>
        <h2>Film : {filteredFilms.length}</h2>
        {filteredFilms.length === 0 ? (
          <p>Nessun film in questo genere.</p>
        ) : (
          <ul>
            {filteredFilms.map((film, index) => (  
              <li key={index}>
                {film.title} ({film.genere})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
