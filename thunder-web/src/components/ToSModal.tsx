import { motion, AnimatePresence } from 'framer-motion';

interface ToSModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ToSModal = ({ isOpen, onClose }: ToSModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Background Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-xs"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative z-[1000] bg-[var(--color-bg-secondary)] p-6 md:p-10 rounded-2xl border border-[var(--color-border)] max-w-[700px] w-full max-h-[90vh] flex flex-col shadow-2xl"
          >
            <h2 className="mb-4 text-[var(--color-text-primary)] text-2xl md:text-3xl font-bold">
              Terms of Service
            </h2>

            <div className="custom-scrollbar text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base flex flex-col gap-8 overflow-y-auto pr-4">
              {/* 1. Payment */}
              <section>
                <h3 className="text-[var(--color-text-primary)] mb-2 text-lg font-semibold">
                  Payment & Invoicing
                </h3>
                <ul className="pl-5 flex flex-col gap-2 list-disc">
                  <li>Prices are in USD.</li>
                  <li>Payment is required 100% upfront before I begin work.</li>
                  <li>
                    I accept payments via <strong>PayPal/Venmo</strong>. I will
                    send you an invoice. Do not send payment until the invoice
                    is received.
                  </li>
                </ul>
              </section>

              {/* 2. Process */}
              <section>
                <h3 className="text-[var(--color-text-primary)] mb-2 text-lg font-semibold">
                  The Process & Revisions
                </h3>
                <p className="mb-2">
                  Please provide a clear, unshaded reference sheet of your
                  character. (Text-only descriptions are fine too ;3)
                </p>
                <p className="mb-2">
                  I will do my best to keep you highly involved! I will send
                  updates and wait for your approval at each of the following
                  stages:
                </p>
                <ul className="pl-5 mb-4 flex flex-col gap-2 list-disc">
                  <li>
                    <strong>WIP Sketch:</strong> Initial pose and layout. (This
                    is the best time for major changes!)
                  </li>
                  <li>
                    <strong>Polished Line Art:</strong> Cleaned up lines and
                    final details.
                  </li>
                  <li>
                    <strong>Basic Colors:</strong> Flat colors to ensure
                    markings are correct.
                  </li>
                  <li>
                    <strong>Final Render:</strong> The completed piece with all
                    shading and lighting.
                  </li>
                </ul>
                <p className="text-[var(--color-accent)]">
                  <strong>Revisions:</strong> You can request major changes
                  during the sketch phase. Once lineart and coloring have
                  started, only minor tweaks (like color adjustments or missed
                  markings) are allowed. Major changes requested after the
                  sketch phase may incur an extra cost.
                </p>
              </section>

              {/* 3. Turnaround */}
              <section>
                <h3 className="text-[var(--color-text-primary)] mb-2 text-lg font-semibold">
                  Turnaround Time & Deadlines
                </h3>
                <p className="mb-2">
                  Typical turnaround time is anywhere from 1 to 4 weeks,
                  depending on your place in the queue and the complexity of the
                  piece.
                </p>
                <p>
                  If you need a piece done by a specific date (like a convention
                  or something), please let me know. :D
                </p>
              </section>

              {/* 4. Copyright */}
              <section>
                <h3 className="text-[var(--color-text-primary)] mb-2 text-lg font-semibold">
                  Copyright & Usage
                </h3>
                <ul className="pl-5 flex flex-col gap-2 list-disc">
                  <li>
                    <strong>Personal Use Only:</strong> Commissions are strictly
                    for personal, non-commercial use unless discussed otherwise.
                    You may not use my art for merchandise, branding, or
                    AI-training datasets.
                  </li>
                  <li>
                    You may post the artwork on your social media, Toyhouse, or
                    use it as a profile picture (but please credit me 💙)!
                  </li>
                  <li>
                    I retain the right to post the finished artwork on my
                    portfolio, social media, and Patreon. If you need the
                    commission to be kept private (or held until a certain
                    date), let me know upfront!
                  </li>
                </ul>
              </section>

              {/* 5. Refunds */}
              <section>
                <h3 className="text-[var(--color-text-primary)] mb-2 text-lg font-semibold">
                  Refunds & Cancellations
                </h3>
                <ul className="pl-5 flex flex-col gap-2 list-disc">
                  <li>
                    If I am unable to complete your commission for any reason,
                    you will receive a full 100% refund.
                  </li>
                  <li>
                    If you cancel the commission before I start the sketch, you
                    get a full refund.
                  </li>
                  <li>
                    If you cancel after the sketch is completed/approved, I will
                    refund 50% to cover the time already spent.
                  </li>
                  <li className="text-[#e74c3c]">
                    No refunds are given after the piece is fully lined/colored.
                  </li>
                </ul>
              </section>
            </div>

            <div className="pt-6 mt-auto border-t border-white/5">
              <button
                onClick={onClose}
                className="w-full bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] border border-[var(--color-border)] p-4 rounded-xl text-lg font-bold cursor-pointer transition-colors hover:bg-[var(--color-border)]"
              >
                I Understand!
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ToSModal;
