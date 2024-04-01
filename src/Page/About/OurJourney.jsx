import React from "react";
import coverimg from "../../assets/images/Our-journey.webp";
import dottedBg2 from "../../assets/images/dotted-bg-2.png";
import bodyImg from '../../assets/images/body_image.jpg'
import desgImg from '../../assets/images/Our-Destination-Page-1024x341.jpg'
import rootSec from '../../assets/images/roots-scooters2.jpg'
import { Link } from "react-router-dom";

const OurJourney = () => {
    return (
        <div>
      <div className="relative bg-black bg-opacity-60 px-12 overflow-hidden" style={{backgroundImage: "url(https://static.takealot.com/images/top-strap-bg.gif)"}}>

        <div className="relative z-10 text-white flex  items-center justify-center gap-10 px-3 lg:px-10">
          <div className="space-y-3 w-full py-5">
            <h2 className="text-3xl font-medium tracking-wider">
            MORE ABOUT
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">OUR JOURNEY</h1>
            <p className="text-sm">
            Follow our exciting journey from humble beginnings to where we are today and where we are heading.
            </p>
          </div>
          <div className="w-full hidden lg:block">
            <img src={coverimg} alt="Who We Are" />
          </div>
        </div>
      </div>

      <div className="px-3 lg:px-20">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-5 mt-10">
            <div>
                <img src={desgImg} alt="" />
            </div>
            <div>
                <div className="float-left">
                  <h2 className="font-semibold text-lg">Our Destination</h2>
                </div>
                <div className="w- ps-36 mt-[10px]">
                    <div className="border border-slate-400 opacity-30"></div>
                    <div className="border border-slate-400 opacity-30 mt-1"></div>
                </div>
                <br />
                <p className="text-black text-sm font-medium"><Link to='/' className="text-primary">Takealot.com</Link>’s mission is to be the most customer-centric online shopping destination in Africa, and has built a foundation on the simple concept that the customer comes first.</p> <br />
                <p className="text-slate-500 text-sm">The success of the business is based on its ability to delight customers with amazing customer service. Takealot.com is dedicated to improving the customer experience, from the moment you arrive on the website or app and place an order to when it arrives at your door.</p>
            </div>


        </div>
      </div>
            <div className="mt-6">
                <div className="float-left">
                    <h2 className="text-lg font-semibold">Our Roots</h2>
                </div>
                <div>
                <div className="ms-24 pt-2">
                    <div className="border border-slate-400 opacity-30"></div>
                    <div className="border border-slate-400 opacity-30 mt-1"></div>
                </div>
                </div>
            </div>
            
            <div className="grid lg:grid-cols-2 mt-5 gap-5">
                <div className="text-xs">
                    <p><Link to='/' className="text-primary">Takealot.com</Link> was officially launched in June 2011, following the successful acquisition of an existing ecommerce business called Take2 by the US-based investment firm, Tiger Global Management and Kim Reid in October 2010. Today, takealot.com is the leading ecommerce retailer in South Africa and one of the largest, most innovative ecommerce retailers on the African continent.</p> <br />
                    <p>The business was initiated with a simple vision in mind: To be the largest, simplest, most customer-centric online shopping destination in Africa. It has rapidly evolved since inception, opening and expanding warehouses in Johannesburg, Durban and Cape Town, while expanding department selection to over 21 departments across Electronics, Lifestyle, Media & Gaming and Fashion.</p> <br />
                    <p>For takealot.com, 2014 was a truly pivotal year with the announcement of a $100m investment from Tiger Global. This was quickly followed by the purchase of Mr Delivery – which gave the business ownership over its own logistics network through the Takealot Delivery Team division (formerly Mr D Courier) and its own app-based on-demand food delivery service through the MR D division (formerly Mr D Food).</p> <br />
                    <p>The same year saw the successful acquisition of Superbalist.com, a curated design and fashion website, and culminated in the announcement that Naspers-owned Kalahari.com would be merging businesses with takealot.com – building the premier online shopping destination in Africa. The merge was successfully completed on 1 May 2015 when all Kalahari customer accounts were successfully transferred to takealot.com.</p> <br />
                    <p>Beginning in early 2018, Naspers increased its investment in takealot.com to 96%. In October 2018, Superbalist.com and Spree (also part of the Naspers family) merged to provide customers with the latest on-trend local and international fashion.</p>
                    <p>Now, takealot.com is South Africa’s largest, most innovative ecommerce retailer, with over 2000 employees. At the core of everything we do is our customer. We are passionate about providing great customer experiences, beginning with the moment you land on our site or app, until the product you order is delivered safely into your hands.</p>
                </div>
                <div>
                    <img src={rootSec} alt="" />
                </div>
            </div>
      </div>
    </div>
    );
};

export default OurJourney;