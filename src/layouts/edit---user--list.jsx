
// import React from "react";
// import axios from 'axios';
// import { useState, useEffect } from "react";
// import Navigatepage from "../layouts/navigator";
// import Topnavigation from "../layouts/topnavigation";
// import { useNavigate } from "react-router-dom";


// export default function Userlist() {
//   const navi =useNavigate();
//    const cancelling=()=>{navi('/students')};
//   const getAllURL="/user/getuser/all";
//     const [allstudent, setallStudent] = useState([]);
//     const [post, setPost] = React.useState(null);
//     const [name, setname] = useState("");
//     const [email, setemail] = useState("");
//     const [ph, setphone] = useState("");
//     const [eno, seteno] = useState("");
//     const [doa, setdoa] = useState("")
//     // const [showModal, setShowModal] = React.useState(false);
//     const [condition, setcondition] = React.useState(false);
//     const [isUpdate, setisUpdate] = React.useState(false);
//     const [val, setval] = React.useState(false);
//     const [updateuserid, setupdateuserid] = React.useState("");

//     useEffect(() => {
//         axios.get('/user/getuser/all')
//             .then(response => {
//                 setallStudent(response.data);
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     }, [val]);


//     const updateuser = (updateid) => {
//         axios.put('user/update/' + updateid, {
//           "userId":updateuserid,
//           "userName": name,
//           "email":  email,
//           "phone":  ph,
//           "password":  "pass_word",
//           "eno":  eno,
//           "doa":  doa

//         }).then(() => {
//             setcondition(false)
//             setval(!val)
//             setname("")
//             setemail("")
//             setphone("")
//             setdoa("")
//             seteno("")

//         }
//         ).catch(error => {console.error(error);});

//     }
//     const createStudent = () => {
//         axios.post('user/create', {
//           "userId": updateuserid,
//           "userName": name,
//           "email":  email,
//           "phone":  ph,
//           "password":"password",
//           "eno":  eno,
//           "doa":  doa
//         }).then(() => {
//             if (name !== "") {
//                 setallStudent([ ...allstudent, {
//                   "userId": updateuserid,
//                   "userName": name,
//                   "email":  email,
//                   "phone":  ph,
//                   "password":"password",
//                   "eno":  eno,
//                   "doa":  doa
//                 }])
//             }
//             setcondition(false)
//             setname("")
//             setemail("")
//             setphone("")
//             setdoa("")
//             seteno("")
//         }
//         ).catch(error => {
//             console.error(error);
//         });

//     }

//     const[getAll,setgetAll]=React.useState([]);
//     function getAllPost(){
//         axios.get(getAllURL).then((response) => {
//             setgetAll(response.data);
//           }).catch((error)=>{console.log(error)});

//     function del(user_id){
//       deletes(user_id);
//      return (navi('/students'));
//     }
//     async function deletes(oid) {
//       axios
//         .delete('user/delete/'+oid)
//         .then(() => {
//           setPost(null)
//         });}

//     return (
//           <div className="flex flex-nowrap text-center h-screen">
//               <div className="w-1/6">
//                   <Navigatepage></Navigatepage>
//                     </div>
//                     <div className=" mt-8 justify-center w-5/6 h-fit flex-wrap ">
//                       <div className="h-1/6">
//                     <Topnavigation/>
//                     <div className="bg-gray-200 h-5/6">
//                     <div className="flex">
//                                         <h1 className="mt-8 ml-8 text-2xl font-semibold">Students List</h1>
//                                         <div className="ml-80 mt-8 pl-96 bg-gray-200">
//                                           <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                 <g clip-path="url(#clip0_1_192)">
//                                                 <path d="M12.6 12.375H1.39998C0.157481 12.375 -0.472519 13.8574 0.411231 14.7211L6.01123 20.2211C6.55811 20.7582 7.44623 20.7582 7.99311 20.2211L13.5931 14.7211C14.4681 13.8574 13.8425 12.375 12.6 12.375ZM6.99998 19.25L1.39998 13.75H12.6L6.99998 19.25ZM1.39998 9.625H12.6C13.8425 9.625 14.4725 8.14257 13.5887 7.2789L7.98873 1.7789C7.44186 1.24179 6.55373 1.24179 6.00686 1.7789L0.406856 7.2789C-0.468144 8.14257 0.157481 9.625 1.39998 9.625ZM6.99998 2.74999L12.6 8.24999H1.39998L6.99998 2.74999Z" fill="#FEAF00"/>
//                                                 </g>
//                                                 <defs>
//                                                 <clipPath id="clip0_1_192">
//                                                 <rect width="14" height="22" fill="white"/>
//                                                 </clipPath>
//                                                 </defs>
//                                                 </svg></div>
//                                     <button 
//                                     // onClick={newuser}
//                                     onClick={() => {
//                                       setisUpdate(false)
//                                       setcondition(true) }}
//                                      className="text-center ml-12 mt-4 bg-yellow-500 rounded-lg h-12 w-48">ADD NEW STUDENT</button>
                                    
//                                   </div><br/></div>
//                                     <div className="bg-gray-200 h-0.5 m-4 w-229"></div>
//                                     <div className="w-fit ">
//             <div className="flex flex-col">
//        <div className="my-2 sm:-mx-6 lg:-mx-8">
//          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-4 w-fit ml-16">
//            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
//              <table className="min-w-full divide-y divide-gray-200">
//                <thead className="bg-transperant">
//                  <tr>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"/>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                      Name 
//                      </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                      Email
//                      </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                      Phone
//                      </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                      Enroll Number
//                      </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Date of Admission
//                       </th>
//                    <th scope="col" className="relative px-6 py-3">
//                      <span className="sr-only">Edit</span>
//                    </th>
//                    <th scope="col" className="relative px-6 py-3">
//                      <span className="sr-only">Delete</span>
//                     </th>
//                  </tr>
//                </thead>
//                <tbody className="bg-white divide-y divide-gray-200">
//                  {getAll.map(person => (
//                   <tr className="bg-white" key={person.userId}>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" >
//                       <img className="h-10 w-10 rounded-full" src={require('../photos/pic.png')} alt="" />
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
//                         {person.userId}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
//                         {person.userName}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
//                         {person.email}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
//                         {person.phone}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
//                         {person.eno}
//                         </td>
//                      <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
//                          {person.doa}
//                      </td>
//                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       </td> 
//                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                        <button onClick={()=>{
//                         //UpdateForm({idd:person.userId,namee:person.userName,eemail:person.email,ppass:person.password,phh:person.phone,eeno:person.eno,ddoa:person.doa})
//                         // setmodal(true)
//                        // modal? <New_user updateuser ={isUpdate ? }idd={"person.userId}"} namee={"person.userName"} eemail={"person.email"} ppass={"person.password"} phh={"person.phone"}  eeno={"person.eno"} ddoa={"person.doa}"}/> : null}
//                        // showModal ? <UpdateForm updateuserid={isUpdate ? person.userId : ""} functioncall={isUpdate ? updateStudent : createStudent} name={name} email={email} admission={admission} phone={phone} setadmission={setadmission} setemail={setemail} setphone={setphone} setenroll={setenroll} setname={setname} functioncall={isUpdate ? updateStudent : createStudent} setShowModal={setShowModal} create={setallStudent} allstudent={allstudent} isUpdate={isUpdate} userid={isUpdate ? updateuserid : null} /> : null}
//                      // <UpdateForm idd={person.userId} name={person.userName} mail={person.email} pas={person.password} pho={person.phone}  enroll={person.eno} doadmit={person.doa} />
//                      updateuser(email)
//                             //isUpdate(true)
//                             //onupdate(true)
//                             //{setcondition ? <NewUser updateuserid={isUpdate ? person.userId : ""} name={person.userName} email={person.email} pas={person.password} pho={person.phone} enroll={person.eno} doadmit={person.doa} setadmission={setadmission} setemail={setemail} setphone={setphone} setenroll={setenroll} setname={setname} functioncall={isUpdate ? updateStudent : createStudent} setShowModal={setShowModal} create={setallStudent} allstudent={allstudent} isUpdate={isUpdate} userid={isUpdate ? updateuserid : null} /> : null}
//         }} className="text-indigo-600 hover:text-indigo-900">
//                       <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <g clip-path="url(#clip0_1_102)">
//                             <path d="M18.3033 2.08777L16.9113 0.695801C16.4478 0.231934 15.8399 0 15.2321 0C14.6242 0 14.0164 0.231934 13.5525 0.69543L0.475916 13.772L0.00462689 18.0107C-0.0547481 18.5443 0.365701 19 0.88783 19C0.920858 19 0.953885 18.9981 0.987654 18.9944L5.22332 18.5265L18.3036 5.44617C19.231 4.51881 19.231 3.01514 18.3033 2.08777ZM4.67818 17.3924L1.2259 17.775L1.61035 14.3175L11.4031 4.52475L14.4747 7.59629L4.67818 17.3924ZM17.4639 4.60676L15.3141 6.7565L12.2426 3.68496L14.3923 1.53521C14.6164 1.31107 14.9148 1.1875 15.2321 1.1875C15.5494 1.1875 15.8474 1.31107 16.0719 1.53521L17.4639 2.92719C17.9266 3.39031 17.9266 4.14363 17.4639 4.60676Z" fill="#FEAF00"/>
//                             </g>
//                             <defs>
//                             <clipPath id="clip0_1_102">
//                             <rect width="19" height="19" fill="white"/>
//                             </clipPath>
//                             </defs>
//                             </svg>
//                       </button>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                       <button href="#" className="text-indigo-600 hover:text-indigo-900">
//                       <svg onClick={()=>del(person.userId)} width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <g clip-path="url(#clip0_1_100)">
//                                 <path d="M0.285713 2.25H4L5.2 0.675C5.35968 0.465419 5.56674 0.295313 5.80478 0.178154C6.04281 0.0609948 6.30529 0 6.57143 0L9.42857 0C9.69471 0 9.95718 0.0609948 10.1952 0.178154C10.4333 0.295313 10.6403 0.465419 10.8 0.675L12 2.25H15.7143C15.7901 2.25 15.8627 2.27963 15.9163 2.33238C15.9699 2.38512 16 2.45666 16 2.53125V3.09375C16 3.16834 15.9699 3.23988 15.9163 3.29262C15.8627 3.34537 15.7901 3.375 15.7143 3.375H15.0393L13.8536 16.4637C13.8152 16.8833 13.6188 17.2737 13.3029 17.558C12.987 17.8423 12.5745 17.9999 12.1464 18H3.85357C3.42554 17.9999 3.01302 17.8423 2.69711 17.558C2.38121 17.2737 2.18477 16.8833 2.14643 16.4637L0.960713 3.375H0.285713C0.209937 3.375 0.137264 3.34537 0.083683 3.29262C0.0301008 3.23988 0 3.16834 0 3.09375V2.53125C0 2.45666 0.0301008 2.38512 0.083683 2.33238C0.137264 2.27963 0.209937 2.25 0.285713 2.25ZM9.88571 1.35C9.8323 1.28034 9.76324 1.22379 9.68393 1.18475C9.60463 1.14572 9.51723 1.12527 9.42857 1.125H6.57143C6.48277 1.12527 6.39537 1.14572 6.31606 1.18475C6.23676 1.22379 6.1677 1.28034 6.11429 1.35L5.42857 2.25H10.5714L9.88571 1.35ZM3.28571 16.3617C3.29748 16.5019 3.36245 16.6325 3.46768 16.7277C3.57292 16.8228 3.7107 16.8754 3.85357 16.875H12.1464C12.2893 16.8754 12.4271 16.8228 12.5323 16.7277C12.6376 16.6325 12.7025 16.5019 12.7143 16.3617L13.8929 3.375H2.10714L3.28571 16.3617Z" fill="#FEAF00"/>
//                                 </g>
//                                 <defs>
//                                 <clipPath id="clip0_1_100">
//                                 <rect width="16" height="18" fill="white" transform="matrix(-1 0 0 1 16 0)"/>
//                                 </clipPath>
//                                 </defs>
//                             </svg>
//                       </button>
//                     </td>
//                   </tr>
                  
//                  ))}
//                </tbody>
//              </table>
//            </div>
//          </div>
//        </div>
//      </div>
//          </div>
//       </div>
//  </div>
// </div>      
//             //{setcondition ? <NewUser updateuserid={isUpdate ? updateuserid : ""} name={name} email={email} ado={admission} phone={phone} setadmission={setadmission} setemail={setemail} setphone={setphone} setenroll={setenroll} setname={setname} functioncall={isUpdate ? updateStudent : createStudent} setShowModal={setShowModal} create={setallStudent} allstudent={allstudent} isUpdate={isUpdate} userid={isUpdate ? updateuserid : null} /> : null}
//         //</body>
//     );
// }}
















// // export default List;



// //  import React, { useEffect, useState } from 'react';
// // import axios from "axios";
// // import { useNavigate } from 'react-router-dom';
// // import New_user from '../layouts/newuser';

// // const getAllURL="/user/getuser/all";

// // export function UpdateForm({ idd,namee,eemail,ppass,phh,eeno,ddoa})
// //   {
//   //   const navi =useNavigate();
//   //  const cancelling=()=>{navi('/students')};
   
// //    const[user_Id,setid]=useState("");
// //       const[user_Name,setname]=useState("");
// //       const[e_mail,setmail]=useState("");
// //       const[ph_no,setph]=useState("");
// //       const[pass_word,setpass]=useState("");
// //       const[e_no,seteno]=useState("");
// //       const[d_oa,setdoa]=useState("");
// //   console.log(idd);

// //       return(
// //           <div>
// //               {/* <New_user/> */}
// //                <div class="container pr-0 pt-20 w-screen h-screen bg- justify-items-center">
// //               <div class="max-w-lg mx-auto my-10 bg-white pl-8 pr-8 pt-8 pb-2 rounded-xl shadow shadow-slate-300">
// //               <svg onClick={cancelling} 
// //         viewBox="0 0 470 1000"
// //         fill="currentColor"
// //         height="1em"
// //         width="1em"
// //       >
// //         <path d="M452 656c12 12 18 26.333 18 43s-6 31-18 43c-12 10.667-26.333 16-43 16s-31-5.333-43-16L234 590 102 742c-12 10.667-26.333 16-43 16s-31-5.333-43-16C5.333 730 0 715.667 0 699s5.333-31 16-43l138-156L16 342C5.333 330 0 315.667 0 299s5.333-31 16-43c12-10.667 26.333-16 43-16s31 5.333 43 16l132 152 132-152c12-10.667 26.333-16 43-16s31 5.333 43 16c12 12 18 26.333 18 43s-6 31-18 43L314 500l138 156" />
// //       </svg>
         
// //           </div></div>
// //           </div>
// //       )
// //   }

// // function Userslist(props){
// //   const [postt, setPostt] = React.useState(null);
// //   const [modal, setmodal] = React.useState(false);

// //   const navi=useNavigate();
// //   //const del_reload=()=>navi('/students');
// //   function del(user_id){
// //     deletes(user_id);
// //    return (navi('/students'));
// //   }
// //   async function deletes(oid) {
// //     axios
// //       .delete('user/delete/'+oid)
// //       .then(() => {
// //         setPostt(null)
// //       });}

      
// //   // React.useEffect(() => {
// //   //   axios.get(getAllURL).then((response) => {
// //   //     setPostt(response.data);
// //   //   });
// //   // }, []);
      

  
// //     const[getAll,setgetAll]=React.useState([]);
// //     function getAllPost(){
// //         axios.get(getAllURL).then((response) => {
// //             setgetAll(response.data);
// //           }).catch((error)=>{console.log(error)});
    
    
// //         }
// //         useEffect(()=>{
// //             getAllPost()
// //         },[])
// //     return(
// //         <div className="w-fit ">
// //             <div className="flex flex-col">
// //       <div className="my-2 sm:-mx-6 lg:-mx-8">
// //         <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-4 w-fit ml-16">
// //           <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
// //             <table className="min-w-full divide-y divide-gray-200">
// //               <thead className="bg-transperant">
// //                 <tr>
// //                   <th
// //                     scope="col"
// //                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                   >
                    
// //                   </th>
// //                   <th
// //                     scope="col"
// //                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                   >
// //                     Name
// //                   </th>
// //                   <th
// //                     scope="col"
// //                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                   >
// //                     Email
// //                   </th>
// //                   <th
// //                     scope="col"
// //                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                   >
// //                     Phone
// //                   </th>
// //                   <th
// //                     scope="col"
// //                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                   >
// //                     Enroll Number
// //                   </th>
// //                   <th
// //                     scope="col"
// //                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                   >
// //                     Date of Admission
// //                   </th>
// //                   <th scope="col" className="relative px-6 py-3">
// //                     <span className="sr-only">Edit</span></th>
// //                     <th scope="col" className="relative px-6 py-3">
// //                     <span className="sr-only">Delete</span>
// //                   </th>
// //                 </tr>
// //               </thead>
// //               <tbody className="bg-white divide-y divide-gray-200">
// //                 {getAll.map(person => (
// //                   <tr className="bg-white" key={person.userId}>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" >
// //                       <img className="h-10 w-10 rounded-full" src={require('../photos/pic.png')} alt="" />
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
// //                         {person.userId}
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
// //                         {person.userName}
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
// //                         {person.email}
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
// //                         {person.phone}
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
// //                         {person.eno}
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
// //                         {person.doa}
// //                     </td>
                   
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      
// //                     </td> 
// //                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// //                       <button onClick={
// //                         //UpdateForm({idd:person.userId,namee:person.userName,eemail:person.email,ppass:person.password,phh:person.phone,eeno:person.eno,ddoa:person.doa})
// //                         // setmodal(true)
// //                        // modal? <New_user updateuser ={isUpdate ? }idd={"person.userId}"} namee={"person.userName"} eemail={"person.email"} ppass={"person.password"} phh={"person.phone"}  eeno={"person.eno"} ddoa={"person.doa}"}/> : null}
// //                         showModal ? <UpdateForm updateuserid={isUpdate ? person.userId : ""} functioncall={isUpdate ? updateStudent : createStudent} name={name} email={email} admission={admission} phone={phone} setadmission={setadmission} setemail={setemail} setphone={setphone} setenroll={setenroll} setname={setname} functioncall={isUpdate ? updateStudent : createStudent} setShowModal={setShowModal} create={setallStudent} allstudent={allstudent} isUpdate={isUpdate} userid={isUpdate ? updateuserid : null} /> : null}
        
// //                      // <UpdateForm idd={person.userId} name={person.userName} mail={person.email} pas={person.password} pho={person.phone}  enroll={person.eno} doadmit={person.doa} />
                     
// //                      className="text-indigo-600 hover:text-indigo-900">
// //                       <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                             <g clip-path="url(#clip0_1_102)">
// //                             <path d="M18.3033 2.08777L16.9113 0.695801C16.4478 0.231934 15.8399 0 15.2321 0C14.6242 0 14.0164 0.231934 13.5525 0.69543L0.475916 13.772L0.00462689 18.0107C-0.0547481 18.5443 0.365701 19 0.88783 19C0.920858 19 0.953885 18.9981 0.987654 18.9944L5.22332 18.5265L18.3036 5.44617C19.231 4.51881 19.231 3.01514 18.3033 2.08777ZM4.67818 17.3924L1.2259 17.775L1.61035 14.3175L11.4031 4.52475L14.4747 7.59629L4.67818 17.3924ZM17.4639 4.60676L15.3141 6.7565L12.2426 3.68496L14.3923 1.53521C14.6164 1.31107 14.9148 1.1875 15.2321 1.1875C15.5494 1.1875 15.8474 1.31107 16.0719 1.53521L17.4639 2.92719C17.9266 3.39031 17.9266 4.14363 17.4639 4.60676Z" fill="#FEAF00"/>
// //                             </g>
// //                             <defs>
// //                             <clipPath id="clip0_1_102">
// //                             <rect width="19" height="19" fill="white"/>
// //                             </clipPath>
// //                             </defs>
// //                             </svg>
// //                       </button>
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// //                       <a href="#" className="text-indigo-600 hover:text-indigo-900">
// //                       <svg onClick={()=>del(person.userId)} width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                                 <g clip-path="url(#clip0_1_100)">
// //                                 <path d="M0.285713 2.25H4L5.2 0.675C5.35968 0.465419 5.56674 0.295313 5.80478 0.178154C6.04281 0.0609948 6.30529 0 6.57143 0L9.42857 0C9.69471 0 9.95718 0.0609948 10.1952 0.178154C10.4333 0.295313 10.6403 0.465419 10.8 0.675L12 2.25H15.7143C15.7901 2.25 15.8627 2.27963 15.9163 2.33238C15.9699 2.38512 16 2.45666 16 2.53125V3.09375C16 3.16834 15.9699 3.23988 15.9163 3.29262C15.8627 3.34537 15.7901 3.375 15.7143 3.375H15.0393L13.8536 16.4637C13.8152 16.8833 13.6188 17.2737 13.3029 17.558C12.987 17.8423 12.5745 17.9999 12.1464 18H3.85357C3.42554 17.9999 3.01302 17.8423 2.69711 17.558C2.38121 17.2737 2.18477 16.8833 2.14643 16.4637L0.960713 3.375H0.285713C0.209937 3.375 0.137264 3.34537 0.083683 3.29262C0.0301008 3.23988 0 3.16834 0 3.09375V2.53125C0 2.45666 0.0301008 2.38512 0.083683 2.33238C0.137264 2.27963 0.209937 2.25 0.285713 2.25ZM9.88571 1.35C9.8323 1.28034 9.76324 1.22379 9.68393 1.18475C9.60463 1.14572 9.51723 1.12527 9.42857 1.125H6.57143C6.48277 1.12527 6.39537 1.14572 6.31606 1.18475C6.23676 1.22379 6.1677 1.28034 6.11429 1.35L5.42857 2.25H10.5714L9.88571 1.35ZM3.28571 16.3617C3.29748 16.5019 3.36245 16.6325 3.46768 16.7277C3.57292 16.8228 3.7107 16.8754 3.85357 16.875H12.1464C12.2893 16.8754 12.4271 16.8228 12.5323 16.7277C12.6376 16.6325 12.7025 16.5019 12.7143 16.3617L13.8929 3.375H2.10714L3.28571 16.3617Z" fill="#FEAF00"/>
// //                                 </g>
// //                                 <defs>
// //                                 <clipPath id="clip0_1_100">
// //                                 <rect width="16" height="18" fill="white" transform="matrix(-1 0 0 1 16 0)"/>
// //                                 </clipPath>
// //                                 </defs>
// //                             </svg>
// //                       </a>
// //                     </td>
// //                   </tr>
                  
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //         </div>
// //     );
// // }
// //  export default Userslist;



// //  <form  class="my-10"> 
// //  {/* onSubmit={handleSubmitt}*/}
// //      <div class="flex flex-col space-y-5">
         
// //      <div>
// //      <label for="">
// //              <p class="font-medium text-slate-700 pb-2">UserId</p>
// //              <input readOnly="readonly" disabled={true} id="user_Id" name="" type="" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your userId" value={idd}></input>
// //          </label>
// //      <label for="name">
// //              <p class="font-medium text-slate-700 pb-2">Name </p>
// //              <input onChange={(e)=>setname(e.target.value)} id="user_Name" name="name" type="name" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your name " value={namee}></input>
// //          </label>
// //     <label for="e_mail">
// //              <p class="font-medium text-slate-700 pb-2">Email </p>
// //              <input  id="e_mail" readOnly="readonly" disabled={true} name="e_mail" type="email" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your email " value={eemail}></input>
// //          </label>

// //          {/* <label for="pass_word">
// //              <p class="font-medium text-slate-700 pb-2">Password </p>
// //              <input onChange={(e)=>setpass(e.target.value)} id="pass_word" name="pass_word" type="password" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password " value={pas}></input>
// //          </label> */}

// //          <label for="ph_no">
// //              <p class="font-medium text-slate-700 pb-2">PhoneNumber</p>
// //              <input onChange={(e)=>setph(e.target.value)} id="ph_no" name="ph_no" type="number" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your phonenumber" value={phh}></input>
// //          </label>
// //          <label for="e_no">
// //              <p class="font-medium text-slate-700 pb-2">EnrollNumber</p>
// //              <input onChange={(e)=>seteno(e.target.value)} id="e_no" name="e_no" type="string" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your enrollnumber" value={eeno}></input>
// //          </label>
// //          <label for="d_oa">
// //              <p class="font-medium text-slate-700 pb-2">Date of admission</p>
// //              <input onChange={(e)=>setdoa(e.target.value)} id="d_oa" name="d_oa" type="text" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your date" value={ddoa}></input>
// //          </label>
// //          </div>
// //          <button onClick={()=>(console.log("err"))}class="w-full py-3 font-medium text-white bg-yellow-400 hover:shadow inline-flex space-x-2 items-center justify-center" >
             
// //                <span>Add Student</span>
// //          </button>
        
// //      </div>
// //  </form> 