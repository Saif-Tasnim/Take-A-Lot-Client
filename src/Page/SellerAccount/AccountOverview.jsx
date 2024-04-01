import React from 'react';
import { useState } from 'react';
import { FaBuilding, FaDownload, FaTasks } from 'react-icons/fa';
import { HiMiniBell, HiMiniCog, HiMiniCog8Tooth, HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { IoIosCard, IoIosSend, IoMdBusiness } from 'react-icons/io';
import { IoPeopleCircleOutline, IoPersonCircleOutline } from 'react-icons/io5';
import useSeller from '../../hooks/useSeller';
import { Link } from 'react-router-dom';

const AccountOverview = () => {
    const [sellerInfo, refetch] = useSeller();
    console.log(sellerInfo);
    const [tabName, setTabName] = useState("overview")
    return (
     <section className='flex flex-col justify-center w-full'>

<div className='flex flex-col lg:flex-row w-full items-center justify-between bg-white text-sm lg:w-[91%] mx-auto p-2'>

<div className='w-full flex items-center gap-3'>
<span><FaTasks /> </span> 
<span className='inline-flex items-center gap-1 font-semibold'><HiMiniCog8Tooth /> Account Overview</span> 
<span> For {sellerInfo?.companyName} ({sellerInfo?._id})</span>
</div>

<div className='w-full flex items-center gap-4 justify-end'>
<p><HiMiniBell className='h-5 w-4'/></p>
<p><FaDownload className='h-5 w-4'/></p>
<Link to="/" className='bg-primary text-white rounded-full p-1 text-xs'>TK</Link>
</div>

</div>        

<div className='flex overflow-auto lg:overflow-hidden w-full lg:w-[91%] mx-auto items-center justify-center text-sm text-neutral border-t border-l border-r'>

<div onClick={()=>setTabName("overview")} className={`px-10 py-3 cursor-pointer inline-flex items-center gap-1 ${tabName === "overview" ? "bg-white border-t-2 border-t-primary text-primary" : ""}`}><HiOutlineClipboardDocumentList className='h-5 w-5'/> Overview</div>

<div onClick={()=>setTabName("settings")} className={`px-10 py-3 cursor-pointer inline-flex items-center gap-1 ${tabName === "settings" ? "bg-white border-t-2 border-t-primary text-primary" : ""}`}><HiMiniCog className='h-5 w-5'/> Settings</div>

<div onClick={()=>setTabName("business")} className={`px-10 py-3 cursor-pointer inline-flex items-center gap-1 ${tabName === "business" ? "bg-white border-t-2 border-t-primary text-primary" : ""}`}><IoMdBusiness className='h-5 w-5'/> Business</div>

<div onClick={()=>setTabName("address")} className={`px-10 py-3 cursor-pointer inline-flex items-center gap-1 ${tabName === "address" ? "bg-white border-t-2 border-t-primary text-primary" : ""}`}><IoIosSend className='h-5 w-5'/> Address</div>

<div onClick={()=>setTabName("bankDetails")} className={`px-10 py-3 cursor-pointer inline-flex items-center gap-1 whitespace-nowrap ${tabName === "bankDetails" ? "bg-white border-t-2 border-t-primary text-primary" : ""}`}><IoIosCard className='h-5 w-5'/> Banking Details</div>

<div onClick={()=>setTabName("users")} className={`px-10 py-3 cursor-pointer inline-flex items-center gap-1 whitespace-nowrap ${tabName === "users" ? "bg-white border-t-2 border-t-primary text-primary" : ""}`}><IoPeopleCircleOutline className='h-5 w-5'/> Users</div>

<div onClick={()=>setTabName("profile")} className={`px-10 py-3 cursor-pointer inline-flex items-center gap-1 whitespace-nowrap ${tabName === "profile" ? "bg-white border-t-2 border-t-primary text-primary" : ""}`}><IoPersonCircleOutline className='h-5 w-5'/> Profile</div>
</div>



<div className='w-full lg:w-[91%] mx-auto min-h-screen bg-white'>

{
    tabName === "overview" ? 
    <div>Overview</div> : 
    ""
}

</div>
     </section>
    );
};

export default AccountOverview;