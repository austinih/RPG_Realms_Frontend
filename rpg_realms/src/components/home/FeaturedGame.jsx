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
       
      <div className="mx-5 mb-10">
        <div className="p-3 w-[35vw] ml-auto mr-auto flex flex-row justify-around bg-white shadow-md shadow-slate-700
                    border-primary border-4 rounded-md hover:scale-110">
          <img className=" h-56  shadow-md shadow-slate-900" src={rpg.image_url} ></img>
          <div className="flex flex-col ">
            <h3 className="text-3xl mb-3 font-bold underline underline-primary">{rpg.title}</h3>
            <h3 className="text-xl font-bold p-1" ><span className="text-primary">From:</span> {rpg.publisher_name}</h3>
            <h3 className="text-xl mb-2 font-bold p-1"><span className="text-primary">Genre:</span> {rpg.genre}</h3>
            <Link to={`/rpgs/${rpg.id}`} key={rpg.id}>
              <button className="buttons float-left shadow-md shadow-slate-900">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
          
          
            
            
        
    ): <h1> loading please wait</h1>

}