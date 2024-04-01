import React from 'react';
import { useLocation } from 'react-router-dom';

const ReturnPolicyBanners = () => {
    const path = useLocation();
    return (
        <section>
            {
                path?.pathname === "/return-policy-help/" ?

                    <div className='flex items-center h-60 text-left lg:px-10 px-4 overflow-hidden' style={{ backgroundImage: "url(https://static.takealot.com/images/top-strap-bg.gif)" }}>

                        <div className='banner-description w-full'>
                            <h1 className='text-xl lg:text-6xl font-bold text-white'>RETURNS POLICY</h1>
                            <p className='text-white text-sm mt-5 font-light'>We want you to be happy with your purchase. If you are not completely satisfied, you can return the product to us and we’ll either exchange or replace it, or credit your account.</p>
                        </div>
                        <div className='banner-img hidden lg:block w-full'>
                            <img src="https://media.takealot.com/covers_blog/header.png" alt="Image" />
                        </div>
                    </div>
                    : path?.pathname === "/return-policy-help/terms-and-conditions" ?

                        <div className='flex items-center h-60 text-left lg:px-10 px-4 overflow-hidden' style={{ backgroundImage: "url(https://static.takealot.com/images/top-strap-bg.gif)" }}>

                            <div className='banner-description w-full'>
                                <h1 className='text-xl lg:text-6xl font-bold text-white'>T&CS</h1>
                                <p className='text-white text-sm mt-5 font-light'>This is where the fine print lives. It’s really just a bunch of legal stuff to ensure we’re all on the same page. Makes for some good weekend reading if you’ve got time to spare!</p>
                            </div>
                            <div className='banner-img hidden lg:block w-full'>
                                <img src="https://media.takealot.com/covers_blog/tcs.png" alt="Image" />
                            </div>
                        </div> : path?.pathname === "/return-policy-help/savealot-daily-deals" ?

                            <div className='flex items-center h-60 text-left lg:px-10 px-4 overflow-hidden' style={{ backgroundImage: "url(https://static.takealot.com/images/top-strap-bg.gif)" }}>

                                <div className='banner-description w-full'>
                                    <h1 className='text-xl lg:text-6xl font-bold text-white'>DAILY DEALS</h1>
                                    <p className='text-white text-sm mt-5 font-light'>This is where the fine print lives. It's really just a bunch of legal stuff to ensure we're all on the same page. Makes for some good weekend reading if you've got time to spare!</p>
                                </div>
                                <div className='banner-img hidden lg:block w-full'>
                                    <img src="https://media.takealot.com/covers_blog/tcs.png" alt="Image" />
                                </div>
                            </div> : path?.pathname === "/return-policy-help/promotional-codes-tcs" ?

                                <div className='flex items-center h-60 text-left lg:px-10 px-4 overflow-hidden' style={{ backgroundImage: "url(https://static.takealot.com/images/top-strap-bg.gif)" }}>

                                    <div className='banner-description w-full'>
                                        <h1 className='text-xl lg:text-6xl font-bold text-white'>VOUCHERS AND COUPONS T&CS</h1>
                                        <p className='text-white text-sm mt-5 font-light'>This is where the fine print lives. It's really just a bunch of legal stuff to ensure we're all on the same page. Makes for some good weekend reading if you've got time to spare!</p>
                                    </div>
                                    <div className='banner-img hidden lg:block w-full'>
                                        <img src="https://media.takealot.com/covers_blog/tcs.png" alt="Image" />
                                    </div>
                                </div> : path?.pathname === "/return-policy-help/responsible-disclosure-policy" ?

                                    <div className='flex items-center h-60 text-left lg:px-10 px-4 overflow-hidden' style={{ backgroundImage: "url(https://static.takealot.com/images/top-strap-bg.gif)" }}>

                                        <div className='banner-description w-full'>
                                            <h1 className='text-xl lg:text-6xl font-bold text-white'>RESPONSIBLE DISCLOSURE</h1>
                                            <p className='text-white text-sm mt-5 font-light'>This is where the fine print lives. It's really just a bunch of legal stuff to ensure we're all on the same page. Makes for some good weekend reading if you've got time to spare!</p>
                                        </div>
                                        <div className='banner-img hidden lg:block w-full'>
                                            <img src="https://media.takealot.com/covers_blog/tcs.png" alt="Image" />
                                        </div>
                                    </div> : path?.pathname === "/return-policy-help/privacy-policy" ?

                                        <div className='flex items-center h-60 text-left lg:px-10 px-4 overflow-hidden' style={{ backgroundImage: "url(https://static.takealot.com/images/top-strap-bg.gif)" }}>

                                            <div className='banner-description w-full'>
                                                <h1 className='text-xl lg:text-6xl font-bold text-white'>PRIVACY POLICY</h1>
                                                {/* <p className='text-white text-sm mt-5 font-light'>This is where the fine print lives. It's really just a bunch of legal stuff to ensure we're all on the same page. Makes for some good weekend reading if you've got time to spare!</p> */}
                                            </div>
                                            <div className='banner-img hidden lg:block w-full'>
                                                {/* <img src="https://media.takealot.com/covers_blog/tcs.png" alt="Image"/> */}
                                            </div>
                                        </div> : ""
            }
        </section>
    );
};

export default ReturnPolicyBanners;