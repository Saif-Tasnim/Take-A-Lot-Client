import React from "react";
import { Link, NavLink } from "react-router-dom";

const DeleverForTakealot = () => {
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
        className="hero bg-black bg-opacity-60 h-[150px] lg:h-[250px] overflow-hidden about-container text-sm"
        style={{
          backgroundImage:
            "url(https://static.takealot.com/images/top-strap-bg.gif)",
        }}
      >
        <div className="relative z-10 text-white flex  items-center px-4 lg:px-16 gap-10">
          <div className="space-y-4 w-full text-left">
            <h1 className="lg:text-5xl text-3xl font-bold mb-4 uppercase">
              JOIN THE TAKEALOT.COM DELIVERY TEAM TODAY!
            </h1>
          </div>
          <div className="w-full hidden lg:block"></div>
        </div>
      </div>

      <div className="mt-10 px-5 lg:px-20">
        <img
          src="https://media.takealot.com/covers_blog/driver_recruitment_banner_delivery_man.png?_=1685969305"
          alt=""
        />

        <div>
          <div>
            <h2 className="text-xl font-bold text-primary my-4">
              BECOME A DRIVER PARTNER AND JOIN THE TAKEALOT.COM DELIVERY TEAM
              TODAY!
            </h2>
            <h4 className="font-semibold">What you need:</h4>
            <ul className="pl-8 list-disc text-sm">
              <li className="mb-2 mt-3">
                Own smartphone required with android V7 or higher for the
                delivery app & GPS.
              </li>
              <li className="mb-2">
                South African ID or Work Permit for foreign nationals
              </li>
              <li className="mb-2">Valid SA Driver’s License</li>
              <li className="mb-2">
                National / International Driver’s License (Foreign Nationals)
              </li>
              <li className="mb-2">Your own motor bike or light vehicle</li>
              <li className="mb-2">Proof of Bank details</li>
              <li className="mb-2">Vehicle Registration form (RC1)</li>
              <li className="mb-2">Valid Roadworthy Certificate</li>
              <li className="mb-2">Clear criminal record</li>
            </ul>
          </div>

          <h4 className="font-semibold">Benefits of working as an Independent Contractor for Mr D / Takealot:</h4>
          <ul className="pl-8 list-disc text-sm">
            <li className="mb-2 mt-3">We operate from Monday to Sunday</li>
            <li className="mb-2">
              Premium rates offered from Friday to Sunday
            </li>
            <li className="mb-2">Valid SA Driver’s License</li>
            <li className="mb-2">
              Personal injury insurance offered to ensure our Driver Partners
              are protected and covered against any personal injuries whilst on
              duty
            </li>
            <li className="mb-2">
              Free training provided to successful applicants
            </li>
            <li className="mb-2">
              Access to free road emergency response service
            </li>
          </ul>

          <div className="text-sm my-4">
          <h4 className="font-semibold">Fill out the easy application form and we’ll connect you with your closest branch.</h4>
          <h4 className="font-semibold">For any queries with regards to your application contact <a href="mailto:drivers@takealot.com" className="text-primary">drivers@takealot.com</a></h4>
          <p className="mt-2">You’ll have the option of working part-time or full-time – and we’ll even provide the training! View privacy policy <Link className="text-primary font-medium" to="/return-policy-help/privacy-policy">here</Link>.</p>
          <p>Takealot is an Equal Opportunity Employer. Applicants from the previously disadvantaged groups and people with disabilities will be given preference.  </p>
          <Link to='/driver-privacy-policy'><button className="text-teal-500 px-6 py-2 rounded-md border border-teal-500 mt-5">Apply Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleverForTakealot;
