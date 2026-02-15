import { Outlet } from 'react-router-dom';
import { Header } from '../components/main/Header';


export const MainLayout = () => {
    return (
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        
            <Header />
            <main style={{ padding: '20px', flex: 1, width: '100%' }}>
                <Outlet />
            </main>
            
        </div>
    );
};