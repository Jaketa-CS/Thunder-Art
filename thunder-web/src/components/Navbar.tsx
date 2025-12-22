import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: '1.5rem var(--spacing-sm)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      <Link
        to="/"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0px',
          marginTop: '-15px',
        }}
      >
        <img
          src="/dance.gif"
          alt="Dancing Character"
          style={{
            height: '120px',
            width: 'auto',
            marginRight: '30px',
          }}
        />
        <div
          style={{
            fontSize: '1.7rem',
            fontWeight: '700',
            fontFamily: 'var(--font-family-header)',
            display: 'flex',
            alignItems: 'center',
            marginTop: '-20px',
            letterSpacing: '0.15rem',
          }}
        >
          THUNDER
          <span
            style={{
              color: 'var(--color-accent)',
              display: 'inline-flex',
              alignItems: 'center',
              marginLeft: '2px',
              position: 'relative',
            }}
          >
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

      <div
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          marginBottom: '50px', // Adjusted down slightly
          fontSize: '1.1rem', // Bigger menu text
          fontWeight: '500',
        }}
      >
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
          style={{
            background: 'var(--color-bg-tertiary)',
            border: 'none',
            padding: '0.5rem',
            borderRadius: '50%',
            cursor: 'pointer',
            marginLeft: '1rem',
            color: 'var(--color-text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
          }}
        >
          {theme === 'dark' ? (
            /* Sun Icon - White for Light Mode */
            <svg
              width="20"
              height="20"
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
              width="20"
              height="20"
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
    style={{
      position: 'relative',
      color: active
        ? 'var(--color-text-primary)'
        : 'var(--color-text-secondary)',
      fontWeight: active ? '600' : '400',
    }}
  >
    {children}
    {active && (
      <motion.div
        layoutId="underline"
        style={{
          position: 'absolute',
          bottom: '-4px',
          left: 0,
          right: 0,
          height: '2px',
          background: 'var(--color-accent)',
        }}
      />
    )}
  </Link>
);

export default Navbar;
