import React from "react";
import { InfoButton } from "../InfoButton";
import { IstokiButton } from "./RLInstokiButton";


export const RLHeader: React.FC = () => {
    return (
        <nav className="header">
            <IstokiButton></IstokiButton>
            <InfoButton></InfoButton>
        </nav>
    );
}