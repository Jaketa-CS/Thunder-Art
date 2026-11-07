import React, { createContext, useEffect, useMemo } from 'react';

const ThemeContext = createContext<{ theme: 'dark' }>({ theme: 'dark' });

/**
 * ThemeProvider component that ensures dark mode is active across the application.
 *
 * @param children - The React nodes to be wrapped by the theme context.
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    try {
      document.documentElement.dataset.theme = 'dark';
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('theme', 'dark');
      }
    } catch (error) {
      console.error('Failed to persist theme choice:', error);
    }
  }, []);

  const contextValue = useMemo(() => ({ theme: 'dark' as const }), []);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
