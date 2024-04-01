import React from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { HiXMark } from 'react-icons/hi2';
import "./sell.css"

const SellOn = () => {
    return (
        <section>
<div className='banner-section hero h-80 lg:h-96 flex items-center' style={{backgroundImage: "url(https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/sell-on-takealot.jpg-bdc9d92ffcb676367546.jpg)"}}>

<div className='w-full lg:w-1/2 bg-[#0b79bee6] h-full lg:h-[80%] lg:mx-5 p-6 relative'>
<h2 className='text-3xl lg:text-5xl font-bold text-white'>Join SA's Best Online
Marketplace Platform</h2>
<p className='my-5 text-xl font-medium text-white'>Sell to over 3 million happy shoppers</p>

<div className='flex flex-col lg:flex-row gap-5 my-5 absolute bottom-3 left-0 lg:left-6 right-0'>
    <Link to="/sell/apply" className='w-full lg:w-48 text-center rounded-3xl lg:rounded-none px-8 py-2 border border-white bg-white hover:text-white hover:bg-transparent text-primary font-medium text-sm'>Apply to Sell</Link>
    <a href="#pricing" className='w-full lg:w-48 text-center rounded-3xl lg:rounded-none px-8 py-2 border border-white hover:bg-white text-white bg-transparent hover:text-primary font-medium text-sm'>See Pricing</a>
</div>
</div>

</div> 


<div className='feature-sect px-6 my-16'>
    <div className='text-center'>
    <h2 className='text-[#000] text-3xl font-semibold'>Get the tools you need to increase sales and grow your business online</h2>
    <p className='text-base text-[#4d4d4f] font-normal'>Selling your products online has never been easier. Simply apply to sell as a Takealot seller today and easily reach online shoppers across South Africa.</p>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10'>

<div className='shadow'>

<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/cards/optimise-your-growth.jpg-758bca1bd6b74237d09e.jpg" alt="Optimise Your Growth" /> 

<div className='text-center py-3 px-5'>
<h4 className='text-[#0a0a0a] font-semibold text-lg'>Optimise Your Growth</h4>
<p className='py-4'>Easily boost your sales by leveraging our active customer base of over 3 million happy online shoppers.</p>
</div>

</div>

<div className='shadow'>

<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/cards/end-to-end-solutions.jpg-73b9874edfdf9aeaa3b5.jpg" alt="End–to–End Solutions" /> 

<div className='text-center py-3 px-5'>
<h4 className='text-[#0a0a0a] font-semibold text-lg'>End–to–End Solutions</h4>
<p className='py-4'>We'll provide the tools you need to set up and sell – manage your stock, pricing, product selection and more from the Takealot Seller Portal.</p>
</div>

</div>

<div className='shadow'>

<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/cards/hassle-free-logistics.jpg-dfeefa2f54d08b8ca3ce.jpg" alt="Hassle–Free Logistics" /> 

<div className='text-center py-3 px-5'>
<h4 className='text-[#0a0a0a] font-semibold text-lg'>Hassle–Free Logistics</h4>
<p className='py-4'>We'll provide the tools you need to set up and sell – manage your stock, pricing, product selection and more from the Takealot Seller Portal.</p>
</div>

</div>

<div className='shadow'>

<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/cards/safe-and-secure-payments.jpg-ed8aa4f3e9d11eefe1dc.jpg" alt="Safe & Secure Online Payments" /> 

<div className='text-center py-3 px-5'>
<h4 className='text-[#0a0a0a] font-semibold text-lg'>Safe & Secure Online Payments</h4>
<p className='py-4'>Payments are made directly to you four times per month.</p>
</div>

</div>

    </div>
<div className='w-full mx-auto my-10 text-center'>
<Link to="/sell/apply" className='text-center rounded-3xl lg:rounded-none px-8 py-3 border border-primary bg-primary text-white hover:bg-primary font-medium text-sm'>Apply to Sell</Link>
</div>

</div>


<div className='steps-sect px-6 py-8 my-16  h-fit' style={{backgroundImage: "url(https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/line-art-bg.png-88f0c171cbf5ea3af16e.png)"}}>

<h2 className='text-[#fff] text-3xl my-8 text-center font-bold'>Start selling online in just a few easy steps</h2>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-5'>

<div className='text-center space-y-4'>
<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/application.svg-7359324e0bb93b871a81.svg" alt="Application" className='mx-auto'/>
<p className='text-white font-bold text-lg'>Application</p>
<p className='text-sm text-white'><Link to="/sell/apply" className='font-medium underline'>Apply now</Link> and tell us about your business and products.</p>
</div>

<div className='text-center space-y-4'>
<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/approval.svg-bbe3d26bed146bde4d2e.svg" alt="Approval" className='mx-auto'/>
<p className='text-white font-bold text-lg'>Approval</p>
<p className='text-sm text-white'>We'll review your application and get in touch within 10 business days.</p>
</div>


<div className='text-center space-y-4'>
<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/registration.svg-ec006c9f0eb267446d90.svg" alt="Registration" className='mx-auto'/>
<p className='text-white font-bold text-lg'>Registration</p>
<p className='text-sm text-white'>Complete your Takealot Seller account by supplying all the required information and paperwork.</p>
</div>


<div className='text-center space-y-4'>
<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/onboarding.svg-7dd7ade4c3151a794dbd.svg" alt="Onboarding" className='mx-auto'/>
<p className='text-white font-bold text-lg'>Onboarding</p>
<p className='text-sm text-white'>Learn all about our processes and choose your stock model.</p>
</div>


<div className='text-center space-y-4'>
<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/sales.svg-6c8d3c81cbe912de2000.svg" alt="Sales" className='mx-auto'/>
<p className='text-white font-bold text-lg'>Sales</p>
<p className='text-sm text-white'>Get your products live and start selling.</p>
</div>


<div className='text-center space-y-4'>
<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/growth.svg-c0b2422866ff82fe7cf9.svg" alt="Growth" className='mx-auto'/>
<p className='text-white font-bold text-lg'>Growth</p>
<p className='text-sm text-white'>Boost your online sales via promotions, analyse your performance using reports and so much more.</p>
</div>

</div>


</div>


<div className='video-sect px-6 py-8 my-16 bg-white'>
<div className='text-center'>
    <h2 className='text-[#000] text-3xl font-semibold'>Every seller has a success story to share</h2>
    <p className='text-base text-[#4d4d4f] font-normal'>Learn how businesses of all sizes have grown.</p>
    </div>

    <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-10 my-10'>
<div className='video-card w-full shadow overflow-hidden'>
<motion.div className='videoThumb relative'   whileHover={{
    scale: 1.1,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}>
<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/video-thumbnails/luvuthando-dolls.jpg-b8abb81bf9cb53afaf3d.jpg" alt="Luvuthando Dolls" />
<label htmlFor="video1" className="w-full absolute top-[35%] left-[35%] lg:top-[40%] lg:left-[40%] cursor-pointer"><BsPlayCircle className='h-14 w-14 text-white'/></label>
</motion.div>


<div className='text-center text-sm text-[#4d4d4f] px-6 my-7'>
    <p>“Being on Takealot Marketplace has really had a positive impact on my life and my business. I would absolutely recommend it to any budding entrepreneur.”</p>

    <p className='mt-3'><span className='text-lg font-medium text-[#000]'>Luvuthando Dolls</span> <br /> Handcrafted Toys</p>
</div>

<input type="checkbox" id="video1" className="modal-toggle" />
<div className="modal w-full overflow-hidden">
  <div className="modal-box max-w-5xl h-96 p-0 overflow-hidden">
  <div className='w-full h-full'>
    <div className='w-full h-full'>
        <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Takealot Marketplace  - Luvuthando Dolls" width="100%" height="100%" src="https://www.youtube.com/embed/ckvEFTStwUc?autoplay=1&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fwww.takealot.com&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;fs=1&amp;enablejsapi=1&amp;widgetid=5" id="widget6"></iframe>
        </div>
        </div>
    <div className="modal-action">
    <label htmlFor="video1" className="absolute top-2 right-2 cursor-pointer hover:text-error">
                            <HiXMark className='w-7 h-7 text-error' />
                            </label>
    </div>
  </div>
</div>
</div>


<div className='video-card w-full shadow overflow-hidden'>
<motion.div className='videoThumb relative'   whileHover={{
    scale: 1.1,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}>
<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/video-thumbnails/solly-m-sports.jpg-95941c37de6fd6d0eeaa.jpg" alt="Luvuthando Dolls" />
<label htmlFor="video2" className="w-full absolute top-[35%] left-[35%] lg:top-[40%] lg:left-[40%] cursor-pointer"><BsPlayCircle className='h-14 w-14 text-white'/></label>
</motion.div>


<div className='text-center text-sm text-[#4d4d4f] px-6 my-7'>
    <p>“From the time that we started, we've only seen an upward trend. It's not only important for income and for revenue and turnover, but also for general business growth.”</p>

    <p className='mt-3'><span className='text-lg font-medium text-[#000]'>Solly M Sports</span> <br /> Sports Apparel and Equipment</p>
</div>

<input type="checkbox" id="video2" className="modal-toggle" />
<div className="modal w-full overflow-hidden">
  <div className="modal-box max-w-5xl h-96 p-0 overflow-hidden">
  <div className='w-full h-full'>
    <div className='w-full h-full'>
        <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Takealot Marketplace  - Solly M Sports" width="100%" height="100%" src="https://www.youtube.com/embed/TtyDYM1RBog?autoplay=1&mute=0&controls=1&origin=https%3A%2F%2Fwww.takealot.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&fs=1&enablejsapi=1&widgetid=9" id="widget9"></iframe>
        </div>
        </div>
    <div className="modal-action">
    <label htmlFor="video2" className="absolute top-2 right-2 cursor-pointer hover:text-error">
                            <HiXMark className='w-7 h-7 text-error' />
                            </label>
    </div>
  </div>
</div>
</div>


<div className='video-card w-full shadow overflow-hidden'>
<motion.div className='videoThumb relative'   whileHover={{
    scale: 1.1,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}>
<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/video-thumbnails/african-technopreneurs.jpg-90c2df6466d1bd2f314f.jpg" alt="African Technopreneurs" />
<label htmlFor="video3" className="w-full absolute top-[35%] left-[35%] lg:top-[40%] lg:left-[40%] cursor-pointer"><BsPlayCircle className='h-14 w-14 text-white'/></label>
</motion.div>


<div className='text-center text-sm text-[#4d4d4f] px-6 my-7'>
    <p>“It's been a smooth transition, being able to talk to our account manager, being able to get our products onto the platform and Takealot has been a reliable partner for us to actually work with.”</p>

    <p className='mt-3'><span className='text-lg font-medium text-[#000]'>African Technopreneurs</span> <br />VR & Augmented Reality</p>
</div>

<input type="checkbox" id="video3" className="modal-toggle" />
<div className="modal w-full overflow-hidden">
  <div className="modal-box max-w-5xl h-96 p-0 overflow-hidden">
  <div className='w-full h-full'>
    <div className='w-full h-full'>
        <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Takealot Marketplace  - African Technopreneurs" width="100%" height="100%" src="https://www.youtube.com/embed/dPdQaC2FfsQ?si=AI-6HUnPNqsDDjoF" id="widget6"></iframe>
        </div>
        </div>
    <div className="modal-action">
    <label htmlFor="video3" className="absolute top-2 right-2 cursor-pointer hover:text-error">
                            <HiXMark className='w-7 h-7 text-error' />
                            </label>
    </div>
  </div>
</div>
</div>


<div className='video-card w-full shadow overflow-hidden'>
<motion.div className='videoThumb relative'   whileHover={{
    scale: 1.1,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}>
<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/video-thumbnails/king-kong-leather.jpg-54703072d88d780dd0f3.jpg" alt="King Kong Leather" />
<label htmlFor="video4" className="w-full absolute top-[35%] left-[35%] lg:top-[40%] lg:left-[40%] cursor-pointer"><BsPlayCircle className='h-14 w-14 text-white'/></label>
</motion.div>


<div className='text-center text-sm text-[#4d4d4f] px-6 my-7'>
    <p>“We've experienced tremendous growth, and have benefited from great online exposure through Takealot Marketplace.”</p>

    <p className='mt-3'><span className='text-lg font-medium text-[#000]'>King Kong Leather</span> <br />Handcrafted Leather Bags & Accessories</p>
</div>

<input type="checkbox" id="video4" className="modal-toggle" />
<div className="modal w-full overflow-hidden">
  <div className="modal-box max-w-5xl h-96 p-0 overflow-hidden">
  <div className='w-full h-full'>
    <div className='w-full h-full'>
        <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Takealot Marketplace  - King Kong Leather" width="100%" height="100%" src="https://www.youtube.com/embed/fopgaKmomVY" id="widget10"></iframe>
        </div>
        </div>
    <div className="modal-action">
    <label htmlFor="video4" className="absolute top-2 right-2 cursor-pointer hover:text-error">
                            <HiXMark className='w-7 h-7 text-error' />
                            </label>
    </div>
  </div>
</div>
</div>


<div className='video-card w-full shadow overflow-hidden'>
<motion.div className='videoThumb relative'   whileHover={{
    scale: 1.1,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}>
<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/video-thumbnails/love-tea-time.jpg-effe9ab0f9704a7b818e.jpg" alt="Love Tea Time" />
<label htmlFor="video5" className="w-full absolute top-[35%] left-[35%] lg:top-[40%] lg:left-[40%] cursor-pointer"><BsPlayCircle className='h-14 w-14 text-white'/></label>
</motion.div>


<div className='text-center text-sm text-[#4d4d4f] px-6 my-7'>
    <p>“I can now own a shop that's open 24 hours a day, and I've experienced 100% year–on–year growth since joining Takealot Marketplace.”</p>

    <p className='mt-3'><span className='text-lg font-medium text-[#000]'>Love Tea Time</span> <br /> Luxury Teas & Infusions</p>
</div>

<input type="checkbox" id="video5" className="modal-toggle" />
<div className="modal w-full overflow-hidden">
  <div className="modal-box max-w-5xl h-96 p-0 overflow-hidden">
  <div className='w-full h-full'>
    <div className='w-full h-full'>
        <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Takealot Marketplace  - Love Tea Time" width="100%" height="100%" src="https://www.youtube.com/embed/NSfZDN5gU1Y" id="widget17"></iframe>
        </div>
        </div>
    <div className="modal-action">
    <label htmlFor="video5" className="absolute top-2 right-2 cursor-pointer hover:text-error">
                            <HiXMark className='w-7 h-7 text-error' />
                            </label>
    </div>
  </div>
</div>
</div>


<div className='video-card w-full shadow overflow-hidden'>
<motion.div className='videoThumb relative'   whileHover={{
    scale: 1.1,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}>
<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/video-thumbnails/miss-lyn.jpg-36d69fae3ee905cbebe5.jpg" alt="Miss Lyn" />
<label htmlFor="video6" className="w-full absolute top-[35%] left-[35%] lg:top-[40%] lg:left-[40%] cursor-pointer"><BsPlayCircle className='h-14 w-14 text-white'/></label>
</motion.div>


<div className='text-center text-sm text-[#4d4d4f] px-6 my-7'>
    <p>“Takealot Marketplace offers end–to–end solutions, and access to over a million customers countrywide, something that isn't achievable with just brick and mortar stores.”</p>

    <p className='mt-3'><span className='text-lg font-medium text-[#000]'>Miss Lyn</span> <br /> Fine Home & Hospitality Bed Linen</p>
</div>

<input type="checkbox" id="video6" className="modal-toggle" />
<div className="modal w-full overflow-hidden">
  <div className="modal-box max-w-5xl h-96 p-0 overflow-hidden">
  <div className='w-full h-full'>
    <div className='w-full h-full'>
        <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Takealot Marketplace  - Miss Lyn" width="100%" height="100%" src="https://www.youtube.com/embed/NAUIU-KSnto" id="widget6"></iframe>
        </div>
        </div>
    <div className="modal-action">
    <label htmlFor="video6" className="absolute top-2 right-2 cursor-pointer hover:text-error">
                            <HiXMark className='w-7 h-7 text-error' />
                            </label>
    </div>
  </div>
</div>
</div>
    </div>


    <div className='hidden lg:grid my-10 grid-cols-7 gap-10'>
<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/brand-logos/rugs-original.gif-fd86823d73a172cf34ba.gif" alt="rugs-original" />


<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/brand-logos/beurer.gif-24a1a34ecb6a5b9591c2.gif" alt="beurer" />


<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/brand-logos/le-creuset.gif-52ac85f321ea89008fd7.gif" alt="le-creuset" />


<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/brand-logos/ghd.gif-bd207ece112023b53ff5.gif" alt="ghd" />


<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/brand-logos/berlinger-haus.gif-1f6c2d6f5ae4eeb8d741.gif" alt="berlinger-haus" />


<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/brand-logos/toy-kingdom.gif-26e14422116e3d6954a4.gif" alt="toy-kingdom" />


<img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/brand-logos/olight.gif-3c23edd67a0028d471de.gif" alt="olight" />
    </div>
</div>


<div className='px-6 py-8 mt-16 w-full'>
<div className='text-center'>
    <h2 className='text-[#000] text-3xl font-semibold'>Pricing</h2>
    <p className='text-base text-[#4d4d4f] font-normal'>We charge a monthly subscription fee of R400* per seller account/month. You can choose to cancel your account at any time.</p>
    </div>

<div className='flex flex-col lg:flex-row items-center justify-between w-full px-10 h-fit py-5 bg-primary my-10 bg-opacity-10 shadow'>


<div className='w-full h-full'>
<p className='text-[#000] text-lg  font-semibold'>Estimate your <br />
Takealot revenue</p>
<div className='my-5'>
<Link to="/fee-estimator" className='text-center rounded-3xl lg:rounded-none px-8 py-3 border border-primary bg-primary text-white hover:bg-primary font-medium text-sm'>Try the Fees Calculator</Link>
</div>
</div>

<div className='w-full h-full' style={{backgroundImage: "url(https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/Circles.svg-8049b696ea26e18518b1.svg)", backgroundSize:"cover"}}>
<img src="https://i.ibb.co/z2DwPf6/sac.png" alt="Calculate"/>
</div>

</div>

</div>


<div className='px-6' id='pricing'>
<div tabIndex={0} className="collapse collapse-arrow  bg-gray-300 bg-opacity-20 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold text- border-b-2 border-b-gray-500">
                        Success fees
                        </div>
                        <div className="collapse-content bg-white text-sm">
  <div className='p-3'>
  <p>These are Takealot's referral fees and cover transactional costs, customer support and all round platform support.
They are calculated as a % of the VAT inclusive selling price per item sold. This fee will be credited for returned items.</p>

<p className='my-2'>The below table provides an indicative range of success fees per category. Please see the detailed breakdown <a href="takealot-product-pricing-booklet.pdf" download="takealot-product-pricing-booklet.pdf" className='text-primary'>here</a></p>
  </div>

  <div className="overflow-x-auto">
  <table className='table table-zebra border'>
<thead>
<tr className='text-white'>
<th className='bg-primary py-6'>
    <p>Success Fee % on VAT inclusive product selling price excluding shipping *</p>
    </th>
<th className='bg-primary py-6'>
    <p>Product Categories</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
<td><p>12.0% – 15.0%</p></td>
<td><p>Baby</p></td>
</tr>
<tr>
<td><p>10.0% – 15.0%</p></td>
<td><p>Beauty</p></td>
</tr>
<tr>
<td><p>14.0% – 14.0%</p></td>
<td><p>Books</p></td>
</tr>
<tr>
<td><p>4.0% – 12.0%</p></td>
<td><p>Cameras</p></td>
</tr>
<tr><td><p>8.0% – 15.0%</p></td>
<td><p>Camping &amp; Outdoor</p></td>
</tr>
<tr>
<td><p>10.0% – 18.0%</p></td>
<td><p>Clothing &amp; Footwear</p></td>
</tr>
<tr>
<td><p>6.0% – 9.0%</p></td><td>
<p>Computer Components</p></td>
</tr>
<tr>
<td><p>5.0% – 9.0%</p></td>
<td><p>Computers &amp; Laptops</p></td>
</tr>
<tr>
<td><p>10.0% – 12.0%</p></td>
<td><p>DIY &amp; Automotive</p></td>
</tr>
<tr>
<td><p>10.0% – 14.0%</p></td>
<td><p>Electronic Accessories</p></td>
</tr>
<tr>
<td><p>5.5% – 15.0%</p></td>
<td><p>Games</p></td>
</tr>
<tr>
<td><p>12.0% – 14.0%</p></td>
<td><p>Garden, Pool &amp; Patio</p></td>
</tr>
<tr>
<td><p>10.0% – 12.0%</p></td>
<td><p>Health</p></td>
</tr>
<tr>
<td><p>15.0% – 15.0%</p></td>
<td><p>Homeware</p></td>
</tr>
<tr>
<td><p>8.0% – 10.0%</p></td>
<td><p>Large Appliances</p></td>
</tr>
<tr>
<td><p>7.0% – 10.0%</p></td>
<td><p>Liquor</p></td>
</tr>
<tr>
<td><p>15.0% – 15.0%</p></td>
<td><p>Luggage &amp; Travel</p></td>
</tr>
<tr>
<td><p>7.5%</p></td>
<td><p>Mobile</p></td>
</tr>
<tr>
<td><p>10.0% – 15.0%</p></td>
<td><p>Music &amp; DVD</p></td>
</tr>
<tr>
<td><p>8.0% – 12.0%</p></td>
<td><p>Musical Instruments</p></td>
</tr>
<tr>
<td><p>8.0% – 8.0%</p></td>
<td><p>Non-Perishable</p></td>
</tr>
<tr>
<td><p>7.0% – 12.0%</p></td>
<td><p>Office</p></td>
</tr>
<tr>
<td><p>10.0% – 10.0%</p></td>
<td><p>Office Furniture</p></td>
</tr>
<tr>
<td><p>10.0% – 10.0%</p></td>
<td><p>Pets</p></td>
</tr>
<tr>
<td><p>10.0% – 12.0%</p></td>
<td><p>Small Appliances</p></td>
</tr>
<tr>
<td><p>5.0% – 14.0%</p></td>
<td><p>Smart Home &amp; Connected Living</p></td>
</tr>
<tr>
<td><p>12.0% – 15.0%</p></td>
<td><p>Sport</p></td>
</tr>
<tr>
<td><p>10.0% – 14.0%</p></td>
<td><p>Stationery</p></td>
</tr>
<tr>
<td><p>12.0% – 12.0%</p></td>
<td><p>Toys</p></td>
</tr>
<tr>
<td><p>5.5% – 12.0%</p></td>
<td><p>TV &amp; Audio</p></td>
</tr>
</tbody>
</table>
  </div>
                        </div>
                    </div>






                    <div tabIndex={0} className="collapse collapse-arrow  bg-gray-300 bg-opacity-20 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold text- border-b-2 border-b-gray-500">
                        Fulfilment fees
                        </div>
                        <div className="collapse-content bg-white text-sm">
  <div className='p-3'>
  <p>Fulfilment Fee per item shipped from a Takealot warehouse (Rands)*</p>

  </div>


<div className='my-3 p-3 overflow-x-auto'>
<table className="table table-zebra">
<thead>
<tr>
<th className="bg-transparent" style={{width:"auto"}}></th>
<th className='text-center py-8 bg-primary text-white' colspan="4" style={{width:"auto"}}>
<p>Weight</p>
</th>
</tr>
<tr className=' py-8 bg-primary text-white'>
<th class="text-center" style={{width:"auto"}}>
<p>Size</p>
</th>
<th style={{width:"auto"}}>
<p>Light <br /><small>Less than or equal to 7kg</small></p>
</th>
<th style={{width:"auto"}}>
<p>Heavy <br /><small>Greater than 7kg and less than or equal to 25kg</small></p>
</th>
<th style={{width:"auto"}}>
<p>Heavy Plus <br /><small>Greater than 25kg and less than 40kg</small></p>
</th>
<th style={{width:"auto"}}>
<p>Very Heavy <br /><small>Greater than or equal to 40kg and less than or equal to 70kg</small></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Standard <br /><small>Product Categories: Non-perishables, Household Cleaning &amp; Liquor that are less than OR equal to <span>35 000 cm<sup>3</sup></span></small></p>
</td>
<td>
<p>R20</p>
</td>
<td>
<p>R47</p>
</td>
<td>
<p>R100</p>
</td>
<td>
<p>R100</p>
</td>
</tr>
<tr>
<td>
<p>Standard <br /><small>Product Categories: Stationery,
       Pets, Baby Items, Beauty, Health FMCG &amp;
       Bathroom Items that are less than OR equal to <span>35 000 cm<sup>3</sup></span></small></p>
</td>
<td>
<p>R30</p>
</td>
<td>
<p>R47</p>
</td>
<td>
<p>R100</p>
</td>
<td>
<p>R100</p>
</td>
</tr>
<tr>
<td>
<p>Standard <br /><small>Product Categories: Mobile,
        Laptops,
        Small Household Appliances,
        Small kitchen Appliances,
        Smart Home &amp; Appliances,
        TV,
        Audio,
        Video,
        Smart Audio Technology &amp;
        Smart Energy Solutions that are less than OR equal to <span>35 000 cm<sup>3</sup></span></small></p>
</td>
<td>
<p>R55</p>
</td>
<td>
<p>R55</p>
</td>
<td>
<p>R100</p>
</td>
<td>
<p>R100</p>
</td>
</tr>
<tr>
<td>
<p>Standard <br /><small>All other categories that are less than OR equal to <span>35 000 cm<sup>3</sup></span></small></p>
</td>
<td>
<p>R42</p>
</td>
<td>
<p>R47</p>
</td>
<td>
<p>R100</p>
</td>
<td>
<p>R100</p>
</td>
</tr>
<tr>
<td>
<p>Large <br /><small>Greater than <span>35 000 cm<sup>3</sup></span> and less than or equal to <span>130 000 cm<sup>3</sup></span></small></p></td><td><p>R55</p>
</td>
<td>
<p>R60</p>
</td>
<td>
<p>R100</p>
</td>
<td>
<p>R110</p>
</td>
</tr>
<tr>
<td>
<p>Oversize <br /><small>Greater than <span>130 000 cm<sup>3</sup></span> and less than or equal to <span>200 000 cm<sup>3</sup></span></small></p>
</td>
<td>
<p>R100</p>
</td>
<td>
<p>R120</p>
</td>
<td>
<p>R150</p>
</td>
<td>
<p>R110</p>
</td>
</tr>
<tr>
<td>
<p>Bulky <br /><small>Greater than <span>200 000 cm<sup>3</sup></span> and less than or equal to <span>545 000 cm<sup>3</sup></span></small></p>
</td>
<td>
<p>R100</p>
</td>
<td>
<p>R135</p>
</td>
<td>
<p>R150</p>
</td>
<td><p>R160</p></td>
</tr>
<tr>
<td>
<p>Extra Bulky <br /><small>Greater than <span>545 000 cm<sup>3</sup></span></small></p></td><td><p>R250</p>
</td>
<td>
<p>R250</p>
</td>
<td>
<p>R300</p>
</td>
<td>
<p>R360</p>
</td>
</tr>
</tbody>
</table>
</div>
                        </div>
                    </div>



                    <div tabIndex={0} className="collapse collapse-arrow  bg-gray-300 bg-opacity-20 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold text- border-b-2 border-b-gray-500">
                        Storage fees <span className='text-xs font-normal'>(May apply)</span>
                        </div>
                        <div className="collapse-content bg-white text-sm">
  <div className='p-3 mt-2'>
  <p>Free storage on fast-moving lines! It's all up to you. Product with a stock cover of 35 days or less receive free storage at our distribution centres. Alternatively, opt to sell on leadtime and only deliver the number of products ordered to avoid being charged</p>

<p className='py-1 px-2 bg-gray-200 w-fit my-3'><span className='font-semibold'>Formula:</span> Stock Cover = ( Total Stock / Sales unit in the last 30 days ) * 30</p>

  </div>

  <div className='mt-3 mb-1'>
<h2 className='text-lg text-[#4d4d4f] font-semibold'>Storage Fees</h2>
<p className='mt-2'>Eligible products are charged on the 1st day of the following month i.e. you will be charged for December's storage on 1 January</p>
  </div>


<div className='my-3 p-3 overflow-x-auto'>
<table className="table table-zebra">
<thead>
<tr>
<th className='text-white bg-primary py-7' colspan="5" style={{width:"auto"}}>
<p className='text-center'>Storage Fee per item/month (Rands)*</p>
</th>
</tr>
<tr>
<th className='text-white bg-primary py-7' style={{width:"auto"}}>
<p>Size of packaged product in cm<sup>3</sup></p>
</th>
<th className='text-white bg-primary py-7' style={{width:"auto"}}>
<p>0 -  35 stock days cover</p>
</th>
<th className='text-white bg-primary py-7' style={{width:"auto"}}>
<p>35+ stock days cover (Overstocked)</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td className="text-left">
<p>Small<br /><small>0 – <span>60 000 cm<sup>3</sup></span></small></p>
</td>
<td>
<p>R0</p>
</td>
<td>
<p>R4</p>
</td>
</tr>
<tr>
<td className="text-left">
<p>Standard<br /><small><span>60 001</span> – <span>130 000 cm<sup>3</sup></span></small></p>
</td>
<td>
<p>R0</p>
</td>
<td>
<p>R12</p>
</td>
</tr>
<tr>
<td className="text-left">
<p>Large<br /><small><span>130 001</span> – <span>200 000 cm<sup>3</sup></span></small></p>
</td>
<td>
<p>R0</p>
</td>
<td>
<p>R25</p>
</td>
</tr>
<tr>
<td className="text-left">
<p>Extra Large<br /><small><span>200 001</span> – <span>275 000 cm<sup>3</sup></span></small></p>
</td>
<td>
<p>R0</p>
</td>
<td>
<p>R45</p>
</td>
</tr>
<tr>
<td className="text-left">
<p>Oversize<br /><small><span>275 001</span> – <span>545 000 cm<sup>3</sup></span></small></p>
</td>
<td>
<p>R0</p>
</td>
<td>
<p>R150</p>
</td>
</tr>
<tr>
<td className="text-left">
<p>Bulky<br /><small><span>545 001</span> – <span>775 000 cm<sup>3</sup></span></small></p>
</td>
<td>
<p>R0</p>
</td>
<td>
<p>R250</p>
</td>
</tr>
<tr>
<td className="text-left">
<p>Extra Bulky<br /><small>&gt; <span>775 000 cm<sup>3</sup></span></small></p>
</td>
<td>
<p>R0</p>
</td>
<td>
<p>R450</p>
</td>
</tr>
</tbody>
</table>
</div>
                        </div>
                    </div>
 <p><small>* All fees are exclusive of VAT</small></p>                   
</div>




<div className='hero h-72 my-10' style={{backgroundImage: "url(https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/sell-on-takealot/line-art-bg.png-88f0c171cbf5ea3af16e.png)"}}>

<div className='flex items-center flex-col gap-7'>
    <p className='text-4xl lg:text-5xl font-bold text-white'>Ready to start selling online?</p>
    <Link to="/sell/apply" className=' text-center rounded-3xl lg:rounded-none px-8 py-2 border border-white bg-white bg-transparent text-primary font-medium text-sm transition-all duration-500 hover'>Apply Sell</Link>
</div>

</div>







        </section>
    );
};

export default SellOn;