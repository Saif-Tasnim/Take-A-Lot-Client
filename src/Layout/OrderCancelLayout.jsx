import React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

const OrderCancelLayout = () => {

    const location = useLocation();

    const cancelOrder = location.pathname.includes("how-do-i-cancel-an-order");
    const changeOrder = location.pathname.includes("can-i-make-changes-to");
    const whyCancelOrder = location.pathname.includes("why-have-you-cancelled-my-order")
    const orderInvoice = location.pathname.includes("request-invoice")

    return (
        <section className='lg:px-4'>

            <div className='hero h-80 rounded-b-lg relative' style={{ backgroundImage: "url(https://shopfront.takealot.com/b317a38ffe915f6034dfee91ccee142cabe5ca77/static/media/src/images/help-centre/Header-Large@2x.png-868cd5e789ded2bf3855.png)", backgroundRepeat: "no-repeat" }}>

                <div className="hidden lg:block text-xs breadcrumbs text-white absolute top-20 left-10">
                    <ul>
                        <li><Link to="/help-centre">Help Centre</Link></li>
                        <li><Link to="/help-centre/orders-cancellations">Orders & Cancellations</Link></li>
                        <li className='font-semibold'>
                            {
                                cancelOrder ? "How do I cancel order" : changeOrder ? "Can I make changes to my order after it has been placed ?" : whyCancelOrder ? "Why Have you cancel my order" : orderInvoice ? "Invoice request" : "Placing your order"
                            }</li>
                    </ul>
                </div>

                <div className='text-white absolute top-40 left-10'>

                    <p className='text-xl lg:text-3xl font-bold text-white'>
                        {

                            cancelOrder ? "How do I cancel order" : changeOrder ? "Can I make changes to my order after it has been placed ?" : whyCancelOrder ? "Why Have you cancel my order" : orderInvoice ? "Invoice request" : "Placing your order"

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
                        <p className='p-3 text-base font-medium text-[#000]'> Orders & Cancellations </p>
                        <div className='border-b border-[#dadada]'></div>

                        <div className='my-3 flex flex-col gap-2'>

                            <NavLink to="/help-centre/orderCancelDetails/how-do-i-cancel-an-order" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary")}> How do I cancel an order? </NavLink>


                            <NavLink to="/help-centre/orderCancelDetails/can-i-make-changes-to-my-order-after-it-has-been-placed" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Can I make changes to my order after it has been placed ? </NavLink>


                            <NavLink to="/help-centre/orderCancelDetails/why-have-you-cancelled-my-order" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> Why have you cancelled my order ?
                            </NavLink>


                            <NavLink to="/help-centre/orderCancelDetails/request-invoice" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}> How do I request an invoice ? </NavLink>


                            <NavLink to="/help-centre/orderCancelDetails/placing-order" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>  Placing orders  </NavLink>
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

export default OrderCancelLayout;