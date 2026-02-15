import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import "./css/IstokiButton.css";

export type AddressProps = {
    page: string;
}

export const IstokiButton: React.FC<AddressProps> = ({ page }) => {
    const navigate = useNavigate();

    return (
        <Button 
        className="istokiBtn"
        color="default" 
        type="link" 
        onClick={() => navigate(page)}
        >
            ИСТОКИ
        </Button>
    )
}