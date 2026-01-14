'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    Gorgeous Gems
                </Link>

                {/* Desktop Navigation */}
                <ul className={styles.navLinks}>
                    <li>
                        <Link href="/" className={styles.navLink}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/gallery" className={styles.navLink}>
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={styles.navLink}>
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.mobileNavLinks}>
                        <li>
                            <Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/gallery" className={styles.mobileNavLink} onClick={closeMenu}>
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
