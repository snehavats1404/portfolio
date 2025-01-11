import React from 'react';

const Backend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend Skills</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">C++ & C</h3>
              <span className='skills_level'>Advanced</span>
            </div>
          </div>
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Node.js</h3>
              <span className='skills_level'>Advanced</span>
            </div>
          </div>
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Python</h3>
              <span className='skills_level'>Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Express</h3>
              <span className='skills_level'>Advanced</span>
            </div>
          </div>
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">MongoDB</h3>
              <span className='skills_level'>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
