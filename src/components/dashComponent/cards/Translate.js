const deepl = require("deepl-translator");

async function traduireTexte(texte, langueDestination) {
  console.log("Texte à traduire:", texte); // Added console log
  console.log("Langue de destination:", langueDestination); // Added console log

  const traduction = await deepl.translate({
    text: texte,
    target_lang: langueDestination,
  });

  return traduction;
}

const texteOriginal = "hello";
const langueDestination = "FR"; // Use the correct language code for French

traduireTexte(texteOriginal, langueDestination)
  .then((texteTraduit) => {
    console.log(`Texte original: ${texteOriginal}`);
    console.log(`Texte traduit: ${texteTraduit}`);
  })
  .catch((erreur) => {
    console.error("Erreur lors de la traduction du texte:", erreur);
  });
