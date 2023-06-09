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
    
    // const deleteSelectedReview = async (id) => {
    //     // e.preventDefault()
    //     await DeleteReview(id)
    // }
    
    return(
       
        <div className="flex flex-wrap p-5 justify-center">
{/* Account Information */}
            <div className="mx-5 mb-10">
                <div className="w-52 ml-5 text-xl bg-primary  text-white text-center rounded-t-2xl">Account Information</div>
                    <div className="w-96 h-72 p-5 bg-white rounded-lg border-4 border-primary shadow-md shadow-slate-700">
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
{/* Reviews */}
            <div className="mx-5">   
                <div className="ml-5 text-xl w-44 bg-primary  text-white text-center rounded-t-2xl ">My Reviews</div>  
                    <div className="   flex self-center flex-col   w-[70vw] p-5 bg-primarycontainer rounded-lg shadow-md shadow-slate-700">
                        {user.reviews ? user.reviews.map((review) => (
                            <div className="shadow-sm bg-white shadow-slate-700 mb-2">
                            <details className=" py-2 my-2 mx-3 open:border-primary open:border-2">
                                <summary className="
                                    flex flex-row justify-around  place-items-center  cursor-pointer hover:rounded-md border-collapse">
                                    <img src={review.rpg_image} className="w-16"/>
                                    <div className="w-[15rem]">
                                        <p className="w-[15rem] text-md "><span className="text-primary italic font-bold">Game:</span> {review.rpg_title} </p>
                                        <p className="w-[18rem] text-sm "><span className="text-primary italic font-bold">Title:</span> {review.title}  </p>
                                    </div>
                                    <p className="ml-5 text-2xl border-r-2 border-black h-8"></p>
                                    <p className="w-20"><span className="text-primary italic font-bold">Score:</span> {review.score}</p>
                                    <p className="ml-5 text-2xl border-r-2 border-black h-8"></p>
                                    <p className="w-28 "><span className="text-primary italic font-bold">Date Posted:</span><br/> {review.date_posted} </p>
                                    
    {/* Update Review  */}
                                    <Link to={`/updatereview/${review.id}`} key={review.id}>
                                        <button className="buttons w-20 align-middle">Edit</button>
                                    </Link>
    {/* Delete Review */}
                                    <Link to={`/deletereview/${review.id}`} key={review.id}>
                                        <button className="buttons w-20 align-middle" >Delete</button>
                                    </Link>
                                </summary>
                                    <div className="mx-5 mt-3 p-5  ">
                                        <p className="border-solid border-b-2 border-b-black"></p>
                                        <br></br>
                                        <p><span className="italic text-primary font-bold ">Review: </span>{review.content}</p>
                                    </div>

                            </details>
                             <p className="border-solid border-b-2 border-b-black"></p>
                            </div>
                        )): <h2>No reviews found</h2>
                        }
                       

                    </div>
            </div> 
        </div>
        
    )

}