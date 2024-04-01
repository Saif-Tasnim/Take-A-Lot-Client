import { Link, useLocation,useNavigate } from "react-router-dom";
import { IoIosHeart, IoMdArrowBack, IoMdArrowForward, IoMdClose } from "react-icons/io";
import { HiShoppingCart, HiChevronRight, HiOutlineClock,HiUser } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import Banner from "../../Home/Banner/Banner";
import Register from "../../Register/Register";
import Login from "../../Login/Login";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import useSeller from "../../../hooks/useSeller";

const NavigationBar = () => {
    const [sellerInfo] =useSeller();
console.log(sellerInfo)
    const [carts, refetch] = useCart();
    const navigate = useNavigate();
    const {logOut,user} = useAuth()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const location = useLocation()
   console.log(carts)

    const onSubmit = (data) => console.log(data);
    const [shopPhoneMenu, setShopPhoneMenu] = useState(false);
    const [PhoneAccountMenu, setPhoneAccountMenu] = useState(false);
   

    const [isOpen, setIsOpen] = useState(false);

    const [dropdownOpen, setDropdownOpen] = useState(location.pathname === "/" ? true : false);

    const [deptName, setDeptName] = useState("");
    // console.log(deptName);
    const [mSearchPage, setMSearchPage] = useState(false)
    // console.log(mSearchPage);
    const inputRef = useRef(null);
    // console.log(inputRef);
 


    const handleInputClick = () => {
        setMSearchPage(true);
      };

      const handleModalContentClick = (e) => {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
            setMSearchPage(false);
          }
        
      };

      const handleOut = () =>{
        logOut()
        .then(()=>{
           
                              Swal.fire({
                                  title: 'Success!',
                                  text: 'Logout successful!',
                                  icon: 'success',
                                  confirmButtonText: 'Ok'
                              })
                              navigate("/")
        })
      }

    return (
        <header className={`z-50 nav-top  bg-white relative ${location.pathname === "/" && "lg:h-[720px]"}`}>

            {/* Mobile menu */}
            <div className={`absolute  lg:hidden bg-white min-h-screen transition-all duration-700 ${mSearchPage ? "top-0 right-0 left-0 z-50" : "-top-[1000px]  -right-[1000px] -left-[1000px]"}`} onClick={handleModalContentClick}>
                <div className="shadow-md py-3">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] mx-auto" ref={inputRef}>

                        <input type="text"  placeholder="Search for products, brands..." {...register("searchText")} className="w-full px-3 py-1 placeholder:text-xs placeholder:text-[#28282B] outline-none rounded-md border" />
                        <button onClick={()=>setMSearchPage(false)} className="absolute right-5 top-[13px] bg-[#4d4d4f] py-1 px-4 text-white rounded-r-md">
                            <IoMdClose className="h-6 w-6" />
                        </button>

                    </form>
                </div>
            </div>

            <div className="lg:hidden bg-white  w-full shadow-md sticky top-0 left-0 right-0">
                <nav>
                    <div className="navbar">
                        <div className="navbar-start">
                            <div className="drawer">
                            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
                            <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
                                <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu py-0 pl-0 pr-0 w-72 h-full bg-white text-base-content relative">
      <li className="shadow mb-2 py-2">
      <Link to="/"><img src="https://shopfront.takealot.com/aed55792c2c96c6c4f665ee46aa6ff6e20f41112/static/media/src/images/logo.svg-f6ccb489b85bbddf97d6.svg" alt="Takealot" className="w-28" /></Link>
      </li>
      
        <ul className="px-0 shadow my-3">
<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200">
    <Link to="/">Home</Link>
</li>
<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200" onClick={()=>setShopPhoneMenu(true)}>
    
    <p className="flex items-center justify-between">Shop by Category <IoMdArrowForward className="h-5 w-5"/></p>
</li>
<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200">
    <Link to="/deals">Deal</Link>
</li>
<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200">
    <Link to="/account/orders">Orders</Link>
</li>
<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200" onClick={()=>setPhoneAccountMenu(true)}>
    <Link to="/my-account" className="flex items-center justify-between">My Account <IoMdArrowForward className="h-5 w-5"/></Link>
</li>
<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200">
    <Link to="/help-centre">Help Center</Link>
</li>

        </ul>


        <ul className="px-0 shadow my-3">
<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200">
    <Link to="/cart" className="inline-flex items-center gap-2"> <HiShoppingCart className="w-5 h-5 text-success" /> Cart</Link>
</li>
<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200">
    <Link to="/" className="inline-flex items-center gap-2"><IoIosHeart className="w-5 h-5 text-error" /> Lists</Link>
</li>

        </ul>

{
    user ?  
    <ul className="w-full px-0 my-4 absolute bottom-0 flex items-center justify-around">
    <label className="px-3 py-1 inline-flex items-center gap-2 cursor-pointer border border-primary bg-primary rounded-3xl text-white font-semibold"><HiUser className="h-5 w-5"/> <span>{user?.displayName}</span></label>
    <label className="px-3 py-1 inline-flex items-center gap-2 cursor-pointer text-primary font-semibold" onClick={handleOut} >Logout</label>
    </ul> :
            <ul className="w-full px-0 my-4 absolute bottom-0 flex items-center justify-around">
            <label htmlFor="logIn_modal" className="px-3 py-1 inline-flex items-center gap-2 cursor-pointer border border-primary bg-primary rounded-3xl text-white font-semibold"><HiUser className="h-5 w-5"/> Login</label>
    <label htmlFor="register_modal" className="px-3 py-1 inline-flex items-center gap-2 cursor-pointer text-primary font-semibold">Register</label>
            </ul>
}

    </ul>

{
    shopPhoneMenu && <ul className="menu py-0 pl-0 pr-0 w-72 min-h-screen bg-white text-base-content">
    <li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200">
  <p className="flex items-center text-primary" onClick={()=>setShopPhoneMenu(false)}><IoMdArrowBack className="h-5 w-5"/> Main Menu</p>
 <span className="text-lg">Shop by category</span>
</li>
    
      <ul className="px-0 shadow my-3">

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200" onClick={() => setDeptName("Virtual Shopping Assistants")}>
  <span className="flex items-center justify-between">Virtual Shopping Assistants <IoMdArrowForward className="h-4 w-4" /></span>
</li>

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200" onClick={() => setDeptName("Automotive & DIY")}>
  <span className="flex items-center justify-between">Automotive & DIY <IoMdArrowForward className="h-4 w-4" /></span>
</li>

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200" onClick={() => setDeptName("Baby & toddle")}>
  <span className="flex items-center justify-between">Baby & toddle <IoMdArrowForward className="h-4 w-4" /></span>
</li>

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200" onClick={() => setDeptName("Beauty")}>
  <span to="/" className="flex items-center justify-between">Beauty <IoMdArrowForward className="h-4 w-4" /></span>
</li>

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200" onClick={() => setDeptName("Books & Course")}>
  <span to="/" className="flex items-center justify-between">Books & Course <IoMdArrowForward className="h-4 w-4" /></span>
</li>

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200" onClick={() => setDeptName("Camping & Outdoor")}>
  <span className="flex items-center justify-between">Camping & Outdoor <IoMdArrowForward className="h-4 w-4" /></span>
</li>

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200" onClick={() => setDeptName("Clothing, Shoes & Accessories")}>
  <span className="flex items-center justify-between">Clothing, Shoes & Accessories <IoMdArrowForward className="h-4 w-4" /></span>
</li>

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200" onClick={() => setDeptName("Electronics")}>
  <span className="flex items-center justify-between">Electronics <IoMdArrowForward className="h-4 w-4" /></span>
</li>

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200" onClick={() => setDeptName("Gaming & Media")}>
  <span  className="flex items-center justify-between">Gaming & Media <IoMdArrowForward className="h-4 w-4" /></span>
</li>

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200" onClick={() => setDeptName("Garden, Pool & Patio")}>
  <span className="flex items-center justify-between">Garden, Pool & Patio <IoMdArrowForward className="h-4 w-4" /></span>
</li>

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200" onClick={() => setDeptName("Groceries & Household")}>
  <span className="flex items-center justify-between">Groceries & Household <IoMdArrowForward className="h-4 w-4" /></span>
</li>

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200" onClick={() => setDeptName("Health & Personal Care")}>
  <span className="flex items-center justify-between">Health & Personal Care <IoMdArrowForward className="h-4 w-4" /></span>
</li>

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200" onClick={() => setDeptName("Home & Appliances")}>
  <span className="flex items-center justify-between">Home & Appliances <IoMdArrowForward className="h-4 w-4" /></span>
</li>

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200" onClick={() => setDeptName("Liquor")}>
  <span className="flex items-center justify-between">Liquor <IoMdArrowForward className="h-4 w-4" /></span>
</li>

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200" onClick={() => setDeptName("Office & Stationery")}>
  <span to="/" className="flex items-center justify-between">Office & Stationery <IoMdArrowForward className="h-4 w-4" /></span>
</li>

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200" onClick={() => setDeptName("Pets")}>
  <span to="/" className="flex items-center justify-between">Pets <IoMdArrowForward className="h-4 w-4" /></span>
</li>

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200" onClick={() => setDeptName("Sport & Training")}>
  <span to="/" className="flex items-center justify-between">Sport & Training <IoMdArrowForward className="h-4 w-4" /></span>
</li>

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200" onClick={() => setDeptName("Toys")}>
  <span to="/" className="flex items-center justify-between">Toys <IoMdArrowForward className="h-4 w-4" /></span>
</li>
      </ul>



  </ul>
}

{
    PhoneAccountMenu && <ul className="menu py-0 pl-0 pr-0 w-72 min-h-screen bg-white text-base-content">
    <li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200">
  <p className="flex items-center text-primary" onClick={()=>setPhoneAccountMenu(false)}><IoMdArrowBack className="h-5 w-5"/> Main Menu</p>
 <span className="text-lg">My Account</span>
</li>
    
      <ul className="px-0 shadow my-4">
      <li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200">
    <Link to="/account/orders">Orders</Link>
</li>
      <li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200">
    <Link to="/account/returns">Returns</Link>
</li>

      </ul>

      <ul className="px-0 shadow my-4">
      <li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200">
    <Link to="/account/personal-details">Personal Details</Link>
</li>
      <li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200">
    <Link to="/account/address-book">Address Book</Link>
</li>

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200">
    <Link to="/account/invoices">Invoices</Link>
</li>

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200">
    <Link to="/account/reviews">Product Reviews</Link>
</li>

<li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200">
    <Link to="/account/newsletter">Newsletter Subscriptions</Link>
</li>

      </ul>

      <ul className="px-0 shadow my-4">
      <li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200">
    <Link to="/account/credits">Credit & Refunds</Link>
</li>
      <li className="py-2 bg-white focus:bg-transparent hover:bg-transparent bg-transparent border-b border-b-gray-200">
    <Link to="/account/voucher">Redeem Gift Voucher</Link>
</li>

      </ul>



  </ul>
}

{
    deptName === "Virtual Shopping Assistants" ? <div className="department-container bg-gray-100  z-50 grid grid-cols-1 w-72">
    <div className="py-4 px-3">
    <p className="flex items-center text-primary" onClick={() => setDeptName("")}>
        <IoMdArrowBack className="h-5 w-5"/> Category Menu
        </p>
        <p className="text-primary font-bold text-sm mt-5">Virtual Shopping Assistants</p>

        <div className="my-3">
        <span className="text-[13px] text-gray-600 font-bold pl-2">Featured</span>
            <ul className="shadow bg-white">
                <li className="py-2 border-b border-b-gray-200">
                    <Link className="categorySubNav w-full" to="/advisor?id=">Backup Power Finder</Link>
                </li>
                <li className="py-2 border-b border-b-gray-200">
                    <Link className="categorySubNav w-full" to="/advisor?id=">Canon Printer Finder</Link>
                </li>
            </ul>

            <div className="mt-6">
            <span className="text-[13px] text-gray-600 font-bold pl-2">Appliances</span>
            <ul className="bg-white shadow">
                <li className="py-2 border-b border-b-gray-200">
                    <Link className="categorySubNav w-full" to="/advisor?id=">Fridges &amp; Freezers Finder</Link>
                </li>

                <li className="py-2 border-b border-b-gray-200">
                    <Link className="categorySubNav w-full" to="/advisor?id=">Washing Machine Finder</Link>
                </li>

                <li className="py-2 border-b border-b-gray-200">
                    <Link className="categorySubNav w-full" to="/advisor?id=">Coffee Machine Finder</Link>
                </li>
            </ul>
            </div>

            <div className="mt-6">
            <span className="text-[13px] text-gray-600 font-bold pl-2">Sport</span>
            <ul className="bg-white shadow">
                

                <li className="py-2 border-b border-b-gray-200">
                    <Link className="categorySubNav w-full" to="/advisor?id=">Running Shoes Finder</Link>
                </li>
            </ul>
            </div>
        </div>

    </div>
    <div className="px-3">
        <div className="mb-10">
        <div>
        <span className="text-[13px] text-gray-600 font-bold pl-2">Beauty &amp; Health</span>
            <ul className="shadow bg-white">
                <li className="py-2 border-b border-b-gray-200">
                    <Link className="categorySubNav w-full" to="/advisor?id=">Skin Care Finder</Link>
                </li>
                <li className="py-2 border-b border-b-gray-200">
                    <Link className="categorySubNav w-full" to="/advisor?id=">Dermatologist Recommended</Link>
                </li>
                <li className="py-2 border-b border-b-gray-200">
                    <Link className="categorySubNav w-full" to="/advisor?id=">Vitamins Finder</Link>
                </li>
            </ul>
        </div>
        <div className="mt-6">
        <span className="text-[13px] text-gray-600 font-bold pl-2">Electronics</span>
            <ul className="shadow bg-white">
                <li className="py-2 border-b border-b-gray-200">
                    <Link className="categorySubNav w-full" to="/advisor?id=">Laptop Finder</Link>
                </li>

                <li className="py-2 border-b border-b-gray-200">
                    <Link className="categorySubNav w-full" to="/advisor?id=">Cellphone Finder</Link>
                </li>

                <li className="py-2 border-b border-b-gray-200">
                    <Link className="categorySubNav w-full" to="/advisor?id=">TV Finder</Link>
                </li>
                <li className="py-2 border-b border-b-gray-200">
                    <Link className="categorySubNav w-full" to="/advisor?id=">Smart Watch Finder</Link>
                </li>
                <li className="py-2 border-b border-b-gray-200">
                    <Link className="categorySubNav w-full" to="/advisor?id=">Headphones Finder</Link>
                </li>
            </ul>
        </div>

        </div>
    </div>
</div>: deptName === "Automotive & DIY" ? <div className="department-container bg-gray-100  z-50 grid grid-cols-1 w-72">
                            <div className="bg-gray-100 px-3 py-4">
                            <p className="flex items-center text-primary" onClick={() => setDeptName("")}>
        <IoMdArrowBack className="h-5 w-5"/> Category Menu
        </p>
                                <p className="text-primary font-bold text-sm mt-5">Automotive &amp; DIY</p>

                                <div className="my-3">
                                    <ul>
                                        <li className="w-full py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full font-semibold inline-flex items-center justify-between" to="/all">New In DIY &amp; Automotive <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav font-semibold" to="/advisor?id=">Backup Power Finder</Link>
                                        </li>
                                        <li className="w-full py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav font-semibold inline-flex items-center justify-between" to="home-kitchen/homeinspiration">Home Inspiration <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav font-semibold w-full" to="/pool-garden/diy_auto">All DIY &amp; Home Improvement</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pool-garden/paint-and-supplies-25832">Paint &amp; Accessories</Link>
                                        </li>
                                        <li className="w-full py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full font-semibold" to="pool-garden/auto">All Automotive</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="pool-garden/car-care-and-cleaning-25854">Car Care &amp; Cleaning</Link>
                                        </li>
                                        <li className="w-full py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full font-semibold" to="pool-garden/diy-tools-and-machinery-25818">All Power Tools &amp; Machinery</Link>
                                        </li>

                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/all/tools-corner">Tools Corner</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/all/power-tools-cordlessl">Cordless Power Tools</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/pool-garden/industrial-power-tools-25823">Industrial Power Tools</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="pool-garden/measuring-tools-25820">Measuring Tools</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/pool-garden/diy-tools-and-machinery-25818">Hand Tools</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="pool-garden/tool-organisers-27436">Tool Organisers</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/pool-garden/workwear-and-ppe-25829">Workwear &amp; PPE</Link>
                                        </li>
                                        <li className=" py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full font-semibold" to="pool-garden/safety-and-security-25840">Home Security &amp; Accessories</Link>
                                        </li>

                                    </ul>

                                </div>

                            </div>
                            <div className="mt-6">
                            <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                <div className="shadow bg-white">
                               
                                    <ul>
                                        
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav inline-flex items-center justify-between" to="/all">Bosch Automotive <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav inline-flex items-center justify-between" to="/diy-auto/worx_shop">Worx SHOP <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav inline-flex items-center justify-between" to="/all/home-improvement-elements">Elements <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav inline-flex items-center justify-between" to="/pool-garden/enertec_store">Enertec <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/promotion/black_decker_diy_store">BLACK+DECKER</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/promotion/black_decker_diy_store">BLACK+DECKER</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/promotion/gedore">Gedore</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/pool-garden/ingco">Ingco</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/pool-garden/keter">Keter</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/promotion/majortech">Major Tech</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/promotion/motoQuip">MotoQuip</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/promotion/panachepaint">Panache Paints</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/promotion/ring">Ring</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/promotion/the_ryobi_store">Ryobi</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/promotion/stanley_tools_store">Stanley</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/promotion/stanley_tools_store">uvex</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/home-kitchen/yeelight">Yeelight</Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            
                        </div> : deptName === "Baby & toddle" ? <div className="department-container bg-gray-100  z-50 grid grid-cols-1 w-72">
                            <div className="px-3 py-4">
                            <p className="flex items-center text-primary" onClick={() => setDeptName("")}>
        <IoMdArrowBack className="h-5 w-5"/> Category Menu
        </p>
        <p className="text-primary font-bold text-sm mt-5">Baby & toddle</p>

                                <div className="my-3">
                                    <ul>
                                        <li className=" w-full py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav font-semibold inline-flex items-center justify-between" to="/all/new-to-tal-baby-and-toddler">New In Baby &amp; Toddler <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav font-semibold" to="/baby">All Baby &amp; Toddler</Link>
                                        </li>

                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/baby/feeding_baby">Nappies &amp; Changing</Link>
                                        </li>

                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/baby/maternity-care">Maternity</Link>
                                        </li>


                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/baby/baby-toys-activity">Baby Toys &amp; Activity Gea</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/baby/out_and_about">Travel</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/baby/baby_clothing">Baby Clothing</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/baby/care_nursery">Nursery</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/baby/electric-breast-pumps-27877">Breast Pump</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/baby/baby-formula-25273">Formula</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/baby/baby-food-and-snacks-25263">Food &amp; Snacks</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/baby/safety-equipment-25320">Safety Equipment</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/baby/health-equipment-25319">Health Equipment</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/baby/potty-training-25262">Potty Training</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/baby/bathing-and-grooming-25322">Bath Time</Link>
                                        </li>


                                    </ul>

                                </div>

                            </div>
                            <div className="mt-6">
                            <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                <div className="shadow bg-white">
                             
                                    <ul>
                                       
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/baby/pampers">Pampers </Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/baby/georgeandmasonbaby">George &amp; Mason Baby</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/baby/johnsonsbaby">Johnson's Baby </Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/pool-garden/enertec_store">Lush Living </Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/baby/nuk">NUK</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="baby/philipsmotherandchildcare">Philips Avent</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/baby/purity">Purity</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/baby/tommeetippee">Tommee Tippee</Link>
                                        </li>
                                        <li className=" w-full py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav inline-flex items-center justify-between" to="/pool-garden/keter">LEGO® DUPLO® store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div> : deptName === "Beauty" ? <div className="department-container bg-gray-100  z-50 grid grid-cols-1 w-72">
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="flex items-center text-primary" onClick={() => setDeptName("")}>
        <IoMdArrowBack className="h-5 w-5"/> Category Menu
        </p>
                                <p className="text-primary font-bold text-sm mt-5">Beauty</p>

                                <div className="my-3">
                                    <ul>
                                        <li className=" w-full py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav font-semibold inline-flex items-center justify-between" to="/all/new-to-tal-beauty">New In Beauty <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className=" w-full py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav font-semibold inline-flex items-center justify-between" to="/sun-shop">Sun Shop <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>

                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav font-semibold" to="/advisor?id=">Skin Care Finder</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav font-semibold" to="/advisor?id=">Derm Recommended Finder</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav font-semibold" to="/beauty/dermatological-skincar">Dermatological Skincare</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav font-semibold" to="/beauty/trending-makeup-looks">Trending Makeup Looks</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav font-semibold" to="/beauty">All Beauty</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/beauty/luxbeauty">Luxury Beauty</Link>
                                        </li>

                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/beauty/cleanbeauty">Clean Beauty</Link>
                                        </li>


                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/beauty/grooming">Men's Grooming</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/beauty/fragrance">Fragrances</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/beauty/luxury_beauty_fragrances">Luxury Fragrances</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/beauty/haircare">Hair Care</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/beauty/makeup">Makeup</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/salonhair">Salon Hair</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/beauty/skin-care">Skin Care</Link>
                                        </li>
                                    </ul>

                                </div>

                            </div>
                            <div className="mt-6">
                            <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                <div className="shadow bg-white">

                                    <ul className="flex flex-col">

                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav inline-flex items-center justify-between" to="/beauty/lancome">Lancôme <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav inline-flex items-center justify-between" to="/beauty/the-ordinary">The Ordinary Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav inline-flex items-center justify-between" to="/beauty/bobbibrown">Bobbi Brown <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav inline-flex items-center justify-between" to="/beauty/calvinklein">Calvin Klein Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/beauty/cetaphil_store">Cetaphil Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/beauty/eucerin">Eucerin <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/beauty/clarins">Clarins</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/beauty/clinique">Clinique</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/beauty/davidoff">Davidoff</Link>
                                        </li>

                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/beauty/ghd">GHD <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/beauty/loreal-professional-haircare">L'Oreal Professional Haircare <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/beauty/mac">MAC <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/beauty/loreal-mizani">Mizani <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/beauty/nivea">Nivea Store</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/beauty/redken">Redken Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>

                                    </ul>


                                </div>
                            </div>
                        </div>: deptName === "Books & Course" ? <div className="department-container bg-gray-100  z-50 grid grid-cols-1 w-72 min-h-screen">
                            <div className="bg-gray-100 px-3 py-4">
                            <p className="flex items-center text-primary" onClick={() => setDeptName("")}>
        <IoMdArrowBack className="h-5 w-5"/> Category Menu
        </p>
                                <p className="text-primary font-bold text-sm mt-5">Books &amp; Courses</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav py-2 border-b border-b-gray-200">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/all/new-to-tal-book">New in Books <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav mt-6">
                                            <Link className="w-full font-semibold" to="/books">All Books </Link>
                                        </li>

                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/books/fiction">Fiction</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/books/children">Children's Books</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/books/nonfiction">Non-Fiction</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/books/books_christian">Christian Living</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/books/cookbooks">Cookbooks</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/all/bestsellers">Bestsellers</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/books/top-ya-&amp">Best Young Adult Books</Link>
                                        </li>

                                        <li className="categorySubNav mt-6">
                                            <Link className="w-full font-semibold" to="/books/academic">All Academic Books</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/books/schoolbooks">School Books</Link>
                                        </li>

                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/beauty/academic">Tertiary Education</Link>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                        </div> : deptName === "Camping & Outdoor" ? <div className="department-container bg-gray-100  z-50 grid grid-cols-1 w-72 min-h-screen">
                            <div className="bg-gray-100 px-3 py-4">
                            <p className="flex items-center text-primary" onClick={() => setDeptName("")}>
        <IoMdArrowBack className="h-5 w-5"/> Category Menu
        </p>
        <p className="text-primary font-bold text-sm mt-5">Camping & Outdoor</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav py-2 border-b border-b-gray-200 w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/all/new-to-tal-camping">New in Camping <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav mt-6">
                                            <Link className="w-full font-semibold" to="/camping-outdoor">All Camping </Link>
                                        </li>

                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/tents">Tents &amp; Shelters</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/campingfurniture">Camping Furniture</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/outdoor_cooking">Outdoor Cooking</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/light">Lighting &amp; Gadgets</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/sleepinggea">Sleeping</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/campingoutdooraccessories">Accessories</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/refrigeration">Coolers &amp; Refrigeration</Link>
                                        </li>

                                        <li className="categorySubNav py-2 border-b border-b-gray-200 w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/camping-outdoor/backpacks-32557">Hiking Backpacks <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200 mt-6">
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/hobbies_activities">All Outdoor Activities</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/fishing-25712">Fishing</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/hiking-25719">Hiking</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/hunting-25718">Hunting</Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>


                            <div className="mt-6">
                            <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                <ul className="flex flex-col shadow bg-white">
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/motoquip">Moto-Quip <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/campground">Campground</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/gopro">GoPro</Link>
                                    </li>
                                </ul>


                            </div>
                        </div>: deptName === "Clothing, Shoes & Accessories" ? <div className="department-container bg-gray-100  z-50 grid grid-cols-1 w-72 h-full">
                            <div className="bg-gray-100 px-3 py-4">
                            <p className="flex items-center text-primary" onClick={() => setDeptName("")}>
        <IoMdArrowBack className="h-5 w-5"/> Category Menu
        </p>
        <p className="text-primary font-bold text-sm mt-5">Clothing, Shoes & Accessories</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-fashion">New in Fashion <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="w-full py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full font-semibold inline-flex items-center justify-between" to="/fresh-fashion">Fashion Faves <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="w-full py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full font-semibold inline-flex items-center justify-between" to="/fashion/outletstore">Fashion Outlet <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav mt-6">
                                            <Link className="w-full font-semibold" to="/fashion">All Fashion </Link>
                                        </li>

                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/fashion/men">Men</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/fashion/women">Women</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/fashion/kids">Kids</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/fashion/watches">Watches</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/fashion/jewellery">Jewellery</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/fashion/footwear">Footwear</Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/all/new-to-tal-luggage">New in Luggage <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>


                                        <li className="categorySubNav mt-6">
                                            <Link className="w-full font-semibold" to="/luggage-travel">All Luggage </Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/luggage-travel/suitcases">Suitcases</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/luggage-travel/business-bags">Business Bags</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/luggage-travel/backpacks-and-duffels">Backpacks &amp; Duffles</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/luggage-travel/walletsandpurses">Handbags &amp; Wallets</Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>


                            <div className="mt-6">
                            <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Fashion Stores</span>
                                <ul className="flex flex-col shadow bg-white">
                                    <li className="py-2 border-b border-b-gray-200 w-full" >
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/fashion/crocs">Crocs <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200 w-full">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/oakley">Oakley</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200 w-full">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/fashion/sissyboy">Sissy Boy</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200 w-full">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/fashion/rayban">Ray-Ban</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200 w-full">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/fashion/sissyboy">Sissy Boy</Link>
                                    </li>
                                </ul>
                               
                               <div className="mt-6 w-full z-50">
                               <span className="text-[13px] text-gray-600 font-bold pl-2 mt-3">Featured Luggage Stores</span>
                                <ul className="flex flex-col shadow bg-white w-full z-50">
                               

<li className="py-2 border-b border-b-gray-200 w-full">
    <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/Brand/American%20Tourister">American Tourister</Link>
</li>
<li className="py-2 border-b border-b-gray-200 w-full">
    <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/ecoearth">Eco Earth</Link>
</li>

<li className="py-2 border-b border-b-gray-200 w-full">
    <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/Brand/Samsoniter">Samsonite</Link>
</li>
<li className="py-2 border-b border-b-gray-200 w-full">
    <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/Brand/Travelite">Travelite</Link>
</li>
                                </ul>
                               </div>


                            </div>

                           </div> : deptName === "Electronics" ? <div className="department-container bg-gray-100  z-50 grid grid-cols-1 w-72 ">
                            <div className="bg-gray-100 px-3 py-4">
                            <p className="flex items-center text-primary" onClick={() => setDeptName("")}>
        <IoMdArrowBack className="h-5 w-5"/> Category Menu
        </p>
        <p className="text-primary font-bold text-sm mt-5">Electronics</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full font-semibold inline-flex justify-between items-center" to="/all/new-in-electronics">New In Electronics <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="w-full py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full font-semibold inline-flex items-center justify-between" to="/load-shedding">Loadshedding Solutions </Link>
                                        </li>
                                        <li className="w-full py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full font-semibold inline-flex items-center justify-between" to="/cameras/vlogging">Content Creation</Link>
                                        </li>
                                    </ul>

<div className="mt-6 w-full">
<p className="categorySubNav">
<Link className="w-full font-semibold" to="/all">All Electronics </Link>
</p>
                                    <ul className="shadow bg-white w-full">

                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/cellular-gps">Cellphones</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/computers/laptops">Laptops</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/cellular-gps/wearabletech">Smart Watches</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/computers">Computers</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/computers/computer-monitors-and-accessories">Monitors</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/computers/tablets_and_kindles">Tablets &amp; E-Readers</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/cameras">Cameras</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/cameras/actioncamerasanddrones">Drones</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/tv-audio-video/audio">Audio</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/tv-audio-video/video">Video</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/computers/smarthome">Smart Home</Link>
                                        </li>
                                    </ul>
</div>

                                </div>
                            </div>


                            <div className="mt-6 pb-4">
                            <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                <ul className="flex flex-col shadow bg-white">
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/acerstore">Acer </Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/apple">Apple</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/cellular-gps/mtnstore">MTN</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/cellular-gps/peachz_store">Peachz <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/asus">Asus</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/canonbrandstore">Canon</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/garmin">Garmin</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/hisensestore">Hisense</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/cellphones/huawei">Huawei</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/lenovostore">Lenovo</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/computers/logitech">Logitech</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/cellular-gps/nokia">Nokia</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/tv-audio-video/philips_lifestyle_audio">Philips</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/cellular-gps/nokia">Nokia</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/samsung">Samsung</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/xiaomi_store">Xiaomi</Link>
                                    </li>

                                </ul>


                            </div>
                         </div> : deptName === "Gaming & Media" ? <div className="department-container bg-gray-100  z-50 grid grid-cols-1 w-72">
                            <div className="bg-gray-100 px-3 py-4">
                            <p className="flex items-center text-primary" onClick={() => setDeptName("")}>
        <IoMdArrowBack className="h-5 w-5"/> Category Menu
        </p>
        <p className="text-primary font-bold text-sm mt-5">Gaming & Media</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-gaming">New In Gaming <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav w-full mt-6">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/all/gaming">All Gaming </Link>
                                        </li>

                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/gaming/playstation5">Playstation</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/promotion/xboxseries">Xbox</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/gaming/nintendo">Nintendo</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/gaming/pc">PC Gamng</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/gaming/gamesaccessories">Gaming Accessories</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/gaming/gamingmerch">Gaming Merchandise</Link>
                                        </li>
                                        <li className="categorySubNav mt-3">
                                            <Link className="w-full font-semibold" to="/all/movies">All Movies &amp; TV Series</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/movies/movie-merchandise">Movie Merchandise</Link>
                                        </li>
                                        <li className="categorySubNav mt-6">
                                            <Link className="w-full font-semibold" to="/all/music">All Music</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/music/musicalinstruments">Musical Instruments</Link>
                                        </li>


                                    </ul>

                                </div>
                            </div>


                            <div className="mt-6">
                            <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                <ul className="flex flex-col shadow bg-white">
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/gaming/preorder">Pre-Orders </Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/gaming/steelseries">Steelseries</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/brand/Cougar">Cougar</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/brand/Redragon">Redragon</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/music/instruments">Casio</Link>
                                    </li>

                                </ul>


                            </div>

                           
                        </div> : deptName === "Garden, Pool & Patio" ? <div className="department-container bg-gray-100  z-50 grid grid-cols-1 w-72">
                            <div className="bg-gray-100 px-3 py-4">
                            <p className="flex items-center text-primary" onClick={() => setDeptName("")}>
        <IoMdArrowBack className="h-5 w-5"/> Category Menu
        </p>
        <p className="text-primary font-bold text-sm mt-5">Garden, Pool & Patio</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-gpp">New In Garden, Pool &amp; Patio <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/all/pool-garden">All Garden, Pool &amp; Patio </Link>
                                        </li>

                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pool-garden/braai_new">All Braai</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pool-garden/charcoal">Charcoal Braais</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pool-garden/gas">Gas Braais</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pool-garden/braai-accessories">Braai Accessories</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full" to="/pool-garden/patio_new">All Patio</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pool-garden/patio-furniture">Patio Furniture</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pool-garden/patio-heaters">Patio Heaters</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pool-garden/outdoor-lighting">Outdoor Lighting</Link>
                                        </li>
                                        <li className="categorySubNav mt-3">
                                            <Link className="w-full font-semibold" to="/pool-garden/garden1">All Garden</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pool-garden/gardening-tools">Gardening  Tools</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pool-garden/seeds-and-bulbs">Seeds &amp; Bulbs</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pool-garden/garden-sheds-and-storage">Garden Storage</Link>
                                        </li>
                                        <li className="categorySubNav mt-3">
                                            <Link className="w-full font-semibold" to="/pool-garden/gardening-tools">All Pool</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pool-garden/pool-cleaners-and-accessories">Pool Cleaners</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pool-garden/swimming-aids-and-inflatables">Pool Inflatables</Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>


                            <div className="mt-6">
                            <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                <ul className="flex flex-col shadow bg-white">
                                   
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full font-semibold inline-flex justify-between items-center" to="/pool-garden/wonderstore">Wonder <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full font-semibold inline-flex justify-between items-center" to="/all/lifespace-store">Lifespace <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full font-semibold inline-flex justify-between items-center" to="/camping-outdoor/bluetti">Bluetti <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full font-semibold inline-flex justify-between items-center" to="/pool-garden/gardenai">Gardena <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full font-semibold inline-flex justify-between items-center" to="/promotion/motoquip">MotoQuip Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full font-semibold inline-flex justify-between items-center" to="/promotion/yale">Yale <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/black_decker_diy_store">Black &amp; Decker </Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/pool-garden/bosch_power_tools">Bosch</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/megamasterstore">Megamaster</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/the_ryobi_store">Ryobi</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/braaimaster">Ultimate Braai Master</Link>
                                    </li>

                                </ul>


                            </div>
                           </div> : deptName === "Groceries & Household" ? <div className="department-container bg-gray-100  z-50 grid grid-cols-1 w-72">
                            <div className="bg-gray-100 px-3 py-4">
                            <p className="flex items-center text-primary" onClick={() => setDeptName("")}>
        <IoMdArrowBack className="h-5 w-5"/> Category Menu
        </p>
        <p className="text-primary font-bold text-sm mt-5">Groceries & Household</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-groceries-and-household">New In Groceries &amp; Household <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/alot-for-less">ALOT For Less </Link>
                                        </li>

                                        <li className="categorySubNav mt-3">
                                            <Link className="w-full font-semibold" to="/home-kitchen/foodcupboard">All Groceries</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/health/snacks">Healthy Snacks</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/home-kitchen/biscuits-rusks-and-crackers">Biscuits, Rusks &amp; Crackers</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/home-kitchen/breakfast-cereals-and-bars">Breakfast Cereals &amp; Bars</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full" to="/home-kitchen/tea-coffee-and-hot-drinks">Coffee, Tea &amp; Hot Drinks</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/home-kitchen/condiments-spices-and-sauces">Condiments, Spices &amp; Sauces</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/home-kitchen/canned-and-jarred-foods">Canned &amp; Jarred Foods</Link>
                                        </li>

                                        <li className="categorySubNav mt-3">
                                            <Link className="w-full font-semibold" to="/home-kitchen/householdcleaning">All Household Cleaning</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/home-kitchen/dishwashing">Dishwashing</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/home-kitchen/all-purpose-cleaners">All Purpose Cleaners</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/home-kitchen/floor-cleaners">Floor Cleaners</Link>
                                        </li>
                                        <li className="categorySubNav mt-4">
                                            <Link className="w-full font-semibold" to="/promotion/monthlyessentials">Everyday Essentials</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/promotion/restaurantessentialsmrd">Restaurant Essentials</Link>
                                        </li>

                                    </ul>

                                </div>
                            </div>


                            <div className="mt-6">
                            <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                <ul className="flex flex-col shadow bg-white">
                                   
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full font-semibold inline-flex justify-between items-center" to="/home-kitchen/a_coffee_for_every_cup">A Coffee For Every Cup <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full font-semibold inline-flex justify-between items-center" to="/home-kitchen/caffeluxe-store">Caffeluxe Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full font-semibold inline-flex justify-between items-center" to="/promotion/liquifruit">Liqui Fruit &amp; Lipton <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full font-semibold inline-flex justify-between items-center" to="/promotion/whatsfordinner">whatsfordinner <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/bokomo">Bokomo</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/mars">Mars Store </Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/nescafedolcegusto">Nescafe Dolce Gusto </Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/nestlegrocery">Nestle Groceries</Link>
                                    </li>
                                </ul>


                            </div>
                            </div> : deptName === "Health & Personal Care" ? <div className="department-container bg-gray-100  z-50 grid grid-cols-1 w-72">
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="flex items-center text-primary" onClick={() => setDeptName("")}>
        <IoMdArrowBack className="h-5 w-5"/> Category Menu
        </p>
        <p className="text-primary font-bold text-sm mt-5">Health & Personal Care</p>
                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-health">New In Health &amp; Personal Care</Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/advisor?id=">Vitamins Finder </Link>
                                        </li>

                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/health/thewellnessstore">Wellness Store</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/health/sportsnutrition">Sports Nutrition</Link>
                                        </li>
                                        <li className="categorySubNav mt-4">
                                            <Link className="w-full font-semibold" to="/all/health">All Health Care</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/health/first-aid">Sanitize &amp; First Aid</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/health/health-equipment">Health Equipment</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/health/medicine-and-treatments">Medicine &amp; Treatments</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/health/sexual-health">Sexual Health</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/home-kitchen/condiments-spices-and-sauces">Condiments, Spices &amp; Sauces</Link>
                                        </li>

                                        <li className="categorySubNav mt-4">
                                            <Link className="w-full font-semibold" to="/health/personalcare">All Personal Care</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/beauty/grooming">Men's Grooming</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/beauty/haircare">Hair Care</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/health/natural-care">Natural Care</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/health/lip-and-skin-care">Lip &amp; Skin Care</Link>
                                        </li>


                                    </ul>

                                </div>
                            </div>


                            <div className="mt-6">
                            <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                <ul className="flex flex-col shadow bg-white">
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/health/oral_b">Oral-B <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/health/bayerstore">Bayer Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/health/muscletech-store">MuscleTech Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/health/nestlehealth">Nestlé Health Science Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/health/sohoflordisinternational">SFI Health Store<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/ssasupplements">SSA Supplements Store<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/nivea">Nivea</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/reckittbenckiser">The Personal Care Store </Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/philipsstore">Philips </Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/usnstore">USN</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/health/himalayastore">Himalaya</Link>
                                    </li>
                                </ul>

                            </div>
                        </div> : deptName === "Home & Appliances" ? <div className="department-container bg-gray-100  z-50 grid grid-cols-1 w-72">
                            <div className="bg-gray-100 px-3 py-4">
                            <p className="flex items-center text-primary" onClick={() => setDeptName("")}>
        <IoMdArrowBack className="h-5 w-5"/> Category Menu
        </p>
        <p className="text-primary font-bold text-sm mt-5">Home & Appliances</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav py-2 border-b border-b-gray-200">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-in-home-and-appliances">New In Home &amp; Appliances<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav w-full py-2 border-b border-b-gray-200">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/advisor?id=">Washing Machine Finder </Link>
                                        </li>
                                        <li className="categorySubNav w-full py-2 border-b border-b-gray-200">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/advisor?id=">Fridges &amp; Freezers Finder </Link>
                                        </li>
                                        <li className="categorySubNav w-full py-2 border-b border-b-gray-200">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/advisor?id=">Coffee Machine Finder </Link>
                                        </li>

                                        <li className="categorySubNav w-full py-2 border-b border-b-gray-200">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/home-kitchen/homeinspiration">Home Inspiration <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav w-full py-2 border-b border-b-gray-200">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/home-kitchen/baking">Baking <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav py-2 border-b border-b-gray-200">
                                            <Link className="w-full font-semibold" to="/home-kitchen/storage">Storage</Link>
                                        </li>

                                        <li className="categorySubNav w-full py-2 border-b border-b-gray-200">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/home-kitchen/homeware-starter-kit">New Home Starter-Kit <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>

                                        <li className="categorySubNav mt-4">
                                            <Link className="w-full font-semibold" to="/all/home-kitchen">All Homeware</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/home-kitchen/cookware1">Kitchen</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/home-kitchen/dining_entertaining">Dining &amp; Entertaining</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/home-kitchen/furniture">Furniture &amp; Decor</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/home-kitchen/bedbathhome">Bed &amp; Bath</Link>
                                        </li>

                                        <li className="categorySubNav w-full mt-4">
                                            <Link className="w-full font-semibold items-center justify-between inline-flex" to="/home-kitchen/appliances">All Appliances <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold items-center justify-between inline-flex" to="/promotion/restaurantessentialsmrd">Restaurant Essentials</Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold items-center justify-between inline-flex" to="/pool-garden/installation-services-vouchers">Installation Vouchers</Link>
                                        </li>



                                    </ul>

                                </div>
                            </div>


                            <div className="mt-6">
                            <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                <ul className="flex flex-col shadow bg-white">
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/home-kitchen/pnphome-store">Pick n Pay Home <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/home-kitchen/decakilastore">Decakila <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/home-kitchen/univa">Univa<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/home-kitchen/midea_store">Midea<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/brand-store/berkart-store">Berkart<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/pool-garden/bright-star-lighting-store">Bright Star Lighting<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/home-kitchen/ecovacs">ECOVACS Robot Vacs<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/all/lifespace-store">Lifespace<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/home-kitchen/dysonstore">Dyson<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/all/tineco-floor-washer-vacuum-cleaners-store">TINECO Floor Washer Vacs<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/greenlane">Greenlane Gear<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/home-kitchen/carrol-boyes-store">Carrol Boyes<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/georgeandmason">George &amp; Mason</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/home-kitchen/legend_housewares_store">Legend Housewares </Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/promotion/lecreusetstore">Le Creuset </Link>
                                    </li>
                                </ul>

                            </div>
                        </div> : deptName === "Liquor" ? <div className="department-container bg-gray-100  z-50 grid grid-cols-1 w-72 pb-6">
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="flex items-center text-primary" onClick={() => setDeptName("")}>
        <IoMdArrowBack className="h-5 w-5"/> Category Menu
        </p>
        <p className="text-primary font-bold text-sm mt-5">Liquor</p>
                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-liquor">New In Liquor<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>

                                        <li className="categorySubNav mt-4">
                                            <Link className="w-full font-semibold" to="/home-kitchen/liquor">All Liquor</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/home-kitchen/wine">Wine</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/home-kitchen/beer">Beers &amp; Ciders</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/home-kitchen/whisky">Whisky &amp; Bourbon</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className=" categorySubNav w-full" to="/home-kitchen/gin">Gin</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className=" categorySubNav w-full" to="/home-kitchen/vodka">Vodka</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className=" categorySubNav w-full" to="/home-kitchen/tequila">Tequila &amp; Agave</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className=" categorySubNav w-full" to="/all/liqueurs-and-apertifs">Liqueurs &amp; Aperitifs</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className=" categorySubNav w-full" to="/all/non-alcoholic-drinks">Non-Alcoholic Wine Beers Spirits</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className=" categorySubNav w-full" to="/home-kitchen/non-alcoholic">Beverages</Link>
                                        </li>

                                    </ul>

                                </div>
                            </div>


                            <div className="mt-6">
                            <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                <ul className="flex flex-col shadow bg-white">

                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/liquorlocker">Bacardi-Martini Official Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/liquor/kwvstore">KWV Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/home-kitchen/chillbeverages">Chill Beverages Store<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/liquor/tanqueray-store">Tanqueray<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/distellstore">The Sip Selection<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/world-class-spirits-a-gift-for-any-occasion-store">World Class Spirits<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/heinekenstore">Heineken</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/johnniewalker">Johnnie Walker</Link>
                                    </li>

                                </ul>


                            </div>

                        </div>: deptName === "Office & Stationery" ? <div className="department-container bg-gray-100  z-50 grid grid-cols-1 w-72 pb-6">
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="flex items-center text-primary" onClick={() => setDeptName("")}>
        <IoMdArrowBack className="h-5 w-5"/> Category Menu
        </p>
        <p className="text-primary font-bold text-sm mt-5">Office & Stationery</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-stationery-and-office">New In Office &amp; Stationery<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>

                                        <li className="categorySubNav mt-4">
                                            <Link className="w-full font-semibold" to="/office-stationery/office">All Office</Link>
                                        </li>

                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/office-stationery/office-furniture">Furniture</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/office-stationery/office-consumables">Consumables</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/computers/printing">Printers &amp; Ink</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/office-stationery/office-supplies">Filing &amp; Organising</Link>
                                        </li>


                                        <li className="categorySubNav mt-4">
                                            <Link className="w-full font-semibold" to="/office-stationery/student">All Stationery</Link>
                                        </li>

                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/office-stationery/arts_crafts">Arts &amp; Crafts</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/office-stationery/paper">Paper</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/office-stationery/pens-and-refills">Pens &amp; Refills</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/office-stationery/colouring">Art Supplies</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/office-stationery/fine-writing">Fine Writing</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="w-full categorySubNav" to="/office-stationery/technical-instruments">Technical Drawing</Link>
                                        </li>

                                    </ul>

                                </div>
                            </div>


                            <div className="mt-6">
                            <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                <ul className="flex flex-col shadow bg-white">
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/store/lifespace-store">Lifespace <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/bic">BIC Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/cricut">Cricut<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/office-stationery/fellowes">Fellowes<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>

                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/office-stationery/maped">MapedHelix</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/office-stationery/brother">Brother</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/canonprinters">Canon Printers</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/epson">Epson</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/office-stationery/helix">Helix</Link>
                                    </li>

                                </ul>


                            </div>

                        </div> : deptName === "Pets" ? <div className="department-container bg-gray-100  z-50 grid grid-cols-1 w-72 pb-6">
                            <div className="bg-gray-100 px-3 py-4">
                               
                                <p className="flex items-center text-primary" onClick={() => setDeptName("")}>
        <IoMdArrowBack className="h-5 w-5"/> Category Menu
        </p>
        <p className="text-primary font-bold text-sm mt-5">Pets</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-pets">New In Pets<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/promotion/vetstore">Vet Store<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/pets/mars-petcare">Mars Pets<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>

                                        <li className="categorySubNav mt-4">
                                            <Link className="w-full font-semibold" to="/all/pets">All Pets</Link>
                                        </li>

                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pets/dogsupplies">Dogs</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pets/catsupplies">Cats</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pets/fish">Fish</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pets/Hamster">Rodents</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pets/Rabbit">Rabbits</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pets/Reptile">Reptiles</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pets/Livestock">Livestock</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pets/Horses">Horses</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/pets/Birds">Birds</Link>
                                        </li>


                                    </ul>

                                </div>
                            </div>


                            <div className="mt-6">
                            <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                <ul className="flex flex-col shadow bg-white">
                                    
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/pets/montego-store">Montego</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/pets/rogz">Rogz Store</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/pets/marltons">Marltons</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/pets/optimizor">Optimizor</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/pets/petcuisine">Pet Cuisine</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/pets/wiggle">Wiggle</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/pets/martin-and-martin-store">Bob Martin</Link>
                                    </li>

                                </ul>


                            </div>
                         </div> : deptName === "Sport & Training" ? <div className="department-container bg-gray-100  z-50 grid grid-cols-1 w-72 pb-6">
                            <div className="bg-gray-100 px-3 py-4">
                            <p className="flex items-center text-primary" onClick={() => setDeptName("")}>
        <IoMdArrowBack className="h-5 w-5"/> Category Menu
        </p>
        <p className="text-primary font-bold text-sm mt-5">Sport & Training</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-sport">New in Sport<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/sport/newclearancestore">Sports Deals Store<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/advisor?id=">Shoe Finder<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>

                                        <li className="categorySubNav mt-4">
                                            <Link className="w-full font-semibold" to="/all/sport">All Sport</Link>
                                        </li>

                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/sport/sports-clothing">All Sports Clothing</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/sport/sports-footwear">All Sports Footwear</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/sport/runnerschecklist">Running</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/sport/cyclingstore">Cycling</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200 w-full">
                                            <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/sport/watersports">Watersports <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/sport/teamsports">All Sports Equipment</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/sport/newexercise">Fitness Store</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/sport/injury-prevention-and-recovery">Recovery</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/health/sportsnutrition">Sports Nutrition</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/sport/sports-technology">Sport Wearable Tech</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/sport/takealot-fan-gear">Fan Gear</Link>
                                        </li>



                                    </ul>

                                </div>
                            </div>


                            <div className="mt-6">
                            <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                <ul className="flex flex-col shadow bg-white">

                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/nike">Nike</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/asics">ASICS</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/underarmour">Under Armour</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/sport/reebok">Reebok</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/sport/New%20Balance">New Balance</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/sport/Puma">Puma</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/sport/getup">GetUp</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/sport/gorillasports">Gorilla Sports</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/sport/Everlast">Everlast</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center font-semibold" to="/all/nutrition">Nutrition</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/health/usn">USN</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/health/muscletech-store">Muscletech</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/ssasupplements">SSA Supplements Store</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/gaming/x-gamer">X-Gamer</Link>
                                    </li>


                                </ul>


                            </div>

                        </div>: deptName === "Toys" ? <div className="department-container bg-gray-100  z-50 grid grid-cols-1 w-72 pb-6">
                            <div className="bg-gray-100 px-3 py-4">

                                <p className="flex items-center text-primary" onClick={() => setDeptName("")}>
        <IoMdArrowBack className="h-5 w-5"/> Category Menu
        </p>
        <p className="text-primary font-bold text-sm mt-5">Toys</p>
                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-toys">New in Toys<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>

                                        <li className="categorySubNav mt-4">
                                            <Link className="w-full font-semibold" to="/all/toys">All Toys</Link>
                                        </li>

                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/toys/actionfigures">Action Figures &amp; Dolls</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/office-stationery/arts_crafts">Arts &amp; Crafts</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/toys/boardgames">Board Games</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/toys/card-games">Card Games</Link>
                                        </li>
                                        <li className="w-full py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full inline-flex items-center justify-between" to="/toys/indoor-play">Indoor Play</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/toys/kids-party-supplies">Kids Party Supplies</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/toys/outdoor-play">Outdoor Play</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/toys/puzzles">Puzzles</Link>
                                        </li>
                                        <li className="py-2 border-b border-b-gray-200">
                                            <Link className="categorySubNav w-full" to="/all/smart-toys">Smart Toys</Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>


                            <div className="mt-6">
                            <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                <ul className="flex flex-col shadow bg-white">
                                
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/baby/lego_duplo">LEGO®DUPLO® <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/toys/solarpop">Solarpop</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/disney">Disney</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/promotion/fisherprice">Fisher Price</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/toys/hasbrostore">Hasbro</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/toys/legopage">LEGO®</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/toys/playshifu">Playshifu</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/toys/toykingdomhape">Toy Kingdom Hape</Link>
                                    </li>
                                    <li className="py-2 border-b border-b-gray-200">
                                        <Link className="categorySubNav w-full inline-flex justify-between items-center" to="/toys/magformers">Magformers</Link>
                                    </li>


                                </ul>


                            </div>
                        </div>: ""
} 


  </div>
                            </div>
                        </div>
                        <div className="navbar-center">
                            <Link to="/"><img src="https://shopfront.takealot.com/aed55792c2c96c6c4f665ee46aa6ff6e20f41112/static/media/src/images/logo.svg-f6ccb489b85bbddf97d6.svg" alt="Takealot" className="w-32" /></Link>
                        </div>
                        <div className="navbar-end">
                            <button className="btn btn-ghost btn-circle" onClick={handleInputClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                            <button className="btn btn-ghost btn-circle">
                                <Link to="/cart" className="indicator">
                                    <HiShoppingCart className="w-5 h-5" />
                                </Link>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>





            {/* large menubar */}
            <div className="bg-white z-50">
                <nav className="hidden lg:flex justify-between w-full px-4 py-4 max-w-7xl mx-auto">
                    <div className="w-full inline-flex items-center space-x-2">
                        <div className="space-x-12 inline-flex items-center">
                            <Link to="/"><img src="https://shopfront.takealot.com/aed55792c2c96c6c4f665ee46aa6ff6e20f41112/static/media/src/images/logo.svg-f6ccb489b85bbddf97d6.svg" alt="Takealot" className="w-44" /></Link>

                            <Link to="/help-centre" className="smallLink">Help Center</Link>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div>
                        <Link to="/sell-on-takealot" className="smallLink">Sell on Takealot</Link>
                        </div>
                    </div>
                    <div className="w-full text-right">
                        <div className="inline-flex items-center justify-center">
                            {/* <Link to="/login" className="smallLink">Login</Link> */}
                            {
                                user ? <label className="smallLink"><span>Hi</span> <span>{user?.displayName}</span> <span className="cursor-pointer"  onClick={handleOut}><small>(that's not me)</small></span></label>  : <label htmlFor="logIn_modal" className="smallLink cursor-pointer">Login</label>
                            }
                            
                            <div className="divider divider-horizontal"></div>
                            {/* <Link to="/register" className="smallLink">Register</Link> */}
                            {/* <button className="smallLink">Register</button> */}
                            {
                                user ?  <label className="smallLink cursor-pointer" onClick={handleOut} >Logout</label> : <label htmlFor="register_modal" className="smallLink cursor-pointer">Register</label>
                            }
                            

                           

                            
                            <div className="divider divider-horizontal"></div>
                            <Link to="/account/orders" className="smallLink">Orders</Link>
                            <div className="divider divider-horizontal"></div>


                            <div
                                className="relative inline-block text-left group mr-2"
                                onMouseEnter={() => setIsOpen(true)}

                            >
                                <button
                                    className="text-[13px] hover:text-primary inline-flex items-center z-50"
                                    onMouseLeave={() => setIsOpen(false)}
                                >
                                    My Account
                                    {isOpen ? (
                                        <FaAngleUp className="ml-2" />
                                    ) : (
                                        <FaAngleDown className="ml-2" />
                                    )}
                                </button>
                                <div
                                    className={`${isOpen ? 'flex flex-col gap-1 px-4 py-2  transition-all duration-500' : '-top-96'
                                        } absolute right-0  mt-0  w-36 rounded-md shadow-lg bg-white z-50`}
                                    onMouseEnter={() => setIsOpen(true)}
                                    onMouseLeave={() => setIsOpen(false)}
                                >

                                    <Link to="/my-account" className="smallLink">My Account</Link>
                                    {
                                        sellerInfo?.status === "approved" && <Link to="/seller-account-overview" className="smallLink">Account Overview</Link>
                                    }
                                    {
                                        sellerInfo?.status === "approved" && <Link to="/seller-dashboard/dashboard-home" className="smallLink">Seller Dashboard</Link>
                                    }
                                    <Link to="/account/orders" className="smallLink">Track Order</Link>
                                    <Link to="/account/returns" className="smallLink">Returns</Link>
                                    <Link to="/account/credits" className="smallLink">Credits & Refunds</Link>
                                    <Link to="/account/reviews" className="smallLink">Product Reviews</Link>
                                    <Link to="/account/invoices" className="smallLink">Invoices</Link>
                                    <Link to="/account/personal-details" className="smallLink">Personal Details</Link>
                                    <Link to="/help-centre" className="smallLink">Help Center</Link>
                                </div>
                            </div>



                            <div className="wishlist-and-cart inline-flex items-center gap-3">
                                <Link to="wishlist">
                                    <p className="bg-error hover:bg-[#f5464f] px-2 py-2 rounded-full">
                                        <IoIosHeart className="w-5 h-5 text-white" />
                                    </p>

                                </Link>
                                <Link to="/cart" className="inline-flex items-center gap-4 px-3 py-1 bg-success rounded-2xl font-semibold text-white cursor-pointer hover">
                                    <HiShoppingCart className="w-5 h-5" /> <span>{carts?.length ? carts?.length : 0}</span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
            <div className="hidden lg:block bg-primary px-4 py-2">
                <nav className="hidden lg:flex items-center justify-between gap-8 h-[80px] relative max-w-7xl mx-auto">
                    <div className="w-1/4">
                        <div className="dropdown dropdown-open" onMouseEnter={() => setDropdownOpen(true)}>
                            <label tabIndex={0} className="inline-flex items-center justify-between text-white bg-[#4d4d4f] px-4 py-2 rounded-md text-[13px] w-56">Shop by Department <FaAngleDown className="w-4 h-4" /></label>
                            {
                                dropdownOpen && <ul tabIndex={0} className="dropdown-content z-[1]  shadow bg-white w-56 pt-2 border-r">

                                    <li className="categoryNav w-full" onMouseEnter={() => setDeptName("Virtual Shopping Assistants")} onMouseLeave={() => setDeptName("")}>Virtual Shopping Assistants <HiChevronRight className="h-4 w-4" /></li>

                                    <li className="categoryNav w-full" onMouseEnter={() => setDeptName("Automotive & DIY")} onMouseLeave={() => setDeptName("")}>Automotive & DIY <HiChevronRight className="h-4 w-4" /></li>

                                    <li className="categoryNav w-full" onMouseEnter={() => setDeptName("Baby & toddle")} onMouseLeave={() => setDeptName("")}>Baby & toddle <HiChevronRight className="h-4 w-4" /></li>

                                    <li className="categoryNav w-full" onMouseEnter={() => setDeptName("Beauty")} onMouseLeave={() => setDeptName("")}>Beauty <HiChevronRight className="h-4 w-4" /></li>

                                    <li className="categoryNav w-full" onMouseEnter={() => setDeptName("Books & Course")} onMouseLeave={() => setDeptName("")}>Books & Course <HiChevronRight className="h-4 w-4" /></li>

                                    <li className="categoryNav w-full" onMouseEnter={() => setDeptName("Camping & Outdoor")} onMouseLeave={() => setDeptName("")}>Camping & Outdoor <HiChevronRight className="h-4 w-4" /></li>

                                    <li className="categoryNav w-full" onMouseEnter={() => setDeptName("Clothing, Shoes & Accessories")} onMouseLeave={() => setDeptName("")}>Clothing, Shoes & Accessories <HiChevronRight className="h-4 w-4" /></li>

                                    <li className="categoryNav w-full" onMouseEnter={() => setDeptName("Electronics")} onMouseLeave={() => setDeptName("")}>Electronics <HiChevronRight className="h-4 w-4" /></li>

                                    <li className="categoryNav w-full" onMouseEnter={() => setDeptName("Gaming & Media")} onMouseLeave={() => setDeptName("")}>Gaming & Media <HiChevronRight className="h-4 w-4" /></li>

                                    <li className="categoryNav w-full" onMouseEnter={() => setDeptName("Garden, Pool & Patio")} onMouseLeave={() => setDeptName("")}>Garden, Pool & Patio <HiChevronRight className="h-4 w-4" /></li>

                                    <li className="categoryNav w-full" onMouseEnter={() => setDeptName("Groceries & Household")} onMouseLeave={() => setDeptName("")}>Groceries & Household <HiChevronRight className="h-4 w-4" /></li>

                                    <li className="categoryNav w-full" onMouseEnter={() => setDeptName("Health & Personal Care")} onMouseLeave={() => setDeptName("")}>Health & Personal Care <HiChevronRight className="h-4 w-4" /></li>

                                    <li className="categoryNav w-full" onMouseEnter={() => setDeptName("Home & Appliances")} onMouseLeave={() => setDeptName("")}>Home & Appliances <HiChevronRight className="h-4 w-4" /></li>

                                    <li className="categoryNav w-full" onMouseEnter={() => setDeptName("Liquor")} onMouseLeave={() => setDeptName("")}>Liquor <HiChevronRight className="h-4 w-4" /></li>

                                    <li className="categoryNav w-full" onMouseEnter={() => setDeptName("Office & Stationery")} onMouseLeave={() => setDeptName("")}>Office & Stationery <HiChevronRight className="h-4 w-4" /></li>

                                    <li className="categoryNav w-full" onMouseEnter={() => setDeptName("Pets")} onMouseLeave={() => setDeptName("")}>Pets <HiChevronRight className="h-4 w-4" /></li>

                                    <li className="categoryNav w-full" onMouseEnter={() => setDeptName("Sport & Training")} onMouseLeave={() => setDeptName("")}>Sport & Training<HiChevronRight className="h-4 w-4" /></li>

                                    <li className="categoryNav w-full" onMouseEnter={() => setDeptName("Toys")} onMouseLeave={() => setDeptName("")}>Toys <HiChevronRight className="h-4 w-4" /></li>


                                    <Link className="inline-flex  items-center justify-center w-full py-2 gap-2 bg-green-500 mt-1 text-base-100"><HiOutlineClock className="h-7 w-7" /> <span className="text-xl font-bold">Daily Deals</span></Link>

                                </ul>
                            }
                        </div>
                    </div>
                    <div className="w-full relative">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input type="text" onClick={handleInputClick}  ref={inputRef} placeholder="Search for products, brands..." {...register("searchText")} className="w-full px-3 py-1 placeholder:text-xs placeholder:text-[#28282B] outline-none rounded-md" />
                            <button className="absolute right-0 bg-[#4d4d4f] py-1 px-4 text-white rounded-r-md">
                                <IoMdSearch className="h-6 w-6" />
                            </button>

                        </form>
                            
                        <div className="w-full grid grid-cols-8 mt-2 text-center text-[#333333] text-xs bg-[#ededed] rounded-l-sm rounded-r-sm">
                            <Link to="/alot-for-less" className="  py-[6px] text-white bg-[#55378b] hover:bg-[#61419c] rounded-l-sm"> Alot For Less</Link>


                            <Link to="/world-cup" className="border-r border-[#ccc] py-[6px]">World Cup 2023</Link>

                            <Link to="/new-takealot" className="border-r border-[#ccc] py-[6px]"> New to Takealot</Link>

                            <Link to="/christmas" className="border-r border-[#ccc] py-[6px]"> Christmas</Link>

                            <Link to="/small-local-businesses" className="border-r border-[#ccc] py-[6px]"> Small Local Sellers</Link>

                            <Link to="/deals-promotions" className="border-r border-[#ccc] py-[6px]"> Deals & Promotions</Link>


                            <Link to="/promotion/clearancesale" className="border-l border-r border-[#ccc] py-[6px]"> Clearance</Link>

                            <Link to="/brand-store" className=" py-[6px] rounded-r-sm"> Brands Store</Link>


                        </div>
                    </div>

                    {
                        deptName === "Virtual Shopping Assistants" ? <div onMouseLeave={() => setDropdownOpen(false)}><div className="department-container absolute left-[220px] bg-white w-[650px] h-[550px] top-0.5 mt-14 z-50 grid lg:grid-cols-3" onMouseEnter={() => setDeptName("Virtual Shopping Assistants")} onMouseLeave={() => setDeptName("")}>
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="text-primary font-bold text-[13px] ">Virtual Shopping Assistants</p>

                                <div className="my-3">
                                    <ul>
                                        <span className="text-[13px] text-gray-600 font-bold pl-2">Featured</span>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/advisor?id=">Backup Power Finder</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/advisor?id=">Canon Printer Finder</Link>
                                        </li>
                                    </ul>

                                    <ul className="mt-2">
                                        <span className="text-[13px] text-gray-600 font-bold pl-2">Appliances</span>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/advisor?id=">Fridges &amp; Freezers Finder</Link>
                                        </li>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/advisor?id=">Washing Machine Finder</Link>
                                        </li>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/advisor?id=">Coffee Machine Finder</Link>
                                        </li>
                                    </ul>

                                    <ul className="mt-2">
                                        <span className="text-[13px] text-gray-600 font-bold pl-2">Sport</span>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/advisor?id=">Running Shoes Finder</Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="">
                                <div className="mt-12">
                                    <ul>
                                        <span className="text-[13px] text-gray-600 font-bold pl-2">Beauty &amp; Health</span>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/advisor?id=">Skin Care Finder</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/advisor?id=">Dermatologist Recommended</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/advisor?id=">Vitamins Finder</Link>
                                        </li>
                                    </ul>

                                    <ul className="mt-2">
                                        <span className="text-[13px] text-gray-600 font-bold pl-2">Electronics</span>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/advisor?id=">Laptop Finder</Link>
                                        </li>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/advisor?id=">Cellphone Finder</Link>
                                        </li>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/advisor?id=">TV Finder</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/advisor?id=">Smart Watch Finder</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/advisor?id=">Headphones Finder</Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="bg-slate-400">
                                <Link to="/virtual-shopping-assistants">
                                    <img src="https://media.takealot.com/b/2/cms/original_images/a01712e2bebeb2f786ae96398a8c19d946053e05.png" alt="Virtual Assistant" className="h-full" />
                                </Link>
                            </div>
                        </div></div> : deptName === "Automotive & DIY" ? <div onMouseLeave={() => setDropdownOpen(false)}><div className="department-container absolute left-[220px] bg-white w-[650px] h-[550px] top-0.5 mt-14 z-50 grid lg:grid-cols-3" onMouseEnter={() => setDeptName("Automotive & DIY")} onMouseLeave={() => setDeptName("")}>
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="text-primary font-bold text-[14px] ">Automotive &amp; DIY</p>

                                <div className="my-3">
                                    <ul>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/all">New In DIY &amp; Automotive <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/advisor?id=">Backup Power Finder</Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="home-kitchen/homeinspiration">Home Inspiration <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="font-semibold w-full" to="/pool-garden/diy_auto">All DIY &amp; Home Improvement</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/pool-garden/paint-and-supplies-25832">Paint &amp; Accessories</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="pool-garden/auto">All Automotive</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="pool-garden/car-care-and-cleaning-25854">Car Care &amp; Cleaning</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="pool-garden/diy-tools-and-machinery-25818">All Power Tools &amp; Machinery</Link>
                                        </li>

                                        <li>
                                            <Link className="w-full categorySubNav" to="/all/tools-corner">Tools Corner</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/all/power-tools-cordlessl">Cordless Power Tools</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/pool-garden/industrial-power-tools-25823">Industrial Power Tools</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="pool-garden/measuring-tools-25820">Measuring Tools</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/pool-garden/diy-tools-and-machinery-25818">Hand Tools</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="pool-garden/tool-organisers-27436">Tool Organisers</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/pool-garden/workwear-and-ppe-25829">Workwear &amp; PPE</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="pool-garden/safety-and-security-25840">Home Security &amp; Accessories</Link>
                                        </li>

                                    </ul>

                                </div>

                            </div>
                            <div className="">
                                <div className="mt-12">
                                    <ul>
                                        <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>

                                        <li>
                                            <Link className="w-full categorySubNav inline-flex items-center justify-between" to="/all">Bosch Automotive <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav inline-flex items-center justify-between" to="/diy-auto/worx_shop">Worx SHOP <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav inline-flex items-center justify-between" to="/all/home-improvement-elements">Elements <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav inline-flex items-center justify-between" to="/pool-garden/enertec_store">Enertec <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/promotion/black_decker_diy_store">BLACK+DECKER</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/promotion/black_decker_diy_store">BLACK+DECKER</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/promotion/gedore">Gedore</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/pool-garden/ingco">Ingco</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/pool-garden/keter">Keter</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/promotion/majortech">Major Tech</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/promotion/motoQuip">MotoQuip</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/promotion/panachepaint">Panache Paints</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/promotion/ring">Ring</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/promotion/the_ryobi_store">Ryobi</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/promotion/stanley_tools_store">Stanley</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/promotion/stanley_tools_store">uvex</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/home-kitchen/yeelight">Yeelight</Link>
                                        </li>

                                    </ul>


                                </div>
                            </div>
                            <div className="bg-slate-400">
                                <Link to="/virtual-shopping-assistants">
                                    <img src="https://media.takealot.com/b/2/cms/original_images/8b287bbc0bcc5c08472bf8ed090a158cf3c50cbb.png" alt="Virtual Assistant" className="h-full" />
                                </Link>
                            </div>
                        </div></div> : deptName === "Baby & toddle" ? <div onMouseLeave={() => setDropdownOpen(false)}><div className="department-container absolute left-[220px] bg-white w-[650px] h-[550px] top-0.5 mt-14 z-50 grid lg:grid-cols-3" onMouseEnter={() => setDeptName("Baby & toddle")} onMouseLeave={() => setDeptName("")}>
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="text-primary font-bold text-[14px] ">Baby & toddle</p>

                                <div className="my-3">
                                    <ul>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/all/new-to-tal-baby-and-toddler">New In Baby &amp; Toddler <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/baby">All Baby &amp; Toddler</Link>
                                        </li>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/baby/feeding_baby">Nappies &amp; Changing</Link>
                                        </li>

                                        <li>
                                            <Link className="w-full categorySubNav" to="/baby/maternity-care">Maternity</Link>
                                        </li>


                                        <li>
                                            <Link className="w-full categorySubNav" to="/baby/baby-toys-activity">Baby Toys &amp; Activity Gea</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/baby/out_and_about">Travel</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/baby/baby_clothing">Baby Clothing</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/baby/care_nursery">Nursery</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/baby/electric-breast-pumps-27877">Breast Pump</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/baby/baby-formula-25273">Formula</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/baby/baby-food-and-snacks-25263">Food &amp; Snacks</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/baby/safety-equipment-25320">Safety Equipment</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/baby/health-equipment-25319">Health Equipment</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/baby/potty-training-25262">Potty Training</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/baby/bathing-and-grooming-25322">Bath Time</Link>
                                        </li>


                                    </ul>

                                </div>

                            </div>
                            <div className="">
                                <div className="mt-12">
                                    <ul>
                                        <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>

                                        <li>
                                            <Link className="w-full categorySubNav" to="/baby/pampers">Pampers </Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/baby/georgeandmasonbaby">George &amp; Mason Baby</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/baby/johnsonsbaby">Johnson's Baby </Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/pool-garden/enertec_store">Lush Living </Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/baby/nuk">NUK</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="baby/philipsmotherandchildcare">Philips Avent</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/baby/purity">Purity</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/baby/tommeetippee">Tommee Tippee</Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full inline-flex items-center justify-between" to="/pool-garden/keter">LEGO® DUPLO® store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>

                                    </ul>


                                </div>
                            </div>
                            <div className="bg-slate-400">
                                <Link to="/virtual-shopping-assistants">
                                    <img src="https://media.takealot.com/b/2/cms/original_images/3c18c2c4139a23fdbb6f5c736537f5f011171070.png" alt="Virtual Assistant" className="h-full" />
                                </Link>
                            </div>
                        </div></div> : deptName === "Beauty" ? <div onMouseLeave={() => setDropdownOpen(false)}><div className="department-container absolute left-[220px] bg-white w-[650px] h-[550px] top-0.5 mt-14 z-50 grid lg:grid-cols-3" onMouseEnter={() => setDeptName("Beauty")} onMouseLeave={() => setDeptName("")}>
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="text-primary font-bold text-[14px] ">Beauty</p>

                                <div className="my-3">
                                    <ul>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/all/new-to-tal-beauty">New In Beauty <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/sun-shop">Sun Shop <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>

                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/advisor?id=">Skin Care Finder</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/advisor?id=">Derm Recommended Finder</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/beauty/dermatological-skincar">Dermatological Skincare</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/beauty/trending-makeup-looks">Trending Makeup Looks</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/beauty">All Beauty</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/beauty/luxbeauty">Luxury Beauty</Link>
                                        </li>

                                        <li>
                                            <Link className="w-full categorySubNav" to="/beauty/cleanbeauty">Clean Beauty</Link>
                                        </li>


                                        <li>
                                            <Link className="w-full categorySubNav" to="/beauty/grooming">Men's Grooming</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/beauty/fragrance">Fragrances</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/beauty/luxury_beauty_fragrances">Luxury Fragrances</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/beauty/haircare">Hair Care</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/beauty/makeup">Makeup</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/salonhair">Salon Hair</Link>
                                        </li>
                                        <li>
                                            <Link className="w-full categorySubNav" to="/beauty/skin-care">Skin Care</Link>
                                        </li>
                                    </ul>

                                </div>

                            </div>
                            <div className="">
                                <div className="mt-12">
                                    <ul className="flex flex-col">
                                        <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>

                                        <li className="categorySubNav">
                                            <Link className="w-full inline-flex items-center justify-between" to="/beauty/lancome">Lancôme <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full inline-flex items-center justify-between" to="/beauty/the-ordinary">The Ordinary Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full inline-flex items-center justify-between" to="/beauty/bobbibrown">Bobbi Brown <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full inline-flex items-center justify-between" to="/beauty/calvinklein">Calvin Klein Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full inline-flex items-center justify-between" to="/beauty/cetaphil_store">Cetaphil Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full inline-flex items-center justify-between" to="/beauty/eucerin">Eucerin <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full" to="/beauty/clarins">Clarins</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full" to="/beauty/clinique">Clinique</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full" to="/beauty/davidoff">Davidoff</Link>
                                        </li>

                                        <li className="categorySubNav">
                                            <Link className="w-full inline-flex items-center justify-between" to="/beauty/ghd">GHD <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full inline-flex items-center justify-between" to="/beauty/loreal-professional-haircare">L'Oreal Professional Haircare <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full inline-flex items-center justify-between" to="/beauty/mac">MAC <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full inline-flex items-center justify-between" to="/beauty/loreal-mizani">Mizani <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full inline-flex items-center justify-between" to="/beauty/nivea">Nivea Store</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full inline-flex items-center justify-between" to="/beauty/redken">Redken Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>

                                    </ul>


                                </div>
                            </div>
                            <div className="bg-slate-400">
                                <Link to="/virtual-shopping-assistants">
                                    <img src="https://media.takealot.com/b/2/cms/original_images/6fc92d69a98edc6312f07e33e536e7292e1e1a6b.png" alt="Virtual Assistant" className="h-full" />
                                </Link>
                            </div>
                        </div></div> : deptName === "Books & Course" ? <div onMouseLeave={() => setDropdownOpen(false)}><div className="department-container absolute left-[220px] bg-white w-[434px] h-[550px] top-0.5 mt-14 z-50 grid lg:grid-cols-2" onMouseEnter={() => setDeptName("Books & Course")} onMouseLeave={() => setDeptName("")}>
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="text-primary font-bold text-[14px] ">Books &amp; Courses</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/all/new-to-tal-book">New in Books <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/books">All Books </Link>
                                        </li>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/books/fiction">Fiction</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/books/children">Children's Books</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/books/nonfiction">Non-Fiction</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/books/books_christian">Christian Living</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/books/cookbooks">Cookbooks</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/all/bestsellers">Bestsellers</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/books/top-ya-&amp">Best Young Adult Books</Link>
                                        </li>

                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/books/academic">All Academic Books</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/books/schoolbooks">School Books</Link>
                                        </li>

                                        <li>
                                            <Link className="w-full categorySubNav" to="/beauty/academic">Tertiary Education</Link>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                            <div className="bg-slate-400">
                                <Link to="/virtual-shopping-assistants">
                                    <img src="https://media.takealot.com/b/2/cms/original_images/a23694e871d37ea8a9a2581c3066e312123ad85b.png" alt="Virtual Assistant" className="h-full" />
                                </Link>
                            </div>
                        </div></div> : deptName === "Camping & Outdoor" ? <div onMouseLeave={() => setDropdownOpen(false)}><div className="department-container absolute left-[220px] bg-white w-[650px] h-[550px] top-0.5 mt-14 z-50 grid lg:grid-cols-3" onMouseEnter={() => setDeptName("Camping & Outdoor")} onMouseLeave={() => setDeptName("")}>
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="text-primary font-bold text-[14px] ">Camping &amp; Outdoor</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/all/new-to-tal-camping">New in Camping <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/camping-outdoor">All Camping </Link>
                                        </li>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/tents">Tents &amp; Shelters</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/campingfurniture">Camping Furniture</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/outdoor_cooking">Outdoor Cooking</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/light">Lighting &amp; Gadgets</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/sleepinggea">Sleeping</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/campingoutdooraccessories">Accessories</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/refrigeration">Coolers &amp; Refrigeration</Link>
                                        </li>

                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/camping-outdoor/backpacks-32557">Hiking Backpacks <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/hobbies_activities">All Outdoor Activities</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/fishing-25712">Fishing</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/hiking-25719">Hiking</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/camping-outdoor/hunting-25718">Hunting</Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>


                            <div className="mt-12">
                                <ul className="flex flex-col">
                                    <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>

                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/motoquip">Moto-Quip <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/campground">Campground</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/gopro">GoPro</Link>
                                    </li>
                                </ul>


                            </div>

                            <div className="bg-slate-400">
                                <Link to="/virtual-shopping-assistants">
                                    <img src="https://media.takealot.com/b/2/cms/original_images/54c69246cbcd84f4e82b96b7f859b08674cc1f90.png" alt="Virtual Assistant" className="h-full" />
                                </Link>
                            </div>
                        </div></div> : deptName === "Clothing, Shoes & Accessories" ? <div onMouseLeave={() => setDropdownOpen(false)}><div className="department-container absolute left-[220px] bg-white w-[650px] h-[550px] top-0.5 mt-14 z-50 grid lg:grid-cols-3" onMouseEnter={() => setDeptName("Clothing, Shoes & Accessories")} onMouseLeave={() => setDeptName("")}>
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="text-primary font-bold text-[14px] ">Clothing, Shoes & Accessories</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-fashion">New in Fashion <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/fresh-fashion">Fashion Faves <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/fashion/outletstore">Fashion Outlet <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/fashion">All Fashion </Link>
                                        </li>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/fashion/men">Men</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/fashion/women">Women</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/fashion/kids">Kids</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/fashion/watches">Watches</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/fashion/jewellery">Jewellery</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/fashion/footwear">Footwear</Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/all/new-to-tal-luggage">New in Luggage <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>


                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/luggage-travel">All Luggage </Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/luggage-travel/suitcases">Suitcases</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/luggage-travel/business-bags">Business Bags</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/luggage-travel/backpacks-and-duffels">Backpacks &amp; Duffles</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/luggage-travel/walletsandpurses">Handbags &amp; Wallets</Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>


                            <div className="mt-12">
                                <ul className="flex flex-col">
                                    <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Fashion Stores</span>

                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/fashion/crocs">Crocs <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/oakley">Oakley</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/fashion/sissyboy">Sissy Boy</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/fashion/rayban">Ray-Ban</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/fashion/sissyboy">Sissy Boy</Link>
                                    </li>

                                    <span className="text-[13px] text-gray-600 font-bold pl-2 mt-3">Featured Luggage Stores</span>

                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/Brand/American%20Tourister">American Tourister</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/ecoearth">Eco Earth</Link>
                                    </li>

                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/Brand/Samsoniter">Samsonite</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/Brand/Travelite">Travelite</Link>
                                    </li>
                                </ul>


                            </div>

                            <div className="bg-slate-400">
                                <Link to="/virtual-shopping-assistants">
                                    <img src="https://media.takealot.com/b/2/cms/original_images/a7b7e8869e09b0e7e81f47451896cd18b92c7836.png" alt="Virtual Assistant" className="h-full" />
                                </Link>
                            </div>
                        </div></div> : deptName === "Electronics" ? <div onMouseLeave={() => setDropdownOpen(false)}><div className="department-container absolute left-[220px] bg-white w-[650px] h-[550px] top-0.5 mt-14 z-50 grid lg:grid-cols-3" onMouseEnter={() => setDeptName("Electronics")} onMouseLeave={() => setDeptName("")}>
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="text-primary font-bold text-[14px] ">Electronics</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-in-electronics">New In Electronics <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/load-shedding">Loadshedding Solutions </Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/cameras/vlogging">Content Creation</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/all">All Electronics </Link>
                                        </li>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/cellular-gps">Cellphones</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/computers/laptops">Laptops</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/cellular-gps/wearabletech">Smart Watches</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/computers">Computers</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/computers/computer-monitors-and-accessories">Monitors</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/computers/tablets_and_kindles">Tablets &amp; E-Readers</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/cameras">Cameras</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/cameras/actioncamerasanddrones">Drones</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/tv-audio-video/audio">Audio</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/tv-audio-video/video">Video</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/computers/smarthome">Smart Home</Link>
                                        </li>


                                    </ul>

                                </div>
                            </div>


                            <div className="mt-12">
                                <ul className="flex flex-col">
                                    <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>

                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/acerstore">Acer </Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/apple">Apple</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/cellular-gps/mtnstore">MTN</Link>
                                    </li>
                                    <li className="categorySubNav w-full">
                                        <Link className="w-full inline-flex items-center justify-between" to="/cellular-gps/peachz_store">Peachz <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/asus">Asus</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/canonbrandstore">Canon</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/garmin">Garmin</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/hisensestore">Hisense</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/cellphones/huawei">Huawei</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/lenovostore">Lenovo</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/computers/logitech">Logitech</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/cellular-gps/nokia">Nokia</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/tv-audio-video/philips_lifestyle_audio">Philips</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/cellular-gps/nokia">Nokia</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/samsung">Samsung</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/xiaomi_store">Xiaomi</Link>
                                    </li>

                                </ul>


                            </div>

                            <div className="bg-slate-400">
                                <Link to="/virtual-shopping-assistants">
                                    <img src="https://media.takealot.com/b/2/cms/original_images/f000b70bf30e40bb5a61cf6d393b2a4ac1256082.png" alt="Virtual Assistant" className="h-full" />
                                </Link>
                            </div>
                        </div></div> : deptName === "Gaming & Media" ? <div onMouseLeave={() => setDropdownOpen(false)}><div className="department-container absolute left-[220px] bg-white w-[650px] h-[550px] top-0.5 mt-14 z-50 grid lg:grid-cols-3" onMouseEnter={() => setDeptName("Gaming & Media")} onMouseLeave={() => setDeptName("")}>
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="text-primary font-bold text-[14px] ">Gaming & Media</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-gaming">New In Gaming <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/all/gaming">All Gaming </Link>
                                        </li>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/gaming/playstation5">Playstation</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/promotion/xboxseries">Xbox</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/gaming/nintendo">Nintendo</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/gaming/pc">PC Gamng</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/gaming/gamesaccessories">Gaming Accessories</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/gaming/gamingmerch">Gaming Merchandise</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/all/movies">All Movies &amp; TV Series</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/movies/movie-merchandise">Movie Merchandise</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/all/music">All Music</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/music/musicalinstruments">Musical Instruments</Link>
                                        </li>


                                    </ul>

                                </div>
                            </div>


                            <div className="mt-12">
                                <ul className="flex flex-col">
                                    <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>

                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/gaming/preorder">Pre-Orders </Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/gaming/steelseries">Steelseries</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/brand/Cougar">Cougar</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/brand/Redragon">Redragon</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/music/instruments">Casio</Link>
                                    </li>

                                </ul>


                            </div>

                            <div className="bg-slate-400">
                                <Link to="/virtual-shopping-assistants">
                                    <img src="https://media.takealot.com/b/2/cms/original_images/6cdfc48087781917fbd7e60bfc53cd23f8510b56.png" alt="Virtual Assistant" className="h-full" />
                                </Link>
                            </div>
                        </div></div> : deptName === "Garden, Pool & Patio" ? <div onMouseLeave={() => setDropdownOpen(false)}><div className="department-container absolute left-[220px] bg-white w-[650px] h-[550px] top-0.5 mt-14 z-50 grid lg:grid-cols-3" onMouseEnter={() => setDeptName("Garden, Pool & Patio")} onMouseLeave={() => setDeptName("")}>
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="text-primary font-bold text-[14px] ">Garden, Pool & Patio</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-gpp">New In Garden, Pool &amp; Patio <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/all/pool-garden">All Garden, Pool &amp; Patio </Link>
                                        </li>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/pool-garden/braai_new">All Braai</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/pool-garden/charcoal">Charcoal Braais</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/pool-garden/gas">Gas Braais</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/pool-garden/braai-accessories">Braai Accessories</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full" to="/pool-garden/patio_new">All Patio</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/pool-garden/patio-furniture">Patio Furniture</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/pool-garden/patio-heaters">Patio Heaters</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/pool-garden/outdoor-lighting">Outdoor Lighting</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/pool-garden/garden1">All Garden</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/pool-garden/gardening-tools">Gardening  Tools</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/pool-garden/seeds-and-bulbs">Seeds &amp; Bulbs</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/pool-garden/garden-sheds-and-storage">Garden Storage</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/pool-garden/gardening-tools">All Pool</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/pool-garden/pool-cleaners-and-accessories">Pool Cleaners</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/pool-garden/swimming-aids-and-inflatables">Pool Inflatables</Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>


                            <div className="mt-12">
                                <ul className="flex flex-col">
                                    <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                    <li className="categorySubNav">
                                        <Link className="w-full font-semibold inline-flex justify-between items-center" to="/pool-garden/wonderstore">Wonder <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/lifespace-store">Lifespace <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full font-semibold inline-flex justify-between items-center" to="/camping-outdoor/bluetti">Bluetti <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full font-semibold inline-flex justify-between items-center" to="/pool-garden/gardenai">Gardena <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full font-semibold inline-flex justify-between items-center" to="/promotion/motoquip">MotoQuip Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full font-semibold inline-flex justify-between items-center" to="/promotion/yale">Yale <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/black_decker_diy_store">Black &amp; Decker </Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/pool-garden/bosch_power_tools">Bosch</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/megamasterstore">Megamaster</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/the_ryobi_store">Ryobi</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/braaimaster">Ultimate Braai Master</Link>
                                    </li>

                                </ul>


                            </div>

                            <div className="bg-slate-400">
                                <Link to="/virtual-shopping-assistants">
                                    <img src="https://media.takealot.com/b/2/cms/original_images/0b6e9ef1cf931383e5a2698bcbb0784d6098e5b1.png" alt="Virtual Assistant" className="h-full" />
                                </Link>
                            </div>
                        </div></div> : deptName === "Groceries & Household" ? <div onMouseLeave={() => setDropdownOpen(false)}><div className="department-container absolute left-[220px] bg-white w-[650px] h-[550px] top-0.5 mt-14 z-50 grid lg:grid-cols-3" onMouseEnter={() => setDeptName("Groceries & Household")} onMouseLeave={() => setDeptName("")}>
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="text-primary font-bold text-[14px] ">Groceries & Household</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-groceries-and-household">New In Groceries &amp; Household <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/alot-for-less">ALOT For Less </Link>
                                        </li>

                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/home-kitchen/foodcupboard">All Groceries</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/health/snacks">Healthy Snacks</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/home-kitchen/biscuits-rusks-and-crackers">Biscuits, Rusks &amp; Crackers</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/home-kitchen/breakfast-cereals-and-bars">Breakfast Cereals &amp; Bars</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full" to="/home-kitchen/tea-coffee-and-hot-drinks">Coffee, Tea &amp; Hot Drinks</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/home-kitchen/condiments-spices-and-sauces">Condiments, Spices &amp; Sauces</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/home-kitchen/canned-and-jarred-foods">Canned &amp; Jarred Foods</Link>
                                        </li>

                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/home-kitchen/householdcleaning">All Household Cleaning</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/home-kitchen/dishwashing">Dishwashing</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/home-kitchen/all-purpose-cleaners">All Purpose Cleaners</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/home-kitchen/floor-cleaners">Floor Cleaners</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/promotion/monthlyessentials">Everyday Essentials</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/promotion/restaurantessentialsmrd">Restaurant Essentials</Link>
                                        </li>

                                    </ul>

                                </div>
                            </div>


                            <div className="mt-12">
                                <ul className="flex flex-col">
                                    <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                    <li className="categorySubNav">
                                        <Link className="w-full font-semibold inline-flex justify-between items-center" to="/home-kitchen/a_coffee_for_every_cup">A Coffee For Every Cup <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full font-semibold inline-flex justify-between items-center" to="/home-kitchen/caffeluxe-store">Caffeluxe Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full font-semibold inline-flex justify-between items-center" to="/promotion/liquifruit">Liqui Fruit &amp; Lipton <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full font-semibold inline-flex justify-between items-center" to="/promotion/whatsfordinner">whatsfordinner <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/bokomo">Bokomo</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/mars">Mars Store </Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/nescafedolcegusto">Nescafe Dolce Gusto </Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/nestlegrocery">Nestle Groceries</Link>
                                    </li>
                                </ul>


                            </div>

                            <div className="bg-slate-400">
                                <Link to="/virtual-shopping-assistants">
                                    <img src="https://media.takealot.com/b/2/cms/original_images/68b04714e7c65944b092b38f254f02094ed7494b.png" alt="Virtual Assistant" className="h-full" />
                                </Link>
                            </div>
                        </div></div> : deptName === "Health & Personal Care" ? <div onMouseLeave={() => setDropdownOpen(false)}><div className="department-container absolute left-[220px] bg-white w-[650px] h-[550px] top-0.5 mt-14 z-50 grid lg:grid-cols-3" onMouseEnter={() => setDeptName("Health & Personal Care")} onMouseLeave={() => setDeptName("")}>
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="text-primary font-bold text-[14px] ">Health & Personal Care</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-health">New In Health &amp; Personal Care</Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/advisor?id=">Vitamins Finder </Link>
                                        </li>

                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/health/thewellnessstore">Wellness Store</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/health/sportsnutrition">Sports Nutrition</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/all/health">All Health Care</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/health/first-aid">Sanitize &amp; First Aid</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/health/health-equipment">Health Equipment</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/health/medicine-and-treatments">Medicine &amp; Treatments</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full" to="/health/sexual-health">Sexual Health</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/home-kitchen/condiments-spices-and-sauces">Condiments, Spices &amp; Sauces</Link>
                                        </li>

                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/health/personalcare">All Personal Care</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/beauty/grooming">Men's Grooming</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/beauty/haircare">Hair Care</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/health/natural-care">Natural Care</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/health/lip-and-skin-care">Lip &amp; Skin Care</Link>
                                        </li>


                                    </ul>

                                </div>
                            </div>


                            <div className="mt-12">
                                <ul className="flex flex-col">
                                    <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/health/oral_b">Oral-B <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/health/bayerstore">Bayer Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/health/muscletech-store">MuscleTech Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/health/nestlehealth">Nestlé Health Science Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/health/sohoflordisinternational">SFI Health Store<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/ssasupplements">SSA Supplements Store<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/nivea">Nivea</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/reckittbenckiser">The Personal Care Store </Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/philipsstore">Philips </Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/usnstore">USN</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/health/himalayastore">Himalaya</Link>
                                    </li>
                                </ul>


                            </div>

                            <div className="bg-slate-400">
                                <Link to="/virtual-shopping-assistants">
                                    <img src="https://media.takealot.com/b/2/cms/original_images/f9ce0e39009dfc966643b8abb6be4a76f145e76d.png" alt="Virtual Assistant" className="h-full" />
                                </Link>
                            </div>
                        </div></div> : deptName === "Home & Appliances" ? <div onMouseLeave={() => setDropdownOpen(false)}><div className="department-container absolute left-[220px] bg-white w-[650px] h-[550px] top-0.5 mt-14 z-50 grid lg:grid-cols-3" onMouseEnter={() => setDeptName("Home & Appliances")} onMouseLeave={() => setDeptName("")}>
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="text-primary font-bold text-[14px] ">Home & Appliances</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-in-home-and-appliances">New In Home &amp; Appliances<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/advisor?id=">Washing Machine Finder </Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/advisor?id=">Fridges &amp; Freezers Finder </Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/advisor?id=">Coffee Machine Finder </Link>
                                        </li>

                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/home-kitchen/homeinspiration">Home Inspiration <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/home-kitchen/baking">Baking <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/home-kitchen/storage">Storage</Link>
                                        </li>

                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold inline-flex items-center justify-between" to="/home-kitchen/homeware-starter-kit">New Home Starter-Kit <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>

                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/all/home-kitchen">All Homeware</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/home-kitchen/cookware1">Kitchen</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/home-kitchen/dining_entertaining">Dining &amp; Entertaining</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/home-kitchen/furniture">Furniture &amp; Decor</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full" to="/home-kitchen/bedbathhome">Bed &amp; Bath</Link>
                                        </li>

                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold items-center justify-between inline-flex" to="/home-kitchen/appliances">All Appliances <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold items-center justify-between inline-flex" to="/promotion/restaurantessentialsmrd">Restaurant Essentials</Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className="w-full font-semibold items-center justify-between inline-flex" to="/pool-garden/installation-services-vouchers">Installation Vouchers</Link>
                                        </li>



                                    </ul>

                                </div>
                            </div>


                            <div className="mt-12">
                                <ul className="flex flex-col">
                                    <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/home-kitchen/pnphome-store">Pick n Pay Home <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/home-kitchen/decakilastore">Decakila <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/home-kitchen/univa">Univa<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/home-kitchen/midea_store">Midea<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/brand-store/berkart-store">Berkart<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/pool-garden/bright-star-lighting-store">Bright Star Lighting<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/home-kitchen/ecovacs">ECOVACS Robot Vacs<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/all/lifespace-store">Lifespace<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/home-kitchen/dysonstore">Dyson<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/all/tineco-floor-washer-vacuum-cleaners-store">TINECO Floor Washer Vacs<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/greenlane">Greenlane Gear<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/home-kitchen/carrol-boyes-store">Carrol Boyes<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/georgeandmason">George &amp; Mason</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/home-kitchen/legend_housewares_store">Legend Housewares </Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex items-center justify-between" to="/promotion/lecreusetstore">Le Creuset </Link>
                                    </li>
                                </ul>


                            </div>

                            <div className="bg-slate-400">
                                <Link to="/virtual-shopping-assistants">
                                    <img src="https://media.takealot.com/b/2/cms/original_images/389a29fbdcb9de8a8c15dfe8964d84aed398d16a.png" alt="Virtual Assistant" className="h-full" />
                                </Link>
                            </div>
                        </div></div> : deptName === "Liquor" ? <div onMouseLeave={() => setDropdownOpen(false)}><div className="department-container absolute left-[220px] bg-white w-[650px] h-[550px] top-0.5 mt-14 z-50 grid lg:grid-cols-3" onMouseEnter={() => setDeptName("Liquor")} onMouseLeave={() => setDeptName("")}>
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="text-primary font-bold text-[14px] ">Liquor</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-liquor">New In Liquor<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>

                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/home-kitchen/liquor">All Liquor</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/home-kitchen/wine">Wine</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/home-kitchen/beer">Beers &amp; Ciders</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/home-kitchen/whisky">Whisky &amp; Bourbon</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full" to="/home-kitchen/gin">Gin</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full" to="/home-kitchen/vodka">Vodka</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full" to="/home-kitchen/tequila">Tequila &amp; Agave</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full" to="/all/liqueurs-and-apertifs">Liqueurs &amp; Aperitifs</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full" to="/all/non-alcoholic-drinks">Non-Alcoholic Wine Beers Spirits</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full" to="/home-kitchen/non-alcoholic">Beverages</Link>
                                        </li>

                                    </ul>

                                </div>
                            </div>


                            <div className="mt-12">
                                <ul className="flex flex-col">
                                    <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/liquorlocker">Bacardi-Martini Official Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/liquor/kwvstore">KWV Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/home-kitchen/chillbeverages">Chill Beverages Store<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/liquor/tanqueray-store">Tanqueray<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/distellstore">The Sip Selection<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/world-class-spirits-a-gift-for-any-occasion-store">World Class Spirits<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/heinekenstore">Heineken</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/johnniewalker">Johnnie Walker</Link>
                                    </li>

                                </ul>


                            </div>

                            <div className="bg-slate-400">
                                <Link to="/virtual-shopping-assistants">
                                    <img src="https://media.takealot.com/b/2/cms/original_images/d9cfef88beeae4e08a41377047725c9c1005a4d9.png" alt="Virtual Assistant" className="h-full" />
                                </Link>
                            </div>
                        </div></div> : deptName === "Office & Stationery" ? <div onMouseLeave={() => setDropdownOpen(false)}><div className="department-container absolute left-[220px] bg-white w-[650px] h-[550px] top-0.5 mt-14 z-50 grid lg:grid-cols-3" onMouseEnter={() => setDeptName("Office & Stationery")} onMouseLeave={() => setDeptName("")}>
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="text-primary font-bold text-[14px] ">Office & Stationery</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-stationery-and-office">New In Office &amp; Stationery<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>

                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/office-stationery/office">All Office</Link>
                                        </li>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/office-stationery/office-furniture">Furniture</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/office-stationery/office-consumables">Consumables</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/computers/printing">Printers &amp; Ink</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/office-stationery/office-supplies">Filing &amp; Organising</Link>
                                        </li>


                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/office-stationery/student">All Stationery</Link>
                                        </li>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/office-stationery/arts_crafts">Arts &amp; Crafts</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/office-stationery/paper">Paper</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full" to="/office-stationery/pens-and-refills">Pens &amp; Refills</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full" to="/office-stationery/colouring">Art Supplies</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full" to="/office-stationery/fine-writing">Fine Writing</Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full" to="/office-stationery/technical-instruments">Technical Drawing</Link>
                                        </li>

                                    </ul>

                                </div>
                            </div>


                            <div className="mt-12">
                                <ul className="flex flex-col">
                                    <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/store/lifespace-store">Lifespace <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/bic">BIC Store <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/cricut">Cricut<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/office-stationery/fellowes">Fellowes<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>

                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/office-stationery/maped">MapedHelix</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/office-stationery/brother">Brother</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/canonprinters">Canon Printers</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/epson">Epson</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/office-stationery/helix">Helix</Link>
                                    </li>

                                </ul>


                            </div>

                            <div className="bg-slate-400">
                                <Link to="/virtual-shopping-assistants">
                                    <img src="https://media.takealot.com/b/2/cms/original_images/dba9b6a0df1c35e3258a3523bd4da17d3c795afb.png" alt="Virtual Assistant" className="h-full" />
                                </Link>
                            </div>
                        </div></div> : deptName === "Pets" ? <div onMouseLeave={() => setDropdownOpen(false)}><div className="department-container absolute left-[220px] bg-white w-[650px] h-[550px] top-0.5 mt-14 z-50 grid lg:grid-cols-3" onMouseEnter={() => setDeptName("Pets")} onMouseLeave={() => setDeptName("")}>
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="text-primary font-bold text-[14px] ">Pets</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-pets">New In Pets<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/promotion/vetstore">Vet Store<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/pets/mars-petcare">Mars Pets<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>

                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/all/pets">All Pets</Link>
                                        </li>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/pets/dogsupplies">Dogs</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/pets/catsupplies">Cats</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/pets/fish">Fish</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/pets/Hamster">Rodents</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/pets/Rabbit">Rabbits</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/pets/Reptile">Reptiles</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/pets/Livestock">Livestock</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/pets/Horses">Horses</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/pets/Birds">Birds</Link>
                                        </li>


                                    </ul>

                                </div>
                            </div>


                            <div className="mt-12">
                                <ul className="flex flex-col">
                                    <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>


                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/pets/montego-store">Montego</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/pets/rogz">Rogz Store</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/pets/marltons">Marltons</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/pets/optimizor">Optimizor</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/pets/petcuisine">Pet Cuisine</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/pets/wiggle">Wiggle</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/pets/martin-and-martin-store">Bob Martin</Link>
                                    </li>

                                </ul>


                            </div>

                            <div className="bg-slate-400">
                                <Link to="/virtual-shopping-assistants">
                                    <img src="https://media.takealot.com/b/2/cms/original_images/d3367214eda5c622ed56516c7788d6cfce331db0.png" alt="Virtual Assistant" className="h-full" />
                                </Link>
                            </div>
                        </div></div> : deptName === "Sport & Training" ? <div onMouseLeave={() => setDropdownOpen(false)}><div className="department-container absolute left-[220px] bg-white w-[650px] h-[550px] top-0.5 mt-14 z-50 grid lg:grid-cols-3" onMouseEnter={() => setDeptName("Sport & Training")} onMouseLeave={() => setDeptName("")}>
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="text-primary font-bold text-[14px] ">Sport & Training</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-sport">New in Sport<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/sport/newclearancestore">Sports Deals Store<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/advisor?id=">Shoe Finder<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>

                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/all/sport">All Sport</Link>
                                        </li>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/sport/sports-clothing">All Sports Clothing</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/sport/sports-footwear">All Sports Footwear</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/sport/runnerschecklist">Running</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/sport/cyclingstore">Cycling</Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className=" w-full inline-flex items-center justify-between" to="/sport/watersports">Watersports <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/sport/teamsports">All Sports Equipment</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/sport/newexercise">Fitness Store</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/sport/injury-prevention-and-recovery">Recovery</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/health/sportsnutrition">Sports Nutrition</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/sport/sports-technology">Sport Wearable Tech</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/sport/takealot-fan-gear">Fan Gear</Link>
                                        </li>



                                    </ul>

                                </div>
                            </div>


                            <div className="mt-12">
                                <ul className="flex flex-col">
                                    <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>


                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/nike">Nike</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/asics">ASICS</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/underarmour">Under Armour</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/sport/reebok">Reebok</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/sport/New%20Balance">New Balance</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/sport/Puma">Puma</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/sport/getup">GetUp</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/sport/gorillasports">Gorilla Sports</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/sport/Everlast">Everlast</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center font-semibold" to="/all/nutrition">Nutrition</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/health/usn">USN</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/health/muscletech-store">Muscletech</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/ssasupplements">SSA Supplements Store</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/gaming/x-gamer">X-Gamer</Link>
                                    </li>


                                </ul>


                            </div>

                            <div className="bg-slate-400">
                                <Link to="/virtual-shopping-assistants">
                                    <img src="https://media.takealot.com/b/2/cms/original_images/a01653fe7fb00e4a67808011d6a1b3e8359055b8.png" alt="Virtual Assistant" className="h-full" />
                                </Link>
                            </div>
                        </div></div> : deptName === "Toys" ? <div onMouseLeave={() => setDropdownOpen(false)}><div className="department-container absolute left-[220px] bg-white w-[650px] h-[550px] top-0.5 mt-14 z-50 grid lg:grid-cols-3" onMouseEnter={() => setDeptName("Toys")} onMouseLeave={() => setDeptName("")}>
                            <div className="bg-gray-100 px-3 py-4">
                                <p className="text-primary font-bold text-[14px] ">Toys</p>

                                <div className="my-3">
                                    <ul className="flex flex-col">
                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold inline-flex justify-between items-center" to="/all/new-to-tal-toys">New in Toys<span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                        </li>

                                        <li className="categorySubNav">
                                            <Link className="w-full font-semibold" to="/all/toys">All Toys</Link>
                                        </li>

                                        <li>
                                            <Link className="categorySubNav w-full" to="/toys/actionfigures">Action Figures &amp; Dolls</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/office-stationery/arts_crafts">Arts &amp; Crafts</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/toys/boardgames">Board Games</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/toys/card-games">Card Games</Link>
                                        </li>
                                        <li className="categorySubNav w-full">
                                            <Link className=" w-full inline-flex items-center justify-between" to="/toys/indoor-play">Indoor Play</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/toys/kids-party-supplies">Kids Party Supplies</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/toys/outdoor-play">Outdoor Play</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/toys/puzzles">Puzzles</Link>
                                        </li>
                                        <li>
                                            <Link className="categorySubNav w-full" to="/all/smart-toys">Smart Toys</Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>


                            <div className="mt-12">
                                <ul className="flex flex-col">
                                    <span className="text-[13px] text-gray-600 font-bold pl-2">Featured Stores</span>


                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/baby/lego_duplo">LEGO®DUPLO® <span className="bg-green-500 px-2 text-[10px] font-bold text-white rounded-lg">New</span></Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/toys/solarpop">Solarpop</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/disney">Disney</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/promotion/fisherprice">Fisher Price</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/toys/hasbrostore">Hasbro</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/toys/legopage">LEGO®</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/toys/playshifu">Playshifu</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/toys/toykingdomhape">Toy Kingdom Hape</Link>
                                    </li>
                                    <li className="categorySubNav">
                                        <Link className="w-full inline-flex justify-between items-center" to="/toys/magformers">Magformers</Link>
                                    </li>


                                </ul>


                            </div>

                            <div className="bg-slate-400">
                                <Link to="/virtual-shopping-assistants">
                                    <img src="https://media.takealot.com/b/2/cms/original_images/d0806c42396da07149736010505df24759f5343e.png" alt="Virtual Assistant" className="h-full" />
                                </Link>
                            </div>
                        </div></div> : ""
                    }

                </nav>

            </div>
            {
                location.pathname === "/" ?
                    <div className="max-w-5xl mx-auto  lg:absolute lg:left-[20%] 2xl:left-[28%] w-full">
                        <Banner />
                    </div> : ""
            }

<div>
<Register />
<Login />
</div>


        </header>
    );
};

export default NavigationBar;