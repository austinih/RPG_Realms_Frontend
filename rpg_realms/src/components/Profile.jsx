export default function Profile() {
    return(
       
       <div >
            <h1>Profile</h1>
            <div className="bg-primary w-44 text-white text-center rounded-t-2xl">Account Information</div>
            <div className="h-60">
                <div className="w-80">
                    <ul>
                        <li>Name 
                            <div className="ml-8 my-1 px-3 py-1 w-72 rounded-3xl bg-gray-300 text-surface">Austin Holland</div>  
                        </li>
                        <li>Username</li>
                            <div className="ml-8 my-1 px-3 py-1 w-72 rounded-3xl bg-gray-300 text-surface">fakeaustin</div>  
                        <li>Email</li>
                        <div className="ml-8 my-1 px-3 py-1 w-72 rounded-3xl bg-gray-300 text-surface">austin@fake.com</div>  
                    </ul>
                    <button className=" mt-4 px-4  rounded-3xl float-right shadow-lg bg-tertiary text-white hover:bg-tertiarycontainer hover:text-surface">Edit</button>
                </div>
            </div>
            <br></br>
            <div className="bg-primary w-44 text-white text-center rounded-t-2xl">My Reviews</div>
            
            
        </div>
        
    )

}