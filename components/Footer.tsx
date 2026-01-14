import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerBrand}>
                    <h3 className={styles.footerTitle}>Gorgeous Gems</h3>
                    <p className={styles.footerTagline}>Elegance in Every Cut</p>
                </div>
                <div className={styles.footerInfo}>
                    <p>&copy; {new Date().getFullYear()} Gorgeous Gems. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
