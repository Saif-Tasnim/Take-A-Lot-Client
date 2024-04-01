import React from "react";
import { Link, NavLink } from "react-router-dom";

const Competitions = () => {
  return (
    <div>

        {/* nav Section */}
      <section>
        <div className="about-option max-w-7xl mx-auto py-5 lg:px-5 flex items-center gap-4 overflow-x-auto bg-white px-2">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "px-2 py-2 rounded text-xs text-[#000] bg-transparent"
                : "px-2 py-2 rounded text-xs text-[#000] bg-transparent"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about/who-we-are"
            className={({ isActive }) =>
              isActive
                ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap"
                : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap"
            }
          >
            Who We Are
          </NavLink>

          <NavLink
            to="/about/our-journey"
            className={({ isActive }) =>
              isActive
                ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap"
                : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap"
            }
          >
            Our Journey
          </NavLink>

          <NavLink
            to="/about/our-values"
            className={({ isActive }) =>
              isActive
                ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap"
                : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap"
            }
          >
            Our Values
          </NavLink>

          <NavLink
            to="/about/our-environment"
            className={({ isActive }) =>
              isActive
                ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap"
                : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap"
            }
          >
            Our Environment
          </NavLink>

          <NavLink
            to="/about/careers"
            className={({ isActive }) =>
              isActive
                ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap"
                : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap"
            }
          >
            Our Careers
          </NavLink>

          <NavLink
            to="/about/extraordinary-minds"
            className={({ isActive }) =>
              isActive
                ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap"
                : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap"
            }
          >
            Extraordinary Minds
          </NavLink>

          <NavLink
            to="/about/company-news"
            className={({ isActive }) =>
              isActive
                ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap"
                : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap"
            }
          >
            Company News
          </NavLink>

          <NavLink
            to="/about/our-charity"
            className={({ isActive }) =>
              isActive
                ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap"
                : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap"
            }
          >
            Our Charity
          </NavLink>

          <NavLink
            to="/about/delivery-team"
            className={({ isActive }) =>
              isActive
                ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap"
                : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap"
            }
          >
            Takealot Delivery Team
          </NavLink>
        </div>
      </section>

            {/* banner section */}
      <div
        className="hero bg-black bg-opacity-60 h-[250px] overflow-hidden about-container text-sm"
        style={{
          backgroundImage:
            "url(https://static.takealot.com/images/top-strap-bg.gif)",
        }}
      >
        <div className="relative z-10 text-white flex  items-center px-8 lg:px-16 gap-10">
          <div className="space-y-4 w-full text-left">
            <h2 className="lg:text-4xl font-medium uppercase text-xl">Learn More about</h2>
            <h1 className="lg:text-5xl font-bold mb-4 uppercase text-3xl">Competitions</h1>
            <p className="lg:text-sm">
              Being a part of our family means that you'll have access to a ton
              of fun & fabulous competitions throughout the year! Who doesn't
              love a freebie, right?
            </p>
          </div>
          <div className="w-full hidden lg:block">
            <img
              src="https://media.takealot.com/covers_blog/competitions-strap.png"
              alt="Who We Are"
              className="w-full"
            />
          </div>
        </div>
      </div>


        <div className="mt-10 px-10 text-sm">
           <h2 className="text-xl font-bold mb-1">Competitions</h2>
           <div className="border h-[5px] bg-slate-400"></div>
           <div className="mt-5">
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Payflex Big Month End Sale Promotion T&Cs – Takealot.com</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Jägermeister | Afro Nation | Takealot Online Terms and Conditions</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Miles Đ-Day Terms and Conditions</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Summer 2023 Wishlist Competition 2023: Competition Rules</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Takealot Summer Sorted Wishlist Competition 2023 T&Cs</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Takealot iPhone 15 Shop Now Coupon Promotion: Terms and Conditions</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Takealot Apple Watch (Series 9 & Ultra 2) Shop Now Promotion: Terms and Conditions</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Takealot Apple Watch ( Series 9 & Ultra 2 ) Pre-Order Now) Promotion: Terms and Conditions</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Takealot iPhone 15 Pre-Order Now Promotion: Terms and Conditions</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Megamaster x Takealot Giveaway: Competition Rules</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Weber South Africa x Takealot Giveaway: Competition Rules</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">The Takeoff Promotion T&Cs – Takealot.com</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">LEGO x Takealot Vehicles Giveaway: Competition Rules</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Rugby World Cup Social Media Competition T’s & C’s 14 – 15 September 2023.</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Bosch OMO Campaign – September – October 2023</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">De’Longhi Perfetto Coffee Evening with Damian Competition</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Heritage Day Design Challenge 2023 – #HeritageDayCampaign Competition T&Cs</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Hisense Takealot Coupon Code – ULED – Promotion Terms & Conditions</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Takealot Mastercard Standard Bank Promotion: Terms and Conditions</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Montego Pet Nutrition (CLASSIC WIN-A-HILUX COMPETITION)</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">The Core Group – MacBook Switch & Upgrade Campaign – Terms & Conditions</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">#BackTheBucks Samsung TV Promotion: Terms and Conditions</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">KWV 5 Rugby World Cup</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">The Ultimate Checkout Promotion T&Cs – Takealot.com</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Jacobs Made To Be Extra Ordinary Competition Terms & Conditions</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Give a Gizzu Social Media Competition T’s & C’s 18 July – 21 July 2023</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">The Ultimate Prize Subscription Competition T&Cs</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Disney Wonder of Play Social Media Competition T’s & C’s 03 July – 05 July 2023</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Mastercard x Takealot Rugby World Cup: Competition Rules</h2></Link>
                <Link to=''><h2 className="text-base font-bold text-primary hover:underline mb-3">Takealot Thanksalot Xiaomi Promotion: Terms and Conditions</h2></Link>
           </div>
        </div>





    </div>
  );
};

export default Competitions;
