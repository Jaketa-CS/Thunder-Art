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
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {[
            {
              name: 'Bluesky',
              url: 'https://bsky.app/profile/thunderfennec.bsky.social',
              color: '#0085ff',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948" />
                </svg>
              ),
            },
            {
              name: 'X (Twitter)',
              url: 'https://x.com/ThunderFennec',
              color: 'var(--color-text-primary)', // Adapts to light/dark mode
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              ),
            },
            {
              name: 'FurAffinity',
              url: 'https://www.furaffinity.net/user/zevoloz',
              color: '#FAAF3A', // FA Orange
              icon: (
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: 'currentColor',
                    maskImage: 'url("/fa-logo-old.png")',
                    WebkitMaskImage: 'url("/fa-logo-old.png")',
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                  }}
                />
              ),
            },
            {
              name: 'Instagram',
              url: 'https://www.instagram.com/zevoloz/',
              color: '#E1306C', // Instagram Pink
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003h-.001ZM8 3.892A4.108 4.108 0 0 1 12.108 8 4.108 4.108 0 0 1 8 12.108 4.108 4.108 0 0 1 3.892 8 4.108 4.108 0 0 1 8 3.892Zm0 6.675A2.567 2.567 0 1 0 5.433 8 2.567 2.567 0 0 0 8 10.567Zm4.237-6.953a1.025 1.025 0 1 0 0 2.05 1.025 1.025 0 0 0 0-2.05Z" />
                </svg>
              ),
            },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.name} Profile`}
              style={{
                color: 'var(--color-text-secondary)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.03)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = social.color;
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                // Use color-mix for dynamic opacity with brand colors/variables
                e.currentTarget.style.background = `color-mix(in srgb, ${social.color}, transparent 90%)`;
                e.currentTarget.style.boxShadow = `0 4px 12px color-mix(in srgb, ${social.color}, transparent 75%)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-text-secondary)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {social.icon}
            </a>
          ))}
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
