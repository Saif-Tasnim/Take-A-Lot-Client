import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const HelpFindProduct = () => {
    return (
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p className='py-4'>
                    You can browse millions of products on Takealot using two easy methods:
                </p>

                <ul className='list-disc py-3'>
                    <li className='py-2'>Search for products by entering a few words in the search bar found near the top of any page on the Takealot website or mobile app. Enter the type of product e.g. microwave or brand name e.g Apple or Samsung. View the search results and select the product you are looking for. For more detailed results, refine by category and apply your preferred filters.</li>

                    <li className='py-2'>You can also use the Shop by Department menu on the left-hand side to find specific products across different categories, like Electronics, Home & Appliances, Toys, Beauty and more.
                    </li>
                </ul>

                <p className='py-4'>
                    With both methods, you can filter your search results by department, brand, availability and price using the filters.
                </p>

            </div>

            {/* contact part */}
            <SubContact></SubContact>

        </section>
    );
};

export default HelpFindProduct;