import React from "react";
import { FaCar, FaLink, FaMoneyBill, FaMoneyCheckAlt } from "react-icons/fa";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { Link } from "react-router-dom";

const DriverPrivacyPolicy = () => {
  return (
    <div className="mb-10">
      {/* nav section */}
      <nav className="lg:flex lg:items-center bg-white py-4 shadow-md w-full px-3">
        <ul className="lg:flex gap-5">
          <a href='Final Driver Facing Privacy Policy.docx.pdf' download="Final Driver Facing Privacy Policy.docx.pdf">
            <li>Terms & Conditions</li>
          </a>
          <a href='TDT IC Driver Operational Guidelines & Role Expectations - Driver v2.2.pdf' download="TDT IC Driver Operational Guidelines & Role Expectations - Driver v2.2.pdf">
            <li>Driver Privacy Policy</li>
          </a>
        </ul>
        <div className="lg:ms-[250px]">
          <img
            className="w-40"
            src="https://kofax.takealot.com/DriverOnboarding/images/1280px-Takealot_logo.svg.png"
            alt=""
          />
        </div>
      </nav>
      {/* Lets go drive */}
      <section className="lg:mx-24 mt-10 border pb-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-between border py-2 px-3 bg-slate-100 w-full">
          <div>
            <h2 className="text-2xl font-medium text-[#4D4D4F]">Lets get driving....</h2>
          </div>
          <div>
            <FaCar className="text-4xl text-[#ADADAD]" />
          </div>
        </div>
        <div className="lg:px-10 px-2 mt-5 w-full">
          <div className="text-center border-slate-300 border lg:px-10 py-3 bg-slate-100 w-full flex items-center justify-center">
            <FaMoneyCheckAlt className="text-4xl text-[#4D4D4F]" />
          </div>
          <div className="bg-slate-200 lg:px-5 lg:py-10 p-4 border border-slate-300">
            <p>Please ensure you have the following documents on hand:</p>
            <div className="px-5 mt-3 mb-3">
              <li>ID book, ID card or passport</li>
              <li>Work permit or asylum document (non-SA citizens)</li>
              <li>Drivers license card</li>
              <li>Vehicle license disk</li>
              <li>Proof of address document</li>
            </div>
            <p>
              These documents will need to be photographed when completing the
              application. Please ensure that your browser has access
              permissions to your camera.
            </p>
          </div>



          <div> 
            {/* start */}
          <div className="mt-3">
            <p>Do you have a vehicle to drive?</p>
            <div className="flex gap-8 items-center">
              <div>
                <div className="flex items-center">
                  <input type="radio" name="radio-9" className="radio" />
                  <BiSolidLike /><span className="ms-2">Yes</span>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <input type="radio" name="radio-9" className="radio" />
                  <BiSolidDislike /> <span className="ms-2">No</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p>Android phone with version 7+?</p>
            <div className="flex gap-8 items-center">
              <div>
                <div className="flex items-center">
                  <input type="radio" name="radio-9" className="radio" />
                  <BiSolidLike /><span className="ms-2">Yes</span>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <input type="radio" name="radio-9" className="radio" />
                  <BiSolidDislike /> <span className="ms-2">No</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p>Convicted of a criminal offence?</p>
            <div className="flex gap-8 items-center">
              <div>
                <div className="flex items-center">
                  <input type="radio" name="radio-9" className="radio" />
                  <BiSolidLike /><span className="ms-2">Yes</span>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <input type="radio" name="radio-9" className="radio" />
                  <BiSolidDislike /> <span className="ms-2">No</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p>Agree to the driver <Link className="text-primary underline" to='/'>privacy policy</Link>?</p>
            <div className="flex gap-8 items-center">
              <div>
                <div className="flex items-center">
                  <input type="radio" name="radio-9" className="radio" />
                  <BiSolidLike /><span className="ms-2">Yes</span>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <input type="radio" name="radio-9" className="radio" />
                  <BiSolidDislike /> <span className="ms-2">No</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p>Agree to the <Link className="text-primary underline" to=''>terms and conditions?</Link></p>
            <div className="flex gap-8 items-center">
              <div>
                <div className="flex items-center">
                  <input type="radio" name="radio-9" className="radio" />
                  <BiSolidLike /><span className="ms-2">Yes</span>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <input type="radio" name="radio-9" className="radio" />
                  <BiSolidDislike /> <span className="ms-2">No</span>
                </div>
              </div>
            </div>
          </div>
          </div>


    <div className="mt-5">
    <p>Please enter the contact details below.</p>
    <input type="text" placeholder="First Name" className="input input-bordered w-full mt-2" />
    <input type="text" placeholder="Mobile Number" className="input input-bordered w-full mt-2" />
    <input type="text" placeholder="Email Address" className="input input-bordered w-full mt-2" />
    <button className="w-full bg-primary py-2 rounded-md text-white mt-4">Confirm and Continue</button>
    </div>

        </div>
      </section>
    </div>
  );
};

export default DriverPrivacyPolicy;
