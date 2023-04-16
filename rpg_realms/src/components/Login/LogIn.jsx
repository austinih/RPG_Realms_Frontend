import { useNavigate } from "react-router"
import { useState } from "react"



export default function Login() {

    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
      }
    
    
    return(
       
       <div className="w-[40vw] m-auto px-5 pb-16 pt-5 bg-white border-4 border-primary rounded-xl shadow-md shadow-slate-300 " >
            <h1 className="text-3xl text-center mb-3 pt-3">Log In</h1>
            <form className="w-[36vw] h-56 p-4 ">
                <div>
                    <label htmlFor="email" className="flex">Email:</label>
                    <input className="input-field"
                        onChange={handleChange}
                        name="email"
                        type="text"
                        placeholder="email"
                        value={formValues.email}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="flex">Password:</label>
                    <input className="input-field"
                        onChange={handleChange}
                        name="password"
                        type="password"
                        placeholder="password"
                        value={formValues.password}
                        required
                    />
                </div>
                <button className="buttons "
                    disabled={!formValues.email || !formValues.password}
                    >Log In
                </button>


            </form>

            
            
        </div>
        
    )

}