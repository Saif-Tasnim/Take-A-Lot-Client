import React from 'react';
import SubContact from '../../../components/SubContact/SubContact';
import Accrodio from '../../../components/Accordion/Accrodio';

const ReturningProductAccessories = () => {
    
    const accordion = [
        {
            path: "/help-centre/returnDetails/can-i-return-my-product",
            title : "Can I return my product"
        },
        {
            path: "/help-centre/returnDetails/return-my-product",
            title : "How do I return my product"
        },
       
    ]


    return (
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p>This is not possible. The complete product, including all its accessories and partner product has to be returned, as we may need to provide you with a complete replacement or full credit / refund. </p>

                <p className='py-8'>For example, if your TV remote is not working, you would need to return both the TV and the TV remote.</p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>

            {/* accordion part */}
            <h1 className='my-14 font-bold text-2xl'> Related Topics </h1>
            {
                accordion.map((acc, index) => <Accrodio
                    key={index}
                    path={acc.path}
                    title={acc.title}
                ></Accrodio>)
            }

        </section>
    );
};

export default ReturningProductAccessories;