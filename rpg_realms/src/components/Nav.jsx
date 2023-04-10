import { Link } from "react-router-dom"

export default function Nav() {
    return(
       
       <div className="nav-bar">
            <h1>NavBar</h1>
            <Link to='/'><h1>RPG Realms</h1></Link>
            <Link to='/login'>Log In</Link>
            <Link to='/register'>Register</Link>
            <Link to='/profile'>My Profile</Link>
            
        </div>
        
    )

}