import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signin(){
  const signin_clicking=useNavigate();
const signin_click=()=>{signin_clicking('./home');}
    return(
        //<div className="align-center">hello</div>
        <div id="formsignin" class="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center">
  <div class="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl rounded-xl">
    <br></br>
    <h1 className="text-center text-3xl font-bold">Learning Portal</h1>
    <br></br>
    <h3 className="text-center text-xl font-sans font-semibold">SIGN IN</h3><br></br>
    <p className="text-center text-gray-500">Enter your credentials to access your account</p>
    <form class="p-12 md:p-10 pt-10">
    <div class=" text-lg mb-6 md:mb-8">
    <label>Email</label>
    <br></br>
    <input type="text" id="email" class="bg-gray-200 pl-3 py-2 md:py-4 focus:outline-none w-full" placeholder="Enter your email" />
  </div>
  <div class="text-lg mb-6 md:mb-8">
        <label>Password</label>
        <br></br>
        <input type="password" id="password" class="bg-gray-200 pl-3 py-2 md:py-4 focus:outline-none w-full" placeholder="Password" />
      </div>
      <button onClick={signin_click} class="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full" >SIGNIN</button>
    </form>
  </div>
 
 </div>
    )
}