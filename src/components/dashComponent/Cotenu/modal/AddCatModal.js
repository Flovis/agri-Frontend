import DynamicButton from "../../PublicComponent/DynamicButton ";
import DynamicInput from "../../PublicComponent/DynamicInput";

export default function AddCatModal({ handleClick }) {
  return (
    <>
      <div
        className="absolute z-50 inset-0 w-full h-full flex items-center justify-center bg-[#000] bg-opacity-60 "
        // onClick={handleOpen}
      >
        <form
          className=" p-4 border border-borde-gray bg-custom-white rounded-lg w-[90%] z-50 relative"
          onSubmit={handleClick}
        >
          <div className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>

            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              Ajout Categorie
            </h3>
          </div>
          <div className="mt-2 mb-4 text-sm text-gray-800 dark:text-gray-300">
            <DynamicInput name="category" tailTexte={16} />
          </div>
          <div className="flex justify-end">
            <DynamicButton label="Valider" type="submit" />
          </div>
        </form>
      </div>
    </>
  );
}
