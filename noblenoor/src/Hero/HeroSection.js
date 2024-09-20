import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const images = [
    '/hero page image.png',
    '/hero 3.png',
    '/Khimar collection🤍.png',
];

function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className="hero-section">
                <div className="carousel-container">
                    <img src={images[currentImageIndex]} alt="Hero" className="hero-image" />
                </div>
                <div className="hero-content">
                    <h1 className="hero-title">Discover Elegance</h1>
                    <a href="#Shop Now">
                        <button className="shop-button">Shop Now</button>
                    </a>
                </div>
            </section>
            <section className="About">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Find Your Perfect Abaya
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Where Modesty Meets Fashion
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    Discover Elegance
                </motion.p>
                <motion.a
                    href="#Shop Now"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.0 }}
                >
                    <button className="shop-Now">Shop Now</button>
                </motion.a>
            </section>
        </>
    );
}

export default HeroSection;