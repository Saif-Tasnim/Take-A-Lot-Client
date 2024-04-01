import React from 'react';
import { HiArrowSmallLeft, HiChevronRight } from 'react-icons/hi2';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { IoChevronForwardOutline } from 'react-icons/io5';

const ProductStockHelp = () => {
    return (
        <section className='lg:px-4'>
            <div className='hero h-60 rounded-b-lg relative' style={{ backgroundImage: "url(https://shopfront.takealot.com/b317a38ffe915f6034dfee91ccee142cabe5ca77/static/media/src/images/help-centre/Header-Large@2x.png-868cd5e789ded2bf3855.png)", backgroundRepeat: "no-repeat" }}>

                <div className="hidden lg:block text-xs breadcrumbs text-white absolute top-20 left-10">
                    <ul>
                        <li><Link to="/help-centre">Help Centre</Link></li>
                        <li><Link>
                            Product & Stock

                        </Link></li>
                    </ul>
                </div>

                <div className='lg:hidden text-xs text-white absolute top-20 left-5'>
                    <Link to="/help-centre" className='inline-flex items-center gap-1'><HiArrowSmallLeft className='h-5 w-5' /> Back to Help Centre</Link>
                </div>

                <div className='flex flex-col gap-4 lg:flex-row w-full items-start lg:items-center justify-between px-5 mt-28'>
                    <div className='flex items-center gap-2 lg:gap-5'>
                        <div className='px-3 py-3 bg-gray-200 rounded-lg'>
                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__1f1f54addf8751b42cd0fa4d63cde55a67a6c7d5.png" alt="Icon" className='w-4 lg:w-6' />
                        </div>
                        <p className='text-xl lg:text-3xl font-bold text-white'>
                            Product & Stock
                        </p>
                    </div>

                    <div className='flex  items-center gap-2'>

                        <Link to="/account/credit" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>Credit & Refunds</Link>
                        <Link to="/account/returns" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>Track Returns</Link>
                        <Link to="/account/orders" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>View Orders</Link>
                    </div>
                </div>


            </div>


            <div className='my-14'>

                <p className='text-xl font-semibold text-[#4d4d4f] mb-5 hidden lg:block'>Popular Product & Stock Topics</p>

                <div className=''>


                    <div className='hidden lg:block w-full'>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={0}
                            // pagination={{
                            //   clickable: true,
                            // }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >


                            <SwiperSlide className='w-[300px]'>
                                <Link to="/help-centre/product-stock-details/all-about-unboxed-deals" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                    <div className='w-full flex items-center gap-2'>
                                        <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__1f1f54addf8751b42cd0fa4d63cde55a67a6c7d5.png" alt="icon" className='w-5' />
                                        </div>

                                        <h1 className='text-sm font-medium'>Product & Stock</h1>
                                    </div>

                                    <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                        All about unboxed deals
                                    </div>
                                </Link>
                            </SwiperSlide>



                            <SwiperSlide className='w-[300px]'>
                                <Link to="/help-centre/product-stock-details/all-about-pre-orders" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                    <div className='w-full flex items-center gap-2'>
                                        <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__1f1f54addf8751b42cd0fa4d63cde55a67a6c7d5.png" alt="icon" className='w-5' />
                                        </div>

                                        <h1 className='text-sm font-medium'>Product & Stock</h1>
                                    </div>

                                    <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                        All about pre-orders
                                    </div>
                                </Link>
                            </SwiperSlide>


                            <SwiperSlide className='w-[300px]'>
                                <Link to="/help-centre/product-stock-details/can-you-give-me-more-information-on-a-product" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                    <div className='w-full flex items-center gap-2'>
                                        <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__1f1f54addf8751b42cd0fa4d63cde55a67a6c7d5.png" alt="icon" className='w-5' />
                                        </div>

                                        <h1 className='text-sm font-medium'>Product & Stock</h1>
                                    </div>

                                    <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                        Can you give me more information on a product?
                                    </div>
                                </Link>
                            </SwiperSlide>




                        </Swiper>
                    </div>



                    <div className='-mt-16 bg-white shadow lg:hidden rounded-t-lg'>

                        <ul className='space-y-2 px-3 py-4'>

                            <li className='border-b pb-2 text-[#4d4d4f] font-medium text-sm'>Popular Topics</li>


                            <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                                <Link to="/help-centre/product-stock-details/all-about-unboxed-deals" className='w-full text-xs inline-flex items-center justify-between'>
                                    <span>All about unboxed deals</span> <span><HiChevronRight className='h-5 w-5' /></span>
                                </Link>
                            </li>

                            <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                                <Link to="/help-centre/product-stock-details/all-about-pre-orders" className='w-full text-xs inline-flex items-center justify-between'>
                                    <span>All about pre-orders</span> <span><HiChevronRight className='h-5 w-5' /></span>
                                </Link>
                            </li>

                            <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                                <Link to="/help-centre/product-stock-details/can-you-give-me-more-information-on-a-product" className='w-full text-xs inline-flex items-center justify-between'>
                                    <span>Can you give me more information on a product?</span> <span><HiChevronRight className='h-5 w-5' /></span>
                                </Link>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>



            <div className='my-9 w-full'>

                <div className='flex items-start justify-between gap-8'>
                    <div className='w-full'>
                        <p className='text-xl font-semibold text-[#4d4d4f] mb-5 hidden lg:block'>Popular Product & Stock Topics</p>
                        <div className='w-full bg-white py-8 shadow rounded px-6 flex flex-col gap-1 text-sm text-[#4d4d4f]'>

                            <p className='text-lg font-semibold text-[#4d4d4f] mb-5 lg:hidden'>Popular Product & Stock Topics</p>

                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/product-stock-details/can-you-help-me-find-a-product">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Can you help me find a product?</span>
                                    <span className='hidden lg:block'>Browse millions of products by entering words in the search bar, or use the Shop by Department menu and filters to refine your search results.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/product-stock-details/how-do-i-buy-products-from-sellers-other-than-takealot-on-the-website">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>How do I buy products from sellers other than Takealot on the website?</span>
                                    <span className='hidden lg:block'>The product page will indicate if a product is sold by a seller. The ordering process remains the same for seller products.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/product-stock-details/can-you-give-me-more-information-on-a-product">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Can you give me more information on a product?</span>
                                    <span className='hidden lg:block'>Find more information on a product by looking at the description or product information tabs on the product page of the product you are viewing.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' 
                            to="/help-centre/product-stock-details/when-will-the-item-i-want-be-in-stock">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>When will the item I want be in stock?</span>
                                    <span className='hidden lg:block'>All out of stock products will be made available as soon as the products are restocked. To be notified of these products see below.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' 
                            to="/help-centre/product-stock-details/all-about-pre-orders">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about pre-orders</span>
                                    <span className='hidden lg:block'>Pre-orders are products that have not been released yet, e.g gaming titles or books. These can be purchased individually and will be shipped to you for delivery or collection on the release date. Find out more about the order process below.</span>
                                </div>

                                <span><IoChevronForwardOutline
                                    className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' 
                            to="/help-centre/product-stock-details/all-about-unboxed-deals">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about unboxed deals</span>
                                    <span className='hidden lg:block'>Bundle deals are 2 or more individual products that can be bought together as part of a promotion or at a discounted price. We offer different types of bundles, such as multi-buys or pre-packed bundles. To find out more about buying and returning items for bundle deals, read below.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' 
                            to="/help-centre/product-stock-details/all-about-bundle-deals">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about bundle deals</span>
                                    <span className='hidden lg:block'>Bundle deals are 2 or more individual products that can be bought together as part of a promotion or at a discounted price. We offer different types of bundles, such as multi-buys or pre-packed bundles. To find out more about buying and returning items for bundle deals, read below.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' 
                            to="/help-centre/product-stock-details/all-about-online-courses">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about online courses</span>
                                    <span className='hidden lg:block'>The product page will indicate if a product is sold by a seller. The ordering process remains the same for seller products.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' 
                            to="/help-centre/product-stock-details/all-about-flatpack-furniture">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about flatpack furniture</span>
                                    <span className='hidden lg:block'>Flatpack furniture is unassembled and may be delivered in multiple boxes and also include an assembly manual. Some items require additional tools, like a screwdriver. Returning these items will require all their components and accessories to be sent back in line with the standard returns policies.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' 
                            to="/help-centre/product-stock-details/how-will-i-know-if-my-blu-ray-dvd-will-work">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>How will I know if my blu-ray dvd will work?</span>
                                    <span className='hidden lg:block'>Some DVDs may be region locked. Check the product page on the description tab for the region, or the map below to find out if the DVD will play on your Blu-ray player.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>


                        </div>


                        <div className='w-full bg-white shadow rounded p-4 my-10'>
                            <div className='w-full bg-primary bg-opacity-10 py-5 flex items-center gap-10'>
                                <div>
                                    <img src="https://media.takealot.com/help-cms/original_images/____CMS__d0da6dca9d77bd5c950880ccb158ac07bcea8752.png" alt="" className='w-32' />
                                </div>

                                <div className='w-full flex flex-col gap-2 lg:flex-row items-center'>
                                    <div className='flex-1'>
                                        <p className='text-lg font-semibold'>Didn't find what you need?</p>
                                    </div>

                                    <div className='mr-5'>
                                        <button className='text-sm py-2 px-7 border border-primary bg-primary rounded text-white font-semibold'>Contact Us</button>
                                    </div>
                                </div>

                            </div>
                        </div>




                    </div>

                    <div className='w-1/3 bg-white shadow hidden lg:block text-sm'>
                        <p className='p-3 text-base font-medium text-[#000]'>All Help Topics</p>
                        <div className='border-b border-[#dadada]'></div>

                        <div className='my-3 flex flex-col gap-2'>
                            <NavLink to="/help-centre/delivery" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Delivery</NavLink>


                            <NavLink to="/help-centre/returns" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 = rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Returns</NavLink>


                            <NavLink to="/help-centre/orders-cancellations" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Orders & Cancellations</NavLink>


                            <NavLink to="/help-centre/collection" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Collections</NavLink>


                            <NavLink to="/help-centre/refunds" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Refunds</NavLink>


                            <NavLink to="/help-centre/payments-promos-gift-vouchers" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Payments,Promos & Gift Vouchers</NavLink>


                            <NavLink to="/help-centre/product-stock" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Product & Stock</NavLink>


                            <NavLink to="/help-centre/data-privacy" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Data & Privacy</NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProductStockHelp;