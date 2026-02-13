import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import "../css/IstokiButton.css";

export const IstokiButton: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Button 
        className="istokiBtn"
        color="default" 
        type="link" 
        onClick={() => navigate('/')}
        >
            ИСТОКИ
        </Button>
    )
}