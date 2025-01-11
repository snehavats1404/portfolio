import React from 'react';

const Frontend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Technical Skills</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">HTML5</h3>
              <span className='skills_level'>Advanced</span>
            </div>
          </div>

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">TailwindCSS</h3>
              <span className='skills_level'>Advanced</span>
            </div>
          </div>

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">JavaScript</h3>
              <span className='skills_level'>Basic</span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">MySQL</h3>
              <span className='skills_level'>Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Data Structures & Algorithms</h3>
              <span className='skills_level'>Advanced</span>
            </div>
          </div>

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">ReactJS</h3>
              <span className='skills_level'>Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
