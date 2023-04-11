import { useEffect, useState } from "react";
import axios from "axios";

export default function FeaturedGame() {
    
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
            <div className="w-[70vw] ml-auto mr-auto">
              <h3 className="py-2  bg-primary text-white text-center text-2xl ">Featured Game</h3>
              <div className=" flex self-center  px-8 py-5 bg-primarycontainer">
                <img className="max-w-xs max-h-[50vh] mr-8 " src={publisher.rpgs[0].image_url} ></img>
                <div>
                    <h3 className="text-5xl mb-1">{publisher.rpgs[0].title}</h3>
                    <h3 className="text-xl font-bold" >Published by: {publisher.name}</h3>
                    <h3 className="text-xl mb-2 font-bold">Genre: {publisher.rpgs[0].genre}</h3>
                    <p className="text-lg font-bold">Description:</p>
                    <p className="text-lg ">{publisher.rpgs[0].description} </p>
                    <p className="float-right">---- Publisher Description</p>
                    <br></br>
                    <button className=" mt-1 px-2 py-1 rounded-3xl float-right bg-tertiary text-white hover:bg-tertiarycontainer hover:text-surface border-solid border-2 border-surface hover:border-surface">
                        Learn More
                    </button>
                </div>
              </div>
            </div>
          
            
            {/* <a href={publisher.website_url} target="_blank">Publisher Website</a> */}
            {/* <img src={publisher.logo_url} style={{width:'150px'}}></img> */}
            
            
            
        </div>
        
    ) : <h1> Loading, Please Wait</h1>

}