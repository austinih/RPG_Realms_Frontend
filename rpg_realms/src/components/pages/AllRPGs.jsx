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
            <div className="flex">
                {rpgs.map((rpg)=> (
                    <div>
                        <img src={rpg.image_url} className="w-44 h-48"></img>
                        <p>{rpg.title}</p>
                        <p>{rpg.genre}</p>
                        
                    </div>
                ))}
            </div>

            
          
                
            
        </div>
        
    )  

    }
}