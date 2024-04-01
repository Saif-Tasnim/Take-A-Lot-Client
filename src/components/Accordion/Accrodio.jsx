import React from 'react';
import { Link } from 'react-router-dom';

const Accrodio = ({ path, title }) => {
    return (
       
       <div>
                <div className="join join-vertical w-full bg-white">
                <div className="collapse collapse-arrow join-item border py-3">
                    <input type="radio" name="my-accordion-4" />

                    <Link
                        to={path}
                        className="collapse-title text-lg font-medium hover:underline hover:text-blue-500">
                        {title}
                    </Link>
                </div>

                {/* <div className="collapse collapse-arrow join-item border py-3">
                    <input type="radio" name="my-accordion-4" />

                    <Link
                        to="/help-centre/deliveryDetails/split-requests"
                        className="collapse-title text-lg font-medium hover:underline hover:text-blue-500">
                        Split delivery requests
                    </Link>
                </div>

                <div className="collapse collapse-arrow join-item border py-3">
                    <input type="radio" name="my-accordion-4" />

                    <Link
                        to="/help-centre/deliveryDetails/reschedule-delivery"
                        className="collapse-title text-lg font-medium hover:underline hover:text-blue-500">
                        Reschedule your delivery
                    </Link>
                </div> */}
            </div>

        </div>
    );
};

export default Accrodio;