import React from 'react';
import { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

const PaymentPromosLayout = () => {

    const [viewExpandState, setViewExpandState] = useState(false);

    const location = useLocation();

    const availablePayment = location.pathname.includes("available-payment-options");
    const priceItem = location.pathname.includes("price-item-change-checkout");
    const recievedConfirmation = location.pathname.includes("havent-received-confirmation")
    const couponCode = location.pathname.includes("all-about-coupon-codes-discounts")
    const giftVoucher = location.pathname.includes("all-about-gift-vouchers");
    const payFlex = location.pathname.includes("all-about-payflex");
    const card = location.pathname.includes("all-about-credit-debit-card");
    const cod = location.pathname.includes("all-about-cash-on-delivery");
    const eftOzow = location.pathname.includes("all-about-instant-eFT-ozow");
    const eftWithPayFast = location.pathname.includes("all-about-instant-EFT-payFast");
    const mobiCred = location.pathname.includes("all-about-mobicred");
    const eBucks = location.pathname.includes("all-about-eBucks");
    const masterPass = location.pathname.includes("all-about-masterpass");
    const discoveryMiles = location.pathname.includes("a-ll-about-discovery-miles");


    return (

        <section className='lg:px-4'>

            <div className='hero h-80 rounded-b-lg relative' style={{ backgroundImage: "url(https://shopfront.takealot.com/b317a38ffe915f6034dfee91ccee142cabe5ca77/static/media/src/images/help-centre/Header-Large@2x.png-868cd5e789ded2bf3855.png)", backgroundRepeat: "no-repeat" }}>

                <div className="hidden lg:block text-xs breadcrumbs text-white absolute top-20 left-10">
                    <ul>
                        <li><Link to="/help-centre">Help Centre</Link></li>
                        <li><Link to="/help-centre/payments-promos-gift-vouchers">Payments, Promos & Gift Vouchers  </Link>
                        </li>
                        <li className='font-semibold'>
                            {
                                availablePayment ? "Available payment options" : priceItem ? "Why does the price of my item change when I try and check out ?" : recievedConfirmation ? "Why haven’t I received my payment confirmation email?" : couponCode ? "All about coupon codes & discounts" : giftVoucher ? "All about gift vouchers" : payFlex ? "All about PayFlex" : card ? "All about Credit / Debit Card Payments" : cod ? "All about Cash on Delivery ( COD )" : eftOzow ? "All about Instant EFT with Ozow" : eftWithPayFast ? "All about Instant EFT with PayFast" : mobiCred ? "All about MobiCred" : eBucks ? "All about eBucks" : masterPass ? "All about MasterPass" : discoveryMiles ? "All about discovery miles" : ""
                            } </li>
                    </ul>
                </div>

                <div className='text-white absolute top-40 left-10'>

                    <p className='text-xl lg:text-3xl font-bold text-white'>

                        {
                            availablePayment ? "Available payment options" : priceItem ? "Why does the price of my item change when I try and check out ?" : recievedConfirmation ? "Why haven’t I received my payment confirmation email ?" : couponCode ? "All about coupon codes & discounts" : giftVoucher ? "All about gift vouchers" : payFlex ? "All about PayFlex" : card ? "All about Credit / Debit Card Payments" : cod ? "All about Cash on Delivery ( COD )" : eftOzow ? "All about Instant EFT with Ozow" : eftWithPayFast ? "All about Instant EFT with PayFast" : mobiCred ? "All about MobiCred" : eBucks ? "All about eBucks" : masterPass ? "All about MasterPass" : discoveryMiles ? "All about discovery miles" : ""
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
                            <NavLink to="/help-centre/payments-promos-gift-vouchers-details/available-payment-options" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary")}> Available payment options </NavLink>


                            <NavLink to="/help-centre/payments-promos-gift-vouchers-details/price-item-change-checkout" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Why does the price of my item change when I try and check out ? </NavLink>


                            <NavLink to="/help-centre/payments-promos-gift-vouchers-details/havent-received-confirmation" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Why haven’t I received my payment confirmation email ?
                            </NavLink>


                            <NavLink to="/help-centre/payments-promos-gift-vouchers-details/all-about-coupon-codes-discounts" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> All about coupon codes & discounts
                            </NavLink>


                            <NavLink to="/help-centre/payments-promos-gift-vouchers-details/all-about-gift-vouchers" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> All about gift vouchers </NavLink>


                            <NavLink to="/help-centre/payments-promos-gift-vouchers-details/all-about-payflex" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>  All about PayFlex </NavLink>


                            <NavLink to="/help-centre/payments-promos-gift-vouchers-details/all-about-credit-debit-card" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> All about Credit / Debit Card Payments </NavLink>


                            <NavLink to="/help-centre/payments-promos-gift-vouchers-details/all-about-cash-on-delivery" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> All about Cash on Delivery ( COD ) </NavLink>

                            <NavLink to="/help-centre/payments-promos-gift-vouchers-details/all-about-instant-eFT-ozow" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> All about Instant EFT with Ozow </NavLink>

                            <NavLink to="/help-centre/payments-promos-gift-vouchers-details/all-about-instant-EFT-payFast" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> All about Instant EFT with PayFast
                            </NavLink>

                            {/* extra nav */}

                            {
                                viewExpandState ?
                                    <>
                                        <NavLink to="/help-centre/payments-promos-gift-vouchers-details/all-about-mobicred" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> All about Mobicred
                                        </NavLink>

                                        <NavLink to="/help-centre/payments-promos-gift-vouchers-details/all-about-eBucks" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> All about eBucks
                                        </NavLink>

                                        <NavLink to="/help-centre/payments-promos-gift-vouchers-details/all-about-masterpass" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> All about Masterpass
                                        </NavLink>

                                        <NavLink to="/help-centre/payments-promos-gift-vouchers-details/a-ll-about-discovery-miles" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> All about Discovery Miles
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

export default PaymentPromosLayout;