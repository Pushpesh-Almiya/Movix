import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Movix app created through TMDB(The Movie Database ) API. The Movie Database (TMDB) is a community built movie and TV database. Every piece of data has been added by their amazing community dating back to 2008. TMDB's strong international focus and breadth of data is largely unmatched and something they're incredibly proud of. Put simply, they live and breathe community and that's precisely what makes us different.
                </div>
                    <hr />
                    <div className="infoText">Pushpesh Almiya © 2023</div>
                  
                <div className="socialIcons">
                    <Link to="https://www.facebook.com/pushpesh.almiya" target="_blank" className="icon">
                        <FaFacebookF />
                    </Link>
                    <Link to="https://instagram.com/pummy2k02?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" className="icon">
                        <FaInstagram />
                    </Link>
                    <Link to="https://pushpesh-portfolio.netlify.app/" target="_blank" className="icon">
                        <HiAcademicCap/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/pushpesh-almiya-786414218" target="_blank" className="icon">
                        <FaLinkedin />
                    </Link>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;