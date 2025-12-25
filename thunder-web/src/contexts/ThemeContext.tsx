import React, { createContext, useContext, useEffect, useState } from 'react';

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
 *
 * It automatically detects the user's system preference on initialization
 * and persists the user's manual choice via LocalStorage.
 *
 * @param children - The React nodes to be wrapped by the theme context.
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      // Priority 1: User-defined preference stored in browser
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = localStorage.getItem('theme') as Theme;
        if (stored === 'light' || stored === 'dark') return stored;
      }

      // Priority 2: OS/Browser level color scheme preference
      if (
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        return 'dark';
      }
    } catch (error) {
      // Gracefully fail and use fallback
      console.warn('Theme initialization failed:', error);
    }

    // Priority 3: Default fallback
    return 'light';
  });

  /**
   * Updates the HTML data-theme attribute and LocalStorage whenever the theme state changes.
   */
  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('theme', theme);
      }
    } catch (error) {
      console.error('Failed to persist theme choice:', error);
    }
  }, [theme]);

  /**
   * Subscribes to system color scheme changes to synchronize the UI
   * automatically if the user hasn't set a manual override.
   */
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      try {
        // Only sync with system if no manual override exists in storage
        const manualOverride = localStorage.getItem('theme');
        if (!manualOverride) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      } catch {
        // If storage is blocked, we just ignore the change to avoid crashing
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  /**
   * Toggles the current theme and persists the choice as a manual override.
   */
  const toggleTheme = () => {
    try {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('theme', newTheme);
      }
    } catch (error) {
      console.error('Failed to toggle theme:', error);
      // We still update the state so the current session reflects the change
      setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
