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
        alert("You have successfully deleted this review")
        navigate(`/profile/`)

    };

    return (
        <div className="flex align-middle">
            <div className=" w-96 h-44 m-auto  bg-white shadow-md shadow-slate-300 p-5">
                <p className="text-black text-center">Are you sure you want to permanently delete your review?</p>
                <div className="flex justify-center mt-5">
                    <button onClick={deleteSelectedReview} className="buttons mx-3 hover:bg-red-400">
                        Yes 
                        <br></br>
                        <span className="text-xs"> 
                            Delete this review
                        </span>
                    </button>
                    <Link to={`/profile`}>
                        <button className="buttons mx-3">
                            No
                            <br></br>
                            <span className="text-xs">
                                Return to Profile
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
  }