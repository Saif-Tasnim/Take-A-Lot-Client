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

const DataPrivacyHelp = () => {
    return (
        <section className='lg:px-4'>
            <div className='hero h-60 rounded-b-lg relative' style={{ backgroundImage: "url(https://shopfront.takealot.com/b317a38ffe915f6034dfee91ccee142cabe5ca77/static/media/src/images/help-centre/Header-Large@2x.png-868cd5e789ded2bf3855.png)", backgroundRepeat: "no-repeat" }}>

                <div className="hidden lg:block text-xs breadcrumbs text-white absolute top-20 left-10">
                    <ul>
                        <li><Link to="/help-centre">Help Centre</Link></li>
                        <li><Link>
                            Data & Privacy
                        </Link></li>
                    </ul>
                </div>

                <div className='lg:hidden text-xs text-white absolute top-20 left-5'>
                    <Link to="/help-centre" className='inline-flex items-center gap-1'><HiArrowSmallLeft className='h-5 w-5' /> Back to Help Centre</Link>
                </div>

                <div className='flex flex-col gap-4 lg:flex-row w-full items-start lg:items-center justify-between px-5 mt-28'>
                    <div className='flex items-center gap-2 lg:gap-5'>
                        <div className='px-3 py-3 bg-gray-200 rounded-lg'>
                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__22d8e2ac641292318ff89859e8baa89e2628c1be.png" alt="Icon" className='w-4 lg:w-6' />
                        </div>
                        <p className='text-xl lg:text-3xl font-bold text-white'>
                            Data & Privacy
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
                                <Link to="/help-centre/data-privacy-details/resetting-password" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                    <div className='w-full flex items-center gap-2'>
                                        <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__22d8e2ac641292318ff89859e8baa89e2628c1be.png" alt="icon" className='w-5' />
                                        </div>

                                        <h1 className='text-sm font-medium'>Data & Privacy</h1>
                                    </div>

                                    <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                        Changing or resetting your password
                                    </div>
                                </Link>
                            </SwiperSlide>



                            <SwiperSlide className='w-[300px]'>
                                <Link to="/help-centre/data-privacy-details/unsubscribe-email-newsletters" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                    <div className='w-full flex items-center gap-2'>
                                        <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__22d8e2ac641292318ff89859e8baa89e2628c1be.png" alt="icon" className='w-5' />
                                        </div>

                                        <h1 className='text-sm font-medium'>Data & Privacy</h1>
                                    </div>

                                    <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                        How do I unsubscribe from your email newsletters?
                                    </div>
                                </Link>
                            </SwiperSlide>


                            <SwiperSlide className='w-[300px]'>
                                <Link to="/help-centre/data-privacy-details/about-personal-information" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                    <div className='w-full flex items-center gap-2'>
                                        <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__22d8e2ac641292318ff89859e8baa89e2628c1be.png" alt="icon" className='w-5' />
                                        </div>

                                        <h1 className='text-sm font-medium'>Data & Privacy</h1>
                                    </div>

                                    <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                        All about personal information
                                    </div>
                                </Link>
                            </SwiperSlide>




                        </Swiper>
                    </div>



                    <div className='-mt-16 bg-white shadow lg:hidden rounded-t-lg'>

                        <ul className='space-y-2 px-3 py-4'>

                            <li className='border-b pb-2 text-[#4d4d4f] font-medium text-sm'>Popular Topics</li>


                            <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                                <Link to="/help-centre/data-privacy-details/resetting-password" className='w-full text-xs inline-flex items-center justify-between'>
                                    <span>Changing or resetting your password</span> <span><HiChevronRight className='h-5 w-5' /></span>
                                </Link>
                            </li>

                            <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                                <Link to="/help-centre/data-privacy-details/unsubscribe-email-newsletters" className='w-full text-xs inline-flex items-center justify-between'>
                                    <span>How do I unsubscribe from your email newsletters?</span> <span><HiChevronRight className='h-5 w-5' /></span>
                                </Link>
                            </li>

                            <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                                <Link to="/help-centre/data-privacy-details/about-personal-information" className='w-full text-xs inline-flex items-center justify-between'>
                                    <span>All about personal information</span> <span><HiChevronRight className='h-5 w-5' /></span>
                                </Link>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>



            <div className='my-9 w-full'>

                <div className='flex items-start justify-between gap-8'>
                    <div className='w-full'>
                        <p className='text-xl font-semibold text-[#4d4d4f] mb-5 hidden lg:block'>Data & Privacy Topics</p>
                        <div className='w-full bg-white py-8 shadow rounded px-6 flex flex-col gap-1 text-sm text-[#4d4d4f]'>

                            <p className='text-lg font-semibold text-[#4d4d4f] mb-5 lg:hidden'>Data & Privacy Topics</p>

                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/data-privacy-details/register-to-takealot">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>How to register on takealot.com</span>
                                    <span className='hidden lg:block'>Registering is easy. You'll need an email address and at least one mobile contact number.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/data-privacy-details/resetting-password">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Changing or resetting your password</span>
                                    <span className='hidden lg:block'>To change or reset your password, follow the simple steps below.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/data-privacy-details/profile-update-information">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>My email address has changed. How do I update this on my profile?</span>
                                    <span className='hidden lg:block'>To change your email address, go to My Account and follow the simple steps below.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/data-privacy-details/unsubscribe-email-newsletters">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>How do I unsubscribe from your email newsletters?</span>
                                    <span className='hidden lg:block'>To manage or unsubscribe from your newsletter preferences, go to My Account and follow the steps below.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/data-privacy-details/managing-personal-information">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Managing or requesting personal information</span>
                                    <span className='hidden lg:block'>Click on 'Delete My Account' below to delete your Takealot account and personal information or find out more about account deletion.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/data-privacy-details/delete-account">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Deleting my account or personal information</span>
                                    <span className='hidden lg:block'>Click on 'Delete My Account' below to delete your Takealot account and personal information or find out more about account deletion.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/data-privacy-details/track-status-deletion-request">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Can I track the status of my personal information or account deletion request?</span>
                                    <span className='hidden lg:block'>A personal information or account deletion request takes up to 30 days to process.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/data-privacy-details/about-POPIA-compliance">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about POPIA and Compliance</span>
                                    <span className='hidden lg:block'>POPIA refers to the Protection of Personal Information Act, 2013. This act promotes the protection of personal information and introduced certain conditions on how it is handled. Takealot is fully compliant with all the obligations set out in POPIA.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/data-privacy-details/takealot-verify-identity">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Why does Takealot ask to verify my identity when I make contact?</span>
                                    <span className='hidden lg:block'>Internal processes and policies are in place to address all personal information security compromises. These include ongoing security measures to mitigate any further risks and unauthorised access to your personal information.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/data-privacy-details/about-personal-information">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about personal information</span>
                                    <span className='hidden lg:block'>Our Privacy Policy provides detailed information on how we collect and process personal information. We have various purposes for processing and storing personal information, find out more below.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/data-privacy-details/difference-between-POPIA-PAIA">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Difference between POPIA and PAIA</span>
                                    <span className='hidden lg:block'>POPIA give you the right to request access or the right to delete any personal information we may have in our records. PAIA is the Promotion of Access to Information Act, 2000 which gives you the right to access all information and is not restricted to personal information only.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/data-privacy-details/security-compromise-involving-personal-information">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>What happens if there is a security compromise involving my personal information</span>
                                    <span className='hidden lg:block'>Internal processes and policies are in place to address all personal information security compromises. These include ongoing security measures to mitigate any further risks and unauthorised access to your personal information.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/data-privacy-details/authorise-another-person-access-account">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Can I authorise another person to access my takealot.com account?</span>
                                    <span className='hidden lg:block'>To authorise a person to access your Takealot account, you will be required to complete a consent form.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/data-privacy-details/access-deceased-family-members-account">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Can I get access to a deceased family member’s takealot.com account?</span>
                                    <span className='hidden lg:block'>Access can be granted to a deceased family member’s account. We will require certain documentation in order to authorise and consent to provide the personal information on the Takealot account.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/data-privacy-details/about-cookies-Takealot">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about cookies on Takealot</span>
                                    <span className='hidden lg:block'>Takealot uses cookies and user tracking to improve your experience on our website or mobile apps. These cookies are small text files that do not contain or collect any personal information.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/data-privacy-details/children-allowed-to-use-account">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Are children allowed to use takealot.com?</span>
                                    <span className='hidden lg:block'>Any person under the age of 18 is not permitted to use our platforms without the consent and supervision of a parent or legal guardian.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/data-privacy-details/verify-email-address">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>How to verify your email address</span>
                                    <span className='hidden lg:block'>Verify your account’s email address by following these steps.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/data-privacy-details/verify-mobile-number">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>How to verify your mobile number</span>
                                    <span className='hidden lg:block'>Verify your account’s mobile number by following these steps.</span>
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

export default DataPrivacyHelp;