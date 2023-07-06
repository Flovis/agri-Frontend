import { useState } from "react";

const App = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleButtonClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleButtonClick}
      >
        Voir les détails
      </button>
      {showDetails && (
        <div className="mt-4 p-4 bg-gray-200 rounded">
          <h2 className="text-xl font-bold mb-2">Groupe d'Agriculteurs</h2>
          <ul>
            <li className="mb-2">
              <span className="font-bold">Nom:</span> John Doe
            </li>
            <li className="mb-2">
              <span className="font-bold">Âge:</span> 35 ans
            </li>
            <li className="mb-2">
              <span className="font-bold">Expérience:</span> 10 ans
            </li>
            <li className="mb-2">
              <span className="font-bold">Spécialité:</span> Cultures maraîchères
            </li>
            <li className="mb-2">
              <span className="font-bold">Localisation:</span> Paris, France
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;