import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import cristian from '../image/cri.png'


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={cristian}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>
            <h2 style={{paddingTop: '2em'}}>Cristian Constantinescu</h2>
            <h4 style={{color: 'black'}}>Junior JavaScript React Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Ealing Broadway</p>
            <h5>Phone</h5>
            <p>07874 xxx xxx</p>
            <h5>Email</h5>
            <p>cristi@kodiri.com</p>
            <h5>Website</h5>
            <p>under construction</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            
               <Education
                 startYear={2001}
                 endYear={2006}
                 schoolName="Technical University of Cluj-Napoca"
                 schoolDescription="•	Electrical Engineering, Computer Science, Signal Processing, Microcontrollers, CAD, Telecommunication, Robotics, Data Structures and Algorithms;          •	Bachelor Final Project - design and execution of an Electronic Measuring Device (Multimeter) designed to measure Current, Voltage and Power with an error of 10-3 and also to display on its LCD the corresponding sine wave, using ATmega32 microcontroller"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience
              startYear={2007}
              endYear={2014}
              jobName="Senior Software Test Engineer "
              jobDescription="•	Responsible for testing different features by executing functional, system, regression, conformance, integration, interoperability, scalability testing of Avaya systems"
              />
              <Experience
                startYear={2014}
                endYear={2018}
                jobName="Contractor Senior SoftwareTest Engineer"
                jobDescription="•	Operating a large and highly complex test bed which was mimicking the MTS client deployed     network in Moscow and Moscow region, Russia;
                •	Responsible for testing strategies, design and execution for real life case scenarios;
                •	Performing manual and automated tests, executing exploratory, sanity, functional, integration, regression, system and soak testing
                "
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={45}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={28}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={10}
                    />
                    <Skills
                      skill="React"
                      progress={45}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;