import Nav from "./Nav";
import { Link } from "react-router-dom"


export default function Header() {
    return(
       
       <div className="w-screen flex flex-row items-center justify-between bg-gray-700 text-green-500 shadow-lg">
            <Link to='/'>
                <h1 className='text-3xl mx-3'>RPG Realms</h1>
            </Link>
            <Nav />
            
        </div>
        
    )

}