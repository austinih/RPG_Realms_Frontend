import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Profile() {
    
    const [user, setUser] = useState({});


    useEffect(() => {
        const renderUser = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/users/2/`);
                setUser(response.data);
            } catch (error) {}
        };
        renderUser();
    }, []);
    
    
    return(
       
        <div className="flex flex-wrap p-5 justify-center">
            <div className="mx-5 mb-10">
                <div className="bg-primary w-44 text-white text-center rounded-t-2xl">Account Information</div>
                <div>
                    <div className="w-96 h-72 p-5 bg-white">
                        <ul>
                            <li>Name 
                                <div className="ml-8 my-1 px-3 py-1 w-72 rounded-3xl bg-primarycontainer text-surface">{user.name}</div>  
                            </li>
                            <li>Username</li>
                                <div className="ml-8 my-1 px-3 py-1 w-72 rounded-3xl bg-primarycontainer text-surface">{user.username}</div>  
                            <li>Email</li>
                            <div className="ml-8 my-1 px-3 py-1 w-72 rounded-3xl bg-primarycontainer text-surface">{user.email}</div>  
                        </ul>
                        <button className="buttons">Edit</button>
                    </div>
                </div>
            </div>
            <div className="mx-5">   
                <div className="bg-primary w-44 text-white text-center rounded-t-2xl ">My Reviews</div>  
                    <div className="   flex self-center flex-col   w-[65vw] p-5 bg-white">
                        {user.reviews ? user.reviews.map((review) => (
                            <div className="flex flex-row justify-around py-2 place-items-center border-solid border-b-2 border-b-black ">
                                <img src="https://i.pinimg.com/originals/04/ad/f5/04adf5601d7cca9c5798dd2e6a14b65a.jpg" className="w-10"/>
                                <div className="w-[18rem]">
                                    <p className="w-[15rem] text-md ">Game title:  </p>
                                    <p className="w-[18rem] text-sm ">Review title: {review.title}  </p>
                                </div>
                                {/* <p>{review.content} |</p> */}
                                <p>|</p>
                                <p className="w-28 ">Date Posted </p>
                                <p>|</p>
                                <Link>
                                    <button className="buttons w-20 align-middle">Read</button>
                                </Link>
                                <button className="buttons w-20 align-middle">Edit</button>
                                <button className="buttons w-20 align-middle">Delete</button>
                                

                            </div>
                        )): <h2>No reviews found</h2>
                        }
                       

                    </div>
            </div> 
        </div>
        
    )

}