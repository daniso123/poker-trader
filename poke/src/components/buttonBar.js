import React from "react";
import "./styles/buttonpage.css";

export default function buttonBar({ type, label}) {
    return (
        <div className="button"
            type={type}>
            {label}
        </div>
    );
}