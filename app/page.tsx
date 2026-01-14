import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Gorgeous Gems</h1>
            <p className={styles.heroSubtitle}>Elegance in Every Cut</p>
            <p className={styles.heroDescription}>
              Discover our exquisite collection of rare and beautiful gemstones,
              carefully curated for those who appreciate timeless elegance.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/gallery" className="btn btn-primary">
                View Collection
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={`section ${styles.features}`}>
          <div className="container">
            <h2 className={`text-center mb-xl ${styles.sectionTitle}`}>
              Why Choose Gorgeous Gems
            </h2>
            <div className="grid grid-3">
              <div className={`card ${styles.featureCard}`}>
                <div className={styles.featureIcon}>💎</div>
                <h3 className="mb-sm">Premium Quality</h3>
                <p>
                  Each gemstone is hand-selected for its exceptional quality,
                  clarity, and brilliance.
                </p>
              </div>
              <div className={`card ${styles.featureCard}`}>
                <div className={styles.featureIcon}>✨</div>
                <h3 className="mb-sm">Rare Collection</h3>
                <p>
                  Access to exclusive and rare gemstones from around the world,
                  sourced with care.
                </p>
              </div>
              <div className={`card ${styles.featureCard}`}>
                <div className={styles.featureIcon}>🤝</div>
                <h3 className="mb-sm">Expert Guidance</h3>
                <p>
                  Personalized consultation to help you find the perfect gemstone
                  for your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className={`section-sm ${styles.cta}`}>
          <div className="container text-center">
            <h2 className="mb-md">Ready to Explore?</h2>
            <p className="mb-lg" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto var(--spacing-lg)' }}>
              Browse our gallery of stunning gemstones or contact us for a personalized consultation.
            </p>
            <Link href="/gallery" className="btn btn-primary">
              Explore Gallery
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
