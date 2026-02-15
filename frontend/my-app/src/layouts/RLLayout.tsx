import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { RLHeader } from '../components/auth/RLHeader';
import { ParallaxBackground } from '../components/Effects/ParallaxBackground';

export const RLLayout = () => {
    const mainRef = useRef<HTMLElement | null>(null);

    return (
        <div style={{ 
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100vh', 
            overflow: 'hidden',
            backgroundColor: 'transparent',
            position: 'relative'
        }}>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <RLHeader />

                <main
                    ref={mainRef}
                    style={{ 
                    padding: '20px', 
                    flex: 1, 
                    width: '100%', 
                    overflowY: 'auto'
                }}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};