
import React from 'react';
import '../style/Project.css';

import aiForum from "../assets/AIForum.png";
import lostAndDFound from "../assets/LostAndFoundApp.png";
import robotController from "../assets/RobotControllerAPI.png";
import truckSharingApp from "../assets/TruckSharingApp.png";


// import '../image/AIForum.png';

function Project() {
    return (
      <div>
  
        <h1>Project</h1>

        <div className='project-row' >
          <div className='project-column'>

            <img src={aiForum} alt="AI Forum App" width="300" height="200" />
              
          </div>

            <div className='project-column'>
                <h2>AI Forum App</h2>
                <p>A full stack application which allows user to post questions and articles on the website
                and store it in the firestore databas</p>
                <p>Technology Used: React/JavaScript, CSS/HTML, NodeJS, Express, Firebase, Stripe, Netlify</p>
                <p>Link: <a href="https://github.com/Chanputhi/AI-Forum">https://github.com/Chanputhi/AI-Forum</a> </p>
            </div>
        </div>

        <div className='project-row' >
          <div className='project-column'>

            <img src={lostAndDFound} alt="Lost and Found App" width="300" height="200" />
              
          </div>

            <div className='project-column'>
                <h2>Lost and Found App</h2>
                <p>An Android mobile app allowed user to post lost and/or found items on the App which stored in SQLite database</p>
                <p>Technology Used: Java, XML, SQLite, Google Map API</p>
                <p>Link: <a href="https://github.com/Chanputhi/Lost-and-Found-Map">https://github.com/Chanputhi/Lost-and-Found-Map</a> </p>
            </div>
        </div>


        <div className='project-row' >
          <div className='project-column'>

            <img src={robotController} alt="Robot Controller API" width="300" height="200" />
              
          </div>

            <div className='project-column'>
                <h2>Robot Controller API</h2>
                <p>Implemented API endpoints using object relational mapping in .Net with FastMember</p>
                <p>Technology Used: C#, .Net, PostgreSQL, Swagger, XML Documentation, Postman</p>
                <p>Link: <a href="https://github.com/Chanputhi/Robot-Controller-API">https://github.com/Chanputhi/Robot-Controller-API</a> </p>
            </div>
        </div>

        <div className='project-row' >
          <div className='project-column'>

            <img src={truckSharingApp} alt="Truck Sharing App" width="300" height="200" />
              
          </div>

            <div className='project-column'>
                <h2>Truck Sharing App</h2>
                <p>An Android mobile app stored user's profile and user's order in database using SQLite</p>
                <p>Technology Used: Java, XML, SQLite, Google Map API, Google Pay API</p>
                <p>Link: <a href="https://github.com/Chanputhi/Truck-Sharing-Mobile-App">https://github.com/Chanputhi/Truck-Sharing-Mobile-App</a> </p>
            </div>
        </div>





  
      </div>
    );
  }
  
  export default Project;