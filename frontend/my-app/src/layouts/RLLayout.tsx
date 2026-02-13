import { Outlet } from 'react-router-dom';
import { RLHeader } from '../components/RL/RLHeader';
import { ParallaxBackground } from '../components/Effects/ParallaxBackground';

export const RLLayout = () => {
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
            <ParallaxBackground />

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <RLHeader />

                <main style={{ 
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