import { useNavigate } from "react-router"
import { useState } from "react"

export default function Register() {
    
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
      }
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     await RegisterUser({
    //       name: formValues.name,
    //       username: formValues.username,
    //       email: formValues.email,
    //       password: formValues.password
    //     })
    //     setFormValues({
    //       name: '',
    //       email: '',
    //       password: '',
    //       confirmPassword: ''
    //     })
    //     navigate('/signin')
    //   }


    return(
       
        <div className="w-80 m-auto  bg-white shadow-md shadow-slate-300 p-5" >
            <h1 className="text-3xl text-center mb-3 pt-3">Register</h1>
            <form className="w-72 h-[28rem] p-4 ">
                <div>
                    <label htmlFor="name" className="flex">Name:</label>
                    <input className="input-field"
                        onChange={handleChange}
                        name="name"
                        type="text"
                        placeholder="name"
                        value={formValues.name}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="username" className="flex">Username:</label>
                    <input className="input-field"
                        onChange={handleChange}
                        name="username"
                        type="text"
                        placeholder="username"
                        value={formValues.username}
                        required
                    />
                </div>
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
                <div>
                    <label htmlFor="confirmPassword" className="flex">Confirm Password:</label>
                    <input className="input-field"
                        onChange={handleChange}
                        name="confirmPassword"
                        type="password"
                        placeholder="confirm password"
                        value={formValues.confirmPassword}
                        required
                    />
                </div>
                <button className="buttons"
                    disabled={
                        !formValues.email ||
                        (!formValues.password &&
                            formValues.confirmPassword === formValues.password)
                    }>Sign up
                </button>


            </form>

            
            
        </div>
        
    )

}