import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import useProducts from "../../hooks/useProducts";
import { useEffect } from "react";
import { useState } from "react";
import { HiStar } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import ErrorPage from "../ErrorPage/ErrorPage";
const OurCareers = () => {
  const [allProducts] = useProducts();

  return (
    <div>

<ErrorPage />


      {/* Trending products section */}
        <div className="flex justify-between mt-10 mx-10">
        <div>
          <h2 className="text-lg font-semibold">Trending Products</h2>
        </div>
        <div>
          <Link
            to="/all"
            className="text-primary hover:underline flex items-center gap-3"
          >
            View All <FaArrowRight />
          </Link>
        </div>
        </div>
        


        {/* swiper  */}
        <div className="mx-auto">
          <div className="hidden lg:block w-full">
            {/* lg product swiper */}
            <div className="product-cards w-full my-4 h-full">
              <Swiper
                slidesPerView={4}
                spaceBetween={20}
                // loop={true}
                // pagination={{
                //   clickable: true,
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {allProducts.slice(0, 10).map((prod) => (
                  <SwiperSlide key={prod?._id} className="h-full px-14">
                    <Link
                      to={`/product-details/${prod?.Product_Name}/${prod?._id}`}
                      className="w-[200px] flex flex-col gap-2 bg-white px-2 py-3 shadow hover:shadow-xl h-full overflow-visible"
                    >
                      <div className="w-[150px] h-[120px] mx-auto">
                        <img src={prod?.Image_URL} alt={prod?.Product_Name} />
                      </div>

                      <div className="h-[40px] mt-8">
                        <p className="text-xs font-normal text-[#4d4d4f] overflow-hidden">
                          {prod?.Product_Name.slice(0, 45)}
                          {prod?.Product_Name.length > 50 ? "..." : ""}
                        </p>
                      </div>

                      <div className="mt-3 flex flex-col space-y-2">
                        <p className="font-bold">R 220</p>
                        <p className="items-center gap-1 text-sm">
                          <HiStar className="inline-flex  gap-2 items-center h-4 w-4 text-yellow-400" />{" "}
                          <span>4.3</span>
                        </p>
                          <div className="text-center w-full">
                            <button className="btn btn-outline btn-success w-full py-2 rounded mt-2">Add to Cart</button>
                          </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="block lg:hidden w-full">
            {/* mobile product swiper */}
            <div className="product-cards w-full my-4 gap- h-full">
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                // loop={true}
                // pagination={{
                //   clickable: true,
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {allProducts.slice(0, 10).map((prod) => (
                  <SwiperSlide key={prod?._id} className="">
                    <Link
                      to={`/product-details/${prod?.Product_Name}/${prod?._id}`}
                      className="w-[200px] h-[300px] flex flex-col gap-2 bg-white px-2 py-3 shadow hover:shadow-xl"
                    >
                      <div className="w-[150px] h-[120px] mx-auto">
                        <img src={prod?.Image_URL} alt={prod?.Product_Name} />
                      </div>

                      <div className="h-[40px] mt-8">
                        <p className="text-xs font-normal text-[#4d4d4f] overflow-hidden">
                          {prod?.Product_Name.slice(0, 45)}
                          {prod?.Product_Name.length > 50 ? "..." : ""}
                        </p>
                      </div>

                      <div className="mt-3 flex flex-col space-y-2">
                        <p className="font-bold">R 220</p>
                        <p className="items-center inline-flex  gap-2  h-4 text-sm">
                          <HiStar className="h-4 w-4 text-yellow-400" />{" "}
                          <span>4.3</span>                        
                        </p>
                          <div className="w-full text-center">
                            <button className="btn btn-outline btn-success w-full py-2 rounded mt-2">Add to Cart</button>
                          </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

    </div>
  );
};

export default OurCareers;
