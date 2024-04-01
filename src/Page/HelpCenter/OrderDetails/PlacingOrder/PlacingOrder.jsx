import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const PlacingOrder = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>

                <p className='py-4'> Shopping on takealot.com is quick and easy, follow these instructions:
                </p>

                <h1 className='py-4 font-bold'>Find products you wish to buy </h1>

                <ul className='list-disc py-3'>
                    <li className='py-2'>Search for products by entering a few words in the search bar found near the top of any page on the Takealot website. You can also use the Shop by Department menu on the left-hand side of the page. Search for specific products across various categories, like Electronics, Home & Appliances, Toys, Beauty and more.
                    </li>
                    <li className='py-2'>When you find a product that interests you, click on the product title to see more details, including stock availability and estimated shipping times.
                    </li>
                </ul>

                <h1 className='py-5 font-bold'>Add products to your Shopping Cart

                </h1>
                <ul className='list-disc py-3'>
                    <li className='py-2'>Find the product you want to buy and click Add to Cart. Simply click on the "X" at the top of your Added to Cart pop-up to continue shopping. You can view the contents of your cart at any time whilst shopping, by clicking on the cart button at the top right-hand side of any page.
                    </li>
                </ul>

                <h1 className='font-bold py-4'>Checkout</h1>
                <ul className='list-disc py-3'>
                    <li className='py-1'>Click on the cart button at the top right-hand side of the page and review the items in your cart.
                    </li>
                    <li className='py-2'>Click <b>Proceed to Checkout.</b>
                    </li>
                    <li className='py-2'>If prompted, Login into your account or Register if this is your first order.
                    </li>
                    <li className='py-2'>Choose a delivery method and follow the steps:
                        <ul className='list-inside list-[circle] py-3'>
                            <li className='py-2'>Courier delivery to your door
                            </li>
                            <li className='py-2'>Collect from a Takealot Pickup Point
                            </li>
                        </ul>

                    </li>
                    <li className='py-3'>Click Continue
                    </li>
                    <li className='py-3'>You have the option of donating R5 to the Beautiful Gate Children's Charity or click away from the pop-up to continue.
                    </li>
                    <li className='py-3'>Review your order details below your Order Summary.
                    </li>
                    <li className='py-3'>Choose your preferred payment method and apply any gift vouchers or coupon codes you want to use on your order, and complete your payment. Follow the steps below to help you apply your gift voucher or coupon code.
                    </li>
                </ul>

                <h1 className='py-4 font-bold'>Order Confirmation</h1>

                <ul className='list-disc py-3'>
                    <li className='py-2'>Once you have completed your order, you will be taken to a confirmation page.
                    </li>
                    <li className='py-2'>You will also receive an email confirming your order number and estimated delivery or collection date.
                    </li>
                </ul>
            </div>

            {/* contact part */}
            <SubContact></SubContact>
        </section>
    );
};

export default PlacingOrder;