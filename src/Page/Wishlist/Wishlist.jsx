import React from 'react';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';
import { HiArrowLeft, HiOutlinePlusSmall, HiShoppingCart, HiStar, HiXMark } from 'react-icons/hi2';
import { Link, NavLink } from 'react-router-dom';
import { IoShareSocialOutline } from "react-icons/io5";
import { useState } from 'react';
import { useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import "./home.css"
 
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { IoIosArrowDown } from 'react-icons/io';
import useWishlist from '../../hooks/useWishlist';
import useCart from '../../hooks/useCart';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useProfile from '../../hooks/useProfile';

const Wishlist = () => {
    const [allProducts , setAllProducts] = useState([]);
    const {user} = useAuth();
    const [carts, update] = useCart();
    const [axiosSecure] = useAxiosSecure();
    const [lists, refetch]=useWishlist();
    const [userInfo] = useProfile();
    
    console.log(lists)

    useEffect(()=>{
        fetch(`https://take-a-lot-server-two.vercel.app/all-products`)
        .then(res=>res.json())
        .then(data=>setAllProducts(data))
    },[]);


    const handleCart = async(id) =>{
      if(!user){
        Swal.fire({
          title: 'Error!',
          text: 'You have to login first!',
          icon: 'warning',
          confirmButtonText: 'Ok'
        })
      }else{
        const selectedProducts = allProducts.find(prod => prod?._id === id);
        const data = {
          totalPrice: selectedProducts?.Product_Price,
          quantity: 1,
          barcode : selectedProducts?.Barcode,
          brandName: selectedProducts?.Brand_Name,
          productName: selectedProducts?.Product_Name,
          basedPrice: selectedProducts?.Product_Price,
          productSKU: selectedProducts?.your_own_SKU ? selectedProducts?.your_own_SKU : "",
          productId: selectedProducts?._id,
          buyerInformation : {
            firstName: userInfo?.firstName,
            lastName: userInfo?.lastName,
            mobileNumber: userInfo?.mobile_Number ? userInfo?.mobile_Number : "",
            phone: userInfo?.phone ? userInfo?.phone : "",
            postalCode: userInfo?.postal_Code ? userInfo?.postal_Code : "",
            countryCode: userInfo?.countryCode,
            email: userInfo?.email,
            province: userInfo?.province ? userInfo?.province : "",
            streetAddress: userInfo?.street_Address ? userInfo?.street_Address : "",
          }
  
        }
        const response = await axiosSecure.post("add-product-cart", data);
        if(response.data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'Product add to cart!',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          update();
        }
      }
     }

    return (
        <section className='max-w-7xl mx-auto lg:px-5'>

<div className="text-xs breadcrumbs my-3 text-primary">
  <ul>
    <li><Link to="/my-account">My Account</Link></li> 
    <li><Link>My List</Link></li> 
  </ul>
</div>

<div className='flex items-start gap-10'>

<div className='hidden lg:block w-1/4 bg-white shadow rounded'>
<Link to="/my-account" className='inline-flex items-center p-4 gap-2'><HiArrowLeft className="h-5 w-5"/> <span className='text-[#000] font-semibold'>My Lists</span></Link>
<div className='border-b'></div>

<div className='text-xs w-full my-4 flex flex-col gap-2'>
<NavLink to="/wishlist" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Wishlist(0)</NavLink>

<label htmlFor="create_wishlist" className="bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent text-primary cursor-pointer inline-flex items-center"><HiOutlinePlusSmall className='h-5 w-5'/> Create a List</label>

<input type="checkbox" id="create_wishlist" className="modal-toggle" />
<div className="modal">
  <div className="modal-box rounded-md">
    <h3 className="font-bold text-lg text-center">Create List</h3>
    <p className="py-4">TODO</p>
    <div className="modal-action">
    <label htmlFor="create_wishlist" className="absolute top-3 right-3 cursor-pointer hover:text-error">
    <HiXMark className='w-7 h-7' />
    </label>
    </div>
  </div>
</div>
</div>
</div>

<div className='w-full overflow-hidden'>

<div className='w-full flex items-center justify-between'>
    <div className='inline-flex items-center gap-2'><p className='text-[#4d4d4f] font-semibold text-xl'>Wish List</p> <div className="px-6 rounded-2xl text-[10px] bg-gray-200 uppercase font-medium">Default</div></div>

    <div className='inline-flex items-center gap-1'>
<IoShareSocialOutline className='h-5 w-5'/> <span className='text-[#4d4d4f] font-semibold text-sm'>Share</span>
    </div>
</div>


{
  !lists?<div className='mt-4 rounded shadow bg-white py-2 h-80 flex items-center flex-col justify-center gap-3'>

  <div className='shadow px-2 py-2 rounded-full'>
  <img src="https://shopfront.takealot.com/b317a38ffe915f6034dfee91ccee142cabe5ca77/static/media/src/images/wishlist/wishlist-empty.svg-38f93f7194b84a6a1f59.svg" alt="Icon" className='rounded-full'/>
  </div>
  
  <h1 className='text-[#000] text-lg font-semibold'>This list is empty!</h1>
  <p className='text-base font-light text-[#4d4d4f]'>Go on, start planning what gifts you'd like!</p>
  
  <Link to="/all" className='py-2 px-5 border border-primary text-white font-semibold text-sm bg-primary rounded'>Continue Shopping</Link>
  
  
  </div>:<>
  {
    lists.map(list=><div className='mt-4 rounded shadow bg-white py-2 md:h-60 h-auto flex md:flex-row flex-col items-center justify-between  gap-3'>
    
    <div className='flex'>
    <div>
    <img className='w-36' src="https://media.takealot.com/covers_images/9eb0de31070040a9942bbbde404a92b4/s-zoom.file" alt="" />
    </div>
    <div>
      <h1 className='mt-5 ms-5 text-[#7C7C7D]'>{list?.productName}</h1>
      <Link className='mt-5 ms-5 text-xs text-blue-700'>{list.brandName}</Link><br />
      <button className='mt-5 ms-5 text-[#7C7C7D]'>In stock</button>
    </div>
    </div>
    <div className='md:mr-8 mt-5'>
      <h1 className='text-2xl text-end font-bold'>R {list.totalPrice
}</h1>
      <button onClick={()=>handleCart(list.productId)}  className=" bg-[#1C8644]  text-white flex px-7 mb-2 mt-5 py-2 gap-1 font-medium w-full"> <HiOutlinePlusSmall className='w-5 h-5'/><HiShoppingCart className='w-5 h-5' /> Add to Cart</button>
      <div className='flex items-center gap-2'>
      <select name="" id="" className='border bg-[#EAEAEA] px-4 py-2'>
        <option value="">Move</option>
        <option value="">Create a list </option>
      </select>
      <button className='p-2 text-2xl bg-[#EAEAEA]'><FaTrash/></button>
      </div>
    </div>
  </div>)
  }
  </>
}


<div className='my-5'>
<img src="https://tpc.googlesyndication.com/simgad/9334445511005059859?" alt="Banner" className='h-12 lg:h-20'/>
</div>

<div>
  <p className='text-[#000] text-lg font-semibold'>Trending Now</p>  
</div>

<div className="hidden lg:block w-full my-10 h-full overflow-hidden">
<Swiper
        slidesPerView={4}
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


<div className="lg:hidden w-full my-10 h-full overflow-hidden">
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

<div>

</div>

</div>


</div>


        </section>
    );
};

export default Wishlist;