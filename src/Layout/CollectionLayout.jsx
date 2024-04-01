import React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

const CollectionLayout = () => {

    const location = useLocation();
    const AboutCollectionTime = location.pathname.includes("about-collection-options-time-frames");
    const aboutCollectionFees = location.pathname.includes("about-collection-fees");
    const changeDeliveryMethod = location.pathname.includes("change-delivery-method")
    const collectionAvailable = location.pathname.includes("why-collection-not-available")
    const trackCollection = location.pathname.includes("track-my-collection-order");
    const collectingOrder = location.pathname.includes("collecting-order");

    const internationalShipping = location.pathname.includes("international-shipping-delivery");
    const canIChange = location.pathname.includes("can-i-change-my-order-from-delivery-to-collect");
    const itemMissing = location.pathname.includes("item-missing-or-incorrect-in-order-received");


    return (

        <section className='lg:px-4'>

            <div className='hero h-80 rounded-b-lg relative' style={{ backgroundImage: "url(https://shopfront.takealot.com/b317a38ffe915f6034dfee91ccee142cabe5ca77/static/media/src/images/help-centre/Header-Large@2x.png-868cd5e789ded2bf3855.png)", backgroundRepeat: "no-repeat" }}>

                <div className="hidden lg:block text-xs breadcrumbs text-white absolute top-20 left-10">
                    <ul>
                        <li><Link to="/help-centre">Help Centre</Link></li>
                        <li><Link to="/help-centre/collection"> Collection </Link></li>
                        <li className='font-semibold'>
                            {
                                AboutCollectionTime ? "About collection options & time frames" : aboutCollectionFees ? "About collection fees" : changeDeliveryMethod ? "Changing my delivery method or selected Takealot pickup point" : collectionAvailable ? "Why is collection not available for my order ?" : trackCollection ? "Track my collection order" : collectingOrder ? "Collecting your order" : ""

                            }</li>
                    </ul>
                </div>

                <div className='text-white absolute top-40 left-10'>

                    <p className='text-xl lg:text-3xl font-bold text-white'>{
                        AboutCollectionTime ? "About collection options & time frames" : aboutCollectionFees ? "About collection fees" : changeDeliveryMethod ? "Changing my delivery method or selected Takealot pickup point" : collectionAvailable ? "Why is collection not available for my order ?" : trackCollection ? "Track my collection order" : collectingOrder ? "Collecting your order" : ""

                    }</p>

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
                            <NavLink to="/help-centre/collectionDetails/about-collection-options-time-frames" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary")}> About collection options & time frames </NavLink>


                            <NavLink to="/help-centre/collectionDetails/about-collection-fees" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> About collection fees </NavLink>


                            <NavLink to="/help-centre/collectionDetails/change-delivery-method" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Changing my delivery method or selected Takealot pickup point </NavLink>


                            <NavLink to="/help-centre/collectionDetails/why-collection-not-available" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Why is collection not available for my order
                            </NavLink>


                            <NavLink to="/help-centre/collectionDetails/track-my-collection-order" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Track my collection order </NavLink>

                            <NavLink to="/help-centre/collectionDetails/collecting-order" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Collecting your order </NavLink>

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

export default CollectionLayout;