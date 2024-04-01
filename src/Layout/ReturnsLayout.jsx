import React from 'react';
import { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
// track-my-return-status
const ReturnsLayout = () => {

    const [viewExpandState, setViewExpandState] = useState(false);

    const location = useLocation();

    const rescheduleLocation = location.pathname.includes("can-i-return-my-product");
    const rescheduledCollection = location.pathname.includes("reschedule-collection");
    const trackReturnStatus = location.pathname.includes("track-my-return-status")
    const returnProduct = location.pathname.includes("return-my-product")
    const returnMethod = location.pathname.includes("return-method-fees");
    const returnCancel = location.pathname.includes("cancel-my-return");
    const replaceProduct = location.pathname.includes("exchange-or-replace-product");
    const changeReturnAddress = location.pathname.includes("can-i-change-my-collection-address-once-i-have-logged-a-return");
    const returnAccessories = location.pathname.includes("returning-a-product-without");
    const warrantyManufacture = location.pathname.includes("how-do-i-return-a-manufacturer");
    const wrongProduct = location.pathname.includes("the-product-i-received");
    const returnRefund = location.pathname.includes("how-soon-will-i-get-a-refund");


    return (
        <section className='lg:px-4'>

            <div className='hero h-80 rounded-b-lg relative' style={{ backgroundImage: "url(https://shopfront.takealot.com/b317a38ffe915f6034dfee91ccee142cabe5ca77/static/media/src/images/help-centre/Header-Large@2x.png-868cd5e789ded2bf3855.png)", backgroundRepeat: "no-repeat" }}>

                <div className="hidden lg:block text-xs breadcrumbs text-white absolute top-20 left-10">
                    <ul>
                        <li><Link to="/help-centre">Help Centre</Link></li>
                        <li><Link to="/help-centre/returns">Returns</Link></li>
                        <li className='font-semibold'>
                            {
                                rescheduleLocation ? "Can I return my product?" : rescheduledCollection ? "Reschedule my return collection" : trackReturnStatus ? "Track my return status" : returnProduct ? "Return my product" : returnMethod ? "Return method & fees" : returnCancel ? "Return my cancel" : replaceProduct ? "Can I exchange or replace my product" : changeReturnAddress ? "Can I change my collection address once I have logged a return ?" : returnAccessories ? "Returning a product without accessories or its partner product" : warrantyManufacture ? "How do I return a manufacturer warranty product?" : wrongProduct ? "The product I received is not what I ordered" : returnRefund ? "How soon will I get a refund or credit on my return?" : "Track your Order"

                            } </li>
                    </ul>
                </div>

                <div className='text-white absolute top-40 left-10'>

                    <p className='text-xl lg:text-3xl font-bold text-white'>
                        {
                            rescheduleLocation ? "Can I return my product?" : rescheduledCollection ? "Reschedule my return collection" : trackReturnStatus ? "Track my return status" : returnProduct ? "Return my product" : returnMethod ? "Return method & fees" : returnCancel ? "Return my cancel" : replaceProduct ? "Can I exchange or replace my product" : changeReturnAddress ? "Can I change my collection address once I have logged a return ?" : returnAccessories ? "Returning a product without accessories or its partner product" : warrantyManufacture ? "How do I return a manufacturer warranty product?" : wrongProduct ? "The product I received is not what I ordered" : returnRefund ? "How soon will I get a refund or credit on my return?" : "Track your Order"

                        } </p>

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
                            <NavLink to="/help-centre/returnDetails/can-i-return-my-product" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary")}> Can I return my product ? </NavLink>


                            <NavLink to="/help-centre/returnDetails/reschedule-collection" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Reschedule my return collection </NavLink>


                            <NavLink to="/help-centre/returnDetails/track-my-return-status" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Track my return status </NavLink>


                            <NavLink to="/help-centre/returnDetails/return-my-product" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> How do I return my product ?
                            </NavLink>


                            <NavLink to="/help-centre/returnDetails/return-method-fees" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> All about return method & fees </NavLink>


                            <NavLink to="/help-centre/returnDetails/cancel-my-return" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>  Cancel my return  </NavLink>


                            <NavLink to="/help-centre/returnDetails/exchange-or-replace-product" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Can I exchange or replace a product ? </NavLink>


                            <NavLink to="/help-centre/returnDetails/can-i-change-my-collection-address-once-i-have-logged-a-return" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Can I change my collection address once I have logged a return? </NavLink>

                            <NavLink to="/help-centre/returnDetails/returning-a-product-without-accessories-or-its-partner-product" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Returning a product without accessories or its partner product </NavLink>

                            <NavLink to="/help-centre/returnDetails/how-do-i-return-a-manufacturer-warranty-product" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> How do I return a manufacturer warranty product?
                            </NavLink>

                            {/* extra nav */}

                            {
                                viewExpandState ?
                                    <>
                                        <NavLink to="/help-centre/returnDetails/the-product-i-received-is-not-what-i-ordered" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> The product I received is not what I ordered
                                        </NavLink>

                                        <NavLink to="/help-centre/returnDetails/how-soon-will-i-get-a-refund-or-credit-on-my-return" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> How soon will I get a refund or credit on my return?
                                        </NavLink>

                                        <NavLink to="/help-centre/returnDetails/find-return-policy" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Where can I find your returns policy?
                                        </NavLink>
                                    </>
                                    : ""
                            }

                            <hr />
                            <div className='pl-4 text-primary hover:cursor-pointer hover:underline'
                                onClick={() => setViewExpandState(!viewExpandState)}
                            >
                                {viewExpandState ? "View Less" : "View More"}
                            </div>


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

export default ReturnsLayout;