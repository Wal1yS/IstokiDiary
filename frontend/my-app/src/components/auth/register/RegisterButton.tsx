import React from "react";
import {Button, type FormProps} from "antd";
import { useNavigate } from "react-router-dom";
import { registerUser, type RegisterRequestDTO } from "../../../api/DTO/RegisterUser";
import { RegisterModal } from "./RegisterModal";
import "../../css/Buttons.css";
import {useAuth} from "../../../context/AuthContext.tsx";

export const RegisterButton: React.FC = () => {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    
    const showModal = () => {
        setIsModalOpen(true);
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    }
    const handleSubmit: FormProps<RegisterRequestDTO>['onFinish'] = async (values) => {
        try{
            const createdUser =  await registerUser(values);
            console.log('User created successfully:', createdUser);
            setIsModalOpen(false);
            if (createdUser && createdUser.role) {
                const role = createdUser.role === 'CURATOR' || createdUser.role === 'USER' ? createdUser.role : 'GUEST';
                login(role);
            }
            if (createdUser && createdUser.role == "USER") {
                navigate('/home/diary');
            }
            if (createdUser && createdUser.role == "CURATOR") {
                navigate('/home');
            }
        }
        catch (error) {
            console.error('Error registering user:', error);
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
            >
                <div className="inner-glow" />
                <span>Регистрация</span>
            </Button>
            <RegisterModal isOpen={isModalOpen} onCancel={handleCancel} onSubmit={handleSubmit} />
        </>
    );
}