import React from "react";

const Navbar = () => {
    return (
        <div className="Navbar">
            <h3 className="title">Home</h3>
            <ul className="menu">
                <li>
                    <h3>About</h3>
                </li>
                <li>
                    <h3>Pricing</h3>
                </li>
                <li>
                    <h3>Contact</h3>
                </li>
                <button
                    className="login"
                    onClick={() => alert("Anda akan melalui proses login")}
                >
                    Login
                </button>
            </ul>
        </div>
    );
};

export default Navbar;
