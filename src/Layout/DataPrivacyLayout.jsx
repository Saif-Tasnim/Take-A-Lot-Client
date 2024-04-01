import React, { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

const DataPrivacyLayout = () => {
    const [viewExpandState, setViewExpandState] = useState(false);

    const location = useLocation();

    const registerAccount = location.pathname.includes("register-to-takealot");
    const resettingPassword = location.pathname.includes("resetting-password");
    const unSubscriber = location.pathname.includes("unsubscribe-email-newsletters")
    const personalInfo = location.pathname.includes("about-personal-information")
    const profileUpdate = location.pathname.includes("profile-update-information");
    const managingPersonal = location.pathname.includes("managing-personal");
    const deleteAccount = location.pathname.includes("delete-account");
    const trackStatus = location.pathname.includes("track-status-deletion");
    const aboutPOPIA = location.pathname.includes("about-POPIA");
    const verifyAccount = location.pathname.includes("verify-identity");
    const difference = location.pathname.includes("between-POPIA-PAIA");
    const security = location.pathname.includes("security-compromise");
    const authorise = location.pathname.includes("authorise-another-person");
    const accessFamilyMember = location.pathname.includes("access-deceased-family");
    const cookies = location.pathname.includes("about-cookies");
    const allowChildren = location.pathname.includes("children-allowed");
    const verifyEmail = location.pathname.includes("verify-email-address");
    const verifyPhone = location.pathname.includes("verify-mobile-number");


    return (
        <section className='lg:px-4'>

            <div className='hero h-80 rounded-b-lg relative' style={{ backgroundImage: "url(https://shopfront.takealot.com/b317a38ffe915f6034dfee91ccee142cabe5ca77/static/media/src/images/help-centre/Header-Large@2x.png-868cd5e789ded2bf3855.png)", backgroundRepeat: "no-repeat" }}>

                <div className="hidden lg:block text-xs breadcrumbs text-white absolute top-20 left-10">
                    <ul>
                        <li><Link to="/help-centre">Help Centre</Link></li>
                        <li><Link to="/help-centre/data-privacy">Data & Privacy
                        </Link>
                        </li>
                        <li className='font-semibold'>
                            {
                                registerAccount ? "How to register on takealot.com" : resettingPassword ? "Changing or resetting your password" : profileUpdate ? "My email address has changed. How do I update this on my profile?" : unSubscriber ? "How do I unsubscribe from your email newsletters?" : managingPersonal ? "Managing or requesting personal information" : deleteAccount ? "Deleting my account or personal information" : trackStatus ? "Can I track the status of my personal information or account deletion request?" : aboutPOPIA ? "All about POPIA and Compliance" : verifyAccount ? "Why does Takealot ask to verify my identity when I make contact?" : personalInfo ? "All about personal information" : difference ? "Difference between POPIA and PAIA" : security ? "What happens if there is a security compromise involving my personal information" : authorise ? "Can I authorise another person to access my takealot.com account?" : accessFamilyMember ? "Can I get access to a deceased family member’s takealot.com account?" : cookies ? "All about cookies on Takealot" : allowChildren ? "Are children allowed to use takealot.com?" : verifyEmail ? "How to verify your email address" : "How to verify your mobile number"
                            }
                        </li>
                    </ul>
                </div>

                <div className='text-white absolute top-40 left-10'>

                    <p className='text-xl lg:text-3xl font-bold text-white'>

                        {
                            registerAccount ? "How to register on takealot.com" : resettingPassword ? "Changing or resetting your password" : profileUpdate ? "My email address has changed. How do I update this on my profile?" : unSubscriber ? "How do I unsubscribe from your email newsletters?" : managingPersonal ? "Managing or requesting personal information" : deleteAccount ? "Deleting my account or personal information" : trackStatus ? "Can I track the status of my personal information or account deletion request?" : aboutPOPIA ? "All about POPIA and Compliance" : verifyAccount ? "Why does Takealot ask to verify my identity when I make contact?" : personalInfo ? "All about personal information" : difference ? "Difference between POPIA and PAIA" : security ? "What happens if there is a security compromise involving my personal information" : authorise ? "Can I authorise another person to access my takealot.com account?" : accessFamilyMember ? "Can I get access to a deceased family member’s takealot.com account?" : cookies ? "All about cookies on Takealot" : allowChildren ? "Are children allowed to use takealot.com?" : verifyEmail ? "How to verify your email address" : "How to verify your mobile number"
                        }  </p>

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
                            <NavLink to="/help-centre/data-privacy-details/register-to-takealot" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary")}> How to register on takealot.com </NavLink>

                            <NavLink to="/help-centre/data-privacy-details/resetting-password" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary")}> Changing or resetting your password </NavLink>


                            <NavLink to="/help-centre/data-privacy-details/profile-update-information" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> My email address has changed. How do I update this on my profile? </NavLink>


                            <NavLink to="/help-centre/data-privacy-details/unsubscribe-email-newsletters" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> How do I unsubscribe from your email newsletters?
                            </NavLink>


                            <NavLink to="/help-centre/data-privacy-details/managing-personal-information" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Managing or requesting personal information
                            </NavLink>


                            <NavLink to="/help-centre/data-privacy-details/delete-account" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Deleting my account or personal information </NavLink>


                            <NavLink to="/help-centre/data-privacy-details/track-status-deletion-request" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>  Can I track the status of my personal information or account deletion request? </NavLink>


                            <NavLink to="/help-centre/data-privacy-details/about-POPIA-compliance" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> All about POPIA and Compliance </NavLink>


                            <NavLink to="/help-centre/data-privacy-details/takealot-verify-identity" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Why does Takealot ask to verify my identity when I make contact? </NavLink>

                            <NavLink to="/help-centre/data-privacy-details/about-personal-information" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> All about personal information </NavLink>


                            {/* extra nav */}

                            {
                                viewExpandState ?
                                    <>
                                        <NavLink to="/help-centre/data-privacy-details/difference-between-POPIA-PAIA" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Difference between POPIA and PAIA
                                        </NavLink>

                                        <NavLink to="/help-centre/data-privacy-details/security-compromise-involving-personal-information" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> What happens if there is a security compromise involving my personal information
                                        </NavLink>

                                        <NavLink to="/help-centre/data-privacy-details/authorise-another-person-access-account" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Can I authorise another person to access my takealot.com account?
                                        </NavLink>


                                        <NavLink to="/help-centre/data-privacy-details/access-deceased-family-members-account" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Can I get access to a deceased family member’s takealot.com account?
                                        </NavLink>


                                        <NavLink to="/help-centre/data-privacy-details/about-cookies-Takealot" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> All about cookies on Takealot
                                        </NavLink>


                                        <NavLink to="/help-centre/data-privacy-details/children-allowed-to-use-account" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Are children allowed to use takealot.com?

                                        </NavLink>
                                        <NavLink to="/help-centre/data-privacy-details/verify-email-address" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> How to verify your email address
                                        </NavLink>

                                        <NavLink to="/help-centre/data-privacy-details/verify-mobile-number" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> How to verify your mobile number
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

export default DataPrivacyLayout;