import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function EditingUser({idd,namee,eemail,ppass,phh,eeno,ddoa})
{
    console.log("This is edit "+namee);
    const [post, setPost] = React.useState(null);
    const navi =useNavigate();
    const cancelling=()=>{navi('/students')};

    const[user_Id,setid]=useState(idd);
    const[user_Name,setname]=useState(namee);
    const[e_mail,setmail]=useState(eemail);
    const[ph_no,setph]=useState(ppass);
    const[pass_word,setpass]=useState(phh);
    const[e_no,seteno]=useState(eeno);
    const[d_oa,setdoa]=useState(ddoa);

    
      const handleSubmit = (e) => {
        e.preventDefault();
        updatingPost();
        cancelling();
      };

  function updatingPost() {
    const UpdateURL="user/update/"+idd;
    axios
      .put(UpdateURL, {
          "userId":user_Id,
          "userName": user_Name,
          "email":  e_mail,
          "phone":  ph_no,
          "password":  pass_word,
          "eno":  e_no,
          "doa":  d_oa
      })
      .then((response) => {
          setPost(response.data);
      }).catch((error)=>{console.log(idd)});
  }
return
(
        <div>
             <div class="container pr-0  w-screen h-screen bg- justify-items-center">
            <div class="max-w-lg mx-auto my-10 p-3 bg-white content-center rounded-xl shadow shadow-slate-300">
            <svg onClick={cancelling}
      viewBox="0 0 470 1000"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M452 656c12 12 18 26.333 18 43s-6 31-18 43c-12 10.667-26.333 16-43 16s-31-5.333-43-16L234 590 102 742c-12 10.667-26.333 16-43 16s-31-5.333-43-16C5.333 730 0 715.667 0 699s5.333-31 16-43l138-156L16 342C5.333 330 0 315.667 0 299s5.333-31 16-43c12-10.667 26.333-16 43-16s31 5.333 43 16l132 152 132-152c12-10.667 26.333-16 43-16s31 5.333 43 16c12 12 18 26.333 18 43s-6 31-18 43L314 500l138 156" />
    </svg>
        <form onSubmit={handleSubmit}class="my-10">
            <div class="flex flex-col space-y-5">
                
            <div>
            <label for="">
                    <p class="font-medium text-slate-700 pb-2">UserId</p>
                    <input onChange={(e)=>setid(e.target.value)} disabled="true" id="user_Id" name="" type="" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your userId" value={user_Id}></input>
                </label>
            <label for="name">
                    <p class="font-medium text-slate-700 pb-2">Name </p>
                    <input onChange={(e)=>setname(e.target.value)} id="user_Name" name="name" type="name" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your name " value={user_Name}></input>
                </label>
           <label for="e_mail">
                    <p class="font-medium text-slate-700 pb-2">Email </p>
                    <input onChange={(e)=>setmail(e.target.value)} disabled="true" id="e_mail" name="e_mail" type="email" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your email " value={e_mail}></input>
                </label>

                {/* <label for="pass_word">
                    <p class="font-medium text-slate-700 pb-2">Password </p>
                    <input onChange={(e)=>setpass(e.target.value)} id="pass_word" name="pass_word" type="password" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password " value={pass_word}></input>
                </label> */}

                <label for="ph_no">
                    <p class="font-medium text-slate-700 pb-2">PhoneNumber</p>
                    <input onChange={(e)=>setph(e.target.value)} id="ph_no" name="ph_no" type="number" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your phonenumber" value={ph_no}></input>
                </label>
                <label for="e_no">
                    <p class="font-medium text-slate-700 pb-2">EnrollNumber</p>
                    <input onChange={(e)=>seteno(e.target.value)} id="e_no" name="e_no" type="string" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your enrollnumber" value={e_no}></input>
                </label>
                <label for="d_oa">
                    <p class="font-medium text-slate-700 pb-2">Date of admission</p>
                    <input onChange={(e)=>setdoa(e.target.value)} id="d_oa" name="d_oa" type="date" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your date" value={d_oa}></input>
                </label>
                </div>
                <button class="w-full py-3 font-medium text-white bg-yellow-400 hover:shadow inline-flex space-x-2 items-center justify-center" >
                    
                      <span>Update Student</span>
                </button>
               
            </div>
        </form>
        </div></div>
        </div>
    );}