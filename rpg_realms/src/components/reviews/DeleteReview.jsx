export default function CreateReview() {

    const { rpgId } = useParams();
    const [createForm, setCreateForm] = useState([]);
    const [formValues, setFormValues] = useState({
        // rpg_id:`${rpgId}`,
        rpg_id:"1",
        user_id: "2",
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
    };

    
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

    return(
       
       <div lassName="w-80 h-auto m-auto  bg-white shadow-md shadow-slate-300 p-5">
         
        </div>
        
    )

}