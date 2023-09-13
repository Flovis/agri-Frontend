import { createContext, useState } from "react";

const SocketContext = createContext({});

const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState();

    return (
        <SocketContext.Provider value={{ socket, setSocket }}>
            {children}
        </SocketContext.Provider>
    );
};

export { SocketContext, SocketProvider };
