import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container">
            <div className="footer_title">
                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Projects</a>
                    </li>

                </ul>

                <div className="footer_social">
                    <a href="https://www.instagram.com/snehavats1404?igsh=MWFsMW1qbXFvaWg5ZA==" className="footer_social-link" target='_blank'>
                    <i class='bx bxl-instagram'></i>
                    </a>

                    <a href="linkedin.com/in/vatssneha14" className="footer_social-link" target='_blank'>
                    <i class='bx bxl-twitter'></i>
                    </a>

                    <a href="https://github.com/snehavats1404" className="footer_social-link" target='_blank'>
                    <i class='uil uil-github-alt'></i>
                    </a>
                </div>
                <span className="footer_copy">
                    @snehavats
                    All rights reserved
                </span>
            </div>
        </div>
    </footer>
  )
}

export default Footer