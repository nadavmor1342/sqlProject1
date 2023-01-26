import { useEffect } from "react";

const NavBar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Courses</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {!localStorage.token?
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/login">Log in</a>
        </li>:<li className="nav-item">
          <a className="nav-link" aria-current="page" href="/login" onClick={()=>{localStorage.removeItem('token');}}>log out</a>
        </li>}
        {!localStorage.token?
        <li className="nav-item">
          <a className="nav-link" href="/signup">Sign up</a>
        </li>
            :
            <li className="nav-item">
            <a className="nav-link" href="/changePassword">Change password</a>
          </li>}
        {!localStorage.token?'':
         <li className="nav-item">
         <a className="nav-link" href="/myCourses">My courses</a>
       </li>}
       
      </ul>
    </div>
  </div>
</nav>
     );
}
 
export default NavBar;