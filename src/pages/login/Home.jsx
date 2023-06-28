import React from "react";
import useAuth from "../../hooks/useAuth";

const Home = () => {
    const { auth } = useAuth();
    console.log("user", auth);
    return <div>Home</div>;
};

export default Home;