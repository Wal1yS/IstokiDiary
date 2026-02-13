import React from "react";
import { Modal, Form, Button, type FormProps, Input, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { registerUser, type RegisterUserDTO } from "../../../api/DTO/RegisterUser";
import { RegisterModal } from "./RegisterModal";
import "../css/Buttons.css";

export const RegisterButton: React.FC = () => {

    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    
    const showModal = () => {
        setIsModalOpen(true);
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    }
    const handleSubmit: FormProps<RegisterUserDTO>['onFinish'] = async (values) => {
        try{
            const createdUser =  await registerUser(values);
            console.log('User created successfully:', createdUser);
            setIsModalOpen(false);
            navigate('/home');
        }
        catch (error) {
            console.error('Error registering user:', error);
            navigate('/home');
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