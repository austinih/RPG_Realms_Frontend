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

    // const CalculateScore = () => {
    //     const scores = rpg.reviews.map((review)=>review.score)
    //     navigate(`${index}`)
    //     console.log(`${index}`)
    // }
    // const scores = rpg.reviews.map((review)=>review.score);
    // const average = scores.reduce((totalScore, score) => totalScore + score, 0);
    // const averageTotal = parseFloat((average / review.length).toFixed(2));
    
    return rpg && publisher ? (
       
       <div >
{/* RPG Description */}
            <div className="p4 flex justify-center">
                <img src={rpg.image_url} className="max-w-xs max-h-[65vh]"></img>
                <div className="ml-5 w-[50vw]">
                    <p>{rpg.title}</p>
                    <p>Publisher*</p>
                    {/* <p>{scores}</p> */}
                    <div className="bg-lightsurface px-5 py-3">
                        <h1 className="pb-2 border-b-solid border-b-2 border-black">Full Description:</h1>
                        <p className="pt-2">{rpg.description}</p>
                    </div>
                </div>
            </div>
{/* Publisher Information */}
            <p>Publisher</p>
            <div>
                <p>{publisher.name}</p>
            </div>
{/* Reviews */}
            <div className="my-5 pb-10 w-[75vw] mx-auto ">
                <div className="ml-12 py-1 w-44 bg-primary text-white  text-xl rounded-t-2xl  text-center ">Reviews</div>
                <div className=" mx-8  flex self-center flex-col  px-8  bg-white ">
                    <div className=" p-2y my-2 mx-3 text-primary font-bold flex flex-row justify-around  place-items-center text-center underline">
                        <p className="-ml-2 w-16 text-center">Score </p>
                        <p className="w-[22rem] pl-5 "> Title  </p>
                        <p className="w-32 text-center">User </p>
                        <p className="w-40 text-center">Date Posted</p> 
                    </div>
                    {rpg.reviews ? rpg.reviews.map((review) => (
                        <div>
                            <details className=" py-2 my-2 mx-3 hover:border-2 hover:border-primary" >
                                <summary className="
                                        flex flex-row justify-around  place-items-center  cursor-pointer hover:rounded-md border-collapse ">
                                    <p className="w-16 text-center">{review.score} </p>
                                    <p className="text-2xl">|</p>
                                    <p className="w-[22rem] pl-5 ">{review.title}  </p>
                                    {/* <p>{review.content} |</p> */}
                                    <p className="text-2xl ">|</p>
                                    <p className="w-32 text-center">User </p>
                                    <p className="text-2xl">|</p>
                                    <p className="w-40 text-center">{review.date_posted} </p>                         
                                </summary>
                                    {/* https://www.kindacode.com/article/tailwind-css-how-to-create-accordions-collapsible-content/ */}
                                <div className="mx-5 mt-3 p-5  border-2 border-primary">
                                    <p></p>
                                    <p><span className="italic text-primary font-bold ">Review: </span>{review.content}</p>
                                </div>
                                
                            </details>
                            
                            <p className="border-solid border-b-2 border-b-black"></p>
                        </div>
                        
                        
                    )): <h2>No reviews found</h2>
                    }
{/* Create Review Button */}
                    <button className="mt-2 rounded-t-2xl w-56 mx-auto bg-secondary text-primary  hover:text-white hover:h-10 hover:w-96 transition-all duration-300 ease-linear hover:font-bold hover:text-lg hover:rounded-t-md ">+ Review</button>

                </div>
            </div>


            
        </div>
        
    ) : <h1> Loading, Please Wait</h1>

    
}