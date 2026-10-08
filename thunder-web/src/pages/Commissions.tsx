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
      <div className="mx-auto max-w-[1200px] overflow-x-hidden px-6 pt-8 pb-24 font-[var(--font-family-body)] md:pt-10">
        {/* Clean, Professional Header */}
        <div className="commissions-header mt-12 mb-24 flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-4xl font-bold tracking-wide text-[var(--color-text-primary)] md:text-5xl"
          >
            COMMISSIONS
          </motion.h1>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`mb-6 inline-flex items-center gap-2 rounded-xs border bg-transparent px-4 py-1.5 text-xs font-semibold tracking-wider ${
              siteConfig.commissions.status === 'OPEN'
                ? 'border-[#2ea043] text-[#3fb950]'
                : 'border-[#f85149] text-[#f85149]'
            }`}
          >
            <div
              className={`h-2 w-2 rounded-full ${
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
            className="mb-6 flex flex-wrap items-center justify-center gap-4"
          >
            {/* Primary Button */}
            <a
              href="https://t.me/ThunderFennec"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xs bg-[var(--color-accent)] px-7 py-3 text-base font-semibold text-[var(--color-bg-primary)] no-underline transition-all duration-200 hover:brightness-110 active:scale-95"
            >
              Send a Message
            </a>

            {/* Secondary Button */}
            <a
              href="https://trello.com/b/w0MZ464h/thunder-commision-info"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] px-7 py-3 text-base font-medium text-[var(--color-text-primary)] no-underline transition-colors duration-200 hover:bg-[var(--color-border)]"
            >
              View Queue
            </a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setIsToSOpen(true)}
            className="inline-block cursor-pointer border-none bg-transparent text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] hover:underline"
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
