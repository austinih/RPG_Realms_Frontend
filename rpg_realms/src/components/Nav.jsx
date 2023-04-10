import { BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaHome,FaPlus, FaFire, FaUserPlus,FaUser } from 'react-icons/fa'
import { Link } from "react-router-dom"

export default function NavBar() {
    return(
       <div>
        {/* <h1 className='text-3xl'>RPG Realms</h1> */}
        <div className=" w-auto flex flex-row justify-evenly " >
            
            <Link to='/createreview'>
                <NavBarIcon icon={<FaPlus size="28" />} text={"New Review"}/>
            </Link>
            <Link to='/'>
                <NavBarIcon icon={<BsGearFill size="28" />} text={"Settings"}/>
            </Link>
            <Link to='/'>
                <NavBarIcon icon={<FaFire size="28" />} />
            </Link>
            <Link to='/'>
                <NavBarIcon icon={<FaUser size="28" />} />
            </Link><Link to='/'>
                <NavBarIcon icon={<FaUserPlus size="28" />} />
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