import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'


export default function AllRPGs() {
    
    const [rpgs, setRPGs] = useState([]);
    const [search, setSearch] = useState({
        searchBar: "",
        formInput: "",
        isSubmitted: false,
      });

    useEffect(() => {
        const renderRPGs = async () => {
          const response = await axios.get(`http://localhost:8000/rpgs/`);
          setRPGs(response.data);
          
        };
        renderRPGs();
      }, []);
    
    const handleChange = (e) => {
        e.preventDefault();
        setSearch({
          ...search,
          [e.target.id]: e.target.value,
          formInput: e.target.value,
          isSubmitted: false,
        });
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        setSearch({ ...search, isSubmitted: true })
        console.log(search);
    };

    const filteredRPGs = search.isSubmitted
    ? rpgs.filter((rpg) =>
        rpg.title.toLowerCase().includes(search.formInput.toLowerCase())
      )
    : rpgs;


    // https://reactgo.com/react-trigger-button-click/ - Used to allow ENTER key to call handlesubmit
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleSubmit()
        }
      };
    
    if (!rpgs) {
        return <h1> loading please wait</h1>
        
    } else {
    
    return (
       
        <div >
            
            <div className="flex ">
                <h1 className=" bg-primary text-white text-lg italic -ml-3 py-3 px-10 w-56 rounded-r-3xl">Explore 
                    All RPGs
                </h1>
                {/* Search Bar */}
                <div className="m-auto flex">
                    <input className="mx-4 w-96 h-9 px-3 py-1 rounded-l-2xl border-surface border-2"
                        type="text"
                        id="searchBar"
                        placeholder="Title Search....."
                        value={search.formInput}
                        onChange={handleChange}
                        onKeyUp={handleKeyDown}
                    />
                    <button className="px-3 py-1 -ml-4 h-9 rounded-r-2xl 
                        text-white bg-primary hover:bg-secondary hover:text-primary border-surface border-r-2 border-t-2 border-b-2"  
                        onClick={handleSubmit}>
                        {<FaSearch size="12"></FaSearch>}
                    </button>
                </div>
                {/* The h1 below is there purely to allow the search bar to be center screen */}
                <h1 className=" bg-primary text-white -ml-3 py-3 px-10 w-56 -mr-3 opacity-0">Explore All RPGs</h1>
            </div>
            <div className="flex flex-wrap justify-center ">
                {filteredRPGs.map((rpg)=> (
                    <div className=" m-4 relative   overflow-hidden shadow-md shadow-slate-800 group">
                        <img src={rpg.image_url} className="relative w-48 h-60 rounded-t-md "></img>
                        <div className="  absolute w-48 py-1 px-2 bottom-0 inset-x-0 bg-white text-surface text-xs  leading-4 rounded-t-xl scale-0 group-hover:scale-100 opacity-100 text-center transition-all duration-300 ease-linear origin-bottom">
                            <p className=" text-sm text-left font-bold">{rpg.title}</p>
                            <p className=" text-xs text-left ">{rpg.genre}</p>
                            <Link to={`/rpgs/${rpg.id}`} key={rpg.id}>
                                <button 
                                 
                                    className=" rounded-3xl font-bold mt-2  px-4 py-1  
                                                    text-secondary bg-primary  hover:rounded-sm hover:text-primary 
                                                    hover:bg-secondary hover:text-sm transition-all  
                                                    duration-300 ease-linear"
                                        >Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            
          
                
            
        </div>
        
    )  

    }
}