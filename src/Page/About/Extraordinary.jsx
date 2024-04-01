import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Extraordinary.css';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { HiXMark } from 'react-icons/hi2';
import { BsPlayCircle } from 'react-icons/bs';

const Extraordinary = () => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    // setShowVideo(!showVideo);
  };
  return (
    <div>
      <div
        className="hero mb-10 lg:h-96 flex"
        style={{
          backgroundImage: `url('https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/tal-careers-banner.jpg-dcf760b2a74b6d148d15.jpg')`,
        }}
      >
        <div className="lg:px-14 flex-col lg:flex-row w-full items-start justify-start">
          <div className=" bg-white lg:px-6 px-5 lg:py-6 py-6 space-y-5 bg-opacity-90 w-full lg:w-2/4 h-full text-sm">
            <h1 className="text-3xl lg:text-5xl font-bold text-primary">
              Extraordinary Minds <br /> Wanted
            </h1>
            <p className="text-primary lg:text-2xl ">
              At takealot.com we firmly believe that the people with the best
              people win. And we plan on winning.
            </p>
            <button className="bg-primary py-2 px-4 rounded text-white hover:opacity-90">
              View our Job listings
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex md:flex-1 gap-10 px-4 lg:px-8">
        <div className='w-full'>
        <div className='video-card w-full shadow overflow-hidden mb-5'>
<motion.div className='videoThumb relative'   whileHover={{
    scale: 1.1,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}>
<img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/extraordinaryminds.jpg-f7362cbfaa3a89f6d3fa.jpg" alt="Extraordinary Minds Wanted" className='lg:h-72 w-full'/>
<label htmlFor="video90" className="w-full absolute top-[35%] left-[35%] lg:top-[40%] lg:left-[40%] cursor-pointer"><BsPlayCircle className='h-14 w-14 text-white'/></label>
</motion.div>

<input type="checkbox" id="video90" className="modal-toggle" />
<div className="modal w-full overflow-hidden">
  <div className="modal-box max-w-5xl h-96 p-0 overflow-hidden">
  <div className='w-full h-full'>
    <div className='w-full h-full'>
        <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="takealot.com | Extraordinary Minds Wanted" width="100%" height="100%" src="https://www.youtube.com/embed/G-wBbkcl_8w" id="widget6"></iframe>
        </div>
        </div>
    <div className="modal-action">
    <label htmlFor="video90" className="absolute top-2 right-2 cursor-pointer hover:text-error">
                            <HiXMark className='w-7 h-7 text-error' />
                            </label>
    </div>
  </div>
</div>
</div>
        </div>
        <div className='space-y-2 w-full'>
          <h2 className="lg:text-2xl font-semibold mb-5">
            Our company is built around the simple concept that the customer
            comes first.
          </h2>
          <p className='text-sm'>
            Takealot.com employees are entrepreneurial and dynamic, smart,
            customer‑centric, fun and have the shared ambition of takealot.com
            being the leading e‑commerce company in Africa.
          </p>
          <p className='text-sm'>
            We have fun, work hard, take ownership, work in teams to create
            solutions, and are always open to direct feedback/new ideas on where
            we can improve.
          </p>
          <p className='text-sm'>
            We are short on ego and high on output. We are doers and not only
            thinkers - it’s all in the execution after all. We love what we do
            and what we are creating. Join us and become a part of something
            epic.
          </p>
          <p className="text-primary hover:underline">Get to know us</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-center mt-10 mb-10">
          Ready for a challenge? Find your spot.
        </h2>
        <div className="md:flex flex-1 justify-center gap-5 text-center">
          <div className="card w-96 bg-base-100 shadow-xl rounded-md">
            <figure>
              <img
                src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/cape-town-central-office.jpg-12fb092eadf31beeb47f.jpg"
                alt=""
              />
            </figure>
            <div className="card-body text-center">
              <h2 className=" text-xl font-semibold">Cape Town</h2>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl rounded-md">
            <figure>
              <img
                className=""
                src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/cape-town-warehouse.jpg-72b774cadd8a320052a5.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className=" text-xl font-semibold">Cape Town Warehouse</h2>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 text-sm">
          <button className="bg-primary px-6 py-2 rounded text-white">
            View all job listings
          </button>
        </div>
      </div>



      {/* Our values section */}
      <div
        className="mt-10 mb-10"
        style={{
          backgroundImage: `url('https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/sell-on-takealot/line-art-bg.png-88f0c171cbf5ea3af16e.png')`,
        }}
      >
        <div className="text-center pt-10 pb-10">
          <h2 className="text-white text-3xl font-semibold mb-2">Our Values</h2>
          <p className="text-white">
            The takealot.com family lives and breathes by a set of core values
            that represent how we think and how we operate on a daily basis.
          </p>
        </div>

        <div className='hidden lg:block px-8 m-auto py-5 text-sm'>
        <Swiper
        slidesPerView={8}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true} 
        modules={[Navigation]}
        className="mySwiper"
      >
            <SwiperSlide className='mx-10 text-center'>
              <img className="w-20 bg-white rounded-full p-5 border-2 border-slate-500 mx-auto" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/fast.svg-cebf4659e365253e03e9.svg" alt="" />
              <h2 className="font-bold text-white mt-3">Fast</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10 text-center'>
              <img className="w-20 bg-white rounded-full p-5 border-2 border-slate-500 mx-auto" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/direct.svg-e60d9940f5a0c1768f90.svg" alt="" />
              <h2 className="font-bold text-white  mt-3">Direct</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10 text-center'>
              <img className="w-20 bg-white rounded-full p-5 border-2 border-slate-500 mx-auto" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/fun.svg-17c5dbdecf2e90299065.svg" alt="" />
              <h2 className="font-bold text-white mt-3">Fun</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10 text-center'>
              <img className="w-20 bg-white rounded-full p-5 border-2 border-slate-500 mx-auto" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/individualise.svg-d536d5e7ad2eb77ca5c2.svg" alt="" />
              <h2 className="font-bold text-white mt-3">Individualise</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10 text-center'>
              <img className="w-20 bg-white rounded-full p-5 border-2 border-slate-500 mx-auto" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/iterate.svg-60be55f7e1ab28f8a3a6.svg" alt="" />
              <h2 className="font-bold text-white  mt-3">Iterate and Innovate</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10 text-center'>
              <img className="w-20 bg-white rounded-full p-5 border-2 border-slate-500 mx-auto" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/simplify.svg-cf69f75fe7f684734fd6.svg" alt="" />
              <h2 className="font-bold text-white mt-3">Simplify</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10 text-center'>
              <img className="w-20 bg-white rounded-full p-5 border-2 border-slate-500 mx-auto" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/smart.svg-02a5963cbff95bfe25d8.svg" alt="" />
              <h2 className="font-bold text-white  mt-3">Smart</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10 text-center'>
              <img className="w-20 bg-white rounded-full p-5 border-2 border-slate-500 mx-auto" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/wise.svg-4d734faed6e3611d4acd.svg" alt="" />
              <h2 className="font-bold text-white mt-3">Wise</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10 text-center'>
              <img className="w-20 bg-white rounded-full p-5 border-2 border-slate-500 mx-auto" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/diversity.svg-83086d5bfdedd85a3ed3.svg" alt="" />
              <h2 className="font-bold text-white mt-3">Diversity</h2>
            </SwiperSlide>
           
                 
          </Swiper>
        </div>



        <div className='lg:hidden px-3 m-auto py-5 text-sm'>
        <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true} 
        modules={[Navigation]}
        className="mySwiper"
      >
            <SwiperSlide className='mx-10 text-center'>
              <img className="w-20 bg-white rounded-full p-5 border-2 border-slate-500 mx-auto" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/fast.svg-cebf4659e365253e03e9.svg" alt="" />
              <h2 className="font-bold text-white mt-3">Fast</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10 text-center'>
              <img className="w-20 bg-white rounded-full p-5 border-2 border-slate-500 mx-auto" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/direct.svg-e60d9940f5a0c1768f90.svg" alt="" />
              <h2 className="font-bold text-white  mt-3">Direct</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10 text-center'>
              <img className="w-20 bg-white rounded-full p-5 border-2 border-slate-500 mx-auto" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/fun.svg-17c5dbdecf2e90299065.svg" alt="" />
              <h2 className="font-bold text-white mt-3">Fun</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10 text-center'>
              <img className="w-20 bg-white rounded-full p-5 border-2 border-slate-500 mx-auto" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/individualise.svg-d536d5e7ad2eb77ca5c2.svg" alt="" />
              <h2 className="font-bold text-white mt-3">Individualise</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10 text-center'>
              <img className="w-20 bg-white rounded-full p-5 border-2 border-slate-500 mx-auto" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/iterate.svg-60be55f7e1ab28f8a3a6.svg" alt="" />
              <h2 className="font-bold text-white  mt-3">Iterate and Innovate</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10 text-center'>
              <img className="w-20 bg-white rounded-full p-5 border-2 border-slate-500 mx-auto" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/simplify.svg-cf69f75fe7f684734fd6.svg" alt="" />
              <h2 className="font-bold text-white mt-3">Simplify</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10 text-center'>
              <img className="w-20 bg-white rounded-full p-5 border-2 border-slate-500 mx-auto" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/smart.svg-02a5963cbff95bfe25d8.svg" alt="" />
              <h2 className="font-bold text-white  mt-3">Smart</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10 text-center'>
              <img className="w-20 bg-white rounded-full p-5 border-2 border-slate-500 mx-auto" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/wise.svg-4d734faed6e3611d4acd.svg" alt="" />
              <h2 className="font-bold text-white mt-3">Wise</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10 text-center'>
              <img className="w-20 bg-white rounded-full p-5 border-2 border-slate-500 mx-auto" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/diversity.svg-83086d5bfdedd85a3ed3.svg" alt="" />
              <h2 className="font-bold text-white mt-3">Diversity</h2>
            </SwiperSlide>
           
                 
          </Swiper>
        </div>
      </div>


        {/* What is like working */}
      <div className='my-14'>
        <h2 className='text-3xl font-semibold text-center mb-8 text-[#000]'>What’s it like working at South Africa’s most exciting start-up?</h2>


        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5 items-center justify-center px-3 lg:px-5'>
        <div className='video-card w-full shadow overflow-hidden'>
<motion.div className='videoThumb relative'   whileHover={{
    scale: 1.1,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}>
<img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/the-job-thumb.jpg-ce973b193a228602861e.jpg" alt="The Job" />
<label htmlFor="video30" className="w-full absolute top-[35%] left-[35%] lg:top-[40%] lg:left-[40%] cursor-pointer"><BsPlayCircle className='h-14 w-14 text-white'/></label>
</motion.div>


<div className='text-center text-sm text-[#4d4d4f] px-6 my-4'>
    <p><span className='text-lg font-semibold text-[#000]'>The Job</span></p>
</div>

<input type="checkbox" id="video30" className="modal-toggle" />
<div className="modal w-full overflow-hidden">
  <div className="modal-box max-w-5xl h-96 p-0 overflow-hidden">
  <div className='w-full h-full'>
    <div className='w-full h-full'>
        <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Working at Takealot.com - The Job" width="100%" height="100%" src="https://www.youtube.com/embed/doA_Fo_vfAI" id="widget30"></iframe>
        </div>
        </div>
    <div className="modal-action">
    <label htmlFor="video30" className="absolute top-2 right-2 cursor-pointer hover:text-error">
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
<img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/the-challenges-thumb.jpg-d20effa67836604f1fc4.jpg" alt="The Challenges" />
<label htmlFor="video31" className="w-full absolute top-[35%] left-[35%] lg:top-[40%] lg:left-[40%] cursor-pointer"><BsPlayCircle className='h-14 w-14 text-white'/></label>
</motion.div>


<div className='text-center text-sm text-[#4d4d4f] px-6 my-4'>
    <p><span className='text-lg font-semibold text-[#000]'>The Challenges</span></p>
</div>

<input type="checkbox" id="video31" className="modal-toggle" />
<div className="modal w-full overflow-hidden">
  <div className="modal-box max-w-5xl h-96 p-0 overflow-hidden">
  <div className='w-full h-full'>
    <div className='w-full h-full'>
        <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Working at Takealot.com - The Challenges" width="100%" height="100%" src="https://www.youtube.com/embed/1EqiPjKkRk0" id="widget30"></iframe>
        </div>
        </div>
    <div className="modal-action">
    <label htmlFor="video31" className="absolute top-2 right-2 cursor-pointer hover:text-error">
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
<img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/the-culture-thumb.jpg-22703cf26f390f681642.jpg" alt="The Culture" />
<label htmlFor="video33" className="w-full absolute top-[35%] left-[35%] lg:top-[40%] lg:left-[40%] cursor-pointer"><BsPlayCircle className='h-14 w-14 text-white'/></label>
</motion.div>


<div className='text-center text-sm text-[#4d4d4f] px-6 my-4'>
    <p><span className='text-lg font-semibold text-[#000]'>The Culture</span></p>
</div>

<input type="checkbox" id="video33" className="modal-toggle" />
<div className="modal w-full overflow-hidden">
  <div className="modal-box max-w-5xl h-96 p-0 overflow-hidden">
  <div className='w-full h-full'>
    <div className='w-full h-full'>
        <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Working at Takealot.com - The Culture" width="100%" height="100%" src="https://www.youtube.com/embed/Xfeag1DuIyE" id="widget32"></iframe>
        </div>
        </div>
    <div className="modal-action">
    <label htmlFor="video33" className="absolute top-2 right-2 cursor-pointer hover:text-error">
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
<img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/the-mentorship-thumb.jpg-6d1a24f01f52c1fbd6d7.jpg" alt="The Mentorship" />
<label htmlFor="video34" className="w-full absolute top-[35%] left-[35%] lg:top-[40%] lg:left-[40%] cursor-pointer"><BsPlayCircle className='h-14 w-14 text-white'/></label>
</motion.div>


<div className='text-center text-sm text-[#4d4d4f] px-6 my-4'>
    <p><span className='text-lg font-semibold text-[#000]'>The Mentorship</span></p>
</div>

<input type="checkbox" id="video34" className="modal-toggle" />
<div className="modal w-full overflow-hidden">
  <div className="modal-box max-w-5xl h-96 p-0 overflow-hidden">
  <div className='w-full h-full'>
    <div className='w-full h-full'>
        <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Working at Takealot.com - The Mentorship" width="100%" height="100%" src="https://www.youtube.com/embed/8OSZ9_sOkkc?autoplay=1&mute=0&controls=1&origin=https%3A%2F%2Fwww.takealot.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&fs=1&enablejsapi=1&widgetid=11" id="widget33"></iframe>
        </div>
        </div>
    <div className="modal-action">
    <label htmlFor="video34" className="absolute top-2 right-2 cursor-pointer hover:text-error">
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
<img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/meeting-the-minds-thumb.jpg-ecb1956157ae4cd3d047.jpg" alt="Meeting the Minds" />
<label htmlFor="video35" className="w-full absolute top-[35%] left-[35%] lg:top-[40%] lg:left-[40%] cursor-pointer"><BsPlayCircle className='h-14 w-14 text-white'/></label>
</motion.div>


<div className='text-center text-sm text-[#4d4d4f] px-6 my-4'>
    <p><span className='text-lg font-semibold text-[#000]'>Meeting the Minds</span></p>
</div>

<input type="checkbox" id="video35" className="modal-toggle" />
<div className="modal w-full overflow-hidden">
  <div className="modal-box max-w-5xl h-96 p-0 overflow-hidden">
  <div className='w-full h-full'>
    <div className='w-full h-full'>
        <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Working at Takealot.com - Meeting the Minds" width="100%" height="100%" src="https://www.youtube.com/embed/tfILYA1ajEY?autoplay=1&mute=0&controls=1&origin=https%3A%2F%2Fwww.takealot.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&fs=1&enablejsapi=1&widgetid=13" id="widget35"></iframe>
        </div>
        </div>
    <div className="modal-action">
    <label htmlFor="video35" className="absolute top-2 right-2 cursor-pointer hover:text-error">
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
<img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/retail-customer-thumb.jpg-8b217475772b292ea0e7.jpg" alt="Retail" />
<label htmlFor="video36" className="w-full absolute top-[35%] left-[35%] lg:top-[40%] lg:left-[40%] cursor-pointer"><BsPlayCircle className='h-14 w-14 text-white'/></label>
</motion.div>


<div className='text-center text-sm text-[#4d4d4f] px-6 my-4'>
    <p><span className='text-lg font-semibold text-[#000]'>Retail</span></p>
</div>

<input type="checkbox" id="video36" className="modal-toggle" />
<div className="modal w-full overflow-hidden">
  <div className="modal-box max-w-5xl h-96 p-0 overflow-hidden">
  <div className='w-full h-full'>
    <div className='w-full h-full'>
        <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Working at Takealot.com - Meeting the Minds" width="100%" height="100%" src="https://www.youtube.com/embed/3HW9OMOPL9c?autoplay=1&mute=0&controls=1&origin=https%3A%2F%2Fwww.takealot.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&fs=1&enablejsapi=1&widgetid=15" id="widget36"></iframe>
        </div>
        </div>
    <div className="modal-action">
    <label htmlFor="video36" className="absolute top-2 right-2 cursor-pointer hover:text-error">
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
<img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/retail-introduction-thumb.jpg-5cb3222e800ca5a5d21c.jpg" alt="Retail Introduction" />
<label htmlFor="video37" className="w-full absolute top-[35%] left-[35%] lg:top-[40%] lg:left-[40%] cursor-pointer"><BsPlayCircle className='h-14 w-14 text-white'/></label>
</motion.div>


<div className='text-center text-sm text-[#4d4d4f] px-6 my-4'>
    <p><span className='text-lg font-semibold text-[#000]'>Retail Introduction</span></p>
</div>

<input type="checkbox" id="video37" className="modal-toggle" />
<div className="modal w-full overflow-hidden">
  <div className="modal-box max-w-5xl h-96 p-0 overflow-hidden">
  <div className='w-full h-full'>
    <div className='w-full h-full'>
        <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Working at Takealot.com - Retail Introduction" width="100%" height="100%" src="https://www.youtube.com/embed/fvMwbb2TIcI?autoplay=1&mute=0&controls=1&origin=https%3A%2F%2Fwww.takealot.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&fs=1&enablejsapi=1&widgetid=17" id="widget37"></iframe>
        </div>
        </div>
    <div className="modal-action">
    <label htmlFor="video37" className="absolute top-2 right-2 cursor-pointer hover:text-error">
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
<img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/retail-opportunities-thumb.jpg-50baeba7e6f78d7e1189.jpg" alt="Retail Opportunities" />
<label htmlFor="video38" className="w-full absolute top-[35%] left-[35%] lg:top-[40%] lg:left-[40%] cursor-pointer"><BsPlayCircle className='h-14 w-14 text-white'/></label>
</motion.div>


<div className='text-center text-sm text-[#4d4d4f] px-6 my-4'>
    <p><span className='text-lg font-semibold text-[#000]'>Retail Opportunities</span></p>
</div>

<input type="checkbox" id="video38" className="modal-toggle" />
<div className="modal w-full overflow-hidden">
  <div className="modal-box max-w-5xl h-96 p-0 overflow-hidden">
  <div className='w-full h-full'>
    <div className='w-full h-full'>
        <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Working at Takealot.com - Retail Opportunities" width="100%" height="100%" src="https://www.youtube.com/embed/Gq-xTFr_5Gw?autoplay=1&mute=0&controls=1&origin=https%3A%2F%2Fwww.takealot.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&fs=1&enablejsapi=1&widgetid=19" id="widget38"></iframe>
        </div>
        </div>
    <div className="modal-action">
    <label htmlFor="video38" className="absolute top-2 right-2 cursor-pointer hover:text-error">
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
<img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/customer-service-thumb.jpg-8c18087c4d564ff0f29d.jpg" alt="Customer Service" />
<label htmlFor="video39" className="w-full absolute top-[35%] left-[35%] lg:top-[40%] lg:left-[40%] cursor-pointer"><BsPlayCircle className='h-14 w-14 text-white'/></label>
</motion.div>


<div className='text-center text-sm text-[#4d4d4f] px-6 my-4'>
    <p><span className='text-lg font-semibold text-[#000]'>Customer Service</span></p>
</div>

<input type="checkbox" id="video39" className="modal-toggle" />
<div className="modal w-full overflow-hidden">
  <div className="modal-box max-w-5xl h-96 p-0 overflow-hidden">
  <div className='w-full h-full'>
    <div className='w-full h-full'>
        <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Working at Takealot.com - Customer Service" width="100%" height="100%" src="https://www.youtube.com/embed/LtV3Jjumdkk?autoplay=1&mute=0&controls=1&origin=https%3A%2F%2Fwww.takealot.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&fs=1&enablejsapi=1&widgetid=21" id="widget39"></iframe>
        </div>
        </div>
    <div className="modal-action">
    <label htmlFor="video39" className="absolute top-2 right-2 cursor-pointer hover:text-error">
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
<img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/finance-thumb.jpg-2a17afd2e46c08ad75fc.jpg" alt="Finance" />
<label htmlFor="video40" className="w-full absolute top-[35%] left-[35%] lg:top-[40%] lg:left-[40%] cursor-pointer"><BsPlayCircle className='h-14 w-14 text-white'/></label>
</motion.div>


<div className='text-center text-sm text-[#4d4d4f] px-6 my-4'>
    <p><span className='text-lg font-semibold text-[#000]'>Finance</span></p>
</div>

<input type="checkbox" id="video40" className="modal-toggle" />
<div className="modal w-full overflow-hidden">
  <div className="modal-box max-w-5xl h-96 p-0 overflow-hidden">
  <div className='w-full h-full'>
    <div className='w-full h-full'>
        <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Working at Takealot.com - Finance" width="100%" height="100%" src="https://www.youtube.com/embed/9WK6zv1OA3Y?autoplay=1&mute=0&controls=1&origin=https%3A%2F%2Fwww.takealot.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&fs=1&enablejsapi=1&widgetid=23" id="widget40"></iframe>
        </div>
        </div>
    <div className="modal-action">
    <label htmlFor="video40" className="absolute top-2 right-2 cursor-pointer hover:text-error">
                            <HiXMark className='w-7 h-7 text-error' />
                            </label>
    </div>
  </div>
</div>
</div>
          
        </div>
      </div>



      {/* Our values section */}
      <div
        className="hero py-20 mt-10"
        style={{
          backgroundImage: `url('https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/sell-on-takealot/line-art-bg.png-88f0c171cbf5ea3af16e.png')`,
        }}
      >
        <div className="text-center">
          <h2 className="text-white lg:text-4xl text-2xl font-semibold mb-2">The people with the best people win. Join us.</h2>
          <div>
            <button className='text-primary bg-white px-6 py-2 rounded hover:bg-opacity-90 mt-6 text-sm'>View our job listings</button>
          </div>
         
        </div>
      </div>
      
    </div>
  );
};

export default Extraordinary;
