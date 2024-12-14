import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import { UserProvider } from "./components/UserContext";
import "./App.css";

function App() {
    return (
        <UserProvider>
            <Router>
                <div className="container">
                    {/* Colonne gauche avec un design graphique */}
                    <div className="left-column">
                        <div className="stripe-background"></div>
                    </div>
                    {/* Colonne droite contenant les formulaires */}
                    <div className="right-column">
                        <div className="form-container">
                            <Routes>
                                <Route path="/signup" element={<SignUp />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/forgot-password" element={<ForgotPassword />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;
