import React from 'react';
import './style.css';

interface SizeSelectorProps {
    sizes: string[];
    selectedSize: string;
    onSelectSize: (size: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, selectedSize, onSelectSize }) => {
    return (
        <div className="size-selector">
            {sizes.map((size) => (
                <button
                    key={size}
                    className={`size-button ${size === selectedSize ? 'selected' : ''}`}
                    onClick={() => onSelectSize(size)}
                >
                    {size}
                </button>
            ))}
        </div>
    );
};

export default SizeSelector;