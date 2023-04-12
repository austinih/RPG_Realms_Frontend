import { useEffect, useState } from "react";
import axios from "axios";

export default function AllRPGs() {
    
    const [rpgs, setRPGs] = useState([]);


    useEffect(() => {
        const renderRPGs = async () => {
          const response = await axios.get(`http://localhost:8000/rpgs/`);
          setRPGs(response.data);
          
        };
        renderRPGs();
      }, []);
    
    if (!rpgs) {
        return <h1> loading please wait</h1>
        
    } else {
    
    return (
       
        <div >
            <h1>All RPGs</h1>
            <div className="flex flex-wrap justify-center ">
                {rpgs.map((rpg)=> (
                    <div className=" m-4 relative   overflow-hidden shadow-md shadow-slate-800 group">
                        <img src={rpg.image_url} className="relative w-48 h-60 rounded-t-md "></img>
                        <div className="  absolute w-48 py-1 px-2 bottom-0 inset-x-0 bg-secondary text-surface text-xs  leading-4 rounded-t-md scale-0 group-hover:scale-100 opacity-100 text-center transition-all duration-200 ease-linear origin-bottom">
                            <p className=" text-sm text-left font-bold">{rpg.title}</p>
                            <p className=" text-xs text-left ">{rpg.genre}</p>
                            <button className=" rounded-3xl font-bold mt-3 mb-1 px-4 py-1  text-secondary bg-primary  hover:rounded-sm hover:text-primary hover:bg-white transition-all duration-300 ease-linear"
                                                >Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            
          
                
            
        </div>
        
    )  

    }
}