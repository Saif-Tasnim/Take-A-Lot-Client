import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';
import Accrodio from '../../../../components/Accordion/Accrodio';
import { Link } from 'react-router-dom';

const BundleDetails = () => {
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
                    A bundle deal consists of two or more individual products that can be bought together as a bundle, entitle you to a discount on the purchase price of any one or more of the individual products. When a bundle deal is available, it will be indicated in the search results, on the product pages.
                </p>

                <h1 className='py-3 font-bold'> Different bundles on offer </h1>

                <p className='py-4'>
                    Bundle deals are available in a set bundle format or multi-buy format. A set bundle deal consists of products selected by Takealot, e.g buying a cellphone + charger + case to qualify for a bundle discount.
                </p>

                <p className='py-4'>
                    Multi-buy bundle deals are products selected by the shopper from a collection of products chosen by Takealot. For example, buy three shampoo products for R199.00.
                </p>

                <p className='py-4'>
                    A pre-packed bundle is reflected as a single product on the website even though it consists of two or more items.
                </p>

                <h1 className='py-3 font-bold'> Can I buy a product from a bundle deal individually? </h1>

                <p className='py-4'>
                    Yes, but the purchase price will be its individual price as listed on the website. You will not qualify for the bundle deal discount.
                </p>

                <h1 className='py-3 font-bold'> All about returns & exchanges for bundle deals </h1>

                <p className='py-4'>
                    Bundle deal products can only be exchanged or replaced provided that the specific product is available as part of a bundle deal at the time of your request. If the item is no longer available as part of a bundle deal, you will be offered a repair or credit subject to our returns policy.
                </p>

                <p className='py-4'>
                    Important to note: Bundle deals can be returned as a whole or any of its partner products & Pre-packed bundles will only be accepted if you return all of its component products.
                </p>

                <p className='py-4'>
                    Your return will be processed in accordance with the standard returns policy guidelines found <Link to="/help/exchange-return-policy" className='text-primary hover:underline'> here </Link>, see section 6: Bundles
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

export default BundleDetails;