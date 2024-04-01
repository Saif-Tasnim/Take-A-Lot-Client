import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./home.css"
 
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { HiStar } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  const breakpoints = {
    768: {
      slidesPerView: 2,
      spaceBetween: 0 
    },
    1024: {
      slidesPerView: 4, 
      spaceBetween: 30
    },
  };
    const [allProducts , setAllProducts] = useState([]);
    // console.log(allProducts);

    useEffect(()=>{
        fetch(`https://take-a-lot-server-two.vercel.app/all-products`)
        .then(res=>res.json())
        .then(data=>setAllProducts(data))
    },[])

    // console.log(allProducts);


    return (
<section className="my-7">
  {/* Large Container */}
<div className="hidden lg:flex items-start w-full justify-center gap-10 px-5">
<div className="w-full lg:w-[72%] mt-7">
    <div className="product-container w-full">
<div className="w-full flex items-center justify-between mb-2  gap-5">
<Link to="/brand/nivea" className="text-base lg:text-xl font-bold text-[#4d4d4f] hover:underline w-full">NIVEA Premium Skin Care</Link>
<Link to="/all/nivea" className="px-3 py-1 border border-[#4d4d4f] text-[#4d4d4f]  font-semibold hover:bg-[#4d4d4f] hover:text-white transition-all duration-500 lg:w-1/5 w-1/2  text-center"><button>View More</button></Link>
</div>

<div className="product-cards w-full my-10 h-full">
<Swiper
        // slidesPerView={1}
        breakpoints={breakpoints}
        spaceBetween={30}
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
 
        {
allProducts.slice(0,10).map(prod=><SwiperSlide key={prod?._id} className="">

<Link to={`/product-details/${prod?.Product_Name}/${prod?._id}`} className="w-[200px] h-full overflow-visible flex flex-col gap-2 bg-white px-2 py-3 shadow hover:shadow-xl">

<div className="w-[150px] h-[120px] mx-auto">
<img src={prod?.Image_URL} alt={prod?.Product_Name} />
</div>

<div className="h-[40px] mt-8">
  <p className="text-xs font-normal text-[#4d4d4f] overflow-hidden">{prod?.Product_Name.slice(0,45)}{prod?.Product_Name.length > 50 ? "..." : ""}</p>
</div>

<div className="mt-3 flex flex-col space-y-2">
<p className="font-bold">R 220</p>
<p className=" inline-flex items-center gap-1 text-sm"><HiStar className='h-4 w-4 text-yellow-400' /> <span>4.3</span><span className='font-medium text-gray-600'>(20)</span> <span><IoIosArrowDown className='h-5 w-5 text-gray-500' /></span> </p>
</div>

</Link>

</SwiperSlide>)
        }

      </Swiper>

</div>

    </div>

    <div className="product-container w-full my-5">
<div className="w-full flex justify-between items-center mb-2  gap-5">
<Link to="/brand/apple" className="text-base lg:text-xl font-bold text-[#4d4d4f] hover:underline w-full">Shop iPhone 15 and Apple Watch</Link>
<Link to="/all/nivea" className="px-3 py-1 border border-[#4d4d4f] text-[#4d4d4f]  font-semibold hover:bg-[#4d4d4f] hover:text-white transition-all duration-500 w-1/2 lg:w-1/5    text-center"><button>View More</button></Link>
</div>

<div className="product-cards w-full my-10 h-full">
<Swiper
        // slidesPerView={1}
        breakpoints={breakpoints}
        spaceBetween={30}
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
 
        {
allProducts.slice(11,20).map(prod=><SwiperSlide key={prod?._id} className="">

<Link to={`/product-details/${prod?.Product_Name}/${prod?._id}`} className="w-[200px] h-full overflow-visible flex flex-col gap-2 bg-white px-2 py-3 shadow hover:shadow-xl">

<div className="w-[150px] h-[120px] mx-auto">
<img src={prod?.Image_URL} alt={prod?.Product_Name} />
</div>

<div className="h-[40px] mt-8">
  <p className="text-xs font-normal text-[#4d4d4f] overflow-hidden">{prod?.Product_Name.slice(0,45)}{prod?.Product_Name.length > 50 ? "..." : ""}</p>
</div>

<div className="mt-3 flex flex-col space-y-2">
<p className="font-bold">R 220</p>
<p className=" inline-flex items-center gap-1 text-sm"><HiStar className='h-4 w-4 text-yellow-400' /> <span>4.3</span><span className='font-medium text-gray-600'>(20)</span> <span><IoIosArrowDown className='h-5 w-5 text-gray-500' /></span> </p>
</div>

</Link>

</SwiperSlide>)
        }

      </Swiper>

</div>

    </div>

    <div className="product-container w-full my-5">
<div className="w-full flex justify-between items-center mb-2  gap-5">
<Link to="/brand/avon" className=" text-base lg:text-xl font-bold text-[#4d4d4f] hover:underline w-full">Go Far Away Beyond the Moon with Avon</Link>
<Link to="/all/nivea" className="px-3 py-1 border border-[#4d4d4f] text-[#4d4d4f]  font-semibold hover:bg-[#4d4d4f] hover:text-white transition-all duration-500 w-1/2 lg:w-1/5   text-center"><button>View More</button></Link>
</div>

<div className="product-cards w-full my-10 h-full">
<Swiper
        // slidesPerView={1}
        breakpoints={breakpoints}
        spaceBetween={30}
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
 
        {
allProducts.slice(21,28).map(prod=><SwiperSlide key={prod?._id} className="">

<Link to={`/product-details/${prod?.Product_Name}/${prod?._id}`} className="w-[200px] h-full overflow-visible flex flex-col gap-2 bg-white px-2 py-3 shadow hover:shadow-xl">

<div className="w-[150px] h-[120px] mx-auto">
<img src={prod?.Image_URL} alt={prod?.Product_Name} />
</div>

<div className="h-[40px] mt-8">
  <p className="text-xs font-normal text-[#4d4d4f] overflow-hidden">{prod?.Product_Name.slice(0,45)}{prod?.Product_Name.length > 50 ? "..." : ""}</p>
</div>

<div className="mt-3 flex flex-col space-y-2">
<p className="font-bold">R 220</p>
<p className=" inline-flex items-center gap-1 text-sm"><HiStar className='h-4 w-4 text-yellow-400' /> <span>4.3</span><span className='font-medium text-gray-600'>(20)</span> <span><IoIosArrowDown className='h-5 w-5 text-gray-500' /></span> </p>
</div>

</Link>

</SwiperSlide>)
        }

      </Swiper>

</div>

    </div>


    <div className="product-container w-full my-5">
<div className="w-full flex justify-between items-center mb-2  gap-5">
<Link to="/brand/oral-B" className="text-base lg:text-xl font-bold text-[#4d4d4f] hover:underline w-full">Shop Oral-B Advanced Technology</Link>
<Link to="/all/nivea" className="px-3 py-1 border border-[#4d4d4f] text-[#4d4d4f]  font-semibold hover:bg-[#4d4d4f] hover:text-white transition-all duration-500 w-1/2 lg:w-1/5   text-center"><button>View More</button></Link>
</div>

<div className="product-cards w-full my-10 h-full">
<Swiper
        // slidesPerView={1}
        breakpoints={breakpoints}
        spaceBetween={30}
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
 
        {
allProducts.slice(0,10).map(prod=><SwiperSlide key={prod?._id} className="">

<Link to={`/product-details/${prod?.Product_Name}/${prod?._id}`} className="w-[200px] h-full overflow-visible flex flex-col gap-2 bg-white px-2 py-3 shadow hover:shadow-xl">

<div className="w-[150px] h-[120px] mx-auto">
<img src={prod?.Image_URL} alt={prod?.Product_Name} />
</div>

<div className="h-[40px] mt-8">
  <p className="text-xs font-normal text-[#4d4d4f] overflow-hidden">{prod?.Product_Name.slice(0,45)}{prod?.Product_Name.length > 50 ? "..." : ""}</p>
</div>

<div className="mt-3 flex flex-col space-y-2">
<p className="font-bold">R 220</p>
<p className=" inline-flex items-center gap-1 text-sm"><HiStar className='h-4 w-4 text-yellow-400' /> <span>4.3</span><span className='font-medium text-gray-600'>(20)</span> <span><IoIosArrowDown className='h-5 w-5 text-gray-500' /></span> </p>
</div>

</Link>

</SwiperSlide>)
        }

      </Swiper>

</div>

    </div>


    <div className="product-container w-full my-5">
<div className="w-full flex justify-between mb-2 items-center gap-5">
<Link to="/brand/books" className="text-base lg:text-xl font-bold text-[#4d4d4f] hover:underline w-full">Must Read Books for 2023</Link>
<Link to="/all/nivea" className="w-1/2 lg:w-1/5 text-center px-3 py-1 border border-[#4d4d4f] text-[#4d4d4f]  font-semibold hover:bg-[#4d4d4f] hover:text-white transition-all duration-500"><button>View More</button></Link>
</div>

<div className="product-cards w-full my-10 h-full">
<Swiper
        // slidesPerView={1}
        breakpoints={breakpoints}
        spaceBetween={30}
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
 
        {
allProducts.slice(11,20).map(prod=><SwiperSlide key={prod?._id} className="">

<Link to={`/product-details/${prod?.Product_Name}/${prod?._id}`} className="w-[200px] h-full overflow-visible flex flex-col gap-2 bg-white px-2 py-3 shadow hover:shadow-xl">

<div className="w-[150px] h-[120px] mx-auto">
<img src={prod?.Image_URL} alt={prod?.Product_Name} />
</div>

<div className="h-[40px] mt-8">
  <p className="text-xs font-normal text-[#4d4d4f] overflow-hidden">{prod?.Product_Name.slice(0,45)}{prod?.Product_Name.length > 50 ? "..." : ""}</p>
</div>

<div className="mt-3 flex flex-col space-y-2">
<p className="font-bold">R 220</p>
<p className=" inline-flex items-center gap-1 text-sm"><HiStar className='h-4 w-4 text-yellow-400' /> <span>4.3</span><span className='font-medium text-gray-600'>(20)</span> <span><IoIosArrowDown className='h-5 w-5 text-gray-500' /></span> </p>
</div>

</Link>

</SwiperSlide>)
        }

      </Swiper>

</div>

    </div>
</div>

<div className="ad-container lg:flex flex-col gap-4 w-1/3">
<Link to="/brand/" className='w-full bg-white shadow p-2 rounded'>
  <img src="https://tpc.googlesyndication.com/simgad/9356886536132361546?" alt="Add" className='w-full'/>
</Link>

<Link to="/brand/" className='w-full bg-white shadow p-2 rounded'>
  <img src="https://tpc.googlesyndication.com/simgad/1677839733988465028?" alt="Add" className='w-full'/>
</Link>

<Link to="/brand/" className='w-full bg-white shadow p-2 rounded'>
  <img src="https://tpc.googlesyndication.com/simgad/8885274907475278951?" alt="Add" className='w-full'/>
</Link>

<Link to="/brand/" className='w-full bg-white shadow p-2 rounded'>
  <img src="https://tpc.googlesyndication.com/simgad/5496663184552262801?" alt="Add" className='w-full'/>
</Link>

<Link to="/brand/" className='w-full bg-white shadow p-2 rounded'>
  <img src="https://tpc.googlesyndication.com/simgad/8200232379673069226?" alt="Add" className='w-full'/>
</Link>

<Link to="/brand/" className='w-full bg-white shadow p-2 rounded'>
  <img src="https://tpc.googlesyndication.com/simgad/8737224084841716264?" alt="Add" className='w-full'/>
</Link>

<Link to="/brand/" className='w-full bg-white shadow p-2 rounded'>
  <img src="https://tpc.googlesyndication.com/simgad/146114024099689222?" alt="Add" className='w-full'/>
</Link>
</div>
</div>


{/* Mobile Container */}
<div className="flex flex-col gap-5 lg:hidden px-2 w-full">
<div className="product-container w-full">

<div className="my-5">
<div className='w-[95%] mx-auto'>
<Carousel className='text-center  mx-auto w-full' autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <Link to="/deal/">
                  <img src="https://media.takealot.com/b/2/cms/p/1200x1000/smart/filters:format(jpeg):background_color(white)/original_images/fca190f9c0401d4d6badc440331664bccc9ccf14.png" alt="" className='h-72 lg:h-72'/>
                </Link>
            </Carousel>          
</div>


<div className="w-full flex items-center justify-between mb-2  gap-5">
<Link to="/brand/nivea" className="text-sm lg:text-xl font-bold text-[#4d4d4f] hover:underline w-full">Get Ready For The Heat Wave</Link>
<Link to="/all/nivea" className="px-3 py-1 border border-[#4d4d4f] text-[#4d4d4f]  font-semibold hover:bg-[#4d4d4f] hover:text-white transition-all duration-500 lg:w-1/5 w-1/2  text-center rounded-3xl"><button>View More</button></Link>
</div>

<div className="product-cards w-full my-10 h-full">
<Swiper
        slidesPerView={2}
        spaceBetween={30}
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
 
        {
allProducts.slice(0,5).map(prod=><SwiperSlide key={prod?._id} className="">

<Link to={`/product-details/${prod?.Product_Name}/${prod?._id}`} className="w-[200px] h-full overflow-visible flex flex-col gap-2 bg-white px-2 py-3 shadow hover:shadow-xl">

<div className="w-[150px] h-[120px] mx-auto">
<img src={prod?.Image_URL} alt={prod?.Product_Name} />
</div>

<div className="h-[40px] mt-8">
  <p className="text-xs font-normal text-[#4d4d4f] overflow-hidden">{prod?.Product_Name.slice(0,45)}{prod?.Product_Name.length > 50 ? "..." : ""}</p>
</div>

<div className="mt-3 flex flex-col space-y-2">
<p className="font-bold">R 220</p>
<p className=" inline-flex items-center gap-1 text-sm"><HiStar className='h-4 w-4 text-yellow-400' /> <span>4.3</span><span className='font-medium text-gray-600'>(20)</span> <span><IoIosArrowDown className='h-5 w-5 text-gray-500' /></span> </p>
</div>

</Link>

</SwiperSlide>)
        }

      </Swiper>

</div>

    </div>

</div>



<div className="product-container w-full">

<div className="">
<div className='w-[95%] mx-auto'>
<Carousel className='text-center  mx-auto w-full' autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <Link to="/deal/">
                  <img src="https://media.takealot.com/b/2/cms/p/1200x1000/smart/filters:format(jpeg):background_color(white)/original_images/b69a5701a9c1a7ba2f859044ea513278d40576ff.png" alt="" className='h-72 lg:h-72'/>
                </Link>
                <Link to="/deal/">
                  <img src="https://media.takealot.com/b/2/cms/p/1200x1000/smart/filters:format(jpeg):background_color(white)/original_images/c19811286d799d68c1446a512b18efc13d0f0f16.png" alt="" className='h-72 lg:h-72'/>
                </Link>
                <Link to="/deal/">
                  <img src="https://media.takealot.com/b/2/cms/p/1200x1000/smart/filters:format(jpeg):background_color(white)/original_images/986229cb6859bdce3e65604d5ca5e73358950b92.png" alt="" className='h-72 lg:h-72'/>
                </Link>
            </Carousel>          
</div>


<div className="w-full flex items-center justify-between mt-8 gap-5 mb-5">
<Link to="/brand/nivea" className="text-sm lg:text-xl font-bold text-[#4d4d4f] hover:underline w-full">Summer Tech & Appliances Sale</Link>
<Link to="/all/nivea" className="px-3 py-1 border border-[#4d4d4f] text-[#4d4d4f]  font-semibold hover:bg-[#4d4d4f] hover:text-white transition-all duration-500 lg:w-1/5 w-1/2  text-center rounded-3xl"><button>View More</button></Link>
</div>

<div className="product-cards w-full my-10 h-full">
<Swiper
        slidesPerView={2}
        spaceBetween={30}
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
 
        {
allProducts.slice(11,20).map(prod=><SwiperSlide key={prod?._id} className="">

<Link to={`/product-details/${prod?.Product_Name}/${prod?._id}`} className="w-[200px] h-full overflow-visible flex flex-col gap-2 bg-white px-2 py-3 shadow hover:shadow-xl">

<div className="w-[150px] h-[120px] mx-auto">
<img src={prod?.Image_URL} alt={prod?.Product_Name} />
</div>

<div className="h-[40px] mt-8">
  <p className="text-xs font-normal text-[#4d4d4f] overflow-hidden">{prod?.Product_Name.slice(0,45)}{prod?.Product_Name.length > 50 ? "..." : ""}</p>
</div>

<div className="mt-3 flex flex-col space-y-2">
<p className="font-bold">R 220</p>
<p className=" inline-flex items-center gap-1 text-sm"><HiStar className='h-4 w-4 text-yellow-400' /> <span>4.3</span><span className='font-medium text-gray-600'>(20)</span> <span><IoIosArrowDown className='h-5 w-5 text-gray-500' /></span> </p>
</div>

</Link>

</SwiperSlide>)
        }

      </Swiper>

</div>

    </div>

</div>


<div className="product-container w-full">

<div className="">
<div className='w-[95%] mx-auto'>
<Carousel className='text-center  mx-auto w-full' autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <Link to="/deal/">
                  <img src="https://media.takealot.com/b/2/cms/p/1200x1000/smart/filters:format(jpeg):background_color(white)/original_images/5969340500b391d2551b4c55ece41b7f351f7e12.png" alt="" className='h-72 lg:h-72'/>
                </Link>
            </Carousel>          
</div>


<div className="w-full flex items-center justify-between mt-8 gap-5 mb-5">
<Link to="/brand/nivea" className="text-sm lg:text-xl font-bold text-[#4d4d4f] hover:underline w-full">Summer Outdoor Living Sale</Link>
<Link to="/all/nivea" className="px-3 py-1 border border-[#4d4d4f] text-[#4d4d4f]  font-semibold hover:bg-[#4d4d4f] hover:text-white transition-all duration-500 lg:w-1/5 w-1/2  text-center rounded-3xl"><button>View More</button></Link>
</div>

<div className="product-cards w-full my-10 h-full">
<Swiper
        slidesPerView={2}
        spaceBetween={30}
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
 
        {
allProducts.slice(21,30).map(prod=><SwiperSlide key={prod?._id} className="">

<Link to={`/product-details/${prod?.Product_Name}/${prod?._id}`} className="w-[200px] h-full overflow-visible flex flex-col gap-2 bg-white px-2 py-3 shadow hover:shadow-xl">

<div className="w-[150px] h-[120px] mx-auto">
<img src={prod?.Image_URL} alt={prod?.Product_Name} />
</div>

<div className="h-[40px] mt-8">
  <p className="text-xs font-normal text-[#4d4d4f] overflow-hidden">{prod?.Product_Name.slice(0,45)}{prod?.Product_Name.length > 50 ? "..." : ""}</p>
</div>

<div className="mt-3 flex flex-col space-y-2">
<p className="font-bold">R 220</p>
<p className=" inline-flex items-center gap-1 text-sm"><HiStar className='h-4 w-4 text-yellow-400' /> <span>4.3</span><span className='font-medium text-gray-600'>(20)</span> <span><IoIosArrowDown className='h-5 w-5 text-gray-500' /></span> </p>
</div>

</Link>

</SwiperSlide>)
        }

      </Swiper>

</div>

    </div>

</div>


<div className="product-container w-full">

<div className="">
<div className='w-[95%] mx-auto'>
<Carousel className='text-center  mx-auto w-full' autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <Link to="/deal/">
                  <img src="https://media.takealot.com/b/2/cms/p/1200x1000/smart/filters:format(jpeg):background_color(white)/original_images/3e7d25f2bfb7dd314b857d2a2235a07e09ad35f2.png" alt="" className='h-72 lg:h-72'/>
                </Link>
            </Carousel>          
</div>


<div className="w-full flex items-center justify-between mt-8 gap-5 mb-5">
<Link to="/brand/nivea" className="text-sm lg:text-xl font-bold text-[#4d4d4f] hover:underline w-full">Summer Sports Sale</Link>
<Link to="/all/nivea" className="px-3 py-1 border border-[#4d4d4f] text-[#4d4d4f]  font-semibold hover:bg-[#4d4d4f] hover:text-white transition-all duration-500 lg:w-1/5 w-1/2  text-center rounded-3xl"><button>View More</button></Link>
</div>

<div className="product-cards w-full my-10 h-full">
<Swiper
        slidesPerView={2}
        spaceBetween={30}
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
 
        {
allProducts.slice(0,5).map(prod=><SwiperSlide key={prod?._id} className="">

<Link to={`/product-details/${prod?.Product_Name}/${prod?._id}`} className="w-[200px] h-full overflow-visible flex flex-col gap-2 bg-white px-2 py-3 shadow hover:shadow-xl">

<div className="w-[150px] h-[120px] mx-auto">
<img src={prod?.Image_URL} alt={prod?.Product_Name} />
</div>

<div className="h-[40px] mt-8">
  <p className="text-xs font-normal text-[#4d4d4f] overflow-hidden">{prod?.Product_Name.slice(0,45)}{prod?.Product_Name.length > 50 ? "..." : ""}</p>
</div>

<div className="mt-3 flex flex-col space-y-2">
<p className="font-bold">R 220</p>
<p className=" inline-flex items-center gap-1 text-sm"><HiStar className='h-4 w-4 text-yellow-400' /> <span>4.3</span><span className='font-medium text-gray-600'>(20)</span> <span><IoIosArrowDown className='h-5 w-5 text-gray-500' /></span> </p>
</div>

</Link>

</SwiperSlide>)
        }

      </Swiper>

</div>

    </div>

</div>


<div className="product-container w-full">

<div className="">
<div className='w-[95%] mx-auto'>
<Carousel className='text-center  mx-auto w-full' autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <Link to="/deal/">
                  <img src="https://media.takealot.com/b/2/cms/p/1200x1000/smart/filters:format(jpeg):background_color(white)/original_images/ae56dd7c12bc67134a8d655857bdee16485a5daa.png" alt="" className='h-72 lg:h-72'/>
                </Link>
            </Carousel>          
</div>


<div className="w-full flex items-center justify-between mt-8 gap-5 mb-5">
<Link to="/brand/nivea" className="text-sm lg:text-xl font-bold text-[#4d4d4f] hover:underline w-full">App Only - Hottest Toys This Summer</Link>
<Link to="/all/nivea" className="px-3 py-1 border border-[#4d4d4f] text-[#4d4d4f]  font-semibold hover:bg-[#4d4d4f] hover:text-white transition-all duration-500 lg:w-1/5 w-1/2  text-center rounded-3xl"><button>View More</button></Link>
</div>

<div className="product-cards w-full my-10 h-full">
<Swiper
        slidesPerView={2}
        spaceBetween={30}
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
 
        {
allProducts.slice(6, 10).map(prod=><SwiperSlide key={prod?._id} className="">

<Link to={`/product-details/${prod?.Product_Name}/${prod?._id}`} className="w-[200px] h-full overflow-visible flex flex-col gap-2 bg-white px-2 py-3 shadow hover:shadow-xl">

<div className="w-[150px] h-[120px] mx-auto">
<img src={prod?.Image_URL} alt={prod?.Product_Name} />
</div>

<div className="h-[40px] mt-8">
  <p className="text-xs font-normal text-[#4d4d4f] overflow-hidden">{prod?.Product_Name.slice(0,45)}{prod?.Product_Name.length > 50 ? "..." : ""}</p>
</div>

<div className="mt-3 flex flex-col space-y-2">
<p className="font-bold">R 220</p>
<p className=" inline-flex items-center gap-1 text-sm"><HiStar className='h-4 w-4 text-yellow-400' /> <span>4.3</span><span className='font-medium text-gray-600'>(20)</span> <span><IoIosArrowDown className='h-5 w-5 text-gray-500' /></span> </p>
</div>

</Link>

</SwiperSlide>)
        }

      </Swiper>

</div>

    </div>

</div>


<div className="product-container w-full">

<div className="">
<div className='w-[95%] mx-auto'>
<Carousel className='text-center  mx-auto w-full' autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <Link to="/deal/">
                  <img src="https://media.takealot.com/b/2/cms/p/1200x1000/smart/filters:format(jpeg):background_color(white)/original_images/774e2515e35821b65151749efb6bb457265c675f.png" alt="" className='h-72 lg:h-72'/>
                </Link>
            </Carousel>          
</div>


<div className="w-full flex items-center justify-between mt-8 gap-5 mb-5">
<Link to="/brand/nivea" className="text-sm lg:text-xl font-bold text-[#4d4d4f] hover:underline w-full">App Only - Hottest Toys This Summer</Link>
<Link to="/all/nivea" className="px-3 py-1 border border-[#4d4d4f] text-[#4d4d4f]  font-semibold hover:bg-[#4d4d4f] hover:text-white transition-all duration-500 lg:w-1/5 w-1/2  text-center rounded-3xl"><button>View More</button></Link>
</div>

<div className="product-cards w-full my-10 h-full">
<Swiper
        slidesPerView={2}
        spaceBetween={30}
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
 
        {
allProducts.slice(11, 16).map(prod=><SwiperSlide key={prod?._id} className="">

<Link to={`/product-details/${prod?.Product_Name}/${prod?._id}`} className="w-[200px] h-full overflow-visible flex flex-col gap-2 bg-white px-2 py-3 shadow hover:shadow-xl">

<div className="w-[150px] h-[120px] mx-auto">
<img src={prod?.Image_URL} alt={prod?.Product_Name} />
</div>

<div className="h-[40px] mt-8">
  <p className="text-xs font-normal text-[#4d4d4f] overflow-hidden">{prod?.Product_Name.slice(0,45)}{prod?.Product_Name.length > 50 ? "..." : ""}</p>
</div>

<div className="mt-3 flex flex-col space-y-2">
<p className="font-bold">R 220</p>
<p className=" inline-flex items-center gap-1 text-sm"><HiStar className='h-4 w-4 text-yellow-400' /> <span>4.3</span><span className='font-medium text-gray-600'>(20)</span> <span><IoIosArrowDown className='h-5 w-5 text-gray-500' /></span> </p>
</div>

</Link>

</SwiperSlide>)
        }

      </Swiper>

</div>

    </div>

</div>


<div className="product-container w-full">

<div className="">
<div className='w-[95%] mx-auto'>
<Carousel className='text-center  mx-auto w-full' autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <Link to="/deal/">
                  <img src="https://media.takealot.com/b/2/cms/p/1200x1000/smart/filters:format(jpeg):background_color(white)/original_images/bcbe00e6a0c359d1f438bab696f5f7cba15f0ce6.png" alt="" className='h-72 lg:h-72'/>
                </Link>
            </Carousel>          
</div>


<div className="w-full flex items-center justify-between mt-8 gap-5 mb-5">
<Link to="/brand/nivea" className="text-sm lg:text-xl font-bold text-[#4d4d4f] hover:underline w-full">Best Of LEGO®</Link>
<Link to="/all/nivea" className="px-3 py-1 border border-[#4d4d4f] text-[#4d4d4f]  font-semibold hover:bg-[#4d4d4f] hover:text-white transition-all duration-500 lg:w-1/5 w-1/2  text-center rounded-3xl"><button>View More</button></Link>
</div>

<div className="product-cards w-full my-10 h-full">
<Swiper
        slidesPerView={2}
        spaceBetween={30}
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
 
        {
allProducts.slice(17, 21).map(prod=><SwiperSlide key={prod?._id} className="">

<Link to={`/product-details/${prod?.Product_Name}/${prod?._id}`} className="w-[200px] h-full overflow-visible flex flex-col gap-2 bg-white px-2 py-3 shadow hover:shadow-xl">

<div className="w-[150px] h-[120px] mx-auto">
<img src={prod?.Image_URL} alt={prod?.Product_Name} />
</div>

<div className="h-[40px] mt-8">
  <p className="text-xs font-normal text-[#4d4d4f] overflow-hidden">{prod?.Product_Name.slice(0,45)}{prod?.Product_Name.length > 50 ? "..." : ""}</p>
</div>

<div className="mt-3 flex flex-col space-y-2">
<p className="font-bold">R 220</p>
<p className=" inline-flex items-center gap-1 text-sm"><HiStar className='h-4 w-4 text-yellow-400' /> <span>4.3</span><span className='font-medium text-gray-600'>(20)</span> <span><IoIosArrowDown className='h-5 w-5 text-gray-500' /></span> </p>
</div>

</Link>

</SwiperSlide>)
        }

      </Swiper>

</div>

    </div>

</div>


<div className="product-container w-full">

<div className="">
<div className='w-[95%] mx-auto'>
<Carousel className='text-center  mx-auto w-full' autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <Link to="/deal/">
                  <img src="https://media.takealot.com/b/2/cms/p/1200x1000/smart/filters:format(jpeg):background_color(white)/original_images/d99059915402babaa2fe5664ffb72aacc0eb0b60.png" alt="" className='h-72 lg:h-72'/>
                </Link>
            </Carousel>          
</div>


<div className="w-full flex items-center justify-between mt-8 gap-5 mb-5">
<Link to="/brand/nivea" className="text-sm lg:text-xl font-bold text-[#4d4d4f] hover:underline w-full">New In Electronics</Link>
<Link to="/all/nivea" className="px-3 py-1 border border-[#4d4d4f] text-[#4d4d4f]  font-semibold hover:bg-[#4d4d4f] hover:text-white transition-all duration-500 lg:w-1/5 w-1/2  text-center rounded-3xl"><button>View More</button></Link>
</div>

<div className="product-cards w-full my-10 h-full">
<Swiper
        slidesPerView={2}
        spaceBetween={30}
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
 
        {
allProducts.slice(22, 28).map(prod=><SwiperSlide key={prod?._id} className="">

<Link to={`/product-details/${prod?.Product_Name}/${prod?._id}`} className="w-[200px] h-full overflow-visible flex flex-col gap-2 bg-white px-2 py-3 shadow hover:shadow-xl">

<div className="w-[150px] h-[120px] mx-auto">
<img src={prod?.Image_URL} alt={prod?.Product_Name} />
</div>

<div className="h-[40px] mt-8">
  <p className="text-xs font-normal text-[#4d4d4f] overflow-hidden">{prod?.Product_Name.slice(0,45)}{prod?.Product_Name.length > 50 ? "..." : ""}</p>
</div>

<div className="mt-3 flex flex-col space-y-2">
<p className="font-bold">R 220</p>
<p className=" inline-flex items-center gap-1 text-sm"><HiStar className='h-4 w-4 text-yellow-400' /> <span>4.3</span><span className='font-medium text-gray-600'>(20)</span> <span><IoIosArrowDown className='h-5 w-5 text-gray-500' /></span> </p>
</div>

</Link>

</SwiperSlide>)
        }

      </Swiper>

</div>

    </div>

</div>




</div>

</section>
    );
};

export default Home;