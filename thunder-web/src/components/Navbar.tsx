import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  active: boolean;
}

const NavLink = ({ to, children, active }: NavLinkProps) => (
  <Link
    to={to}
    className={`text-sm md:text-base tracking-wide transition-colors ${
      active
        ? 'text-(--color-text-primary) font-semibold border-b-2 border-(--color-accent) pb-0.5'
        : 'text-(--color-text-secondary) font-normal hover:text-(--color-text-primary)'
    }`}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--color-bg-header)] border-b border-[var(--color-border)] shadow-[var(--shadow-sm)] transition-[background-color,border-color] duration-300">
      <nav className="flex items-center justify-between max-w-[1400px] mx-auto w-full px-4 py-4 md:px-8">
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold tracking-widest uppercase text-(--color-text-primary) hover:opacity-80 transition-opacity"
        >
          THUNDER
        </Link>

        <div className="flex items-center gap-6 md:gap-8 font-medium">
          <NavLink to="/" active={isActive('/')}>
            Work
          </NavLink>
          <NavLink to="/commissions" active={isActive('/commissions')}>
            Commissions
          </NavLink>
          <NavLink to="/about" active={isActive('/about')}>
            About
          </NavLink>

          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            className="flex items-center justify-center w-8 h-8 rounded-md border border-(--color-border) bg-(--color-bg-tertiary) text-(--color-text-primary) transition-colors cursor-pointer hover:border-(--color-accent)"
          >
            {theme === 'dark' ? (
              /* Sun Icon */
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="5" fill="#FFFFFF" />
                <path
                  d="M12 1v3M12 20v3M23 12h-3M4 12H1M20.485 3.515l-2.121 2.121M5.636 18.364l-2.121 2.121M20.485 20.485l-2.121-2.121M5.636 5.636L3.515 3.515"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              /* Moon Icon */
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  fill="#1E1E1E"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
