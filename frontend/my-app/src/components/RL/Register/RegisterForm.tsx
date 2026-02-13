import React from "react";
import {Button, Form, Input, type FormProps} from "antd";
import type { RegisterUserDTO } from "../../../api/DTO/RegisterUser";

export type RegisterFormProps = {
    onSubmit: FormProps<RegisterUserDTO>['onFinish'];
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
    return (
        <Form
            name="Регистрация"
            onFinish={onSubmit}
            autoComplete="off"
        >
            <Form.Item<RegisterUserDTO>
                    label="Имя"
                    name="name"
                    rules={[{ required: true, message: 'Пожалуйста, введите ваше имя!' }]}
                    >
                <Input />
            </Form.Item>

            <Form.Item<RegisterUserDTO>
                    label="Фамилия"
                    name="surname"
                    rules={[{ required: true, message: 'Пожалуйста, введите вашу фамилию!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<RegisterUserDTO>
                    label="Отчество"
                    name="patronymic"
                    rules={[{ required: true, message: 'Пожалуйста, введите ваше отчество!' }]}
                    >
                <Input />
            </Form.Item>

            <Form.Item<RegisterUserDTO>
                    label="Почта"
                    name="email"
                    rules={[{ required: true, message: 'Пожалуйста, введите вашу почту!' }]}
                    >
                <Input />
            </Form.Item>

            <Form.Item<RegisterUserDTO>
                    label="Номер телефона"
                    name="number"
                    rules={[{ required: true, message: 'Пожалуйста, введите ваш номер телефона!' }]}
                    >
                <Input />
            </Form.Item>

            <Form.Item<RegisterUserDTO>
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль!' }]}
                    >
                <Input.Password />
            </Form.Item>

            
            <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                            Отправить
                    </Button>
            </Form.Item>
        </Form>
    );
}