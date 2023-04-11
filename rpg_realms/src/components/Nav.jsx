import { BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaHome,FaSignInAlt,FaSignOutAlt,FaPlus, FaFire, FaUserPlus,FaUser } from 'react-icons/fa'
import { Link } from "react-router-dom"
import LoginModal from './Login/LogInModal';

export default function NavBar() {
    return(
       <div>
        {/* <h1 className='text-3xl'>RPG Realms</h1> */}
        <div className=" w-auto flex flex-row justify-evenly mr-4 " >
            
            <Link to='/'>
                <NavBarIcon icon={<FaHome size="28" />} text={"Home"}/>
            </Link>
            <Link to='/login'>
                <NavBarIcon icon={<FaSignInAlt size="28" />} text={"Log In"}/>
            </Link>
           
            <Link to='/register'>
                <NavBarIcon icon={<FaUserPlus size="28" />} text={"Register"}/>
            </Link>
            <Link to='/createreview'>
                <NavBarIcon icon={<FaPlus size="28" />} text={"New Review"}/>
            </Link>
            {/* <Link to='/'>
                <NavBarIcon icon={<FaFire size="28" />} text={"Trending"}/>
            </Link> */}
            <Link to='/profile'>
                <NavBarIcon icon={<FaUser size="28" />} text={"Profile"}/>
            </Link>
            
            <Link to='/logout'>
                <NavBarIcon icon={<FaSignOutAlt size="28" />} text={"Log Out"}/>
            </Link>
            
        </div>
        </div>
        
    )

}

const NavBarIcon = ({ icon, text = 'tooltip ' }) => (
    <div className="navbar-icon group" >
        {icon}

        <span class="navbar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);