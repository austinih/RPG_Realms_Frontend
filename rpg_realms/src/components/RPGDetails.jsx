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
            <div className="p4 flex justify-center">
                <img src={rpg.image_url} className="max-w-xs max-h-[65vh]"></img>
                <div className="ml-5 w-[50vw]">
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
            <div className="my-5 pb-10 w-[75vw] mx-auto">
                <div className="ml-12 py-1 w-44 bg-primary text-white  text-xl rounded-t-2xl  text-center">Reviews</div>
                <div className=" mx-8  flex self-center flex-col  px-8  bg-white">
                    {rpg.reviews ? rpg.reviews.map((review) => (
                        <div className="flex flex-row justify-around py-2 place-items-center border-solid border-b-2 border-b-black ">
                            <p className="w-[20rem]  ">{review.title}  </p>
                            {/* <p>{review.content} |</p> */}
                            <p className="text-2xl">|</p>
                            <p className="w-32 ">User </p>
                            <p className="text-2xl">|</p>
                            <p className="w-40 ">Date Posted </p>
                            
                            <Link>
                                <button className="buttons w-28 align-middle">Read</button>
                            </Link>
                        </div>
                    )): <h2>No reviews found</h2>
                    }
                    <button className="mt-2 rounded-t-2xl w-56 mx-auto bg-secondary text-primary  hover:text-white hover:h-10 hover:w-96 transition-all duration-300 ease-linear hover:font-bold hover:text-lg hover:rounded-t-md ">+ Review</button>

                </div>

            </div>

            
        </div>
        
    ) : <h1> Loading, Please Wait</h1>

    
}