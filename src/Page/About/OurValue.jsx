import React from "react";
import dottedBg2 from "../../assets/images/dotted-bg-2.png";
import valueImg from '../../assets/images/our-values-strap.webp'
import valueWallImg from '../../assets/images/Values-Wall-Blue-FINAL-2022-02.webp'

const OurValue = () => {
    return (
        <div>
      <div className="relative bg-black bg-opacity-60  overflow-hidden hero" style={{backgroundImage: "url(https://static.takealot.com/images/top-strap-bg.gif)"}}>

        <div className="relative z-10 text-white flex  items-center justify-center ">
          <div className="space-y-3 w-full py-5">
            <h2 className="text-3xl font-medium">
            LEARN MORE ABOUT
            </h2>
            <h1 className="text-5xl font-bold mb-4">OUR VALUES</h1>
            <p className="text-sm">
            Follow our exciting journey from humble beginnings to where we are today and where we are heading.
            </p>
          </div>
          <div className="w-full hidden lg:block">
            <img src={valueImg} alt="Who We Are" />
          </div>
        </div>
      </div>

      
        <div className="mt-14">
        <img src={valueWallImg} alt="" />
        </div>

    </div>
    );
};

export default OurValue;