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
       
       <div className="w-72 m-auto " >
            <h1 className="text-3xl text-center mb-3">Log In</h1>
            <form className="w-72 h-56 p-4 shadow-md shadow-slate-300">
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
                <button className="mt-2 px-3 py-1 rounded-3xl float-right bg-tertiary text-white"
                    disabled={!formValues.email || !formValues.password}
                    >Log In
                </button>


            </form>

            
            
        </div>
        
    )

}