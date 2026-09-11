import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import ToSModal from '@/components/ToSModal';
import { siteConfig } from '@/data/siteConfig';

import { COMMISSION_DATA } from '@/data/commissionsData';

import { useState } from 'react';

import { CommissionItem } from '@/components/CommissionItem';

const Commissions = () => {
  const [isToSOpen, setIsToSOpen] = useState(false);

  return (
    <>
      <ToSModal isOpen={isToSOpen} onClose={() => setIsToSOpen(false)} />
      <div className="pt-12 pb-24 max-w-[1200px] mx-auto px-6 font-[var(--font-family-body)] overflow-x-hidden">
        {/* Clean, Professional Header */}
        <div className="commissions-header text-center mb-24 mt-12 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text-primary)] tracking-wide"
          >
            COMMISSIONS
          </motion.h1>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-xs text-xs font-semibold tracking-wider mb-6 bg-transparent border ${
              siteConfig.commissions.status === 'OPEN'
                ? 'border-[#2ea043] text-[#3fb950]'
                : 'border-[#f85149] text-[#f85149]'
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                siteConfig.commissions.status === 'OPEN'
                  ? 'bg-[#3fb950] shadow-[0_0_8px_#3fb950]'
                  : 'bg-[#f85149] shadow-[0_0_8px_#f85149]'
              }`}
            />
            STATUS: {siteConfig.commissions.status}
          </motion.div>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4 flex-wrap mb-6"
          >
            {/* Primary Button */}
            <a
              href="https://t.me/ThunderFennec"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-accent)] text-[var(--color-bg-primary)] px-7 py-3 rounded-xs text-base font-semibold no-underline transition-all duration-200 hover:brightness-110 active:scale-95"
            >
              Send a Message
            </a>

            {/* Secondary Button */}
            <a
              href="https://trello.com/b/w0MZ464h/thunder-commision-info"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] px-7 py-3 rounded-md text-base font-medium no-underline border border-[var(--color-border)] transition-colors duration-200 hover:bg-[var(--color-border)]"
            >
              View Queue
            </a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setIsToSOpen(true)}
            className="bg-transparent text-[var(--color-text-secondary)] text-sm border-none cursor-pointer inline-block transition-colors hover:text-[var(--color-text-primary)] hover:underline"
          >
            Read Terms of Service
          </motion.button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col">
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
