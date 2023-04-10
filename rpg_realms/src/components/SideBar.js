import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaHome, FaFire, FaPoo } from 'react-icons/fa'
import { Link } from "react-router-dom"


export default function SideBar() {
    return(
       
       <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-700 text-green-500 shadow-lg" >
            <Link to='/'>
                <SideBarIcon icon={<FaHome size="28" />} text={"New Review"}/>
            </Link>
            <SideBarIcon icon={<BsFillLightningFill size="28" />} text={"Register"}/>
            <SideBarIcon icon={<BsGearFill size="28" />} text={"Settings"}/>
            <SideBarIcon icon={<FaFire size="28" />} />
            <SideBarIcon icon={<FaPoo size="28" />} />
        </div>
        
    )




}

const SideBarIcon = ({ icon, text = 'tooltip ' }) => (
    <div className="sidebar-icon group" >
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

