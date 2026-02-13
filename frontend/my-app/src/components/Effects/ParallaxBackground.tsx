import React from 'react';
import backgroundImage from '../../assets/images/Cover.png';

export const ParallaxBackground: React.FC = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,
            pointerEvents: 'none'
        }} />
    );
};
