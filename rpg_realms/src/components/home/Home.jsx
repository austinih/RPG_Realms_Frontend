import { useEffect, useState } from "react";
import axios from "axios";
import FeaturedGame from "./FeaturedGame";

export default function Home() {
    
    
    return (
       
      <div className="">
        <h1 className=" bg-primary text-white text-lg italic -ml-3 mb-5 py-3 px-10 w-52 rounded-r-3xl">Featured RPGs</h1>
        <div className="mt-7 flex flex-wrap justify-center"> 
          <FeaturedGame rpgId="1"/>
          <FeaturedGame rpgId="13"/>
          <FeaturedGame rpgId="10"/>
          <FeaturedGame rpgId="20"/>
        </div>
      </div>
        
    ) 

}