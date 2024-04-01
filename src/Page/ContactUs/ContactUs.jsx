import React from "react";
import { Link, useLocation } from "react-router-dom";
import ReturnPolicyTabs from "../../components/ReturnPolicyTabs/ReturnPolicyTabs";

const ContactUs = () => {
  const path = useLocation();
  return (
    <div className="mt-10">
      <div
        className="flex items-center h-60 text-left lg:px-10 px-4 overflow-hidden"
        style={{
          backgroundImage:
            "url(https://static.takealot.com/images/top-strap-bg.gif)",
        }}
      >
        <div className="banner-description w-full">
          <h1 className="text-xl mb-2 lg:text-6xl font-bold text-white uppercase">
            Questions
          </h1>
          <p className="text-white text-sm mt-5 font-light">
            Need help with placing or tracking an order, want to know more about
            our products or services, or simply looking for our warehouse?
            You've come to the right place!
          </p>
        </div>
        <div className="banner-img hidden lg:block w-full">
          {/* <img src="https://media.takealot.com/covers_blog/header.png" alt="Image"/> */}
        </div>
      </div>
      <ReturnPolicyTabs />

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 text-xs px-20">
        <div>
          <h2 className="text-xl mb-2 font-semibold">Need Help?</h2>
          <div className="">
            <p>
              Visit our <Link to='/help-centre' className="text-primary">Help</Link> page for answers to frequently asked delivery,
              order, payment and product questions, or log an enquiry if there’s
              something specific you need assistance with.
            </p>{" "}
            <br />
            <p>
              One of our friendly online shopping assistants will come back to
              you within the following working hours:
            </p>{" "}
            <br />
            <h4>Customer Service Working Hours:</h4>
            <p>
              Weekdays 7h00 – 22h00 <br />
              Weekends 9h00 – 18h00 <br />
              Public Holidays 9h00 – 18h00 <br /> <br />
              (Closed on Christmas & New Year’s Day)
            </p>{" "}
            <br />
            <h2 className="text-xl mb-2 font-semibold">Track My Order</h2>{" "}
            <br />
            <p>
              Visit our <Link to='/help-centre' className="text-primary">Help</Link> page for the most current tracking information we
              have for your order using your order number.
            </p>{" "}
            <br />
            <p>
              You can also track your delivery at any time by selecting the
              Order Number from your Order History on your Takealot account
              profile <Link to='/orders' className="text-primary">here</Link>.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-xl mb-2 font-semibold">
            Customer Collections and Returns
          </h2>
          <p>
            You can collect or return your order at a Takealot Pickup Point near
            you during the following operating hours.
          </p> <br />
          <h4 className="font-semibold">
            Takealot Pickup Point Operating Hours:
          </h4>
          <p>
            Weekdays 8h00 – 18h00 <br />
            Weekends 11h00 – 17h00 <br />
            Public Holidays 11h00 – 17h00
          </p> <br />
          <p className="font-semibold">
            *Please note: Individual Pickup Points’ operating hours may vary and
            are subject to change.
          </p> <br />
          <h4 className="font-semibold">Fordsburg Pickup Point</h4>
          <p>
            Weekdays – 08h00 – 18h00 <br />
            Weekends – 09h00 – 17h00 <br />
            Public Holidays 19h00 – 17h00
          </p> <br />
          <h4 className="font-semibold">Fordsburg Pickup Point</h4>
          <p>
            Weekdays – 08h00 – 18h00 <br />
            Weekends – 09h00 – 17h00 <br />
            Public Holidays 19h00 – 17h00
          </p> <br />
          <h4 className="font-semibold">
            WITS University and FNB Bank City Pickup Points
          </h4>
          <p>16 December to 8 January – Closed</p> <br />
          <h4 className="font-semibold">Midrand (N1 Bridge) Pickup Point</h4>
          <p>
            Weekdays – 06h00 – 18h00 <br />
            Saturday – 08h00 – 15h00 <br />
            Sunday – 08h00 – 13h00 <br />
            Public Holidays – 08h00 – 17h00
          </p> <br />
          <h4>
            Richmond Park (NEW Cape Town <br /> Warehouse Pickup Point)
            Collections
          </h4>
          Click <Link to='/takealot-pickup-points' className="text-primary">here</Link> to find a Takealot Pickup Point near you.
        </div>
        <div>
          <h2 className="text-xl mb-2 font-semibold">Cape Town Office</h2>
          <p className="">
            12th Floor, Takealot Building 10 Rua Vasco Da Gama Plain Foreshore
            Cape Town 8001
          </p>
        </div>
        <div>
          <h2 className="text-xl mb-2 font-semibold">PR & Marketing</h2>
          <p>
            Do you have a media request for product reviews or press comment? Do
            you have an exciting marketing partnership idea that you’d like to
            propose to Takealot? Then you can reach our friendly <Link to='' className="text-primary"><Link to='/help-centre' className="text-primary">Marketing team
            here.</Link></Link> Alternatively, do you have an inquiry about the Takealot
            Group? Reach out to us <Link to='/help-centre' className="text-primary">here</Link>.
          </p> <br />
          <h2 className="text-xl mb-2 font-semibold">
            Marketplace Seller Solutions
          </h2>
          <p>
            Looking to sell something exciting on <Link to='/' className="text-primary">Help</Link>? takealot.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
