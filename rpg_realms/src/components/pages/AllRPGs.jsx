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
            <div className="flex flex-wrap">
                {rpgs.map((rpg)=> (
                    <div className=" m-4">
                        <img src={rpg.image_url} className="w-36 h-48"></img>
                        <p className="text-sm">{rpg.title}</p>
                        <p className="text-xs">{rpg.genre}</p>
                        
                    </div>
                ))}
            </div>

            
          
                
            
        </div>
        
    )  

    }
}