import React from "react";
import coverimg from "../../assets/icons/who_we_are_header.webp";
import dottedBg2 from "../../assets/images/dotted-bg-2.png";
import bodyImg from '../../assets/images/body_image.jpg'
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <div>
      <div className="relative bg-black bg-opacity-60  overflow-hidden hero" style={{backgroundImage: "url(https://static.takealot.com/images/top-strap-bg.gif)"}}>

        <div className="relative z-10 text-white flex  items-center justify-center gap-48">
          <div className="space-y-3 py-5 px-3">
            <h2 className="text-3xl font-medium">
              Learn More About
            </h2>
            <h1 className="text-5xl font-bold mb-4 tracking-wider">Who We Are</h1>
            <p className="text-sm">
              We're takealot.com, and we've built our business on the simple
              principle that our <br /> customers come first.
            </p>
          </div>
          <div className="mt-8 hidden lg:block">
            <img src={coverimg} alt="Who We Are" className="h-56" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 mt-16 lg:mx-20 px-3 items-center text-sm">
        <div>
          <p className="text-md space-y-2">
            <p>
            Hi <br /> We’re <Link className="text-primary" to='/'>takealot.com</Link>, and we’ve built our business on the
            simple principle that our customers come first.</p>
            <p>Our business is retail and we strive to have the widest range of
            products and the best possible customer service on the African
            continent. We’re doing it by employing great people and developing
            innovative, cutting-edge tech.</p>
            <p>But that’s what we do. It’s not who we are. We are all about our
            customers. We want to be the most customer-centric online shopping
            destination in Africa – to make online shopping so easy and seamless
            that everyone will feel comfortable doing it.</p>
            <p>We want to know our customers. We want to be a part of their lives.
            We want each experience they have with us to leave them with a
            smile, whether it’s a confirmation email, an added detail on the
            packaging or even the return of an unwanted or damaged order.</p>
            <p>Sure, we’re only human and we make mistakes, but when we do, we
            confront them honestly, openly and immediately, doing everything we
            can to make things right.</p> <br /> We’re <Link to='/' className="text-primary">takealot.com</Link> <br /> Welcome.
          </p>
        </div>
        <div>
            <img src={bodyImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
