import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div 
            className="container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ paddingTop: '4rem', textAlign: 'center' }}
        >
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                THUNDER ART
            </h1>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem' }}>
                Digital Art & Animation Portfolio
            </p>
            
            <div style={{ marginTop: '4rem', padding: '2rem', border: '1px solid var(--color-bg-secondary)', borderRadius: '8px' }}>
                <p>Gallery Coming Soon...</p>
            </div>
        </motion.div>
    );
};

export default Home;
