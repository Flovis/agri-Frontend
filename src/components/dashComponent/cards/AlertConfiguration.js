import React, { useState } from "react";

// Alert component
const Alert = ({ type, message, onDelete }) => {
  const [show, setShow] = useState(true);

  const handleDelete = () => {
    setShow(false);
    onDelete();
  };

  return (
    <div
      className={`${
        show ? "flex" : "hidden"
      } bg-blue-100 border-t-4 border-deep-green rounded-b text-blue-900 px-4 py-3 shadow-md mt-4`}
      role="alert"
    >
      <div className="flex-shrink-0">
        {type === "weather" && (
          <svg
            className="h-6 w-6 text-deep-green"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v14M6 9l6-6 6 6"
            />
          </svg>
        )}
        {type === "production" && (
          <svg
            className="h-6 w-6 text-deep-green"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium">{message}</p>
      </div>
      <div className="ml-auto pl-3">
        <button
          type="button"
          className="text-[red] hover:text-red-700 focus:outline-none"
          onClick={handleDelete}
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 1a9 9 0 100 18a9 9 0 000-18zm3.707 9.293a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414L10.586 10l-2.121-2.121a1 1 0 011.414-1.414L10 8.586l2.121-2.121a1 1 0 011.414 1.414L11.414 10l2.121 2.121z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

// App component
const AlertConfiguration = () => {
  const [alerts, setAlerts] = useState([]);

  const handleDeleteAlert = (index) => {
    setAlerts((prevAlerts) => {
      const updatedAlerts = [...prevAlerts];
      updatedAlerts.splice(index, 1);
      return updatedAlerts;
    });
  };

  const handleAddAlert = () => {
    setAlerts((prevAlerts) => [
      ...prevAlerts,
      {
        type: "weather",
        message: "Il y aura une forte pleui aujourd'hui",
      },
    ]);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold mb-4">Alerts</h1>
      <button
        type="button"
        className="bg-deep-green text-custom-white hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-4"
        onClick={handleAddAlert}
      >
        Configuration Alert
      </button>
      {alerts.map((alert, index) => (
        <Alert
          key={index}
          type={alert.type}
          message={alert.message}
          onDelete={() => handleDeleteAlert(index)}
        />
      ))}
    </div>
  );
};

export default AlertConfiguration;
