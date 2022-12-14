import React, { useEffect } from 'react'
import { useState } from 'react'
import { Auth ,Hub} from 'aws-amplify'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    let [email, setEmail] = useState("")
    // let [User,setUser] =useState("")
    let [pass, setpass] = useState("")
    
    const nav= useNavigate();
    

    useEffect(() => {
        let user = Auth.currentAuthenticatedUser();
      console.log(user)
    }, [])
    
    
   
    
    let handleSubmit = async function (event) {
       
       try {
         event.preventDefault()
        let response = await Auth.signIn(email,pass);
        
        console.log("awat",response)
        if(response && response.attributes.email_verified){
            nav('/DashBoard')    
        }
    }
    catch(err){
        console.log("error Found: JSON for error",err)
    }
    }
    // let usercheck = async function(event){
    //     event.preventDefault();
    //     let res=Auth.currentUserInfo()
    //     console.log('user',res);
    // }

    const changeEmail = event => setEmail(event.target.value);
    const changePass = event => setpass(event.target.value);

    return (
        <>
            <div className="min-h-screen py-6 flex bg-gray-900 flex-col justify-center sm:py-12 pattern">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">LOGIN</h1>
                            </div>
                            <form>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative">
                                            <input autoComplete="off" id="email" onChange={changeEmail} name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email" />
                                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                        </div>
                                        <div className="relative">
                                            <input autoComplete="off" id="password" onChange={changePass} name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                            <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                        </div>
                                        <div className='relative'>
                                            <p className='text-sm'>New here? <Link to="/signup" className='underline'>SignUp</Link></p>
                                        </div>
                                        <div className="relative">
                                            <button className="border hover:shadow-sky-500 border-sky-500 px-3 py-1 font-medium rounded-lg  text-sky-500 hover:bg-sky-500 hover:text-slate-900  text-lg" onClick={handleSubmit} type='submit'>Login</button>
                                    </div>
                                    {/* <div> <button onClick={usercheck}>check User</button></div> */}
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            </div >
        </>
    )
}

export default Login