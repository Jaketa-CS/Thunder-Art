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
          fontSize: '2.25rem',
          fontWeight: '800',
          fontFamily: 'var(--font-family-header)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        THUNDERFENNEC
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
              animation: 'electric-glitch 5s infinite ease-in-out'
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
              transform: 'translate(3px, -4px) rotate(20deg) scale(0.9, 1.2)',
              animation: 'electric-glitch-2 5s infinite ease-in-out, bolt-appear 5s infinite',
              pointerEvents: 'none'
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
        <img
          src="/dance.gif"
          alt="Dancing Character"
          style={{ height: '60px', width: 'auto' }} // Bigger
        />
      </Link>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
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
          {theme === 'dark' ? '☀️' : '🌙'}
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
