import React from "react";
import Navbar from "../Navbar";

const Hero = () => {
    return (
        <div className="hero">
            <Navbar />
            <div className="About">
                <div className="About-content">
                    <div className="About-content-text">
                        <h4 style={{ color: "#6B63FF" }}>
                            SOFTWARE ERP TERBAIK YANG DIPERCAYA 1.750+
                            PERUSAHAAN DARI INDUSTRI BESAR INDONESIA!
                        </h4>
                        <p>
                            Sistem ERP berbasis cloud terlengkap dengan berbagai
                            pilihan solusi seperti aplikasi akuntansi, CRM, HRM,
                            procurement system, inventory management, sistem
                            gudang hingga manufaktur di satu platform
                        </p>
                        <button className="action">Temukan Solusi Anda</button>
                    </div>
                    <div className="About-content-image">
                        <img src="/assets/illustrator.png" alt="Ilustrator" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
