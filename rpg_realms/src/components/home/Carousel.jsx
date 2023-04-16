import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




export default function Carousel() {
    
    const [rpgs, setRPGs] = useState([]);

    useEffect(() => {
        const renderRPGs = async () => {
          const response = await axios.get(`http://localhost:8000/rpgs/`);
          setRPGs(response.data);
          
        };
        renderRPGs();
      }, []);
    
    return(
       
       <div >
            <h1>Carousel</h1>
            {rpgs.map((rpg)=>(
                <div className="...">
                    <a
                        href={resource.link}
                        className="..."
                        style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                    >
                        <img src={resource.imageUrl || ''} alt={resource.title} className="..." />
                    </a>
                    <a href={resource.link} className="...">
                        <h3 className="...">{resource.title}</h3>
                    </a>
                </div>
            ))}



            
        </div>
        
    )

}