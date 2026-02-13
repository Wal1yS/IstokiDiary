import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import "./css/Buttons.css";

export const InfoButton: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Button className="infoBtn" color="default" type="link" onClick={() => navigate('/info')} style={{ fontSize: "20px", fontWeight: "semibold" }}>
            О нас
        </Button>
    )
}