import { useEffect, useState } from "react";
import axios from "axios";
import FeaturedGame from "./FeaturedGame";

export default function Home() {
    
    
    return (
       
      <div className="">
        <h1 className=" bg-primary text-white -ml-3 mb-5 py-3 px-10 w-52 rounded-r-3xl">Featured RPGs
                </h1>
        <div className=" flex flex-wrap justify-center"> 
          <FeaturedGame rpgId="1"/>
          <FeaturedGame rpgId="2"/>
        </div>
      </div>
        
    ) 

}