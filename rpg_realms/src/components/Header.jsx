import Nav from "./Nav";
import { Link } from "react-router-dom"
import { FaSearch } from 'react-icons/fa'


export default function Header() {
    return(
       <div >
            <div className="w-screen h-16 flex flex-row items-center justify-between bg-primary text-white shadow-lg">
                <Link to='/'>
                    <h1 className='text-3xl mx-4'>RPG Realms</h1>
                </Link>
                <Nav />
                
            </div>
            <div className="w-screen h-14 flex flex-row items-center  bg-surface">
                <div className="flex">
                    <input className="mx-4 w-96 px-3 rounded-l-2xl"
                        type="text"
                        id="searchBar"
                        placeholder="RPG Search....."
                        // value={search.formInput}
                        // onChange={handleChange}
                    />
                    <button className="px-3 py-2 -ml-4 rounded-r-2xl text-white bg-primary hover:bg-secondary hover:text-primary">
                        {<FaSearch size="20"></FaSearch>}
                    </button>
                    <button className="rounded-3xl bg-tertiary text-white hover:bg-tertiarycontainer hover:text-surface font-bold px-2 ml-6">All RPGs</button>
                    <button className="rounded-3xl bg-tertiary text-white hover:bg-tertiarycontainer hover:text-surface font-bold px-2 ml-6">Genres</button>
                    <button className="rounded-3xl bg-tertiary text-white hover:bg-tertiarycontainer hover:text-surface font-bold px-2 ml-6">Publishers</button>
                </div>
               
            </div>
        </div>
        
    )

}