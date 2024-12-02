import React from "react";

export default function Footer() {
    const year = new Date();
    return (
        <footer>
            <p>Copyright ⓒ {year.getFullYear()}</p>
        </footer>
    );
}