import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import '../css/header.css';

export const Header = () => {
    const navigate = useNavigate();

    return (
        <nav className="header">
            <Button onClick={() => navigate('/')}>Главная</Button>
            <Button onClick={() => navigate('/users')}>Пользователи</Button>
            <Button onClick={() => navigate('/about')}>О нас</Button>
        </nav>
    );
};