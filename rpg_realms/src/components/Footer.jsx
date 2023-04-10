import { Link } from "react-router-dom"
export default function Footer() {
    return(
       
        <div className="w-screen h-32 flex flex-row items-center justify-between bg-primary text-white shadow-lg">
        <Link to='/'>
            <h1 className='text-3xl mx-3'>RPG Realms</h1>
        </Link>
        
        
        </div>
        
    )

}