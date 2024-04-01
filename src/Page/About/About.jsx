import React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import dottedBg2 from "../../assets/images/dotted-bg-2.png";
import valueImg from '../../assets/images/our-values-strap.webp'
import valueWallImg from '../../assets/images/Values-Wall-Blue-FINAL-2022-02.webp'
import envImg from '../../assets/images/Our-environment1.webp'

const About = () => {
    const pathName = useLocation();
    return (
<section>
<div className='about-option max-w-7xl mx-auto py-5 lg:px-5 flex items-center gap-4 overflow-x-auto bg-white px-2'>
<NavLink to="/about" className={({isActive})=>(isActive ? "px-2 py-2 rounded text-xs text-[#000] bg-transparent" : "px-2 py-2 rounded text-xs text-[#000] bg-transparent")}>Home</NavLink>

<NavLink to="/about/who-we-are" className={({isActive})=>(isActive ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap" : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap")}>Who We Are</NavLink>

<NavLink to="/about/our-journey" className={({isActive})=>(isActive ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap" : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap")}>Our Journey</NavLink>

<NavLink to="/about/our-values" className={({isActive})=>(isActive ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap" : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap")}>Our Values</NavLink>

<NavLink to="/about/our-environment" className={({isActive})=>(isActive ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap" : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap")}>Our Environment</NavLink>

<NavLink to="/about/careers" className={({isActive})=>(isActive ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap" : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap")}>Our Careers</NavLink>

<NavLink to="/about/extraordinary-minds" className={({isActive})=>(isActive ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap" : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap")}>Extraordinary Minds</NavLink>

<NavLink to="/about/company-news" className={({isActive})=>(isActive ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap" : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap")}>Company News</NavLink>

<NavLink to="/about/our-charity" className={({isActive})=>(isActive ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap" : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap")}>Our Charity</NavLink>

<NavLink to="/about/delivery-team" className={({isActive})=>(isActive ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap" : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap")}>Takealot Delivery Team</NavLink>
    </div>

{
    pathName?.pathname === "/about" ?
     <div className=''>
        <div>
      <div className="hero bg-black bg-opacity-60  overflow-hidden about-container h-96 text-sm" style={{backgroundImage: "url(https://static.takealot.com/images/top-strap-bg.gif)"}}>
        <div className="relative z-10 text-white flex  items-center px-8 lg:px-16 gap-10">
          <div className="space-y-4 w-full text-left">
            <h2 className="text-4xl font-medium">
              Getting
            </h2>
            <h1 className="text-5xl font-bold mb-4">To Know Us</h1>
            <p className="text-sm">
            Who are we? What makes us tick? Welcome to the world of takealot.com where extraordinary people come together to do extraordinary things, bringing world-class online shopping to the people of South Africa.
            </p>
            <button className='bg-primary px-4 py-2 rounded'>Learn About Our Journey</button>
          </div>
          <div className="w-full hidden lg:block">
            <img src='https://media.takealot.com/covers_blog/Getting-to-know-us-image.png?_=1685969301' alt="Who We Are" className="w-full" />
          </div>
        </div>
      </div>

      
        <div className='px-20'>
        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-10 text-sm">
            <div>
                <img src="https://media.takealot.com/covers_blog/environment011.jpg?_=1685969302" alt="" className='h-[225px]'/>
                <h2 className='text-lg font-semibold my-3'>Our Journey</h2>
                <p>Follow our exciting journey from humble beginnings to where we are today<Link className='text-primary hover:underline'> and where we are heading…</Link></p>
            </div>
            <div>
                <img src="https://media.takealot.com/covers_blog/our-values1.jpg?_=1685969301" alt="" className='h-[225px]'/>
                <h2 className='text-lg font-semibold my-3'>Our Values</h2>
                <p>The takealot.com family lives and breathes <Link className='text-primary hover:underline'>a set of core values</Link> that represent how we think and how we operate on a daily basis….</p>
            </div>
            <div>
                <img src="https://media.takealot.com/covers_blog/our-environment-ext.jpg?_=1685969301" alt="" className='h-[225px]'/>
                <h2 className='text-lg font-semibold my-3'>Our Environment</h2>
                <p>This is where it all happens, the creative hub where ideas take shape and plans get put into action. <Link className='text-primary hover:underline'>Take a peek at a day in the life of takealot.com…</Link></p>
            </div>
            
        </div>
        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-10 text-sm">
            <div>
                <img src="https://media.takealot.com/covers_blog/company-new-3.jpg?_=1685969301" alt="" className='h-[225px]'/>
                <h2 className='text-lg font-semibold my-3'>Company News</h2>
                <p>Keep up to date on the <Link className='text-primary hover:underline'>latest happenings & developments</Link> in the world of takealot.com…</p>
            </div>
            <div>
                <img src="https://media.takealot.com/covers_blog/our-charity1.jpg?_=1685969301" alt="" className='h-[225px]'/>
                <h2 className='text-lg font-semibold my-3'>Our Charity</h2>
                <p>Together with our shoppers, we strive to make a difference in the lives of those in need by <Link className='text-primary hover:underline'>supporting Beautiful Gate South Africa…</Link></p>
            </div>
            
            
        </div>
        </div>
        

    </div>
    </div>
    :
    <div>
        <Outlet/>
    </div> 
}  
</section>
    );
};

export default About;