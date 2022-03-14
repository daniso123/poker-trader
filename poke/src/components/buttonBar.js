import React from "react";
import "./styles/buttonpage.css";

export default function buttonBar({ type, label, onClick }) {
    return (

        <div className="button"
            type={type}>
            {label}
        </div>
    );
}