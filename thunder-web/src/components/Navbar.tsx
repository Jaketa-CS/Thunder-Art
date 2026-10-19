import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// import { useTheme } from '@/contexts/ThemeContext';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  active: boolean;
}

const NavLink = ({ to, children, active }: NavLinkProps) => (
  <Link
    to={to}
    className={`text-xs tracking-wide transition-colors sm:text-sm md:text-base ${
      active
        ? 'border-b-2 border-(--color-accent) pb-0.5 font-semibold text-(--color-text-primary)'
        : 'font-normal text-(--color-text-secondary) hover:text-(--color-text-primary)'
    }`}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'border-[#3b4261]/60 bg-gradient-to-r from-[#181b29]/90 via-[#232a48]/90 to-[#332f50]/90 shadow-[0_4px_24px_rgba(0,0,0,0.7)] backdrop-blur-md'
          : 'border-[#3b4261] bg-gradient-to-r from-[#181b29] via-[#232a48] to-[#332f50] shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
      }`}
    >
      <nav
        className={`mx-auto flex w-full max-w-[1400px] items-center justify-between px-3 transition-all duration-300 ease-in-out sm:px-6 md:px-8 ${
          isScrolled ? 'h-[68px] md:h-[80px]' : 'h-20 md:h-24'
        }`}
      >
        <Link
          to="/"
          className="flex shrink-0 items-center gap-1 sm:gap-1.5 md:gap-2"
          aria-label="ThunderFennec"
        >
          <img
            src="/site-images/ThunderLogo.webp"
            alt="Thunder Fennec Face Logo"
            className={`w-auto object-contain transition-all duration-300 ease-in-out [image-rendering:-webkit-optimize-contrast] ${
              isScrolled
                ? 'h-12 min-[360px]:h-14 sm:h-[68px] md:h-[82px]'
                : 'h-14 min-[360px]:h-16 min-[390px]:h-[70px] sm:h-[80px] md:h-[98px]'
            }`}
          />
          <img
            src="/site-images/ThunderLogoText.webp"
            alt="Thunder Fennec"
            className={`w-auto object-contain transition-all duration-300 ease-in-out [image-rendering:-webkit-optimize-contrast] ${
              isScrolled
                ? 'h-8 min-[360px]:h-9 sm:h-[54px] md:h-[72px]'
                : 'h-9 min-[360px]:h-11 min-[390px]:h-12 sm:h-16 md:h-22'
            }`}
          />
        </Link>

        <div className="flex shrink-0 items-center gap-2 font-medium min-[390px]:gap-3 sm:gap-6 md:gap-8">
          <NavLink to="/" active={isActive('/')}>
            ART
          </NavLink>
          <NavLink to="/commissions" active={isActive('/commissions')}>
            COMMISSIONS
          </NavLink>
          <NavLink to="/about" active={isActive('/about')}>
            ABOUT
          </NavLink>

          {/* Theme switcher temporarily commented out while focusing on dark mode:
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light'? 'dark': 'light'} theme`}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-(--color-border) bg-(--color-bg-tertiary) text-(--color-text-primary) transition-colors hover:border-(--color-accent)"
          >
            {theme === 'dark'? (
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
          */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
