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
import DashboardTenant from "../screens/DashboardTenant";
import Rent from "../screens/Rent";


const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<h1>Page d'accueil</h1>} />

        <Route
            path="/dashboard-pro"
            element={
                <ProtectedRoute allowedRoles={["proprietaire"]}>
                    <Dashboard />
                </ProtectedRoute>
            }
        />
        <Route
            path="/dashboard-tenant"
            element={
                <ProtectedRoute allowedRoles={["locataire"]}>
                    <DashboardTenant />
                </ProtectedRoute>
            }
        />
        <Route
            path="/payement-tenant"
            element={
                <ProtectedRoute allowedRoles={["locataire"]}>
                    <Rent />
                </ProtectedRoute>
            }
        />

        <Route
            path="/properties"
            element={
                <ProtectedRoute allowedRoles={["proprietaire"]}>
                    <Properties />
                </ProtectedRoute>
            }
        />

        <Route
            path="/leases"
            element={
                <ProtectedRoute allowedRoles={["proprietaire","locataire"]}>
                    <Leases />
                </ProtectedRoute>
            }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
);

export default AppRoutes;
