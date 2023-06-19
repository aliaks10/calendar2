import React, {FC, useState, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {Navigate} from "react-router-dom";

const AppRouter: FC = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [username, setUsername] = useState(false);

    useEffect(() => {
        if(localStorage.getItem("isAuth")) {
            setIsAuth(true);
            setUsername(localStorage.getItem("username") || "");
        }
    }, []);

    const handle = () => {
        setUsername('Username');
    };

    return (
        <>
            <Navbar />
            <Layout>
                <Routes>
                    <Route path='/' element={<Navigate to={"/login"} replace/>}/>
                    <Route path={"/login"} element={<h1>Login</h1>}/>
                    <Route path={"/calendar"} element={<h1>Calendar</h1>}/>
                    <Route path='*' element={<Navigate to="/404" replace/>}/>
                </Routes>
            </Layout>
        </>
    );
};

export default AppRouter;
