import React from "react";
import { Modal } from "antd";
import { LoginForm } from "./LoginFrom";
import { type FormProps } from "antd";
import { type LoginUserDTO } from "../../../api/DTO/LoginUser";

export type LoginModalProps = {
    isOpen: boolean;
    onCancel: () => void;
    onSubmit: FormProps<LoginUserDTO>['onFinish'];
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onCancel, onSubmit }) => {
    return (
        <Modal
            title="Вход"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isOpen}
            onCancel={onCancel}
            footer={[null]}
        >
            <LoginForm onSubmit={onSubmit} />
        </Modal>
    );
}