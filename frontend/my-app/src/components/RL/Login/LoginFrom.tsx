import React from "react";
import {Button, Form, Input, type FormProps} from "antd";
import { type LoginUserDTO } from "../../../api/DTO/LoginUser";

export type LoginFormProps = {
    onSubmit: FormProps<LoginUserDTO>['onFinish'];
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    return (
        <Form
            name="Вход"
            onFinish={onSubmit}
            autoComplete="off"
        >
            <Form.Item<LoginUserDTO>
                    label="Имя"
                    name="name"
                    rules={[{ required: true, message: 'Пожалуйста, введите ваше имя!' }]}
                    >
                <Input />
            </Form.Item>

            <Form.Item<LoginUserDTO>
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