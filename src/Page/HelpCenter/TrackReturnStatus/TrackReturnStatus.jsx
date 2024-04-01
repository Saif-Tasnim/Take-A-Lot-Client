import React from 'react';
import SubContact from '../../../components/SubContact/SubContact';
import Accrodio from '../../../components/Accordion/Accrodio';
import { Link } from 'react-router-dom';

const TrackReturnStatus = () => {
    const accrodion = [{
        path: "",
        title: "How soon will I get a refund or credit on my return?"
    }]
    return (
        <section className='w-[82%]'>
            <div className='text-sm bg-white p-8'>
                <p className='pb-4'> You will receive updates on the status of your return via email. You can also track your return by going to <span className="hidden lg:block breadcrumbs py-3">
                    <ul>
                        <li>Go to My Account</li>
                        <li><Link className='text-blue-500'>Orders</Link></li>
                    </ul>
                </span>
                </p>

                <p className='py-2'> Each return item is tracked separately. You can view the return status of the item on the Returns Tracking page by clicking on the relevant return item. </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>

            {/* accordion */}
            <h1 className='my-14 font-bold text-2xl'> Related Topics </h1>
            {
                accrodion.map((acc, index) => <Accrodio
                    key={index}
                    path={acc.path}
                    title={acc.title}
                ></Accrodio>)
            }
        </section>
    );
};

export default TrackReturnStatus;