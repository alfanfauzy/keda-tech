import React from "react";
import {
    FaPhone,
    FaMailBulk,
    FaLocationArrow,
    FaFacebook,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
    return (
        <div class="contact-container">
            <h2>Hubungi Kami</h2>
            <div className="contact-wrapper">
                <div className="contact-info">
                    <div className="contact-info-title">
                        <h3 style={{ color: "white" }}>Kontak Informasi</h3>
                        <p
                            style={{
                                color: "white",
                                textAlign: "left",
                            }}
                        >
                            Isi form dan team kami akan menghubungi anda dalam
                            24 Jam.
                        </p>
                    </div>
                    <div className="contact-info-content">
                        <span className="list-contact">
                            <FaPhone />
                            (+62) 858 1234 5678
                        </span>
                        <span className="list-contact">
                            <FaMailBulk />
                            mail@mail.com
                        </span>
                        <span className="list-contact">
                            <FaLocationArrow />
                            Zimbabwe
                        </span>
                    </div>
                    <div className="socmed-list">
                        <span>
                            <FaFacebook />
                        </span>
                        <span>
                            <FaLinkedinIn />
                        </span>
                        <span>
                            <FaTwitter />
                        </span>
                    </div>
                </div>
                <div className="contact-form">
                    <div className="form-item">
                        <label for="fname">First Name</label>
                        <input
                            type="text"
                            id="fname"
                            name="firstname"
                            placeholder="Your name.."
                        />
                    </div>

                    <div className="form-item">
                        <label for="lname">Last Name</label>
                        <input
                            type="text"
                            id="lname"
                            name="lastname"
                            placeholder="Your last name.."
                        />
                    </div>

                    <div className="form-item">
                        <label for="subject">Subject</label>
                        <textarea
                            id="subject"
                            name="subject"
                            placeholder="Write something.."
                        ></textarea>
                    </div>

                    <input type="submit" value="Submit" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
