import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './style.css';

interface ImageCarouselProps {
    images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            Math.min(prevIndex + 1, images.length - 1)
        );
    };

    const handleThumbnailClick = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="carousel-container">
            <img
                className="main-image"
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
            />
            <div className="thumbnails-container">
                <button
                    className="navigation-button"
                    onClick={handlePrevious}
                    disabled={currentImageIndex === 0}
                >
                    <FaArrowLeft size={20} />
                </button>
                {images.map((image, index) => (
                    <img
                        key={index}
                        className={`thumbnail ${index === currentImageIndex ? 'selected' : ''}`}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => handleThumbnailClick(index)}
                    />
                ))}
                <button
                    className="navigation-button"
                    onClick={handleNext}
                    disabled={currentImageIndex === images.length - 1}
                >
                    <FaArrowRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default ImageCarousel;
