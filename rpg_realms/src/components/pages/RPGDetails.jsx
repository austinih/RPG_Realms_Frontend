import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function RPGDetails() {
    
    const [rpg, setRPG] = useState({});
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
  
    return rpg ? (
       
       <div className="m-5">
{/* RPG Description */}
            <div className=" ">
                <p className="text-center text-3xl">{rpg.title}</p>
                <p className="text-center text-lg mb-5">From {rpg.publisher_name}</p>
                <div className="p4 flex justify-center w-[80vw] mx-auto flex-wrap  ">
                    <img src={rpg.image_url} className=" max-w-sm max-h-[52vh] mb-5 rounded-xl shadow-md shadow-slate-700"></img>
                    <div className="ml-5 max-w-xl">
                        
                        {/* <p>{scores}</p> */}
                        <div className="px-5 py-3  ">
                            <h1 className="ml-5 py-1 w-44 bg-primary text-white  text-xl italic rounded-t-2xl  text-center">Full Description:</h1>
                            <div className="pt-2 max-h-[26rem] overflow-auto text-lg bg-primarycontainer px-5 py-3 rounded-lg shadow-md shadow-slate-700">
                                <p >{rpg.description}</p>
                                <p className="float-right">---- Publisher Description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/* Publisher Information */}
            <div className="my-5 pb-10 w-[75vw] mx-auto ">
                <div className="ml-12 py-1 w-44 bg-primary text-white  text-xl italic rounded-t-2xl  text-center  ">Publisher</div>
                <div className=" mx-8   self-center px-5 py-3 text-black bg-primarycontainer flex flex-row   place-items-center rounded-lg shadow-md shadow-slate-700">
                    <img src={rpg.publisher_logo} className="w-20 ml-5"/>
                    <p className="ml-16">{rpg.publisher_name}</p>
                    <p className="ml-16 text-2xl border-r-2 border-black h-8"></p>
                    <a href={rpg.publisher_website} target="_blank" className="ml-16 hover:scale-110 hover:font-bold">Publisher website</a>
                </div>
                

            </div>
{/* Reviews */}
            <div className="my-5 pb-10 w-[75vw] mx-auto ">
                <div className="ml-12 py-1 w-44 bg-primary text-white  text-xl italic rounded-t-2xl  text-center ">Reviews</div>
                <div className=" mx-8  flex self-center flex-col  px-8  bg-primarycontainer rounded-lg shadow-md shadow-slate-700">
                    <div className=" p-2y my-2 mx-3 text-primary font-bold flex flex-row justify-around  place-items-center text-center underline">
                        <p className="-ml-2 w-16 text-center">Score </p>
                        <p className="w-[22rem] pl-5 "> Title  </p>
                        <p className="w-32 text-center">User </p>
                        <p className="w-40 text-center">Date Posted</p> 
                    </div>
{/* Map reviews */}
                    {rpg.reviews ? rpg.reviews.map((review) => (
                        <div className="shadow-sm shadow-slate-700 mb-2 bg-white">
                            <details className=" py-2 my-2 mx-3 open:border-primary open:border-2" >
                                <summary className="
                                        flex flex-row justify-around  place-items-center  cursor-pointer hover:rounded-md border-collapse ">
                                    <p className="w-16 text-center font-bold">{review.score} </p>
                                    <p className="ml-5 text-2xl border-r-2 border-black h-8"></p>
                                    <p className="w-[22rem] pl-5 font-bold">{review.title}  </p>
                                    {/* <p>{review.content} |</p> */}
                                    <p className="ml-5 text-2xl border-r-2 border-black h-8"></p>
                                    <p className="w-32 text-center font-bold">{review.username} </p>
                                    <p className="ml-5 text-2xl border-r-2 border-black h-8"></p>
                                    <p className="w-40 text-center font-bold">{review.date_posted} </p>                         
                                </summary>
                                    {/* https://www.kindacode.com/article/tailwind-css-how-to-create-accordions-collapsible-content/ */}
                                <div className="mx-5 mt-3 p-5">
                                    <p className="border-solid border-b-2 border-b-black"></p>
                                    <br></br>
                                    <p><span className="italic text-primary font-bold ">Review: </span>{review.content}</p>
                                </div>
                                
                            </details>
                            
                           
                        </div>
                        
                        
                    )): <h2>No reviews found</h2>
                    }
{/* Create Review Button */}
                    <Link to={`/createreview/${rpg.id}`} key={rpg.id} className=" mt-2 mx-auto">
                        <button className=" rounded-t-2xl w-56  bg-secondary text-primary
                        border-2 border-primary border-b-0 hover:border-white
                        hover:text-white hover:h-10 hover:w-96 transition-all duration-300 ease-linear hover:font-bold hover:text-lg hover:rounded-t-md ">+ Review</button>
                    </Link>
                </div>
            </div>


            
        </div>
        
    ) : <h1> Loading, Please Wait</h1>

    
}