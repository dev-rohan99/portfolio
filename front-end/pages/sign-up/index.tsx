import Link from 'next/link';
import React, {useState} from 'react';
import TopHeader from '../../components/top-header/TopHeader';
import {useDispatch} from "react-redux";
import toaster from '../../utility/toaster';
import { isEmail, isPassword, isUsername } from '../../utility/validation';
import { useRouter } from 'next/router';
import { userSignup } from './signupAPI';


const index = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    interface userSignupStructure {
        fullName : string,
        email : string,
        username : string,
        password : string
    }

    const [input, setInput] = useState<userSignupStructure>({
        fullName : "",
        email : "",
        username : "",
        password : ""
    });

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    }

    const handleUserSignUp = (e : React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        if(!input.fullName || !input.email || !input.username || !input.password){
            toaster("warn", "All fields are required!");
        }else{
            if(!isEmail(input.email)){
                toaster("warn", "Invalid email address! please enter valid email address.");
            }else{
                if(!isUsername(input.username)){
                    toaster("warn", "Invalid username address! please enter valid username.");
                }else{
                    if(!isPassword(input.password)){
                        toaster("warn", "Invalid password! please enter valid password and length should be minimum 6 characters.");
                    }else{
                        dispatch(userSignup({
                            fullName : input.fullName,
                            email : input.email,
                            username : input.username,
                            password : input.password
                        }, router));
                    }
                }
            }
        }

    }


  return (
    <>
    
        <TopHeader/>

        <div className="py-5 h-[100vh] mt-[-36px] flex justify-center items-center">
            <div className="container">
                <div className="w-[600px] mx-auto p-4 px-7 bg-[#292929] rounded-md">
                    <h2 className="text-[35px] text-[#28AE60] text-center font-bold mb-5">Sign Up</h2>

                    <form onSubmit={handleUserSignUp}>

                        <div className="mb-5">
                            <input onChange={handleInputChange} value={input.fullName} name="fullName" type="text" className="py-3 px-4 border-[3px] text-[#fff] text-[16px] border-[#28AE60] w-[100%] outline-none rounded-md bg-[#292929]" placeholder="Enter your full name" />
                        </div>

                        <div className="mb-5">
                            <input onChange={handleInputChange} value={input.email} name="email" type="email" className="py-3 px-4 border-[3px] text-[#fff] text-[16px] border-[#28AE60] w-[100%] outline-none rounded-md bg-[#292929]" placeholder="Enter your email address" />
                        </div>

                        <div className="mb-5">
                            <input onChange={handleInputChange} value={input.username} name="username" type="text" className="py-3 px-4 border-[3px] text-[#fff] text-[16px] border-[#28AE60] w-[100%] outline-none rounded-md bg-[#292929]" placeholder="Enter your username" />
                        </div>

                        <div className="mb-5">
                            <input onChange={handleInputChange} value={input.password} name="password" type="password" className="py-3 px-4 border-[3px] text-[#fff] text-[16px] border-[#28AE60] w-[100%] outline-none rounded-md bg-[#292929]" placeholder="Enter your password" />
                        </div>

                        <div className="mb-5">
                            <button type="submit" className="py-2 px-4 border-[3px] text-[#fff] text-[18px] border-[#28AE60] w-[100%] outline-none rounded-md bg-[#28AE60] text-center hover:bg-transparent duration-500 font-bold">Sign Up</button>
                        </div>

                        <div className="mb-3 text-white font-semibold text-center">
                            Already have a account? <Link href="/login"><a className="ml-2 text-[17px] hover:underline text-[#28AE60]">Login</a></Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default index