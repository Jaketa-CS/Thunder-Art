import { motion } from 'framer-motion';

interface CommissionType {
  title: string;
  price: string;
  description: string;
  features: string[];
}

const commissionTypes: CommissionType[] = [
  {
    title: 'Sketch / Lineart',
    price: '$40+',
    description: 'Clean sketches or lineart. Perfect for character concepts.',
    features: ['Simple Background', 'High Res PNG', '1 Revision'],
  },
  {
    title: 'Flat Color',
    price: '$70+',
    description: 'Clean lines with flat colors. No shading.',
    features: ['Simple Background', 'High Res PNG', '2 Revisions'],
  },
  {
    title: 'Full Render',
    price: '$120+',
    description: 'Fully painted with lighting and shading.',
    features: [
      'Detailed Background',
      'High Res PNG',
      '3 Revisions',
      'Source File',
    ],
  },
];

const Commissions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="container"
      style={{ paddingTop: '2rem', paddingBottom: '4rem' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Commissions</h1>
        <p
          style={{
            color: 'var(--color-text-secondary)',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          I am currently <strong>OPEN</strong> for commissions! Please read the
          Terms of Service below before reaching out.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem',
        }}
      >
        {commissionTypes.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{
              background: 'var(--color-bg-secondary)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #2a2a2a',
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              {item.title}
            </h3>
            <div
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: 'var(--color-accent)',
                marginBottom: '1rem',
              }}
            >
              {item.price}
            </div>
            <p
              style={{
                color: 'var(--color-text-secondary)',
                marginBottom: '1.5rem',
              }}
            >
              {item.description}
            </p>
            <ul
              style={{
                listStyle: 'none',
                color: 'var(--color-text-secondary)',
              }}
            >
              {item.features.map((feature) => (
                <li
                  key={feature}
                  style={{
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      color: 'var(--color-accent)',
                      marginRight: '0.5rem',
                    }}
                  >
                    •
                  </span>{' '}
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          padding: '2rem',
          borderRadius: '12px',
        }}
      >
        <h2 style={{ marginBottom: '1rem' }}>How to Order</h2>
        <p
          style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}
        >
          Send me a DM on Twitter or an email with your character reference and
          a description of what you want.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>Payment:</strong> 50% upfront via PayPal / Stripe.
        </p>
      </div>
    </motion.div>
  );
};

export default Commissions;
