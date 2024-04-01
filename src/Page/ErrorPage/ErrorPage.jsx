import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
<section className='w-full bg-primary h-[600px] flex items-center justify-center px-6 lg:px-14 gap-24' style={{backgroundImage:"url(https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/clouds.svg-7163f988528a3eb0becd.svg)" , backgroundPosition:"left bottom", backgroundRepeat:"no-repeat"}}>

<div className='hidden lg:block w-1/5 h-full relative'>
<img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/logo-balloon.svg-024fcd3692c201ff6ec4.svg" alt="" className='h-[400px] mx-auto absolute bottom-28 right-0'/>
</div>


<div className='w-full space-y-2 pb-52 lg:pb-0'>
<h1 className='text-3xl lg:text-5xl font-extrabold text-white'>
Oops! <br />
Page not found.</h1>
<p className='text-white'>The link you were looking for no longer exists.</p>
<p className='text-white'>Head back to the Homepage or takealook at our deals and trending products below.</p>

<div className='flex flex-col lg:flex-row gap-3 pt-2 pb-10 w-full'>
<Link to="/" className='w-full rounded-3xl lg:w-1/3 py-4 lg:rounded bg-white text-xs text-primary font-medium text-center'>Back to Homepage</Link>
<Link to="/" className='w-full rounded-3xl lg:w-1/3 py-4 lg:rounded bg-green-500 text-xs text-white font-medium text-center'>View Daily Deals</Link>

</div>
</div>

</section>
    );
};

export default ErrorPage;