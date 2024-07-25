import React from 'react'
import "./qualification.css";


const Qualification = () => {
  return ( 
    <section className="qualification section" id='qualification'>
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My personel journey</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className="qualification_button qualification_active button--flex">
                    <i class="uil uil-graduation-cap qualification_icon"></i>
                    Education
                </div>
            </div>

            <div className="qualification_sections">
                <div className="qualification_content qualification_content-active">
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">B.Tech</h3>
                            <span className="qualification_subtitle">Netaji Subhas University of Technology</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2022-Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Intermediate (97.2%)</h3>
                            <span className="qualification_subtitle">Hamdard Public School</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2020-2022
                            </div>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Matriculation (94.6%)</h3>
                            <span className="qualification_subtitle">Hamdard Public School</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2019-2020
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification