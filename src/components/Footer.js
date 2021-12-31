import React from "react";

export default function Footer({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <div className="footer">
            <footer className="py-5 bg-red fixed-bottom">
                <div className="container">
                    <p className="m-0 text-center text-white">
                        Copyright &copy; Your Website 2020
                    </p>
                </div>
            </footer>
        </div>
    );
}

