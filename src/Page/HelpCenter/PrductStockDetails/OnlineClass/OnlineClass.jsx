import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';
import Accrodio from '../../../../components/Accordion/Accrodio';

const OnlineClass = () => {

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
                    An Online Course (sometimes referred to as Online Learning) is a form of distance learning offered by an online course service provider. In order to complete an online course, you’ll need your own email account and access to the internet.
                </p>

                <p className='py-4'>
                    NB: It is recommended you use a Laptop or PC with steady internet access to complete your selected online course. </p>

                <h1 className='py-3 font-bold'> Online course and voucher codes </h1>

                <p className='py-4'>
                    Takealot provides you with an unique digital code that can be used to access online course material on the websites of certain service providers. Takealot does not own the content of the online courses and is not responsible for the administration that may be required such as the “sign up process” or “password reset” etc.
                </p>

                <p className='py-4'>
                    You will need to redeem the voucher on the website of the provider. The provider’s site will either automatically enroll you for the specified course immediately or enable you to enroll and redeem the online course voucher code.
                </p>

                <h1 className='py-3 font-bold'>Registration on the Online Course provider’s site </h1>

                <p className='py-4'>
                    You will need to follow the steps below:
                </p>

                <ul className='list-disc py-3'>
                    <li className='py-2'>Type the exact URL (per the Product Description) into your web browser.
                    </li>

                    <li className='py-2'>Enter the unique voucher code.
                    </li>

                    <li className='py-2'>Complete all required fields as required by the Online Course provider to register on the site and enroll in the course.
                    </li>

                    <li className='py-2'>You will now be enrolled successfully.
                    </li>

                </ul>

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

export default OnlineClass;