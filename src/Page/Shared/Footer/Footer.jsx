// import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';


const Footer = () => {
    // const [mode, setMode] = useState("auto");
    return (




        <footer className="text-gray-600 mt-20 -z-50">
            <div className="bg-white hidden lg:flex">
                <div className="max-w-7xl mx-auto">
                    <div className="py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                            <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                                <span className="font-bold  mb-5">Download Our Apps</span>
                            </p>

                            <div className="flex items-center gap-3">
                                <img src="https://shopfront.takealot.com/3b82b4b187020f19a0133caaeea48a477247686e/static/media/src/images/google-play.svg-7a92427373a19e40a662.svg" alt="" />
                                <img src="https://shopfront.takealot.com/3b82b4b187020f19a0133caaeea48a477247686e/static/media/src/images/app-store.svg-edce310696aa7f6191a1.svg" alt="" />
                            </div>
                            <img className="mt-2" src="https://shopfront.takealot.com/3b82b4b187020f19a0133caaeea48a477247686e/static/media/src/images/huawei-appgallery.svg-bb1c8aaa1305360a018d.svg" alt="" />

                            <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                                <span className="font-bold text-xl mt-8  mb-3">Follow Us</span>
                            </p>

                            <div className=" space-x-2  ">
                                <Link to='https://www.facebook.com/KhejurBD/' target='_blank' className="w-8 h-8 items-center hover:text-blue-700 justify-center inline-flex rounded-full font-bold text-lg scale-100 hover:scale-110 hover:ease-out duration-500 " style={{ border: "1px solid" }}><BsFacebook></BsFacebook></Link>
                                <Link to='https://www.youtube.com/@khejurbd268' target='_blank' className="w-8 h-8 items-center hover:text-blue-400 justify-center inline-flex rounded-full font-bold text-lg scale-100 hover:scale-110 hover:ease-out duration-500 " style={{ border: "1px solid" }}><BsTwitter></BsTwitter></Link>
                                <Link to='https://www.instagram.com/khejur.bd/' target='_blank' className="w-8 h-8 items-center  hover:text-red-500  justify-center inline-flex rounded-full font-bold text-lg scale-100 hover:scale-110 hover:ease-out duration-500 " style={{ border: "1px solid" }}><BsInstagram></BsInstagram> </Link>
                            </div>
                        </div>
                        <div className="flex-grow flex flex-wrap -mb-10   order-first">
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">

                                <ul>
                                    <li> <p className="font-bold  mb-5 ">Shop</p> </li>
                                    <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800 ">Daily Deals</p></Link></li>
                                    <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Gift Vouchers</p></Link></li>
                                    <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Clearance Sale</p></Link></li>
                                    <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">App Only Deals</p></Link></li>
                                </ul>

                                <ul>
                                    <li> <p className="font-bold  mb-3 mt-4 ">Takealot.group</p> </li>
                                    <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800 ">Superbalist.com</p></Link></li>
                                    <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Mr D</p></Link></li>
                                </ul>


                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">

                                <nav className="list-none mb-10">
                                    <ul>
                                        <li> <p className="font-bold  mb-5 ">Help</p> </li>
                                        <li> <Link to='/help-centre/returns'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Returns</p></Link></li>
                                        <li> <Link to='/contact-us'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Contact Us</p></Link></li>
                                        <li> <Link to='/help-centre'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800 ">Help Centre</p></Link></li>
                                        <li> <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUjBQcCeLiUuBwAAKylyX8uGz2W33ALxp8rA9baXs6SMVstg/viewform" target="_blank"> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Submit an Idea</p></a></li>
                                        <li> <a href="https://docs.google.com/forms/d/e/1FAIpQLScY6PG1gJAdlkgVz7cRLAN9aq7q14DotTIF0TonuLKPRNAXdQ/viewform" target="_blank"> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Suggest a Product</p></a></li>
                                        <li> <Link to='/help-centre/delivery'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Shipping & Delivery</p></Link></li>
                                        <li> <Link to='/takealot-pickup-points'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Takealot Pickup Points</p></Link></li>

                                    </ul>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">

                                <nav className="list-none mb-10">
                                    <ul>
                                        <li> <p className="font-bold  mb-5 ">Account</p> </li>
                                        <li> <Link to='/account/returns'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Returns</p></Link></li>
                                        <li> <Link to='/account/invoices'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Invoices</p></Link></li>
                                        <li> <Link to='/account/orders'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Track Order</p></Link></li>
                                        <li> <Link to='/account'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800 ">My Account</p></Link></li>
                                        <li> <Link to='/account/personal-details'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Personal Details</p></Link></li>

                                    </ul>
                                </nav>
                            </div>

                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">

                                <nav className="list-none mb-10">
                                    <ul>
                                        <li> <p className="font-bold  mb-5 ">Company</p> </li>
                                        <li> <Link to='/about/careers'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Careers</p></Link></li>
                                        <li> <Link to='/about'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800 ">About Us</p></Link></li>
                                        <li> <Link to='/competitions'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Competitions</p></Link></li>
                                        <li> <Link to='/about/company-news'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Press & News</p></Link></li>
                                        <li> <Link to='/return-policy-help/privacy-policy'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Privacy Policy</p></Link></li>
                                        <li> <Link to='/sell-on-takealot'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Sell on Takealot</p></Link></li>
                                        <li> <a href="speakup-process-policy.pdf" download="speakup-process-policy.pdf" to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Speak Up Process</p></a></li>
                                        <li> <Link to='/takealot-deliver'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Deliver for Takealot</p></Link></li>
                                        <li> <Link to='/return-policy-help/terms-and-conditions'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Terms & Conditions</p></Link></li>
                                        <li> <a href="human-rights-statement.pdf" download="human-rights-statement.pdf" to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Human Rights Statement</p></a></li>

                                    </ul>
                                </nav>


                            </div>


                        </div>

                    </div>

                    <div className="mx-auto border-t">

                        <div className="mt-4">
                            <div className="space-x-1  text-xs mb-3  " style={{ color: "#0b79bf" }}>
                                <Link className="hover:underline" to="/">Baby & Toddle / </Link>
                                
                                <Link className="hover:underline" to="/">Beaut / </Link>
                                
                                <Link className="hover:underline" to="/">Books / </Link>
                                
                                <Link className="hover:underline" to="/">Cameras / </Link>
                                
                                <Link className="hover:underline" to="/">Camping & Outdoors / </Link>
                                
                                <Link className="hover:underline" to="/">Cellphones & Wearables / </Link>
                                
                                <Link className="hover:underline" to="/">Computers & Tablets / </Link>
                                
                                <Link className="hover:underline" to="/">Fashion / </Link>
                                
                                <Link className="hover:underline" to="/">Gaming / </Link>
                                
                                <Link className="hover:underline" to="/">Garden, Pool & Patio / </Link>

                                <Link className="hover:underline" to="/">Health / </Link>
                                
                                <Link className="hover:underline" to="/">Home & Kitchen / </Link>
                                
                                <Link className="hover:underline" to="/">Luggage & Travel / </Link>





                            </div>
                        </div>

                        <div className="container mx-auto  ">

                            <div className="inline-flex items-center justify-center gap-2 text-xs mb-4 " style={{ color: "#0b79bf" }}>


                                <Link className="hover:underline" to="/">Movies & Series / </Link>
                                
                                <Link className="hover:underline" to="/">Music / </Link>
                                
                                <Link className="hover:underline" to="/">Office & Stationery / </Link>
                                
                                <Link className="hover:underline" to="/">Pets / </Link>
                                
                                <Link className="hover:underline" to="/">Sport / </Link>
                                
                                <Link className="hover:underline" to="/">TV, Audio & Video / </Link>
                                
                                <Link className="hover:underline" to="/">Toys / </Link>
                                
                                <Link className="hover:underline" to="/">Vouchers </Link>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <div className="lg:hidden w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10 py-10">
                            <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                                <span className="font-bold  mb-5">Download Our Apps</span>
                            </p>

                            <div className="flex flex-col items-center justify-center gap-3">
                                <div className="inline-flex items-center gap-3">
                                <img src="https://shopfront.takealot.com/3b82b4b187020f19a0133caaeea48a477247686e/static/media/src/images/google-play.svg-7a92427373a19e40a662.svg" alt="" />
                                <img src="https://shopfront.takealot.com/3b82b4b187020f19a0133caaeea48a477247686e/static/media/src/images/app-store.svg-edce310696aa7f6191a1.svg" alt="" />
                                </div>
                                <img className="mt-2" src="https://shopfront.takealot.com/3b82b4b187020f19a0133caaeea48a477247686e/static/media/src/images/huawei-appgallery.svg-bb1c8aaa1305360a018d.svg" alt="" />
                            </div>
                            

                            <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                                <span className="font-bold text-xl mt-8  mb-3">Follow Us</span>
                            </p>

                            <div className=" space-x-2 -z-30">
                                <Link to='https://www.facebook.com/KhejurBD/' target='_blank' className="w-8 h-8 items-center hover:text-blue-700 justify-center inline-flex rounded-full font-bold text-lg scale-100 hover:scale-110 hover:ease-out duration-500  -z-30" style={{ border: "1px solid" }}><BsFacebook></BsFacebook></Link>
                                <Link to='https://www.youtube.com/@khejurbd268' target='_blank' className="w-8 h-8 items-center hover:text-blue-400 justify-center inline-flex rounded-full font-bold text-lg scale-100 hover:scale-110 hover:ease-out duration-500 -z-30 " style={{ border: "1px solid" }}><BsTwitter></BsTwitter></Link>
                                <Link to='https://www.instagram.com/khejur.bd/' target='_blank' className="w-8 h-8 items-center  hover:text-red-500  justify-center inline-flex rounded-full font-bold text-lg scale-100 hover:scale-110 hover:ease-out duration-500 -z-30" style={{ border: "1px solid" }}><BsInstagram></BsInstagram> </Link>
                            </div>
                        </div>
            <div className="bg-primary" >


                <div className="flex flex-col lg:flex-row justify-between items-center container mx-auto  py-2 px-2"  >
                    <div className="py-4 grid grid-cols-5 lg:grid-cols-10  text-white items-center justify-center gap-3 lg:gap-1 opacity-60 ">
                        <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/payment-providers/visa.svg-af3e99c35d73e394b54d.svg" alt="VISA" className="w-12 h-12" />
                        <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/payment-providers/mastercard.svg-23a3ce15866685c8506f.svg" alt="Mastercard " className="w-10    h-8" />
                        <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/payment-providers/american-express.svg-c015bac32018ca240301.svg" alt="American Express" className="w-16  h-6" />
                        <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/payment-providers/diners-club-international.svg-1fbac96b68e4b755fc49.svg" alt="Diners Club International" className="w-20  h-8" />
                        <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/payment-providers/payfast.svg-d10895e3af0dedb31817.svg" alt="PayFast" className="w-16  h-6" />
                        <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/payment-providers/ozow.svg-5a25c4b6e18a84f487eb.svg" alt="Ozow" className="w-16  h-12" />
                        <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/payment-providers/ebucks.svg-56934a5cf17963365d09.svg" alt="eBucks" className="w-20  h-8" />
                        <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/payment-providers/mobicred.svg-bda9a4b182e4dd57d514.svg" alt="MobiCred" className="w-20  h-12" />
                        <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/payment-providers/Discovery-Miles-web-icon.png-96dc92f96edcb8d82f52.png" alt="Discovery Miles" className="w-20 discovery h-10" />
                        <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/payment-providers/payflex.svg-8961bc011a0bea670239.svg" alt="Payflex" className="w-24 payflex  h-6" />

                    </div>

                    <div className="my-2">
                        <p className="text-white text-sm opacity-80">© Takealot Online (Pty) Ltd.</p>
                    </div>

                </div>
            </div>
        </footer>



    );
};

export default Footer;