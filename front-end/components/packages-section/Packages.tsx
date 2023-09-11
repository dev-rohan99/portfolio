import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineClear } from 'react-icons/ai';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import { useGetPackagesItemsQuery } from '../../redux/api/apiSlice';

const Packages = () => {

    const serviceNameObj = [
        {
            serviceName: "Digital Marketing Package",
            serviceValue: "digital-marketing"
        },
        {
            serviceName: "Web Development Package",
            serviceValue: "web-development"
        },
    ]

    const webDevCategoriesObj = [
        {
            catName: "Web Design",
            catValue: "&cat=web-design",
            catId: "webdesign"
        },
        {
            catName: "Front End Development",
            catValue: "&cat=front-end-development",
            catId: "frontenddevelopment"
        },
        {
            catName: "Back End Development",
            catValue: "&cat=back-end-development",
            catId: "backenddevelopment"
        },
        {
            catName: "Full Stack Web Development",
            catValue: "&cat=full-stack-web-development",
            catId: "fullstack"
        },
        {
            catName: "Web Application Development",
            catValue: "&cat=web-application-development",
            catId: "webapplicationdevelopment"
        }
    ]

    const priceRangeObj = [
        {
            priceRange: "$0 - $100",
            priceRangeValue: "&minPrice=0&maxPrice=100",
            priceRangeId: "price1"
        },
        {
            priceRange: "$101 - $500",
            priceRangeValue: "&minPrice2=101&maxPrice2=500",
            priceRangeId: "price2"
        },
        {
            priceRange: "$501 - $1000",
            priceRangeValue: "&minPrice3=501&maxPrice3=1000",
            priceRangeId: "price3"
        }, 
        {
            priceRange: "$1001 - $2000",
            priceRangeValue: "&minPrice4=1001&maxPrice4=2000",
            priceRangeId: "price4"
        },
        {
            priceRange: "$2001 - $5000",
            priceRangeValue: "&minPrice5=2001&maxPrice5=5000",
            priceRangeId: "price5"
        },
        {
            priceRange: "$5000+",
            priceRangeValue: "&minPrice6=5001&maxPrice6=20000",
            priceRangeId: "price6"
        }
    ]

    const priceRange = useRef();
    const cat = useRef();
    const serviceName = useRef();
    const [priceRangeState, setPriceRangeState] = useState();
    const [catState, setCatState] = useState();
    const [serviceNameState, setServiceNameState] = useState();
    const [modal, setModal] = useState(false);

    useEffect(() => {
        setPriceRangeState(priceRange.current?.value ?? false);
        setCatState(cat.current?.value ?? '');
        setServiceNameState(serviceName.current?.value ?? ''); 
    }, [priceRange.current?.value, cat.current?.value, serviceName.current?.value]);

    const { data, isLoading, error, refetch } = useGetPackagesItemsQuery({priceRange : priceRangeState, cat : catState, serviceName: serviceNameState});

    const handleChangeService = () => {
        setServiceNameState(serviceName.current.value);
        // refetch();
    }

    const handleChangeCat = () => {
        setCatState(cat.current.value);
        // refetch();
    }

    const handleChangeCheck = () => {
        setPriceRangeState(priceRange.current.value);
        // refetch();
    }
    console.log(data);
    // console.log(cat.current?.value);
    // console.log(priceRange.current?.value);
    let content = null;

    if(isLoading) content = "Loading . . .";
    if(!isLoading && error) content = "Something went wrong!";
    if(!isLoading && !error && data?.packages?.length === 0 ) content = "Data not found!";
    // if(!isLoading && !error && data?.packages?.length > 0 ) content = data.packages.map((gig) => <GigCard key={gig._id} gig={gig} width={"297px"} imgHeight={"177px"}/>);
 

    return (
        <>
        
            <div className="w-[100%] py-[80px] pt-[80px]">
                <div className="container">

                    <div className="flex lg:justify-start justify-start">

                        <select onChange={handleChangeService} ref={serviceName} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-[200px]">
                            <option value="">Choose Your Package</option>
                            {
                                serviceNameObj.map((data, index) => (
                                    <option key={`dfgrtjhsa548ght${index}`} value={data.serviceValue}>{data.serviceName}</option>
                                ))
                            }
                        </select>

                        <div className="w-[200px] ml-3 flex justify-center items-center bg-[#374151] rounded-lg text-white relative">
                            <div onClick={() => setModal(!modal)} className="flex justify-center items-center px-3 cursor-pointer py-2 border-r-[3px] border-[#dddddd7a]"><FiFilter className="text-xl mr-3"/> Filter</div>

                            <div className="flex justify-center items-center px-3 cursor-pointer py-2"><AiOutlineClear className="text-xl mr-3"/> Clear</div>

                            <div className={`w-[550px] rounded-lg flex justify-start absolute left-[0px] shadow-2xl top-[47px] z-[500] bg-[#374151] p-4 ${modal ? "block" : "hidden"}`}>
                                    <div className="pr-7 w-[50%]">
                                        {serviceNameState === "digital-marketing" ? (<><h6 className="mb-3 text-sm font-bold text-gray-900 dark:text-white">Digital Marketing Category</h6>
                                        <ul className="space-y-3 text-sm" aria-labelledby="dropdownDefault">

                                            {/* {
                                                webDevCategoriesObj.map((data, index) => (
                                                    <li className="flex items-center" key={`dsfsdf4778${index}`}>
                                                        <input id={data.catId} type="checkbox" value={data.catValue}
                                                        className="w-4 h-4 bg-[#28AE60] border-[#28AE60] rounded text-[#28AE60] focus:ring-[#28AE60] dark:focus:ring-[#28AE60] dark:ring-offset-[#28AE60] focus:ring-2 dark:bg-[#28AE60] dark:border-[#28AE60]" />
                                                        <label htmlFor="webdesignss" className="ml-2 text-sm font-medium text-white dark:text-white">{data.catName}</label>
                                                    </li>
                                                ))
                                            } */}
                                            
                                        </ul></>) : null}

                                        <h6 className="mb-3 mt-4 text-sm font-bold text-gray-900 dark:text-white">Price Range</h6>
                                        <ul className="space-y-3 text-sm" aria-labelledby="dropdownDefault">

                                            {
                                                priceRangeObj.map((data, index) => (
                                                    <li className="flex items-center" key={`rettwerbbfd${index}`}>
                                                        <input onChange={handleChangeCheck} ref={priceRange} id={data.priceRangeId} type="checkbox" value={data.priceRangeValue}
                                                        className="w-4 h-4 bg-[#28AE60] border-[#28AE60] rounded text-[#28AE60] focus:ring-[#28AE60] dark:focus:ring-[#28AE60] dark:ring-offset-[#28AE60] focus:ring-2 dark:bg-[#28AE60] dark:border-[#28AE60]" />
                                                        <label htmlFor={data.priceRangeId} className="ml-2 text-sm font-medium text-white dark:text-white">{data.priceRange}</label>
                                                    </li>
                                                )) 
                                            }
                                            
                                        </ul>
                                    </div>
                                    <div className="border-l-[2px] border-[#dddddd7c] pl-7 w-[50%]">
                                        {serviceNameState === "web-development" ? (<><h6 className="mb-3 mt-4 text-sm font-bold text-gray-900 dark:text-white">Web Development Category</h6>
                                        <ul className="space-y-3 text-sm" aria-labelledby="dropdownDefault">

                                            {
                                                webDevCategoriesObj.map((data, index) => (
                                                    <li key={`yutynhj587554${index}`} className="flex items-center">
                                                        <input onChange={handleChangeCat} ref={cat} id={data.catId} type="checkbox" value={data.catValue}
                                                        className="w-4 h-4 bg-[#28AE60] border-[#28AE60] rounded text-[#28AE60] focus:ring-[#28AE60] dark:focus:ring-[#28AE60] dark:ring-offset-[#28AE60] focus:ring-2 dark:bg-[#28AE60] dark:border-[#28AE60]" />
                                                        <label htmlFor={data.catId} className="ml-2 text-sm font-medium text-white dark:text-white">{data.catName}</label>
                                                    </li>
                                                ))
                                            }
                                            
                                        </ul></>) : null}

                                        {serviceNameState === "web-development" ? (<><h6 className="mb-3 mt-4 text-sm font-bold text-gray-900 dark:text-white">Website Type</h6>
                                        <ul className="space-y-3 text-sm" aria-labelledby="dropdownDefault">

                                            {/* {
                                                webDevCategoriesObj.map((data, index) => (
                                                    <li key={`gfhtrnbmjkl548${index}`} className="flex items-center">
                                                        <input id={data.catId} type="checkbox" value={data.catValue}
                                                        className="w-4 h-4 bg-[#28AE60] border-[#28AE60] rounded text-[#28AE60] focus:ring-[#28AE60] dark:focus:ring-[#28AE60] dark:ring-offset-[#28AE60] focus:ring-2 dark:bg-[#28AE60] dark:border-[#28AE60]" />
                                                        <label htmlFor="webdesignguyt" className="ml-2 text-sm font-medium text-white dark:text-white">{data.catName}</label>
                                                    </li> 
                                                ))
                                            } */}
                                            
                                        </ul></>) : null}
                                    </div>
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.90rem] mt-[50px]">

                            {
                                data?.packages.map((data, index) => (
                                    <>
                                        <div className="portfolioCard relative" key={`65546hjgjhg5456${index}`}>
                                        <span className="px-4 py-1 text-[15px] font-medium uppercase rounded-lg shadow-lg text-white bg-[#28AE60] absolute top-3 right-3 z-50"></span>

                                        <div className="px-5 py-3 pt-1 mt-4">
                                            <h3 className="text-[31px] text-left text-[#fff] font-bold">{data.title}</h3>
                                            <p className="text-[14px] text-left text-[#fff] font-normal">Technology we uses:</p>
                                            <div className="grid grid-cols-4 gap-2 mt-4 mb-3">
                                                {data.technologies.map((data, index) => (
                                                    <>
                                                        <span  key={`544werwtv${index}`} className="py-[3px] px-[7px] rounded-full bg-[#28ae6052] text-[13px] text-[#fff] font-normal text-center">{data}</span>
                                                    </>
                                                ))}
                                            </div>

                                            <h1 className="text-[15px] mt-5">
                                                {data.discountPrice && <span className="text-[15px] text-[#fff] font-bold mr-4"><del>${data.price}</del></span>}
                                                {data.discountPersent && <span className="py-[7px] px-[13px] rounded-full bg-[#28ae6052] text-[15px] text-[#fff] font-bold text-center">SAVE {data.discountPersent}%</span>}
                                            </h1>

                                            <h1 className="text-[45px] mb-3 mt-3 font-bold text-[#fff] text-left">
                                                {/* <span className="w-[40px] h-[10px] block rounded-md bg-[#28AE60]"></span>  */}
                                                <span className="text-[19px] price">$</span>{data.discountPrice ? data.discountPrice : data.price}
                                            </h1>

                                            <div className="pb-5 mb-3 border-b-[3px] border-[#dddddd7a]">
                                                <a className={`w-[100%] h-[35px] text-[14px] md:w-[100%] md:h-[35px] md:text-[15px] lg:w-[100%] lg:h-[45px] lg:text-[16px] xl:w-[100%] xl:h-[45px] 2xl:w-[100%] 2xl:h-[50px] 2xl:text-[17px] flex justify-center items-center border-[3px] border-[#28AE60] ease-in-out duration-500 font-semibold rounded-md hover:bg-transparent mr-0 bg-[#28AE60] text-white`}>Select</a>
                                            </div>

                                            <div className="pb-4">
                                                
                                                <ul className="">
                                                    {data.features.map((data, index) => (
                                                        <>
                                                            <li key={`sar564${index}`} className="text-[#fff] leading-8 flex justify-start items-center font-medium"><BsFillPatchCheckFill className="text-xl mr-3"/>{data}</li>
                                                        </>
                                                    ))}
                                                </ul>

                                            </div>
                                        </div>
                                        </div>
                                    </>
                                ))
                            }

                    </div>

                </div>
            </div>
        
        </>
    )
}

export default Packages;


