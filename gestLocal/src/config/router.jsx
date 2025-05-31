// Routes.js
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../auth/ProtectedRoute";
import Dashboard from "../screens/Dashboard";
import Properties from "../screens/Properties";
import Leases from "../screens/Leases";
import Register from "../screens/RegisterPage";
import React from "react";
import { useAuth } from "../auth/AuthProvider";
import Login from "../screens/loginPage";


const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<h1>Page d'accueil</h1>} />

        <Route
            path="/dashboard-pro"
            element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            }
        />

        <Route
            path="/properties"
            element={
                <ProtectedRoute>
                    <Properties />
                </ProtectedRoute>
            }
        />

        <Route
            path="/leases"
            element={
                <ProtectedRoute>
                    <Leases />
                </ProtectedRoute>
            }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
);

export default AppRoutes;
