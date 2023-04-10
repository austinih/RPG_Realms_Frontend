import { useEffect, useState } from "react";
import axios from "axios";

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
            <h1>Home</h1>
            <h3>RPG Title: {publisher.rpgs[0].title}</h3>
            <p>{publisher.rpgs[0].description} ---- Publisher Description</p>
            <h5>{publisher.rpgs[0].genre}</h5>
            <img src={publisher.rpgs[0].image_url} style={{width:'150px'}}></img>
            <h3>Publisher: {publisher.name}</h3>
            <a href={publisher.website_url} target="_blank">Publisher Website</a>
            <img src={publisher.logo_url} style={{width:'150px'}}></img>
            
            
            
        </div>
        
    ) : <h1> Loading, Please Wait</h1>

}