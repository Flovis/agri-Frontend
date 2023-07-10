import React from "react";
import { FaFile } from "react-icons/fa";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const FileInput = () => {
  const [file, setFile] = React.useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const renderFileContent = () => {
    if (!file) {
      return null;
    }

    const fileType = file.type;
    const fileExtension = getFileExtension(file.name);

    if (
      fileExtension === "doc" ||
      fileExtension === "docx" ||
      fileExtension === "ppt" ||
      fileExtension === "pptx" ||
      fileExtension === "xls" ||
      fileExtension === "pdf" ||
      fileExtension === "xlsx"
    ) {
      const documents = [
        {
          uri: window.URL.createObjectURL(file),
          fileType: ".docx",
          fileName: file.name,
        },
      ];
      return (
        <div className="ml-2">
          <DocViewer
            documents={documents}
            initialActiveDocument={documents[0]}
            pluginRenderers={DocViewerRenderers}
          />
        </div>
      );
    } else {
      return <p className="ml-2">Type de fichier non pris en charge.</p>;
    }
  };

  const getFileExtension = (filename) => {
    return filename.split(".").pop().toLowerCase();
  };

  return (
    <div className="flex items-center">
      <input
        type="file"
        accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
        onChange={handleFileChange}
        className="hidden"
        id="file-input"
        name="file"
      />
      <label
        htmlFor="file-input"
        className="flex items-center px-4 py-2 rounded-lg border border-gray-300 cursor-pointer"
      >
        <FaFile className="mr-2" />
        {file ? file.name : "Choisir un fichier"}
      </label>
      {renderFileContent()}
    </div>
  );
};

export default FileInput;
