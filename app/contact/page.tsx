'use client';

import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState, FormEvent } from 'react';
import styles from './page.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Reset errors
        const newErrors = {
            name: '',
            email: '',
            subject: '',
            message: '',
        };

        // Validate form
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            // Form is valid - in a real app, this would send to backend
            console.log('Form submitted:', formData);
            setIsSubmitted(true);

            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }
    };

    return (
        <>
            <Navigation />
            <main>
                <section className={`section ${styles.contact}`}>
                    <div className="container">
                        <div className={styles.contactHeader}>
                            <h1 className={styles.contactTitle}>Get in Touch</h1>
                            <p className={styles.contactSubtitle}>
                                Have questions about our gemstones? We'd love to hear from you.
                            </p>
                        </div>

                        <div className={styles.contactContent}>
                            {/* Contact Form */}
                            <div className={styles.formSection}>
                                {isSubmitted && (
                                    <div className={styles.successMessage}>
                                        Thank you for your message! We'll get back to you soon.
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name" className={styles.label}>
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`input ${errors.name ? styles.inputError : ''}`}
                                            placeholder="Your name"
                                        />
                                        {errors.name && (
                                            <span className={styles.error}>{errors.name}</span>
                                        )}
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="email" className={styles.label}>
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`input ${errors.email ? styles.inputError : ''}`}
                                            placeholder="your.email@example.com"
                                        />
                                        {errors.email && (
                                            <span className={styles.error}>{errors.email}</span>
                                        )}
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="subject" className={styles.label}>
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className={`input ${errors.subject ? styles.inputError : ''}`}
                                            placeholder="How can we help?"
                                        />
                                        {errors.subject && (
                                            <span className={styles.error}>{errors.subject}</span>
                                        )}
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="message" className={styles.label}>
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={`textarea ${errors.message ? styles.inputError : ''}`}
                                            placeholder="Tell us more about your inquiry..."
                                            rows={6}
                                        />
                                        {errors.message && (
                                            <span className={styles.error}>{errors.message}</span>
                                        )}
                                    </div>

                                    <button type="submit" className="btn btn-primary">
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* Contact Information */}
                            <div className={styles.infoSection}>
                                <div className={styles.infoCard}>
                                    <h3 className={styles.infoTitle}>Contact Information</h3>
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoIcon}>📧</span>
                                        <div>
                                            <p className={styles.infoLabel}>Email</p>
                                            <p className={styles.infoValue}><a href="mailto:inzamijas23@outlook.com">inzamijas23@outlook.com</a></p>
                                        </div>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoIcon}>📞</span>
                                        <div>
                                            <p className={styles.infoLabel}>Phone</p>
                                            <p className={styles.infoValue}>+94 76 266 9659</p>
                                        </div>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoIcon}>📍</span>
                                        <div>
                                            <p className={styles.infoLabel}>Address</p>
                                            <p className={styles.infoValue}>
                                                16 Adnives Road<br />
                                                Periyamulla<br />
                                                Negombo <br />
                                                Sri Lanka
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.hoursCard}>
                                    <h3 className={styles.infoTitle}>Business Hours</h3>
                                    <p className={styles.hoursText}>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p className={styles.hoursText}>Saturday: 10:00 AM - 4:00 PM</p>
                                    <p className={styles.hoursText}>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
