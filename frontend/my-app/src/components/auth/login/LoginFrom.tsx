import React from "react";
import {Button, Form, Input, type FormProps} from "antd";
import { type LoginRequestDTO } from "../../../api/DTO/LoginUser";

export type LoginFormProps = {
    onSubmit: FormProps<LoginRequestDTO>['onFinish'];
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    return (
        <Form
            name="Вход"
            onFinish={onSubmit}
            autoComplete="off"
        >
            <Form.Item<LoginRequestDTO>
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Пожалуйста, введите ваш email!' }]}
                    >
                <Input />
            </Form.Item>

            <Form.Item<LoginRequestDTO>
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