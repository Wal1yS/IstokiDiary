import React from "react";
import { Modal } from "antd";
import { RegisterForm } from "./RegisterForm";
import { type FormProps } from "antd";
import type { RegisterRequestDTO } from "../../../api/DTO/RegisterUser";

export type RegisterModalProps = {
    isOpen: boolean;
    onCancel: () => void;
    onSubmit: FormProps<RegisterRequestDTO>['onFinish'];
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onCancel, onSubmit }) => {
    return (
        <Modal
            title="Вход"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isOpen}
            onCancel={onCancel}
            footer={[null]}
        >
            <RegisterForm onSubmit={onSubmit} />
        </Modal>
    );
}