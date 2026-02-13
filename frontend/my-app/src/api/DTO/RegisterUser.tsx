import React, { use, useEffect, useState } from 'react';

export interface RegisterUserDTO {
    name: string;
    surname: string;
    patronymic: string;
    email: string;
    number: string;
}

export const registerUser = async (user: RegisterUserDTO) => {
    const response = await fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
}