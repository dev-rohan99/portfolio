import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TopHeader from '../../components/top-header/TopHeader';
import toaster from '../../utility/toaster';
import { isEmail, isPassword, isUsername } from '../../utility/validation';


const Index = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    interface userSignupStructure {
        emailOrUsername : string,
        password : string
    }

    const [input, setInput] = useState<userSignupStructure>({
        emailOrUsername : "",
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
        
        if(!input.emailOrUsername || !input.password){
            toaster("warn", "All fields are required!");
        }else{
            if(isEmail(input.emailOrUsername) || isUsername(input.emailOrUsername)){
                if(!isPassword(input.password)){
                    toaster("warn", "Invalid password! please enter valid password and length should be minimum 6 characters.");
                }else{
                    
                }
            }else{
                if(!isEmail(input.emailOrUsername) || !isUsername(input.emailOrUsername)){
                    toaster("warn", "Invalid username or email address! please enter valid username or email address.");
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
                    <h2 className="text-[35px] text-[#28AE60] text-center font-bold mb-5">Login</h2>

                    <form onSubmit={handleUserSignUp}>

                        <div className="mb-5">
                            <input name="emailOrUsername" value={input.emailOrUsername} onChange={handleInputChange} type="text" className="py-3 px-4 border-[3px] text-[#fff] text-[16px] border-[#28AE60] w-[100%] outline-none rounded-md bg-[#292929]" placeholder="Enter your username/email" />
                        </div>

                        <div className="mb-5">
                            <input name="password" value={input.password} onChange={handleInputChange} type="password" className="py-3 px-4 border-[3px] text-[#fff] text-[16px] border-[#28AE60] w-[100%] outline-none rounded-md bg-[#292929]" placeholder="Enter your password" />
                        </div>

                        <div className="mb-5">
                            <button type="submit" className="py-2 px-4 border-[3px] text-[#fff] text-[18px] border-[#28AE60] w-[100%] outline-none rounded-md bg-[#28AE60] text-center hover:bg-transparent duration-500 font-bold">Login</button>
                        </div>

                        <div className="mb-2 text-white font-semibold text-center">
                            {"Don't"} have any account? <Link href="/sign-up"><a className="ml-2 text-[17px] hover:underline text-[#28AE60]">Sign Up</a></Link>
                        </div>

                        <h3 className="text-[18px] hover:underline text-[gray] mb-1 text-center">-OR-</h3>

                        <div className="mb-3 text-[17px] hover:underline cursor-pointer text-[#28AE60] font-semibold text-center">
                            Login with demo account!
                        </div>

                    </form>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Index;
