import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CheckoutOutlet = () => {
    return (
        <section className='w-full flex flex-col items-center justify-center'>
<nav className='bg-white py-6 px-2 lg:px-14 w-full'>
<div className='max-w-7xl mx-auto flex items-center justify-between'>
<Link to="/" className='logo'>
<img src="https://shopfront.takealot.com/e09779863d4338dfb81ff001133e283ca6e03bed/static/media/src/images/logo.svg-f6ccb489b85bbddf97d6.svg" alt="Logo" className='w-40'/>
</Link>

<div className='links'>
<Link to='/help-centre' className='smallLink'>Help Centre</Link>
</div>
</div>
</nav>

<div className='max-w-7xl mx-auto my-20'>
<Outlet />
</div>
        </section>
    );
};

export default CheckoutOutlet;