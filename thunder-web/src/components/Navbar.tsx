import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

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
          fontSize: '1.5rem',
          fontWeight: '800',
          fontFamily: 'var(--font-family-header)',
        }}
      >
        THUNDER<span style={{ color: 'var(--color-accent)' }}>.</span>
      </Link>

      <div style={{ display: 'flex', gap: '2rem' }}>
        <NavLink to="/" active={isActive('/')}>
          Work
        </NavLink>
        <NavLink to="/commissions" active={isActive('/commissions')}>
          Commissions
        </NavLink>
        <NavLink to="/about" active={isActive('/about')}>
          About
        </NavLink>
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
