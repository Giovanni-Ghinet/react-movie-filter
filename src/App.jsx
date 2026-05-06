import { useEffect, useState } from "react";
// Importa il CSS di Bootstrap (es. nel tuo index.js o con import)
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const films = [
    { title: 'Inception', genere: 'Fantascienza' },
    { title: 'Il Padrino', genere: 'Thriller' },
    { title: 'Titanic', genere: 'Romantico' },
    { title: 'Batman', genere: 'Azione' },
    { title: 'Interstellar', genere: 'Fantascienza' },
    { title: 'Pulp Fiction', genere: 'Thriller' },
  ];

  
  const [generiUnici, setGeneriUnici] = useState([]);
  useEffect(() => {
    const generi = [...new Set(films.map(f => f.genere))];
    setGeneriUnici(generi);
  }, []);

  return (
    <div className="container mt-4">
      <h1>Ciao</h1>
      <div className="mb-3">
        <label htmlFor="genereSelect" className="form-label">Scegli un genere</label>
        <select className="form-select" id="genereSelect">
          <option value="">-- Seleziona --</option>
          {generiUnici.map((genere, index) => (
            <option key={index} value={genere}>{genere}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
