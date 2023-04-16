import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


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
            <div className="w-[70vw] ml-auto mr-auto drop-shadow-xl shadow-slate-900 ">
              <div className="py-2 bg-primary text-white  text-2xl rounded-t-2xl  text-center">Featured Game</div>
              <div className=" flex self-center  px-8 py-5 bg-primarycontainer shadow-md shadow-slate-700">
                <img className="max-w-xs max-h-[50vh] mr-8 " src={publisher.rpgs[0].image_url} ></img>
                <div>
                    <h3 className="text-5xl mb-1">{publisher.rpgs[0].title}</h3>
                    <h3 className="text-xl font-bold" >Published by: {publisher.name}</h3>
                    <h3 className="text-xl mb-2 font-bold">Genre: {publisher.rpgs[0].genre}</h3>
                    <p className="text-lg font-bold">Description:</p>
                    <p className="text-lg ">{publisher.rpgs[0].description} </p>
                    <p className="float-right">---- Publisher Description</p>
                    <br></br>
                    <Link to={`/rpgs/${publisher.rpgs[0].id}`} key={publisher.rpgs[0].id}>
                      <button className="buttons">
                          Learn More
                      </button>
                    </Link>

                </div>
              </div>
            </div>
          
            
            
        </div>
        
    ): <h1> loading please wait</h1>

}