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
    const [formValues, setFormValues] = useState({
        rpg_id:"16",
        user_id: "2",
        date_posted: date,
        title: "",
        content: "",
        score: "",
    });

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

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        console.log(formValues)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formValues)
        const response = await axios.put(
            `http://localhost:8000/update-review/${reviewId}/`,
            formValues
        )
        
        setUpdateForm(response.data);
        navigate(`/profile/`)

    };

    

    return review ? (
       
        <div className="w-[65vw] h-[70vh] m-auto  bg-white shadow-md shadow-slate-300  overflow-auto">
        <h1 className="text-3xl text-center mb-3 pt-3">New Review</h1>
        <form className=" w-72  px-8 pt-4 " onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input className="input-field"
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
                <textarea className="input-field w-[55vw] h-[30vh] "
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
            <div className="">
                <button className="
                    rounded-3xl bg-tertiary text-white 
                    font-bold my-4 ml-4 px-4 py-1
                    hover:bg-tertiarycontainer   hover:text-surface 
                    hover:w-96 hover:rounded-md transition-all duration-500 ease-linear">
                    Submit Review
                </button>
            </div>
        </form>
    </div>
    ) : <h1> Loading, Please Wait</h1>

}