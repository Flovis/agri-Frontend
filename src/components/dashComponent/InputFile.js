import { useContext } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import DataMeteoContext from "../../context/MeteoContext";

const InputFile = () => {
  const { setFile } = useContext(DataMeteoContext);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFile(files);
  };

  return (
    <div className="">
      <label
        htmlFor="file-input"
        className="flex items-center justify-center w-full h-32 bg-borde-gray  cursor-pointer rounded-md"
      >
        <input
          id="file-input"
          multiple
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />

        <AiOutlineUpload className="w-8 h-8 text-gray-500" />
      </label>
    </div>
  );
};

export default InputFile;
