import React from "react";
import dottedBg2 from "../../assets/images/dotted-bg-2.png";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

const CompanyNews = () => {
    return (
        <div className="bg-white">
      <div className="relative bg-black bg-opacity-60 px-12 hero" style={{backgroundImage: "url(https://static.takealot.com/images/top-strap-bg.gif)"}}>

        <div className="relative z-10 text-white flex items-center justify-center gap-48">
          <div className="space-y-3 w-full py-6">
          
            <h1 className="text-5xl font-bold mb-4">NEWSROOM</h1>
            <p className="text-sm">
            Join us on our journey as we continue to grow and keep up-to-date with the latest Takealot news. Press and media requests can be sentNEWSROOM to <a href="mailto:marketing@takealot.com" className="text-primary hover:underline">marketing@takealot.com</a> where we'll get back to you as soon as possible.
            </p>
          </div>
          <div className=" w-full hidden lg:block -mb-10">
            <img
              src="https://media.takealot.com/covers_blog/news-strap.png"
              alt="Who We Are"
            />
          </div>
        </div>
      </div>

   
   <div className="text-sm">
   <div className="mt-10 px-4 lg:px-10">
    <h2 className="text-center font-semibold text-[#000] text-base">Become a Takealot Personal Shopper</h2>
    <hr className="mt-5" />
   <div className="flex justify-between py-2">
   <div className="">
    <h2 className="">10 October 2023</h2>
    </div>
    <div className="flex items-center gap-3"> <FaArrowAltCircleRight/> <span className="text-primary hover:underline">Find Out More</span></div>
   </div>
    <hr />
   </div>

   <div className="hero px-4 lg:px-10">
  <div className="hero-content flex-col lg:flex-row gap-10 w-full">
    <div className="w-full">
    <img src="https://media.takealot.com/covers_blog/wk21_airbnb_social_1080x1080px_2023-01.png" className="w-full lg:max-w-md rounded-lg shadow-2xl" />
    </div>
    <div className="w-full">
      <h2 className="text-xl font-semibold">Airbnb and Takealot come together to help Hosts tackle loadshedding this winter</h2>
      <p className="py-6">  Airbnb and takealot.com have come together to offer Hosts on Airbnb discounted deals on loadshedding solutions, including inverters, solar panels, UPS’, portable power stations and rechargeable lights The R1 million fund will give Hosts on Airbnb access to R500* off specially selected products to help them to continue to host during power outages Airbnb […]</p>
    </div>
  </div>
</div>

   <div className="mt-10 px-4 lg:px-10">
    <hr className="mt-5" />
   <div className="flex justify-between py-2">
   <div className="">
    <h2 className="font-semibold text-lg">12 June 2023</h2>
    </div>
    <div className="flex items-center gap-3"> <FaArrowAltCircleRight/> <span className="text-primary hover:underline">Find Out More</span></div>
   </div>
    <hr />
   </div>

   {/* Start */}
   <div className="hero px-4 lg:px-10">
  <div className="hero-content flex-col lg:flex-row gap-10 w-full">
    <div className="w-full">
    <img src="https://media.takealot.com/covers_blog/mastercard.webp" className="w-full lg:max-w-md rounded-lg shadow-2xl" />
    </div>
    <div className="w-full">
      <h2 className="text-xl font-semibold">SOUTH AFRICA’s LEADING ONLINE STORE TAKEALOT AND MASTERCARD TO OFFER EVEN MORE VALUE AND SAVINGS</h2>
      <p className="py-6"> South Africa – 5 June 2023 – Global payment provider Mastercard and South Africa’s leading online store takealot.com are bringing loyal shoppers extra savings and even more value for the next 12 months. As of May 2023, Takealot and Mastercard will be rewarding select Mastercard cardholders with a R250 coupon to use on their next purchase of […]</p>
    </div>
  </div>
</div>

   <div className="mt-10 px-4 lg:px-10">
    <hr className="mt-5" />
   <div className="flex justify-between py-2">
   <div className="">
    <h2 className="font-semibold text-lg">10 October 2023</h2>
    </div>
    <div className="flex items-center gap-3"> <FaArrowAltCircleRight/> <span className="text-primary hover:underline">Find Out More</span></div>
   </div>
    <hr />
   </div>

   
   {/* Start */}
   <div className="hero px-4 lg:px-10">
  <div className="hero-content flex-col lg:flex-row gap-10 w-full">
   <div className="w-full">
   <img src="https://media.takealot.com/covers_blog/Takealot_BlueDot_Lockup-1.png" className="max-w-md rounded-full shadow-2xl" />
   </div>
    <div className="w-full">
      <h2 className="text-xl font-semibold">Takealot Blue Dot Sale 25th – 29th November</h2>
      <p className="py-6">The Biggest Sale of the year is almost here… BLUE DOT SALE 25 – 29 November</p>
    </div>
  </div>
</div>

   <div className="mt-10 px-4 lg:px-10">
    <hr className="mt-5" />
   <div className="flex justify-between py-2">
   <div className="">
    <h2 className="font-semibold text-lg">14 December 2022</h2>
    </div>
    <div className="flex items-center gap-3"> <FaArrowAltCircleRight/> <span className="text-primary hover:underline">Find Out More</span></div>
   </div>
    <hr />
   </div>
   {/* Start */}
   <div className="hero px-4 lg:px-10">
  <div className="hero-content flex-col lg:flex-row gap-10 justify-between w-full">
    <div className="w-full">
    <img src="https://media.takealot.com/covers_blog/Home-insp-header_banner-1.png" className="w-full lg:max-w-md rounded-lg shadow-2xl" />
    </div>
    <div className="w-full">
      <h2 className="text-xl font-semibold">Home Inspo – Colour Series</h2>
      
    </div>
  </div>
</div>

   <div className="mt-10 px-4 lg:px-10">
    <hr className="mt-5" />
   <div className="flex justify-between py-2">
   <div className="">
    <h2 className="font-semibold text-lg">17 October 2022</h2>
    </div>
    <div className="flex items-center gap-3"> <FaArrowAltCircleRight/> <span className="text-primary hover:underline">Find Out More</span></div>
   </div>
    <hr />
   </div>
   {/* Start */}
   <div className="hero px-4 lg:px-10">
  <div className="hero-content flex-col lg:flex-row gap-10 w-full">
    <div className="w-full">
    <img className="w-full lg:max-w-md rounded-lg shadow-2xl" src="https://media.takealot.com/covers_blog/Big_FNB_WP_11.png" />
    </div>
    <div className="w-full">
      <h2 className="text-xl font-semibold">Big FNB Day</h2>
      
    </div>
  </div>
</div>

   <div className="mt-10 px-4 lg:px-10">
    <hr className="mt-5" />
   <div className="flex justify-between py-2">
   <div className="">
    <h2 className="font-semibold text-lg">14 October 2022</h2>
    </div>
    <div className="flex items-center gap-3"> <FaArrowAltCircleRight/> <span className="text-primary hover:underline">Find Out More</span></div>
   </div>
    <hr />
   </div>
   {/* Start */}
   <div className="hero px-4 lg:px-10">
  <div className="hero-content flex-col lg:flex-row gap-10 w-full">
    <div className="w-full">
    <img className="w-full lg:max-w-md rounded-lg shadow-2xl" src="https://media.takealot.com/covers_blog/4_HERITAGE-DAY-Wordpress-page_Winner.png" />
    </div>
    <div className="w-full">
      <h2 className="text-xl font-semibold">Takealot Heritage Day Design Challenge Winner Announcement</h2>
      
    </div>
  </div>
</div>

   <div className="mt-10 px-4 lg:px-10">
    <hr className="mt-5" />
   <div className="flex justify-between py-2">
   <div className="">
    <h2 className="font-semibold text-lg">4 October 2022</h2>
    </div>
    <div className="flex items-center gap-3"> <FaArrowAltCircleRight/> <span className="text-primary hover:underline">Find Out More</span></div>
   </div>
    <hr />
   </div>
   {/* Start */}
   <div className="hero px-4 lg:px-10">
  <div className="hero-content flex-col lg:flex-row gap-10 w-full">
    <div className="w-full">
    <img className="w-full lg:max-w-md rounded-lg shadow-2xl" src="https://media.takealot.com/covers_blog/payflex_wp1.png" />
    </div>
    <div className="w-full">
      <h2 className="text-xl font-semibold">Buy Now, Pay Later with Payflex & takealot.com</h2>
      
    </div>
  </div>
</div>

   <div className="mt-10 px-4 lg:px-10">
    <hr className="mt-5" />
   <div className="flex justify-between py-2">
   <div className="">
    <h2 className="font-semibold text-lg">23 August 2022</h2>
    </div>
    <div  className="flex items-center gap-3"> <FaArrowAltCircleRight/> <span className="text-primary hover:underline">Find Out More</span></div>
   </div>
    <hr />
   </div>
   {/* Start */}
   <div className="hero px-4 lg:px-10">
  <div className="hero-content flex-col lg:flex-row gap-10 w-full">
    <div className="w-full">
    <img className="w-full lg:max-w-md rounded-lg shadow-2xl" src="https://media.takealot.com/covers_blog/Big_FNB_WP_1.png" />
    </div>
    <div className="w-full">
      <h2 className="text-xl font-semibold">Introducing BIG FNB DAY</h2>
      
    </div>
  </div>
</div>

   <div className="mt-10 px-4 lg:px-10">
    <hr className="mt-5" />
   <div className="flex justify-between py-2">
   <div className="">
    <h2 className="font-semibold text-lg">12 August 2022</h2>
    </div>
    <div className="flex items-center gap-3"> <FaArrowAltCircleRight/> <span className="text-primary hover:underline">Find Out More</span></div>
   </div>
    <hr />
   </div>
   {/* Start */}
   <div className="hero px-4 lg:px-10">
  <div className="hero-content flex-col lg:flex-row gap-10 w-full">
    <div className="w-full">
    <img className="w-full lg:max-w-md rounded-lg shadow-2xl" src="https://media.takealot.com/covers_blog/Big_FNB_Day_MBB_640x430.png" />
    </div>
    <div className="w-full">
      <h2 className="text-xl font-semibold">Takealot.com and FNB launch Big FNB Day!</h2>
      <p className="text-xs text-slate-400">takealot.com and FNB launch Big FNB Day! One day, two partners and up to 15% back in eBucks earnings   Cape Town, 11 August 2022: Takealot and FNB are collaborating to launch Big FNB Day. This exciting partnership provides FNB and RMB Private Bank customers with an exclusive opportunity to earn up to 15% back […]</p>
      
    </div>
  </div>
</div>

   <div className="mt-10 px-4 lg:px-10">
    <hr className="mt-5" />
   <div className="flex justify-between py-2">
   <div className="">
    <h2 className="font-semibold text-lg">12 August 2022</h2>
    </div>
    <div className="flex items-center gap-3"> <FaArrowAltCircleRight/> <span className="text-primary hover:underline">Find Out More</span></div>
   </div>
    <hr />
   </div>
   {/* Start */}
   <div className="hero px-4 lg:px-10">
  <div className="hero-content flex-col lg:flex-row gap-10 w-full">
    <div className="w-full">
    <img className="w-full lg:max-w-md rounded-lg shadow-2xl" src="https://media.takealot.com/covers_blog/GirlCode_hackathon_2022_Prize-Sponsors-Takealot-011-1.png" />
    </div>
    <div className="w-full">
      <h2 className="text-xl font-semibold">Takealot Group supports future careers with GirlCode sponsorship</h2>
      <p className="text-xs text-slate-400">July 2022, Cape Town – South African e-Commerce leader, Takealot Group, has announced its sponsorship of the GirlCode hackathon, taking place 6-7 August 2022.   Happening during Women’s Month in South Africa, the hackathon’s theme “Generation Equality: Realising Women’s Rights for an Equal Future” draws on a global campaign to achieve gender parity by 2030. […]</p>
      
    </div>
  </div>
</div>

   <div className="mt-10 px-4 lg:px-10">
    <hr className="mt-5" />
   <div className="flex justify-between py-2">
   <div className="">
    <h2 className="font-semibold text-lg">1 August 2022</h2>
    </div>
    <div className="flex items-center gap-3"> <FaArrowAltCircleRight/> <span className="text-primary hover:underline">Find Out More</span></div>
   </div>
    <hr />
   </div>
   {/* Start */}
   <div className="hero px-4 lg:px-10">
  <div className="hero-content flex-col lg:flex-row gap-10 w-full">
    <div className="w-full">
    <img className="w-full lg:max-w-md rounded-lg shadow-2xl" src="https://media.takealot.com/covers_blog/uco_wordpress_banner-1.png" />
    </div>
    <div className="w-full">
      <h2 className="text-xl font-semibold">The Ultimate Checkout – it’s back and bigger than ever!</h2>
      <p className="text-xs text-slate-400">Selected products purchased will receive a Superbalist or Mr D Food voucher. Vouchers will be issued via email within 7 – 10 working days after your purchase.</p>
      
    </div>
  </div>
</div>

   <div className="mt-10 px-4 lg:px-10">
    <hr className="mt-5" />
   <div className="flex justify-between py-2">
   <div className="">
    <h2 className="font-semibold text-lg">15 July 2022</h2>
    </div>
    <div className="flex items-center gap-3"> <FaArrowAltCircleRight/> <span className="text-primary hover:underline">Find Out More</span></div>
   </div>
    <hr />
   </div>
   {/* Start */}
   <div className="hero px-4 lg:px-10">
  <div className="hero-content flex-col lg:flex-row gap-10 w-full">
   <div className="w-full">
   <img className="w-full lg:max-w-md rounded-lg shadow-2xl" src="https://media.takealot.com/covers_blog/12.png" />
   </div>
    <div className="w-full">
      <h2 className="text-xl font-semibold">Reimagine Design with Decorex and takealot.com</h2>
      
      
    </div>
  </div>
</div>

   <div className="mt-10 px-4 lg:px-10">
    <hr className="mt-5" />
   <div className="flex justify-between py-2">
   <div className="">
    <h2 className="font-semibold text-lg">10 June 2022</h2>
    </div>
    <div className="flex items-center gap-3"> <FaArrowAltCircleRight/> <span className="text-primary hover:underline">Find Out More</span></div>
   </div>
    <hr />
   </div>
   {/* Start */}
   <div className="hero px-4 lg:px-10">
  <div className="hero-content flex-col lg:flex-row gap-10 w-full">
    <div className="w-full">
    <img className="w-full lg:max-w-md rounded-lg shadow-2xl" src="https://media.takealot.com/covers_blog/11.png" />
    </div>
    <div className="w-full">
      <h2 className="text-xl font-semibold">Introducing the takealot.com Thanksalot Sale!</h2>
      
      
    </div>
  </div>
</div>

   <div className="mt-10 px-4 lg:px-10">
    <hr className="mt-5" />
   <div className="flex justify-between py-2">
   <div className="">
    <h2 className="font-semibold text-lg">19 May 2022</h2>
    </div>
    <div className="flex items-center gap-3"> <FaArrowAltCircleRight/> <span className="text-primary hover:underline">Find Out More</span></div>
   </div>
    <hr />
   </div>
   {/* Start */}
   <div className="hero px-4 lg:px-10">
  <div className="hero-content flex-col lg:flex-row gap-10 w-full">
    <div className="w-full">
    <img className="w-full lg:max-w-md rounded-lg shadow-2xl" src="https://media.takealot.com/covers_blog/NextdayWordpressBanner1.png" />
    </div>
    <div className="w-full">
      <h2 className="text-xl font-semibold">Takealot launches flagship Richmond Park Pickup Point in Cape Town</h2>
      <p className="text-xs text-slate-400">28 April 2022, Cape Town – South Africa’s leading online retailer, takealot.com has launched its new flagship collection facility in Richmond Park, Cape Town, a culmination of a multifaceted investment that brings together innovation, technological achievements and uniquely South African artwork, all under one roof.   Bigger & Better collection experience Takealot has moved its […]</p>
      
      
    </div>
  </div>
</div>

   <div className="mt-10 px-4 lg:px-10">
    <hr className="mt-5" />
   <div className="flex justify-between py-2">
   <div className="">
    <h2 className="font-semibold text-lg">5 May 2022</h2>
    </div>
    <div className="flex items-center gap-3"> <FaArrowAltCircleRight/> <span className="text-primary hover:underline">Find Out More</span></div>
   </div>
    <hr />
   </div>
   {/* Start */}
   <div className="hero px-4 lg:px-10">
  <div className="hero-content flex-col lg:flex-row gap-10 w-full">
   <div className="w-full">
   <img className="w-full lg:max-w-md rounded-lg shadow-2xl" src="https://media.takealot.com/covers_blog/Richmond-Park-Exterior-1.jpg" />
   </div>
    <div className="w-full">
      <h2 className="text-xl font-semibold">Takealot launches flagship Richmond Park Pickup Point in Cape Town</h2>
      <p className="text-xs text-slate-400">28 April 2022, Cape Town – South Africa’s leading online retailer, takealot.com has launched its new flagship collection facility in Richmond Park, Cape Town, a culmination of a multifaceted investment that brings together innovation, technological achievements and uniquely South African artwork, all under one roof.   Bigger & Better collection experience Takealot has moved its […]</p>
      
      
    </div>
  </div>
</div>

   <div className="mt-10 px-4 lg:px-10">
    <hr className="mt-5" />
   <div className="flex justify-between py-2">
   <div className="">
    <h2 className="font-semibold text-lg">5 May 2022</h2>
    </div>
    <div className="flex items-center gap-3"> <FaArrowAltCircleRight/> <span className="text-primary hover:underline">Find Out More</span></div>
   </div>
    <hr />
   </div>
   </div>


    </div>
    );
};

export default CompanyNews;