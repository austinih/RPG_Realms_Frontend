import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate} from 'react-router-dom';


export default function CreateReview() {

    let navigate = useNavigate()
    const today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const { rpgId } = useParams();
    const [createForm, setCreateForm] = useState([]);
    const [formValues, setFormValues] = useState({
        rpg_id:`${rpgId}`,
        // rpg_id:"1",
        user_id: "2",
        date_posted: date,
        title: "",
        content: "",
        score: "",
    });
    

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(
            `http://localhost:8000/create-review-detail/`,
            formValues
        )
        setCreateForm(response.data);
        navigate(`/rpgs/${rpgId}`)

    };

    
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

    return(
       
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
                    <button onClick={handleShow} className="
                        rounded-3xl bg-tertiary text-white 
                        font-bold my-4 ml-4 px-4 py-1
                        hover:bg-tertiarycontainer   hover:text-surface 
                        hover:w-96 hover:rounded-md transition-all duration-500 ease-linear">
                        Submit Review
                    </button>
                </div>
                {/* <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Thank you for your purchase. Enjoy the Show!!
                    </Modal.Body>
                    <Modal.Footer>
                    <Link to="/"><Button variant="primary" onClick={handleClose}>
                        Close
                    </Button></Link>
                    </Modal.Footer>
                </Modal> */}
    
            </form>
        </div>
        
    )

}