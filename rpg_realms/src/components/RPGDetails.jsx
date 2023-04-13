import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";


export default function RPGDetails() {
    
    const [rpg, setRPG] = useState({});
    const [publisher, setPublisher] = useState({});
    const { rpgId } = useParams();


    useEffect(() => {
        const renderRPG = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/rpgs/${rpgId}/`);
                setRPG(response.data);
            } catch (error) {}
        };
        renderRPG();
    }, []);

    const publisherUrl = rpg.publisher
    console.log(publisherUrl)
    useEffect(() => {
        const renderPublisher = async () => {
            try {
                const response = await axios.get(`${publisherUrl}`);
                setPublisher(response.data);
            } catch (error) {}
        };
        renderPublisher();
    }, []);

    
    return rpg && publisher ? (
       
       <div >
            <div className="mx-8 p4 flex">
                <img src={rpg.image_url} className="max-w-xs max-h-[50vh]"></img>
                <div className="ml-5">
                    <p>{rpg.title}</p>
                    <p>Publisher*</p>
                    <div className="bg-lightsurface px-5 py-3">
                        <h1 className="pb-2 border-b-solid border-b-2 border-black">Full Description:</h1>
                        <p className="pt-2">{rpg.description}</p>
                    </div>
                </div>
            </div>
                <p>Publisher</p>
                <div>
                    <p>{publisher.name}</p>
                </div>
            
        </div>
        
    ) : <h1> Loading, Please Wait</h1>

    
}