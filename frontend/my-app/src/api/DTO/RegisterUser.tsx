import React, { use, useEffect, useState } from 'react';

export interface RegisterUserDTO {
    name: string;
    surname: string;
    patronymic: string;
    password: string;
    email: string;
    number: string;
}

export const registerUser = async (user: RegisterUserDTO) => {
    const response = await fetch('http://localhost:8000/reg', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }
}