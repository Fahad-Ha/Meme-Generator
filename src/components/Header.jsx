import React from "react"
import icon from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={icon} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Made By Fahad Ahmad</h4>
        </header>
    )
}