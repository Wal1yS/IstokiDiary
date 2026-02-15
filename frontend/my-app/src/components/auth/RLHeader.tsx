import React from "react";
import { InfoButton } from "../InfoButton";
import { IstokiButton } from "../IstokiButton.tsx";


export const RLHeader: React.FC = () => {
    return (
        <nav className="header">
            <IstokiButton page="/"></IstokiButton>
            <InfoButton></InfoButton>
        </nav>
    );
}