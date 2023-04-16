import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link, useParams, useNavigate} from "react-router-dom";

export default function UpdateReview() {

    

    let navigate = useNavigate()
    const today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const { reviewId } = useParams();
    const [review, setReview] = useState({});
    const [updateForm, setUpdateForm] = useState([]);
    
    

    useEffect(() => {
        const renderReview = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/reviews/${reviewId}/`);
                setReview(response.data);
                console.log(response.data)
            } catch (error) {}
        };
        renderReview();
    }, []);

    const rpgId = review.rpg_id


    const [formValues, setFormValues] = useState({
        rpg_id: "",
        user_id: "2",
        date_posted: date,
        title: "",
        content: "",
        score: "",
    });

    const handleChange = (e) => {
        console.log(rpgId)
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        // console.log(formValues)
        // console.log(rpgId)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        formValues.rpg_id = rpgId
        console.log(formValues)
        
        const response = await axios.put(
            `http://localhost:8000/update-review/${reviewId}/`,
            formValues
        )
        
        setUpdateForm(response.data);
        navigate(`/profile/`)

    };

  

    

    return review ? (
       <div className="flex flex-wrap ">
            <div className="w-[40vw] h-[72vh] mx-auto mb-10 rounded-2xl bg-white border-4 border-primary shadow-md  shadow-slate-700  overflow-auto ">
                <h1 className="text-3xl text-center mb-3 pt-3 text-primary font-bold">Current Reveiw</h1>
                <div className=" w-[30vw]  px-8 pt-4 ">
                    <h2>Title:</h2>
                    <p className="review-review">{review.title}</p>
                    <h2>Content:</h2>
                    <p className="review-review h-[30vh] overflow-auto">{review.content}</p>
                    <h2>Score:</h2>
                    <p className="review-review">{review.score}</p>
                    <Link to="/profile/">
                        <button className="
                            rounded-3xl bg-tertiary text-white 
                            font-bold my-4 ml-4 px-4 py-1 shadow-md shadow-black
                            hover:bg-tertiarycontainer   hover:text-surface 
                            hover:w-96 hover:rounded-md transition-all duration-500 ease-linear">
                            Keep Current
                        </button>
                    </Link>
                </div>
            </div>
            <div className=" w-[40vw] h-[72vh] mx-auto mb-10 rounded-2xl bg-white shadow-md border-4 border-primary  shadow-slate-700  overflow-auto">
                <h1 className="text-3xl text-center mb-3 pt-3 text-primary font-bold">New Review</h1>
                <form className=" w-[30vw]  px-8 pt-4 " onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input className="input-field " 
                            onChange={handleChange}
                            name="title"
                            type="text"
                            placeholder="Type a title for your review..."
                            value={formValues.title}
                            required
                        />                   
                    </div>
                    <div>
                        <label htmlFor="title">Content:</label>
                        <textarea className="input-field  h-[30vh] "
                            onChange={handleChange}
                            name="content"
                            type="text"
                            placeholder="Write the content of your review here..."
                            value={formValues.content}
                            required
                        />                   
                    </div>
                    <div>
                        <label htmlFor="score">Score:</label>
                        <input className="input-field "
                            onChange={handleChange}
                            name="score"
                            type="integer"
                            placeholder="Rate the game from 1-10..."
                            value={formValues.score}
                            required
                        />                   
                    </div>
                    
                    <button className="
                        rounded-3xl bg-tertiary text-white 
                        font-bold my-4 ml-4 px-4 py-1 shadow-md shadow-black
                        hover:bg-tertiarycontainer   hover:text-surface 
                        hover:w-96 hover:rounded-md transition-all duration-500 ease-linear">
                        Submit Review
                    </button>
                    
                </form>
            </div>
        </div>
    ) : <h1> Loading, Please Wait</h1>

}