import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../style/NavBar.css";

{
  /* 
        <a href="/"><b>CHANPUTHI TITH</b> </a>

        <a href="/education">Education</a>
        <a href="/project">Project</a>
        <a href="/post">Post</a> */
}
function NavBar() {
  return (

    <div >
      <nav className='topNav'>
        <Link key="home" className="link" to="/">
          <b>CHANPUTHI TITH</b> 
        </Link>
        <Link key="edu" className="link" to="/education">
          Education
        </Link>
        <Link key="proj"  className="link" to="/project">
          Project
        </Link>
        <Link key="post" className="link" to="/post">
          Post
        </Link>
      </nav>
      <Outlet />
    </div>

    // </nav>
  );
}

export default NavBar;
