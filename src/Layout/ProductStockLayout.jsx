import React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

const ProductStockLayout = () => {

    const location = useLocation();
    const findProduct = location.pathname.includes("can-you-help-me-find-a-product");
    const buyProduct = location.pathname.includes("how-do-i-buy-products-from-sellers");
    const moreInfo = location.pathname.includes("can-you-give-me-more-information");
    const itemStock = location.pathname.includes("when-will-the-item-i");
    const preOrder = location.pathname.includes("pre-orders");
    const unboxedDeals = location.pathname.includes("unboxed-deals");
    const bundleDeals = location.pathname.includes("bundle-deals");
    const onlineCourse = location.pathname.includes("online-courses");
    const flatPackFurniture = location.pathname.includes("flatpack-furniture");
    // const blueRayDVD = location.pathname.includes("blu-ray-dvd-will");

    return (

        <section className='lg:px-4'>

            <div className='hero h-80 rounded-b-lg relative' style={{ backgroundImage: "url(https://shopfront.takealot.com/b317a38ffe915f6034dfee91ccee142cabe5ca77/static/media/src/images/help-centre/Header-Large@2x.png-868cd5e789ded2bf3855.png)", backgroundRepeat: "no-repeat" }}>

                <div className="hidden lg:block text-xs breadcrumbs text-white absolute top-20 left-10">
                    <ul>
                        <li><Link to="/help-centre">Help Centre</Link></li>
                        <li><Link to="/help-centre/product-stock"> Product & Stock </Link></li>
                        <li className='font-semibold'>

                            {
                                findProduct ? "Can you help me find a product?" : buyProduct ? "How do I buy products from sellers other than Takealot on the website?" : moreInfo ? "Can you give me more information on a product?" : itemStock ? "When will the item I want be in stock?" : preOrder ? "All about pre-orders" : unboxedDeals ? "All about unboxed deals" : bundleDeals ? "All about bundle deals" : onlineCourse ? "All about online courses" : flatPackFurniture ? "All about flatpack furniture" : "How will I know if my blu-ray dvd will work?"
                            }

                        </li>
                    </ul>
                </div>

                <div className='text-white absolute top-40 left-10'>

                    <p className='text-xl lg:text-3xl font-bold text-white'>
                        {
                            findProduct ? "Can you help me find a product?" : buyProduct ? "How do I buy products from sellers other than Takealot on the website?" : moreInfo ? "Can you give me more information on a product?" : itemStock ? "When will the item I want be in stock?" : preOrder ? "All about pre-orders" : unboxedDeals ? "All about unboxed deals" : bundleDeals ? "All about bundle deals" : onlineCourse ? "All about online courses" : flatPackFurniture ? "All about flatpack furniture" : "How will I know if my blu-ray dvd will work?"
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
                            <NavLink to="/help-centre/product-stock-details/can-you-help-me-find-a-product" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary")}> Can you help me find a product ? </NavLink>


                            <NavLink to="/help-centre/product-stock-details/how-do-i-buy-products-from-sellers-other-than-takealot-on-the-website" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> How do I buy products from sellers other than Takealot on the website? </NavLink>


                            <NavLink to="/help-centre/product-stock-details/can-you-give-me-more-information-on-a-product" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Can you give me more information on a product? </NavLink>


                            <NavLink to="/help-centre/product-stock-details/when-will-the-item-i-want-be-in-stock" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> When will the item I want be in stock?
                            </NavLink>


                            <NavLink to="/help-centre/product-stock-details/all-about-pre-orders" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> All about pre-orders </NavLink>


                            <NavLink to="/help-centre/product-stock-details/all-about-unboxed-deals" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> All about unboxed deals  </NavLink>


                            <NavLink to="/help-centre/product-stock-details/all-about-bundle-deals" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> All about bundle deals </NavLink>


                            <NavLink to="/help-centre/product-stock-details/all-about-online-courses" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> All about online courses 
                            </NavLink>

                            <NavLink to="/help-centre/product-stock-details/all-about-flatpack-furniture" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> All about flatpack furniture </NavLink>

                            <NavLink to="/help-centre/product-stock-details/how-will-i-know-if-my-blu-ray-dvd-will-work" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> How will I know if my blu-ray dvd will work? </NavLink>
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

export default ProductStockLayout;