import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

/**
 * Valid theme options for the application.
 */
type Theme = 'light' | 'dark';

/**
 * Shape of the theme context state and actions.
 */
interface ThemeContextType {
  /** The currently active theme ('light' or 'dark'). */
  theme: Theme;
  /** Function to switch between light and dark themes. */
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider component that manages the application's color scheme.
 * Enforces dark mode as primary.
 *
 * @param children - The React nodes to be wrapped by the theme context.
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme] = useState<Theme>('dark');

  /**
   * Updates the HTML data-theme attribute and LocalStorage to dark.
   */
  useEffect(() => {
    try {
      document.documentElement.dataset.theme = 'dark';
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('theme', 'dark');
      }
    } catch (error) {
      console.error('Failed to persist theme choice:', error);
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    // Light mode disabled while focusing on dark mode
  }, []);

  const contextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to access the current theme context.
 *
 * @throws {Error} If used outside of a ThemeProvider.
 * @returns {ThemeContextType} The current theme state and toggle function.
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
