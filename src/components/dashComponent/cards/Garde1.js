import { useState } from "react";

const Aperçu = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Aperçu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">
            Total des exploitations agricoles
          </h3>
          <p className="text-3xl">100</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Total des cultures</h3>
          <p className="text-3xl">500</p>
        </div>
      </div>
      <div className="mt-8"></div>
    </div>
  );
};

const GroupesAgriculteurs = () => {
  const [groupes, setGroupes] = useState([]);

  const ajouterGroupe = () => {};

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Groupes d'agriculteurs</h2>
      <ul className="divide-y divide-gray-200">
        {groupes.map((groupe, index) => (
          <li key={index} className="py-4"></li>
        ))}
      </ul>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        onClick={ajouterGroupe}
      >
        Ajouter un groupe
      </button>
    </div>
  );
};

const ConfigurationDistribution = () => {
  const [options, setOptions] = useState({
    menu: false,
    checkboxes: [],
    buttons: [],
  });

  const mettreAJourOptions = (nouvellesOptions) => {};

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">
        Configuration de la distribution
      </h2>
      <div className="mb-4"></div>
      <div className="mb-4"></div>
      <div className="mb-4"></div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => mettreAJourOptions(options)}
      >
        Enregistrer les options
      </button>
    </div>
  );
};

const SurveillanceMétéo = () => {
  const [donnéesMétéo, setDonnéesMétéo] = useState([]);

  const obtenirDonnéesMétéo = () => {};

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Surveillance météo</h2>
      <div></div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        onClick={obtenirDonnéesMétéo}
      >
        Obtenir les données météo
      </button>
    </div>
  );
};

const Garde = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Aperçu />
      <GroupesAgriculteurs />
      <ConfigurationDistribution />
      <SurveillanceMétéo />
    </div>
  );
};

export default Garde;
