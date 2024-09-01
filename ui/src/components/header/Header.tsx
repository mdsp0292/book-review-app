import React from "react";
import "./header.css";

type HeaderProps = {
    title: string
}

export default function Header(props : HeaderProps) {
    return (
        <header className="header">
            <h1>{props.title}</h1>
        </header>
    );
}
