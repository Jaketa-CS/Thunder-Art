import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      className="navbar flex items-center justify-between max-w-[1400px] mx-auto w-full p-4 md:px-4 md:py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to="/"
        className="navbar-logo flex flex-col items-center -mt-3.5"
      >
        <img
          src="/dance.gif"
          alt="Dancing Character"
          className="h-20 md:h-[120px] w-auto mr-0 md:mr-7"
        />
        <div className="flex items-center -mt-2.5 md:-mt-5 text-xl md:text-[1.7rem] font-bold tracking-[0.15rem] font-[var(--font-family-header)]">
          THUNDER
          <span className="text-[var(--color-accent)] inline-flex items-center ml-0.5 relative">
            {/* Primary Bolt */}
            <svg
              width="0.8em"
              height="0.8em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: 'translateY(-2px) rotate(15deg) scale(0.8, 1.5)',
                animation: 'electric-glitch 5s infinite ease-in-out',
              }}
            >
              <defs>
                <linearGradient id="bolt-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00E5FF" />
                  <stop offset="100%" stopColor="#2979FF" />
                </linearGradient>
              </defs>
              <path
                d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                fill="url(#bolt-grad)"
              />
            </svg>

            {/* Secondary Bolt - appears during glitch */}
            <svg
              width="0.8em"
              height="0.8em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                transform: 'translate(3px, -4px) rotate(20deg) scale(0.7, 1.4)',
                animation:
                  'electric-glitch-2 5s infinite ease-in-out, bolt-appear 5s infinite',
                pointerEvents: 'none',
              }}
            >
              <defs>
                <linearGradient id="bolt-grad-2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00FFFF" />
                  <stop offset="100%" stopColor="#0080FF" />
                </linearGradient>
              </defs>
              <path
                d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                fill="url(#bolt-grad-2)"
              />
            </svg>
          </span>
        </div>
      </Link>

      <div className="navbar-menu flex items-center gap-4 md:gap-8 text-sm md:text-[1.1rem] font-medium">
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
          className="flex items-center justify-center w-9 h-9 ml-2 p-2 rounded-xs border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] transition-all duration-200 cursor-pointer hover:border-[var(--color-accent)]"
        >
          {theme === 'dark' ? (
            /* Sun Icon - White for Light Mode */
            <svg
              width="18"
              height="18"
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
            /* Moon Icon - Dark for Dark Mode */
            <svg
              width="18"
              height="18"
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
    </motion.nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  active: boolean;
  onClick?: () => void;
}

const NavLink = ({ to, children, active, onClick }: NavLinkProps) => (
  <Link
    to={to}
    onClick={onClick}
    className={`relative transition-colors duration-200 ${
      active
        ? 'text-[var(--color-text-primary)] font-semibold'
        : 'text-[var(--color-text-secondary)] font-normal hover:text-[var(--color-text-primary)]'
    }`}
  >
    {children}
    {active && (
      <motion.div
        layoutId="underline"
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-accent)]"
      />
    )}
  </Link>
);

export default Navbar;
