

import React from 'react';

import '../style/Education.css';

function Education() {
  console.log("education?");
    return (
      <div>
  
        <h1>Education</h1>

        <div className='edu-row' >
          <div className='edu-column'>
              <h3>2020 - Present</h3>
          </div>

            <div className='edu-column'>
                <h2>Bachelor of Computer Science</h2>
                <p>Deakin University, Burwood, Victoria</p>
                <p>Expected completion date: October 2023</p>
                <p>Major: Full Stack Development</p>
                <p>Acheivements: Distinction Average</p>
                <p>Received Deakin STEM Scholarship</p>
            </div>
        </div>

        <div className='edu-row' >
          <div className='edu-column'>
              <h3>2019 - 2020</h3>
          </div>

            <div className='edu-column'>
                <h2>Foundation Year Program</h2>
                <p>Deakin College, Burwood, Victoria</p>
                <p>Major: General</p>
                <p>Acheivements: High Distinction Average</p>
            </div>
        </div>


        <div className='edu-row' >
          <div className='edu-column'>
              <h3>2018 - 2019</h3>
          </div>

            <div className='edu-column'>
                <h2>Bachelor of Political Science and International Relations</h2>
                <p>Paragon International University, Phnom Penh, Cambodia</p>
                <p>Major: International Affair and Foreign Policy</p>
                <p>Acheivements: Grade B Average</p>
            </div>
        </div>

      </div>
    );
  }
  
  export default Education;