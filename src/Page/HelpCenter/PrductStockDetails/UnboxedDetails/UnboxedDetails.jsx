import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';
import Accrodio from '../../../../components/Accordion/Accrodio';

const UnboxedDetails = () => {
    const accordion = [
        {
            path: "/help-centre/orderCancelDetails/placing-order",
            title: "Placing orders",
        },
        {
            path: "/help-centre/returnDetails/find-return-policy",
            title: "Where can I find your returns policy ? ",
        },

    ]

    return (
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p className='py-4'>
                    Unboxed Deals are products whereby the original packaging is damaged or missing, and are therefore offered at greatly discounted prices. Takealot may reseal or replace the original packaging altogether to protect the product. Products may have minor cosmetic imperfections.
                </p>

                <h1 className='py-3 font-bold'> Buying an Unboxed Deal </h1>

                <p className='py-4'>
                    Add an unboxed deal to your cart and complete payment following the standard order process which includes all options below:
                </p>

                <p className='py-4'>
                    Customer Service and Returns will be handled by Takealot as per our standard policies.
                </p>

                <ul className='list-disc py-3'>
                    <li className='py-2'>Our standard delivery or collection fees will apply.
                    </li>

                    <li className='py-2'>If the unboxed deals cost R500 or more, free shipping applies.
                    </li>

                    <li className='py-2'>A promotional discount coupon or gift voucher can be used.
                    </li>
                </ul>


                <h1 className='py-3 font-bold'> Returning an Unboxed Deal </h1>

                <p className='py-4'>
                    Unboxed deals can be returned for up to 30 days for full credit in accordance with our return policy guidelines for unwanted products.
                </p>

                <p className='py-4'>
                    These products can be exchanged or replaced after evaluation of the returned product provided the specific product is available as an unboxed deal and/or the different size or colour variation is available.
                </p>

                <p className='py-4'>
                    All Unboxed Deals have a Takealot 6-month standard warranty for products that may be defective.
                </p>

                <h1 className='py-3 font-bold'> Quality Assurance on Unboxed Deals </h1>

                <p className='py-4'>
                    Each Unboxed Deal is evaluated and quality checked to ensure that it is in a good condition before it is made available for purchase.
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

export default UnboxedDetails;