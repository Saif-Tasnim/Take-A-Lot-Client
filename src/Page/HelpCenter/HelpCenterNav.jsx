import React from 'react';
import { useState } from 'react';
import { HiShoppingCart } from 'react-icons/hi2';
import { IoIosSearch, IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';

const HelpCenterNav = () => {
    const [topicCatalog, setTopicCatalog] = useState(false)
    return (
        <section className='z-50 relative'>
            <div className="drawer absolute top-0 px-3 bg-white max-w-7xl mx-auto">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-[#0B79BF]"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <div className="flex-none px-2">
                            <Link to="/"><img src="https://shopfront.takealot.com/b317a38ffe915f6034dfee91ccee142cabe5ca77/static/media/src/images/logo.svg-f6ccb489b85bbddf97d6.svg" alt="Logo Takealot" className='w-32' /></Link>
                            <div className="mx-4 h-5 border-s-2 border-[#0B79BF]"></div>
                            <Link to="/help-centre" className='text-lg font-medium text-neutral'>Help Centre</Link>
                            <div className='pl-4 lg:hidden'>
                                <IoIosSearch className='h-7 w-7'/>
                            </div>
                            <div className="lg:hidden absolute top-16 w-full border-t border-[#0B79BF] left-0"></div>
                            
                        </div>


                        <form className='hidden lg:flex mx-auto relative border rounded w-[50%]'>

                            <input type="text" placeholder='Search our Help Centre' className='py-2 px-3 rounded outline-none' />

                            <input type="submit" value="Search" className='absolute right-1 top-[3px] px-6 py-1 border rounded border-primary bg-primary text-white' />
                        </form>




                        <div className="hidden lg:block flex-none px-2">
                            <ul className="inline-flex items-center text-neutral text-sm">
                                {/* Navbar menu content here */}
                                <li className='inline-flex items-center gap-1 cursor-pointer' onMouseEnter={() => setTopicCatalog(true)} onMouseLeave={() => setTopicCatalog(false)}><span>All Help topic</span> <span><IoMdArrowDropdown className='h-4 w-4' /></span></li>
                                <div className="mx-4 h-5 border-s border-[#0B79BF]"></div>
                                <li className='hover:border-b hover:border-[#0B79BF] hover:text-primary'><Link to="/">Return to Shopping</Link></li>

                                <div className={`z-50 px-4 py-5 bg-white absolute rounded-sm w-[260px] h-[264px] transition-all duration-500 ${topicCatalog ? "top-12  right-40" : "hidden"}`} onMouseEnter={() => setTopicCatalog(true)} onMouseLeave={() => setTopicCatalog(false)}>
                                    <div className='flex flex-col space-y-2'>
                                        <Link to="/help-centre/delivery" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Delivery</Link>
                                        <Link to="/help-centre/returns" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Returns</Link>
                                        <Link to="/help-centre/orders-cancellations" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Orders & Cancellations</Link>
                                        <Link to="/help-centre/collection" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Collection</Link>
                                        <Link to="/help-centre/refunds" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Refunds</Link>
                                        <Link to="/help-centre/payments-promos-gift-vouchers" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Payments, Promos & Gift Vouchers</Link>
                                        <Link to="/help-centre/product-stock" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Product & Stock</Link>
                                        <Link to="/help-centre/data-privacy" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Data & Privacy</Link>
                                    </div>
                                </div>


                            </ul>
                        </div>
                    </div>
                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu w-72 px-0 py-0 min-h-screen bg-[#f4f4f4] z-50">
                        <li className='w-full bg-white shadow px-2 py-2'>
                            <div className='flex flex-row gap-5'>
                                <div className='w-full'><Link to="/"><img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/logo.svg-f6ccb489b85bbddf97d6.svg" alt="Logo Takealot" className='w-28' /></Link></div>
                                <div className='w-full'>
                                    <Link to="/help-centre" className='w-full font-semibold'>Help Centre</Link>
                                </div>
                            </div>

                        </li>


                        <li className='w-full bg-white shadow py-2 my-3 text-sm'>
                            <Link to="/help-centre" className='w-full'>Help Centre</Link>
                        </li>

                        <li className='w-full py-2 mb-3 text-sm'>
                            <span className='uppercase text-[#4d4d4f] font-semibold'>All Help Topics</span>
                        </li>


                        <ul className='space-y-2 px-0 border-none m-0 w-full bg-white shadow  py-2 mb-3 text-sm'>
                            <li className='border-b py-2'>
                                <Link to="/help-centre/delivery" className='text-neutral'>Delivery</Link>
                            </li>
                            <li className='border-b py-2'>
                                <Link to="/help-centre/returns" className='text-neutral'>Returns</Link>
                            </li>
                            <li className='border-b py-2'>
                                <Link to="/help-centre/account/orders-cancellations" className='text-neutral'>Orders & Cancellations</Link>
                            </li>
                            <li className='border-b py-2'>
                                <Link to="/help-centre/collection" className='text-neutral'>Collection</Link>
                            </li>
                            <li className='border-b py-2'>
                                <Link to="/help-centre/refunds" className='text-neutral'>Refunds</Link>
                            </li>
                            <li className='border-b py-2'>
                                <Link to="/help-centre/payments-promos-gift-vouchers" className='text-neutral'>Payments, Promos & Gift Vouchers</Link>
                            </li>
                            <li className='border-b py-2'>
                                <Link to="/help-centre/product-stock" className='text-neutral'>Product & Stock</Link>
                            </li>
                            <li className='py-2'>
                                <Link to="/help-centre/data-privacy" className='text-neutral'>Data & Privacy</Link>
                            </li>
                        </ul>

                        <li className='w-full bg-white shadow py-2 absolute bottom-2 text-sm'>
                            <Link to="/" className='inline-flex items-center gap-5'>
                                <HiShoppingCart className='h-6 w-6 text-primary' /> <span className='text-base'>Return to shopping</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HelpCenterNav;