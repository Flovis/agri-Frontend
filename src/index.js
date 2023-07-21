import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { ContentFormProvider } from "./hooks/useDataForm";
import { SocketProvider } from "./context/SocketContext";
import { ContextGeneral } from "./context/SelectContext";
import { CartProvider } from "react-use-cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <ContextGeneral>
        <AuthProvider>
          <ContentFormProvider>
            <SocketProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/*" element={<App />} />
                </Routes>
              </BrowserRouter>
            </SocketProvider>
          </ContentFormProvider>
        </AuthProvider>
      </ContextGeneral>
    </CartProvider>
  </React.StrictMode>
);
