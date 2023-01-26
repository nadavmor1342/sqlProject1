import "../App.css"
import NavBar from "./navbar";
import jwt_decode from "jwt-decode";


const MyCourses = () => {
    const token = localStorage.token
    let decoded = jwt_decode(token)
    console.log(decoded);
    return ( 
        <div>
            <NavBar/>
            <div  className="myCon">Your Courses:</div>
            <div className="subtitle">Hello {decoded.name} here you can see which courses you are registerd to and if wish to you can check off from your courses and get a full refund. </div>
        </div>
        
     );
}
 
export default MyCourses;