import { useEffect, useState, useContext } from "react";
import axios from "axios";

export default function Profile() {
    
    const [user, setUser] = useState({});
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
    
    
    return(
       
       <div >
            <h1>Profile</h1>
            <div className="bg-primary w-44 text-white text-center rounded-t-2xl">Account Information</div>
            <div className="h-60">
                <div className="w-80">
                    <ul>
                        <li>Name 
                            <div className="ml-8 my-1 px-3 py-1 w-72 rounded-3xl bg-primarycontainer text-surface">Austin Holland</div>  
                        </li>
                        <li>Username</li>
                            <div className="ml-8 my-1 px-3 py-1 w-72 rounded-3xl bg-primarycontainer text-surface">fakeaustin</div>  
                        <li>Email</li>
                        <div className="ml-8 my-1 px-3 py-1 w-72 rounded-3xl bg-primarycontainer text-surface">austin@fake.com</div>  
                    </ul>
                    <button className="buttons">Edit</button>
                </div>
            </div>
            <br></br>
            <div className="bg-primary w-44 text-white text-center rounded-t-2xl">My Reviews</div>
            
            
        </div>
        
    )

}