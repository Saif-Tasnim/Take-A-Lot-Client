import React from 'react';
import { Link } from 'react-router-dom';
import SubContact from '../../../components/SubContact/SubContact';

const FindReturnPolicy = () => {

    return (

        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p className='py-2'>Our Returns Policy can be found
                    <Link to="/return-policy-help/" className='text-primary hover:underline'> here </Link> </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>

        </section>
    );
};

export default FindReturnPolicy;