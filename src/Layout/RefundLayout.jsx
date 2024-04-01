import React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

const RefundLayout = () => {

    const location = useLocation();
    const getRefund = location.pathname.includes("how-do-i-get-a-refund");
    const refundTime = location.pathname.includes("why-is-my-refund");

    return (

        <section className='lg:px-4'>

            <div className='hero h-80 rounded-b-lg relative' style={{ backgroundImage: "url(https://shopfront.takealot.com/b317a38ffe915f6034dfee91ccee142cabe5ca77/static/media/src/images/help-centre/Header-Large@2x.png-868cd5e789ded2bf3855.png)", backgroundRepeat: "no-repeat" }}>

                <div className="hidden lg:block text-xs breadcrumbs text-white absolute top-20 left-10">
                    <ul>
                        <li><Link to="/help-centre">Help Centre</Link></li>
                        <li><Link to="/help-centre/refunds"> Refunds </Link></li>
                        <li className='font-semibold'>
                            {
                                getRefund ? "How do I get a refund instead of a credit ?" : refundTime ? "Why is my refund taking so long?" : ""

                            }
                        </li>
                    </ul>
                </div>

                <div className='text-white absolute top-40 left-10'>

                    <p className='text-xl lg:text-3xl font-bold text-white'>
                        {
                            getRefund ? "How do I get a refund instead of a credit ?" : refundTime ? "Why is my refund taking so long?" : ""

                        }
                    </p>

                </div>
            </div>



            {/* outlet content */}

            <div className='-my-20 w-[98%] mx-auto relative mb-6'>
                <div className='flex items-start justify-between gap-8'>

                    {/* outlet start here */}

                    <Outlet></Outlet>

                    {/* outlet start end */}


                    {/* right side bar start */}
                    <div className='w-[350px] bg-white shadow hidden lg:block text-sm'>
                        <p className='p-3 text-base font-medium text-[#000]'> Delivery Topics </p>
                        <div className='border-b border-[#dadada]'></div>

                        <div className='my-3 flex flex-col gap-2'>

                            <NavLink to="/help-centre/refundDetails/how-do-i-get-a-refund-instead-of-a-credit" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary")}> How do I get a refund instead of a credit ? </NavLink>


                            <NavLink to="/help-centre/refundDetails/why-is-my-refund-taking-so-long" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Why is my refund taking so long ? </NavLink>

                        </div>
                    </div>

                    {/* right side bar end */}
                </div>
            </div>

            {/* contact us start*/}



            {/* contact us end*/}

        </section>
    );
};

export default RefundLayout;