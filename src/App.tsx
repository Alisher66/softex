import React, {useEffect, useState} from 'react';
import login_img from './assets/image/main.jpg';
import './App.css';
import {useLogin} from "./hooks/useLogin";
import {sendVerify} from "./services/user.services";
import {Routes, Route, Outlet, Link} from "react-router-dom";
import Login from "./pages/Login";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import Home from "./pages/Home";
import CreateTJM from "./pages/CreateTJM";

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/create-tjm' element={<CreateTJM/>}/>
            </Routes>
        </QueryClientProvider>
    );
}

export default App;
