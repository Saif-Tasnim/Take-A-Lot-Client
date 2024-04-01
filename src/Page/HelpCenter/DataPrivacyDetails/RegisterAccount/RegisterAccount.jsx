import React from 'react';
import { Link } from 'react-router-dom';
import SubContact from '../../../../components/SubContact/SubContact';
import Accrodio from '../../../../components/Accordion/Accrodio';

const RegisterAccount = () => {
    const accordion = [
        {
            path: "",
            title: "How to verify phone number"
        },
        {
            path: "",
            title: "How to verify email address"
        },
    ]
    return (
        <section className='w-[82%]'>
            <div className='bg-white p-8 text-sm'>
                <p className='py-4'>Registering on takealot.com is easy. To get started you’ll need an email address and a mobile contact number.
                </p>

                <p className='py-4'>The minimum length of a password must be 8 characters. The password must contain at least one number or special character.
                </p>

                <p className='py-4'>To register <Link to="/account/register" className='text-primary hover:underline'>click here.</Link>
                </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>

            {/* accordion */}
            <h1 className='text-2xl font-bold py-3'> Related Topics </h1>
            {accordion.map((acc, index) => <Accrodio
                key={index}
                path={acc.path}
                title={acc.title}
            ></Accrodio>)}
        </section>
    );
};

export default RegisterAccount;