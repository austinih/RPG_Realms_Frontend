import axios from "axios"
import { useNavigate, useParams, Link } from "react-router-dom"

export default function DeleteReview() {
    let navigate = useNavigate()
    const { reviewId } = useParams();
    const deleteSelectedReview = async (e) => {
        e.preventDefault();
        const response = await axios.delete(
            `http://localhost:8000/delete-review/${reviewId}/`,
        )
        navigate(`/profile/`)

    };

    return (
        <div className="w-80 m-auto  bg-white shadow-md shadow-slate-300 p-5">
            <p className="text-black">Are you sure you want to delete your review?</p>
            <button onClick={deleteSelectedReview} className="buttons">Yes</button>
            <Link to={`/profile`}>
                <button className="buttons">no</button>
            </Link>
        </div>
    )
  }