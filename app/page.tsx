import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
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
            <p className={styles.businessTagline}>Dealers in Export & Import of Gem Stones</p>
            <p className={styles.regNumber}>Reg No: WVI5220</p>
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

        {/* About the Owner Section */}
        <section className={`section ${styles.owner}`}>
          <div className="container">
            <h2 className={`text-center mb-xl ${styles.sectionTitle}`}>
              Meet the Visionary
            </h2>
            <div className={styles.ownerContent}>
              <div className={styles.ownerText}>
                <h3 className="mb-md">Mr. Inzam Ijas</h3>
                <p className="mb-md">
                  At just 23 years old, Mr. Inzam Ijas has transformed his lifelong 
                  passion for gemstones into a thriving business. His fascination with 
                  gems began in his teenage years, and what started as a hobby quickly 
                  became an unwavering commitment to excellence in the gemstone industry.
                </p>
                <p className="mb-md">
                  Driven by determination and an entrepreneurial spirit, Inzam embarked 
                  on a remarkable journey, traveling solo to prestigious gem exhibitions 
                  across the globe. From the vibrant markets of Bangkok to the bustling 
                  trade shows in China and Germany, he personally 
                  sourced each gemstone, building relationships with miners, cutters, 
                  and dealers along the way.
                </p>
                <p>
                  Today, Gorgeous Gems stands as a testament to his dedication, offering 
                  a carefully curated collection of rare and exquisite gemstones. Every 
                  piece reflects Inzam's keen eye for quality, his deep knowledge of the 
                  craft, and his commitment to bringing the world's finest gems to 
                  discerning collectors and enthusiasts.
                </p>
              </div>
              <div className={styles.ownerImage}>
                <div className={styles.imagePlaceholder}>
                  {<Image src="/inzam-ijas.jpeg" alt="Mr. Inzam Ijas" fill style={{ objectFit: 'cover' }} />}
                  
                </div>
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
