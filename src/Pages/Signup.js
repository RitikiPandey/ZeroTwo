import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Auth } from 'aws-amplify';
import {useState} from 'react';
function Signup() {
    const navigate = useNavigate();
    let [Email, setEmail] = useState("")
    let [Pass, setPass] = useState("")
    let [FName,setFName] = useState("")
    let [LName, setLName] = useState("")
    const changeEmail = event => setEmail(event.target.value);
    const changePass = event => setPass(event.target.value);
    const changeFName= event => setFName(event.target.value)
    const changeLName= event => setLName(event.target.value);
    let handleSignUp =  async function(event){
        event.preventDefault()

        // mentioned in thhe docs but it throws error
        // try{
        //     console.log(Email,Pass)
        //     const { user } = await Auth.signUp({
        //         Email,
        //         Pass,
        //         attributes:{
        //             First_Name: FName,
        //             Last_Name:LName
        //         },
        //         autoSignIn: { // optional - enables auto sign in after user is confirmed
        //             enabled: true,
        //         }
        //     });
        //     console.log(user);
        // } catch (error) {
        //     console.log('error signing up:', error);
        // }

        Auth.signUp(Email, Pass)
    .then( data => {
        // All is OK, we here
        console.log('signin done',data)
        navigate('/OTPVerification')
    } )
    .catch( err => {
        console.log('error signing up:', err);
        
    } );
    }
   
 
    return (
        <>
            <div className="min-h-screen py-6 flex bg-gray-900 flex-col justify-center sm:py-12 pattern">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <form>
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">First Name</label>
                                            <input onChange={changeFName} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="First name" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Last Name</label>
                                            <input onChange={changeLName} type="text" id="LName" name="LName" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Last name" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="date" className="leading-7 text-sm text-gray-600">Email</label>
                                            <input onChange={changeEmail} type="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Email' />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="date" className="leading-7 text-sm text-gray-600">Password</label>
                                            <input type="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Password' />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="file" className="leading-7 text-sm text-gray-600">Confirm password</label>
                                            <input onChange={changePass} type="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Confirm password' />
                                        </div>
                                    </div>
                                    <p className='text-sm px-2'>Already have account? <Link to="/login" className='underline'>login</Link></p>
                                    <div className="p-2 w-full">
                                        <button className="flex mx-auto border hover:shadow-sky-500 border-sky-500 px-3 py-1 font-medium rounded-lg  text-sky-500 hover:bg-sky-500 hover:text-slate-900  text-lg" onClick={handleSignUp}>Signup</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup