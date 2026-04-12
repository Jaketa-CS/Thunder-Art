import { motion, AnimatePresence } from 'framer-motion';

interface ToSModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ToSModal = ({ isOpen, onClose }: ToSModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
            }}
          >
            {/* Background Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(5px)',
              }}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              style={{
                position: 'relative',
                zIndex: 1000,
                background: 'var(--color-bg-secondary)',
                padding: '2.5rem',
                borderRadius: '20px',
                border: '1px solid var(--color-border)',
                maxWidth: '700px',
                width: '100%',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <h2 style={{ marginBottom: '1rem', color: 'var(--color-text-primary)', fontSize: '2rem' }}>
                Terms of Service
              </h2>
              
              <div 
                className="custom-scrollbar"
                style={{ 
                  color: 'var(--color-text-secondary)', 
                  lineHeight: '1.6', 
                  fontSize: '0.95rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '2rem',
                  overflowY: 'auto',
                  paddingRight: '1rem',
                }}
              >
                {/* 1. Payment */}
                <section>
                  <h3 style={{ color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                    Payment & Invoicing
                  </h3>
                  <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li>Prices are in USD.</li>
                    <li>Payment is required 100% upfront before I begin work.</li>
                    <li>I accept payments via <strong>PayPal/Venmo</strong>. I will send you an invoice. Do not send payment until the invoice is received.</li>
                  </ul>
                </section>

                {/* 2. Process */}
                <section>
                  <h3 style={{ color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                    The Process & Revisions
                  </h3>
                  <p style={{ marginBottom: '0.5rem' }}>Please provide a clear, unshaded reference sheet of your character. (Text-only descriptions are fine too ;3)</p>
                  <p style={{ marginBottom: '0.5rem' }}>I will do my best to keep you highly involved! I will send updates and wait for your approval at each of the following stages:</p>
                  <ul style={{ paddingLeft: '1.2rem', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li><strong>WIP Sketch:</strong> Initial pose and layout. (This is the best time for major changes!)</li>
                    <li><strong>Polished Line Art:</strong> Cleaned up lines and final details.</li>
                    <li><strong>Basic Colors:</strong> Flat colors to ensure markings are correct.</li>
                    <li><strong>Final Render:</strong> The completed piece with all shading and lighting.</li>
                  </ul>
                  <p style={{ color: 'var(--color-accent)' }}>
                    <strong>Revisions:</strong> You can request major changes during the sketch phase. Once lineart and coloring have started, only minor tweaks (like color adjustments or missed markings) are allowed. Major changes requested after the sketch phase may incur an extra cost.
                  </p>
                </section>

                {/* 3. Turnaround */}
                <section>
                  <h3 style={{ color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                    Turnaround Time & Deadlines
                  </h3>
                  <p style={{ marginBottom: '0.5rem' }}>Typical turnaround time is anywhere from 1 to 4 weeks, depending on your place in the queue and the complexity of the piece.</p>
                  <p>If you need a piece done by a specific date (like a convention or something), please let me know. :D</p>
                </section>

                {/* 4. Copyright */}
                <section>
                  <h3 style={{ color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                    Copyright & Usage
                  </h3>
                  <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li><strong>Personal Use Only:</strong> Commissions are strictly for personal, non-commercial use unless discussed otherwise. You may not use my art for merchandise, branding, or AI-training datasets.</li>
                    <li>You may post the artwork on your social media, Toyhouse, or use it as a profile picture (but please credit me 💙)!</li>
                    <li>I retain the right to post the finished artwork on my portfolio, social media, and Patreon. If you need the commission to be kept private (or held until a certain date), let me know upfront!</li>
                  </ul>
                </section>

                {/* 5. Refunds */}
                <section>
                  <h3 style={{ color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                    Refunds & Cancellations
                  </h3>
                  <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li>If I am unable to complete your commission for any reason, you will receive a full 100% refund.</li>
                    <li>If you cancel the commission before I start the sketch, you get a full refund.</li>
                    <li>If you cancel after the sketch is completed/approved, I will refund 50% to cover the time already spent.</li>
                    <li style={{ color: '#e74c3c' }}>No refunds are given after the piece is fully lined/colored.</li>
                  </ul>
                </section>
              </div>

              <div style={{ paddingTop: '2rem', marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <button
                  onClick={onClose}
                  style={{
                    width: '100%',
                    background: 'var(--color-bg-tertiary)',
                    color: 'var(--color-text-primary)',
                    border: '1px solid var(--color-border)',
                    padding: '1rem',
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-border)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--color-bg-tertiary)')}
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
