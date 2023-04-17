import { Link } from "react-router-dom"
export default function Footer() {
    return(
       
        <div className="w-screen h-32 flex justify-end items-center  bg-primary text-white shadow-lg border-t-4 border-t-surface">
        
        <div className=" align-middle">
            <label htmlFor="newsletter-email"></label>
            <input type="email" id="newsletter-email" name="newsletter-email" placeholder="Email" required className="input-field w-56 m-auto py-1 px-3" />
            <button className="buttons w-24  ml-2 my-auto p-1 shadow-md shadow-slate-700">Subscribe</button>
        </div>
        
        <Link to='/'>
            <h1 className='text-3xl mx-20 text-right'>RPG Realms</h1>
        </Link>
        
        
        </div>
        
    )

}