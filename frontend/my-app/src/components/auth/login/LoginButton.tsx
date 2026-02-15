import React from "react";
import { Button, type FormProps } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { loginUser, type LoginRequestDTO } from "../../../api/DTO/LoginUser";
import { LoginModal } from "./LoginModal";
import "../../css/Buttons.css";
import { text } from "framer-motion/client";


export const LoginButton: React.FC = () => {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    
    const showModal = () => {
        setIsModalOpen(true);
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    }
    const handleSubmit: FormProps<LoginRequestDTO>['onFinish'] = async (values) => {
        try{
            const createdUser =  await loginUser(values);
            console.log('User logged in successfully:', createdUser);
            if (createdUser && createdUser.role) {
                const role = createdUser.role === 'CURATOR' || createdUser.role === 'USER' ? createdUser.role : 'GUEST';
                login(role);
            }
            setIsModalOpen(false);
            if (createdUser && createdUser.role == "USER") {
                console.log("Navigating to /home/diary");
                navigate('/home/diary');
            }
            if (createdUser && createdUser.role == "CURATOR") {
                console.log("Navigating to /home");
                navigate('/home');
            }
        }
        catch (error) {
            console.error('Error logging in user:', error);
            navigate('/');
        }
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        e.currentTarget.style.setProperty('--mouseX', `${x}%`);
        e.currentTarget.style.setProperty('--mouseY', `${y}%`);
    }

    return (
        <>  
            <Button 
                className="customBtn" 
                type="primary" 
                onClick={showModal}
                onMouseMove={handleMouseMove}
                style={{
                    fontSize: 24,
                    padding: '12px 24px',
                }}
            >
                <div className="inner-glow" />
                <span>Вход</span>
            </Button>
            <LoginModal isOpen={isModalOpen} onCancel={handleCancel} onSubmit={handleSubmit} />
        </>
    );
}