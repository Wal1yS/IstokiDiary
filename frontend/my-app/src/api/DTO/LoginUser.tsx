import React, { use, useEffect, useState } from 'react';

export interface LoginUserDTO {
    email: string;
    password: string;
}

export const loginUser = async (user: LoginUserDTO) => {
    const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }
}