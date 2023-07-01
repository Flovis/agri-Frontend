import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import {     ReactQueryDevtools} from  "react-query/devtools";
const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient()
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>

        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<App />} />
                </Routes>
            </BrowserRouter>
                    <ReactQueryDevtools initialIsOpen />
        </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
