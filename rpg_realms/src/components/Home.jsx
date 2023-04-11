import { useEffect, useState } from "react";
import axios from "axios";
import FeaturedGame from "./FeaturedGame";

export default function Home() {
    
    const [publisher, setPublisher] = useState({});


    useEffect(() => {
        const renderPublisher = async () => {
          const response = await axios.get(`http://localhost:8000/publishers/1`);
          setPublisher(response.data);
          
        };
        renderPublisher();
      }, []);
    
    
    
    return publisher && publisher.rpgs ? (
       
      <div >
        <FeaturedGame/>

      </div>
        
    ) : <h1> Loading, Please Wait</h1>

}