import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams} from "react-router-dom";


export default function FeaturedGame(props) {
    
    const [rpg, setRPG] = useState({});
    // const { rpgId } = useParams()


    useEffect(() => {
        const renderRPG = async () => {
          const response = await axios.get(`http://localhost:8000/rpgs/${props.rpgId}`);
          setRPG(response.data);
          
        };
        renderRPG();
      }, []);
    
    
    
    return rpg ? (
       
       <div className="mx-3 mb-10">
            <div className="w-[40vw]  ml-auto mr-auto drop-shadow-xl shadow-slate-900 ">
              {/* <div className="py-2 bg-primary text-white  text-2xl rounded-t-2xl  text-center">Featured Game</div> */}
              <div className=" 
                    flex flex-col self-center  px-8 py-5 bg-white shadow-md shadow-slate-700
                    border-primary border-4">
                <div className="flex flex-row justify-start">
                  <img className=" h-56 mr-8 " src={rpg.image_url} ></img>
                  <div className="flex flex-col ">
                    <h3 className="text-3xl mb-3 font-bold">{rpg.title}</h3>
                    <h3 className="text-xl font-bold p-1" >Published by: {rpg.publisher_name}</h3>
                    <h3 className="text-xl mb-2 font-bold p-1">Genre: {rpg.genre}</h3>
                  </div>
                </div>
                <div className="mt-5">
                    <p className="text-lg font-bold">Description:</p>
                    <p className="text-lg h-[35vh] mb-5 overflow-auto">{rpg.description} </p>
                    <p className="float-right">---- Publisher Description</p>
                    <br></br>
                    <Link to={`/rpgs/${rpg.id}`} key={rpg.id}>
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