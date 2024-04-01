import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div className='lg:px-3 py-5 flex flex-col-reverse lg:flex-row items-start w-full gap-5'>
<div className='w-[90%] mx-auto lg:w-full flex flex-col-reverse lg:flex-col gap-5 items-start'>
<Carousel className='text-center  mx-auto w-full -z-30' autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <Link to="/deal/">
                  <img src="https://media.takealot.com/b/2/cms/p/1292x300/smart/filters:format(jpeg):background_color(white):focal(427x0:865x300)/original_images/0ec1e5ed9fdd56a358647a42dc1438508746381d.png" alt="" className='h-52 lg:h-72'/>
                </Link>
                <Link to="/deal/">
                  <img src="https://media.takealot.com/b/2/cms/p/1292x300/smart/filters:format(jpeg):background_color(white):focal(417x0:864x300)/original_images/ed2290633e5e51c1b70ff9db33de830bbf99cec1.png" alt="" className='h-52 lg:h-72'/>
                </Link>
                <Link to="/deal/">
                  <img src="https://tpc.googlesyndication.com/simgad/10233294685005216619?" alt="" className='h-52 lg:h-72'/>
                </Link>
                <Link to="/deal/">
                  <img src="https://tpc.googlesyndication.com/simgad/5262395732394555849?" alt="" className='h-52 lg:h-72'/>
                </Link>
             
            </Carousel>

<div className='pb-3 w-full'>
  <p className='pt-1 pb-3 font-semibold text-lg text-gray-700 text-left'>Featured Brands</p>
<Marquee speed={30} className='-z-10'>
  <Link to="/">
  <img src="https://media.takealot.com/b/2/cms/p/fit-in/180x120/original_images/HealthBeauty_Brand15.png" alt="Nivea" className='w-40 mx-4 -z-10'/>
  </Link>

  <Link to="/">
  <img src="https://media.takealot.com/b/2/cms/p/fit-in/160x70/original_images/b21ee0fbe4eeff9f534cc0be7bde5deb301584de.png" alt="Asus" className='w-40 mx-4 -z-10'/>
  </Link>

  <Link to="/">
  <img src="https://media.takealot.com/b/2/cms/p/fit-in/180x120/original_images/Computers_Brand4.png" alt="Canon" className='w-40 mx-4 -z-10'/>
  </Link>

  <Link to="/">
  <img src="https://media.takealot.com/b/2/cms/p/fit-in/160x70/original_images/398bc48815c135c0f074174a2a5d4acdb36534ea_dRbMDMz.png" alt="Samsung" className='w-40 mx-4 -z-10'/>
  </Link>

  <Link to="/">
  <img src="https://media.takealot.com/b/2/cms/p/fit-in/180x120/original_images/e43f4673b09d572c51014b64779b772d8ea942f3.png" alt="Epson" className='w-40 mx-4 -z-10'/>
  </Link>

  <Link to="/">
  <img src="https://media.takealot.com/b/2/cms/p/fit-in/160x90/original_images/george_mason.png" alt="George" className='w-40 mx-4 -z-10'/>
  </Link>

  <Link to="/">
  <img src="https://media.takealot.com/b/2/cms/p/fit-in/160x90/filters:focal(52x32:159x66)/original_images/powerup.png" alt="Powerup" className='w-40 mx-4 -z-10'/>
  </Link>

  <Link to="/">
  <img src="https://media.takealot.com/b/2/cms/p/fit-in/450x140/original_images/Campground_logo-01.png" alt="Campground" className='w-40 mx-4 -z-10'/>
  </Link>
</Marquee>

</div>            
</div>

<div className='hidden lg:flex flex-col gap-4 w-1/2'>
<Link to="/account/order" className='bg-white p-1 rounded shadow'>
<div className='flex items-center gap-3 bg-sky-200'>
  <div className='bg-sky-300 pr-6 h-full py-6 rounded-r-[40px]'>
  <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/icon-delivery.svg-289ec5f71b25443056af.svg" alt="Delivery" />
  </div>

  <div className='py-2 space-y-1'>
    <p className='text-sm font-semibold'>Where's my order?</p>
    <p className='text-[13px]'>Check your delivery or collection status.</p>
  </div>
</div>
</Link>

<div className='w-full bg-white shadow p-2 rounded'>
  <img src="https://tpc.googlesyndication.com/simgad/3827578182049559885?" alt="Add" className='w-full'/>
</div>
</div>
        </div>
    );
};

export default Banner;