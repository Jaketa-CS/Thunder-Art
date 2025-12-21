import { motion } from 'framer-motion';

const Footer = () => {
  const links = [
    { name: 'Twitter / X', url: 'https://x.com/ThunderFennec' },
    { name: 'Instagram', url: 'https://www.instagram.com/zevoloz/' },
    { name: 'FurAffinity', url: 'https://www.furaffinity.net/user/zevoloz' },
  ];

  return (
    <footer
      style={{
        marginTop: '4rem',
        padding: '2rem 0',
        borderTop: '1px solid var(--color-bg-secondary)',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginBottom: '1rem',
        }}
      >
        {links.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, color: 'var(--color-accent)' }}
            style={{ fontSize: '1rem', fontWeight: 500 }}
          >
            {link.name}
          </motion.a>
        ))}
      </div>
      <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} Thunder Art. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
