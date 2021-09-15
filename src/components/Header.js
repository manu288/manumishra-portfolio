import React from 'react';
import Typed from "react-typed";
;


function Header() {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Portfolio created using React and bootstrap</h1>
                <Typed 
                className="typed-text" 
                strings={["web-development","frontend","react","SFCC","SFRA","responsive"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
            </div>
                    
        </div>
    )
}

export default Header
