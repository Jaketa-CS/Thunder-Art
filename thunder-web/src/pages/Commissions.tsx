import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import ToSModal from '@/components/ToSModal';
import { siteConfig } from '@/data/siteConfig';

import { COMMISSION_DATA, CommissionCategory } from '@/data/commissionsData';

import { useState } from 'react';

import { CommissionItem } from '@/components/CommissionItem';

const Commissions = () => {
  const [isToSOpen, setIsToSOpen] = useState(false);

  return (
    <>
      <ToSModal isOpen={isToSOpen} onClose={() => setIsToSOpen(false)} />
      <div
        style={{
          paddingTop: '3rem',
          paddingBottom: '6rem',
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          fontFamily: 'var(--font-family-body)',
          overflowX: 'hidden', // Prevent scrollbar from animation
        }}
      >
        {/* Clean, Professional Header */}
        <div
          className="commissions-header"
          style={{
            textAlign: 'center',
            marginBottom: '6rem',
            marginTop: '3rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              color: 'var(--color-text-primary)',
              letterSpacing: '0.02em',
            }}
          >
            COMMISSIONS
          </motion.h1>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              border: `1px solid ${
                siteConfig.commissions.status === 'OPEN' ? '#2ea043' : '#f85149'
              }`,
              borderRadius: 'var(--radius-sm)',
              color:
                siteConfig.commissions.status === 'OPEN'
                  ? '#3fb950'
                  : '#f85149',
              background: 'transparent',
              fontSize: '0.85rem',
              fontWeight: '600',
              letterSpacing: '0.05em',
              marginBottom: '1.5rem',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background:
                  siteConfig.commissions.status === 'OPEN'
                    ? '#3fb950'
                    : '#f85149',
                boxShadow: `0 0 8px ${
                  siteConfig.commissions.status === 'OPEN'
                    ? '#3fb950'
                    : '#f85149'
                }`,
              }}
            />
            STATUS: {siteConfig.commissions.status}
          </motion.div>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '1.5rem',
            }}
          >
            {/* Primary Button */}
            <a
              href="https://t.me/ThunderFennec"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--color-accent)',
                color: 'var(--color-bg-primary)',
                padding: '0.7rem 1.8rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '1rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'background 0.2s ease, transform 0.1s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'brightness(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'brightness(1)';
              }}
            >
              Send a Message
            </a>

            {/* Secondary Button */}
            <a
              href="https://trello.com/b/w0MZ464h/thunder-commision-info"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--color-bg-tertiary)',
                color: 'var(--color-text-primary)',
                padding: '0.7rem 1.8rem',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '500',
                textDecoration: 'none',
                border: '1px solid var(--color-border)',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-border)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-bg-tertiary)';
              }}
            >
              View Queue
            </a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setIsToSOpen(true)}
            style={{
              background: 'transparent',
              color: 'var(--color-text-secondary)',
              fontSize: '0.9rem',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-text-primary)';
              e.currentTarget.style.textDecoration = 'underline';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-text-secondary)';
              e.currentTarget.style.textDecoration = 'none';
            }}
          >
            Read Terms of Service
          </motion.button>
        </div>

        {/* Main Content */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {COMMISSION_DATA.map((category, index) => (
            <CommissionItem
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Commissions;
