import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      style={{
        marginTop: 'auto',
        padding: '3rem 2rem',
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg-secondary)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        {/* Social Links */}
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a
            href="https://bsky.app/profile/thunderfennec.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bluesky Profile"
            style={{
              color: 'var(--color-text-secondary)',
              transition: 'color 0.2s ease, transform 0.2s ease',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0085ff'; // Bluesky brand color
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-text-secondary)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div
          style={{
            fontSize: '0.9rem',
            color: 'var(--color-text-tertiary)',
            textAlign: 'center',
          }}
        >
          <p style={{ margin: 0 }}>
            &copy; {currentYear} Thunder Fennec. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
