import Nav from "./Nav";
import { Link } from "react-router-dom"
import { FaSearch } from 'react-icons/fa'


export default function Header() {
    return(
       <div>
            <div className="w-screen flex flex-row items-center justify-between bg-primary text-white shadow-lg">
                <Link to='/'>
                    <h1 className='text-3xl mx-3'>RPG Realms</h1>
                </Link>
                <Nav />
                
            </div>
            <div className="w-screen h-14 flex flex-row items-center  bg-surface">
                <div className="flex">
                    <input className="mx-3 w-72 px-3 rounded-l-2xl"
                        type="text"
                        id="searchBar"
                        placeholder="RPG Search....."
                        // value={search.formInput}
                        // onChange={handleChange}
                    />
                    <button className="p-2 -ml-3 rounded-r-2xl text-white bg-primary">
                        {<FaSearch size="20"></FaSearch>}
                    </button>
                </div>
               
            </div>
        </div>
        
    )

}