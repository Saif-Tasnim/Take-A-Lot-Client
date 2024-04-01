import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';
import Accrodio from '../../../../components/Accordion/Accrodio';

const FlatPackFurniture = () => {

    const accordion = [
        {
            path: "/help-centre/returnDetails/find-return-policy",
            title: "Where can I find your returns policy?"
        },  
        {
            path: "/help-centre/returnDetails/returning-a-product-without-accessories-or-its-partner-product",
            title: "Returning a product without accessories or its partner product"
        },  
        {
            path: "/help-centre/returnDetails/exchange-or-replace-product",
            title: "Can I exchange or replace a product?"
        },  
    ]


    return (
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>

                <h1 className='py-3 font-bold'> Flatpack Assembly </h1>

                <p className='py-4'>
                    Flatpack furniture will be unassembled and delivered in 1 or multiple boxes and may be large and heavy.
                </p>

                <p className='py-4'>
                    The parts which require assembly may come with a step-by-step assembly guide. Please follow the instructions carefully when assembling the product.
                </p>

                <p className='py-4'>
                    You may require simple tools for assembling your product such as a Phillips screwdriver, flat-head screwdriver and a mallet. No Power tools are required.
                </p>



                <h1 className='py-3 font-bold'> Returning Flatpack Furniture </h1>

                <p className='py-4'>
                    Flatpack furniture can be returned as per standard returns policy guidelines. The complete product, including all its accessories, has to be returned, as we may need to provide you with a complete replacement or full refund/credit to your account.
                </p>

                <h1 className='py-3 font-bold'> AReplacement or Missing Parts </h1>

                <p className='py-4'>
                    We don’t stock any replacement parts such as screws or bolts.
                </p>

                <p className='py-4'>
                    If you are unable to find a missing part, you will need to return the product for a replacement, subject to our Returns Policy.
                </p>

            </div>

            {/* contact part */}
            <SubContact></SubContact>

            {/* accordion part */}

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

export default FlatPackFurniture;