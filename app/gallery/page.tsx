import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Gallery - Gorgeous Gems',
    description: 'Browse our exquisite collection of rare and beautiful gemstones.',
};

export default function Gallery() {
    // INSTRUCTIONS TO ADD YOUR GEMSTONE PHOTOS:
    // 1. Create a folder called "gems" inside the /public folder
    // 2. Add your gemstone images to /public/gems/
    // 3. Update the gems array below with your image filenames and descriptions
    // 4. Change hasImage to true for each gem when you add its photo

    const gems = [
        {
            id: 1,
            name: 'Blue Sapphire',
            description: 'Stunning blue sapphire with exceptional clarity',
            image: '/gems/sapphire.jpg', // Replace with your image filename
            hasImage: false, // Set to true when you add the image
        },
        {
            id: 2,
            name: 'Ruby',
            description: 'Deep red ruby with brilliant cut',
            image: '/gems/ruby.jpg',
            hasImage: false,
        },
        {
            id: 3,
            name: 'Emerald',
            description: 'Vibrant green emerald from Colombia',
            image: '/gems/emerald.jpg',
            hasImage: false,
        },
        {
            id: 4,
            name: 'Diamond',
            description: 'Flawless white diamond, 2 carats',
            image: '/gems/diamond.jpg',
            hasImage: false,
        },
        {
            id: 5,
            name: 'Amethyst',
            description: 'Purple amethyst with natural formation',
            image: '/gems/amethyst.jpg',
            hasImage: false,
        },
        {
            id: 6,
            name: 'Topaz',
            description: 'Golden topaz with warm tones',
            image: '/gems/topaz.jpg',
            hasImage: false,
        },
        {
            id: 7,
            name: 'Aquamarine',
            description: 'Light blue aquamarine, sea-inspired beauty',
            image: '/gems/aquamarine.jpg',
            hasImage: false,
        },
        {
            id: 8,
            name: 'Opal',
            description: 'Multi-colored opal with fire effect',
            image: '/gems/opal.jpg',
            hasImage: false,
        },
        {
            id: 9,
            name: 'Garnet',
            description: 'Deep red garnet with classic cut',
            image: '/gems/garnet.jpg',
            hasImage: false,
        },
    ];

    return (
        <>
            <Navigation />
            <main>
                <section className={`section ${styles.gallery}`}>
                    <div className="container">
                        <div className={styles.galleryHeader}>
                            <h1 className={styles.galleryTitle}>Our Collection</h1>
                            <p className={styles.gallerySubtitle}>
                                Discover our curated selection of exceptional gemstones
                            </p>
                        </div>

                        <div className={`grid grid-3 ${styles.galleryGrid}`}>
                            {gems.map((gem) => (
                                <div key={gem.id} className={`card ${styles.gemCard}`}>
                                    {gem.hasImage ? (
                                        <div className={styles.gemImageContainer}>
                                            <Image
                                                src={gem.image}
                                                alt={gem.name}
                                                width={400}
                                                height={400}
                                                className={styles.gemImage}
                                            />
                                        </div>
                                    ) : (
                                        <div className={styles.gemImagePlaceholder}>
                                            <span className={styles.gemIcon}>💎</span>
                                            <p className={styles.placeholderText}>Photo Coming Soon</p>
                                        </div>
                                    )}
                                    <div className={styles.gemInfo}>
                                        <h3 className={styles.gemName}>{gem.name}</h3>
                                        <p className={styles.gemDescription}>{gem.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
