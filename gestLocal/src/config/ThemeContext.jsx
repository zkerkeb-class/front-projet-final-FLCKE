import React, { createContext, useState, useEffect, useContext } from 'react';
import { lightTheme, darkTheme } from './theme'; // Assurez-vous que ces thèmes sont définis dans un fichier themes.js ou similaire
// Créer un contexte pour le thème
const ThemeContext = createContext();



// Fournisseur de contexte pour le thème
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme); // Par défaut, thème clair

    // Fonction pour basculer entre les thèmes
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === lightTheme ? darkTheme : lightTheme);
    };

    // Appliquer le thème au niveau du DOM
    useEffect(() => {
        // On applique les variables CSS dynamiques
        const root = document.documentElement;
        root.style.setProperty('--background-color', theme.background_primary);
        root.style.setProperty('--background-second', theme.background_secondary);

        root.style.setProperty('--text-color', theme.text);
        root.style.setProperty('--text-color-secondary', theme.text_btn);
        root.style.setProperty('--text-color-hover', theme.color);
        root.style.setProperty('--surface', theme.surface);
        root.style.setProperty('--primary', theme.primary);
        root.style.setProperty('--secondary', theme.secondary);
        root.style.setProperty('--muted-text', theme.mutedText);
        root.style.setProperty('--border', theme.border);
        root.style.setProperty('--error', theme.error);
        root.style.setProperty('--badge-actif-color', theme.badge_actif_color);

        root.style.setProperty('--badge-actif-bg-color', theme.badge_actif_bg_color);
        root.style.setProperty('--badge-suspendu-bg-color', theme.badge_suspendu_bg_color);
        root.style.setProperty('--badge-suspendu-color', theme.badge_suspendu_color);
        root.style.setProperty('--badge-termine-bg-color', theme.badge_termine_bg_color);
        root.style.setProperty('--badge-termine-color', theme.badge_termine_color);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte
export const useTheme = () => useContext(ThemeContext);
