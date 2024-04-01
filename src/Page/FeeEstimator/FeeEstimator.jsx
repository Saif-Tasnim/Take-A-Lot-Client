import { FaCalculator, FaCross } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from '../../assets/icons/d5fa3e615adcdf6c849cf24fd6b9ab900ed20767.png'
import { FaInfo } from "react-icons/fa";


const FeeEstimator = () => {
  const [data, setData] = useState([])
  const [categoryData, setCategoryData] = useState([])
  const [divition, setDivition] = useState([])
  const [categories, setCategories] = useState([])
  const [fulfilmentFees, setfulfilmentFees] = useState(0)
  const [SuccessFee, setSuccessFees] = useState(0)
  const [susccessFeesPercent, setSuccessFeesPercent] = useState(null)
  const [price,setPrice]=useState(0)
  const [costOfProduct,setcostOfProduct]=useState(0)
  console.log(SuccessFee)
  useEffect(() => {
    fetch("estamator.json")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  useEffect(() => {
    fetch("depertmentToCategory.json")
      .then(res => res.json())
      .then(data => setCategoryData(data))
  }, [])


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();


  const onSubmit = (data) => {
    // Handle form submission here
    // You should add your logic for creating a user and processing the form data
    console.log(data);
    setPrice(data.Price)
    // Reset the form
    
    setcostOfProduct(data.Cost_of_Product)
    const Dimension1 = data.Dimension1;
    const Dimension2 = data.Dimension2;
    const Dimension3 = data.Dimension3;
    const pkgDimantions = Dimension1 * Dimension2 * Dimension3;

    if (pkgDimantions <= 35000 && data.Weight === "<=7Kg") {
      setfulfilmentFees(20);
    }
    else if (pkgDimantions <= 35000 && data.Weight === "25.1kg - 39.9kg") {
      setfulfilmentFees(100);
    }
    else if (pkgDimantions <= 35000 && data.Weight === "7.1Kg - 25kg") {
      setfulfilmentFees(47);
    }
    else if (pkgDimantions <= 35000 && data.Weight === "40Kg - 70kg") {
      setfulfilmentFees(100);
    }
    // for baby Product
    else if (pkgDimantions <= 35000 && data.Department === "Baby") {
      setfulfilmentFees(30);
    }
    else if (pkgDimantions <= 35000 && data.Weight === "25.1kg - 39.9kg" && data.Department === "Baby") {
      setfulfilmentFees(100);
    }
    else if (pkgDimantions <= 35000 && data.Weight === "7.1Kg - 25kg" && data.Department === "Baby") {
      setfulfilmentFees(47);
    }
    else if (pkgDimantions <= 35000 && data.Weight === "40Kg - 70kg" && data.Department === "Baby") {
      setfulfilmentFees(100);
    }
    // For Electronics
    // Todo 

    // For Other
    else if (pkgDimantions > 35000 && pkgDimantions < 130000 && data.Weight === "<=7Kg") {
      setfulfilmentFees(55);
    }
    else if (pkgDimantions > 35000 && pkgDimantions < 130000 && data.Weight === "25.1kg - 39.9kg") {
      setfulfilmentFees(100);
    }
    else if (pkgDimantions > 35000 && pkgDimantions < 130000 && data.Weight === "7.1Kg - 25kg") {
      setfulfilmentFees(60);
    }
    else if (pkgDimantions > 35000 && pkgDimantions < 130000 && data.Weight === "40Kg - 70kg") {
      setfulfilmentFees(110);
    }

    // less then 200000
    else if (pkgDimantions > 130000 && pkgDimantions < 200000 && data.Weight === "<=7Kg") {
      setfulfilmentFees(55);
    }
    else if (pkgDimantions > 130000 && pkgDimantions < 200000 && data.Weight === "25.1kg - 39.9kg") {
      setfulfilmentFees(100);
    }
    else if (pkgDimantions > 130000 && pkgDimantions < 200000 && data.Weight === "7.1Kg - 25kg") {
      setfulfilmentFees(60);
    }
    else if (pkgDimantions > 130000 && pkgDimantions < 200000 && data.Weight === "40Kg - 70kg") {
      setfulfilmentFees(110);
    }
    // less then 545000
    else if (pkgDimantions > 200000 && pkgDimantions < 545000 && data.Weight === "<=7Kg") {
      setfulfilmentFees(100);
    }
    else if (pkgDimantions > 200000 && pkgDimantions < 545000 && data.Weight === "25.1kg - 39.9kg") {
      setfulfilmentFees(150);
    }
    else if (pkgDimantions > 200000 && pkgDimantions < 545000 && data.Weight === "7.1Kg - 25kg") {
      setfulfilmentFees(135);
    }
    else if (pkgDimantions > 200000 && pkgDimantions < 545000 && data.Weight === "40Kg - 70kg") {
      setfulfilmentFees(160);
    }

    // success fees
 if (data.Department == "Baby") {
      setSuccessFeesPercent(11.0)
    }
    else if (data.Department == "Beauty") {
      setSuccessFeesPercent(13)
    }
    else if (data.Department == "Books") {
      setSuccessFeesPercent(14.5)
    }
    else if (data.Department == "Cameras") {
      setSuccessFeesPercent(8)
    }
    else if (data.Department == "Camping & Outdoo") {
      setSuccessFeesPercent(12.5)
    }
    else if (data.Department == "Clothing & Footwear") {
      setSuccessFeesPercent(17)
    }
    else if (data.Department == "Computer Components") {
      setSuccessFeesPercent(11.0)
    }
    else if (data.Department == "Computers & Laptops") {
      setSuccessFeesPercent(6.0)
    }
    else if (data.Department == "DIY & Automotive") {
      setSuccessFeesPercent(11.0)
    }
    else if (data.Department == "Electronic Accessories") {
      setSuccessFeesPercent(11.0)
    }
    else if (data.Department == "Games") {
      setSuccessFeesPercent(11.0)
    }
    else if (data.Department == "Garden, Pool & Patio") {
      setSuccessFeesPercent(11.0)
    }
    else if (data.Department == "Health") {
      setSuccessFeesPercent(11.0)
    }
    else if (data.Department == "Homeware") {
      setSuccessFeesPercent(11.0)
    }
    else if (data.Department == "Large Appliances") {
      setSuccessFeesPercent(11.0)
    }
    else if (data.Department == "Liquor") {
      setSuccessFeesPercent(11.0)
    }
    else if (data.Department == "Luggage & Travel") {
      setSuccessFeesPercent(11.0)
    }
    else if (data.Department == "Mobile") {
      setSuccessFeesPercent(13)
    }
    else if (data.Department == "Music & DVD") {
      setSuccessFeesPercent(11.0)
    }
    else if (data.Department == "Musical Instruments") {
      setSuccessFeesPercent(12)
    }
    else if (data.Department == "Non-Perishable") {
      setSuccessFeesPercent(8)
    }
    else if (data.Department == "Office") {
      setSuccessFeesPercent(9)
    }
    else if (data.Department == "Office Furniture") {
      setSuccessFeesPercent(10)
    }
    else if (data.Department == "Pets") {
      setSuccessFeesPercent(10.0)
    }
    else if (data.Department == "Sport") {
      setSuccessFeesPercent(13.0)
    }
    else if (data.Department == "Stationery") {
      setSuccessFeesPercent(14)
    }
    else if (data.Department == "Toys") {
      setSuccessFeesPercent(12)
    }
    else if (data.Department == "TV & Audio") {
      setSuccessFeesPercent(5.5)
    }
    else if (data.Department == "Small Appliances") {
      setSuccessFeesPercent(11.0)
    }
    else if (data.Department == "Smart Home & Connected Living") {
      setSuccessFeesPercent(10)
    }
    else{
      setSuccessFeesPercent(2)
    }


    // Calculation

    const price = parseFloat(data.Price)
    if (susccessFeesPercent > 0) {
      const succesFee = price * susccessFeesPercent / 100
      setSuccessFees(succesFee)
    }
    

  };


  // console.log(fulfilmentFees)
  const divitionHandler = (e) => {
    e.preventDefault()


    const divitionData = data.filter(f => {
      if (f.Division === e.target.value) {
        return f
      }
    })
    setDivition(divitionData[0].Department)
  }

  const CategoryHandler = (e) => {
    e.preventDefault()

    console.log(e.target.value)
    const divitionData = categoryData.filter(f => {
      if (f.Department === e.target.value) {
        return f
      }
    })
    setCategories(divitionData[0].Category)
  }
  // console.log(categories)


  const totalFees =fulfilmentFees+SuccessFee;
  

  return (
    <div className="">

      <div className="bg-white py-4 w-full flex px-2">
        <Link to="/">
          <img className="w-28" src={logo} alt="" />
        </Link>
        <div className="ps-[500px]">
          <h1 className="text-lg flex items-center gap-2 font-semibold">
            <FaCalculator /> FeeEstimator
          </h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-center mt-3">
        <div className="bg-white px-3 py-3 hover:shadow-xl w-[35%] m-2 rounded">
          <h1 className="text-2xl font-semibold mb-3">Estimate Takealot Fees</h1>
          <p className="text-xs pb-[200px]">
            Use the Fee Estimator to estimate the Takealot Fees you will be
            charged on a sale, allowing you to have more visibility and
            transparency when it comes to guaranteed fees charged. <br /> <br /> Please note
            that the Fee Estimator provides an estimate and does not include
            subscription fees, storage fees or any other fees that can be
            avoided and are not guaranteed to be applied to the sale of a
            product. <br /> <br /> For more information on how to use the Fee Estimator, click
            <Link className="text-blue-400"> here</Link> or view the Takealot <Link className="text-blue-400">pricing schedule</Link> for information on fees.
          </p>
        </div>

        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white mx-10 px-3 py-4 hover:shadow-xl rounded">

            {/* pacage dmensions */}
            <div className="flex gap-2 ">
              <p className="flex text-xs gap-2 items-center">
                Package Dimensions<span className="text-red-400"> * </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="30"
                    viewBox="10 10 100 100"
                  >
                    <circle cx="50" cy="50" r="40" fill="black" />
                    <text
                      x="40"
                      y="70"
                      font-family="italic"
                      font-size="60"
                      fill="white"
                    >
                      i
                    </text>
                  </svg>
                </span>
              </p>{" "}


              <div className="ms-5">
                <input
                  {...register("Dimension1")}
                  name="Dimension1"
                  className={`border w-[80px] rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 "border-red-500" focus:bg-blue-100 focus:border-blue-200 ${errors ? "border-red-500" : ""
                    }`}
                  type="text"
                  placeholder=""

                />
                {errors && (
                  <p className="text-red-500 text-xs mt-1"><span>Package dimensions are required.</span></p>
                )}
              </div>
              <span className="-ms-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="30"
                  viewBox="0 0 100 100"
                >
                  <line
                    x1="20"
                    y1="20"
                    x2="80"
                    y2="80"
                    stroke="#000"
                    stroke-width="15"
                  />
                  <line
                    x1="20"
                    y1="80"
                    x2="80"
                    y2="20"
                    stroke="#000"
                    stroke-width="15"
                  />
                </svg>
              </span>
              <div className="">
                <input
                  {...register("Dimension2")}
                  name="Dimension2"
                  className={`border w-[80px] rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 ${errors ? "border-red-500" : ""
                    }`}
                  type="text"
                  placeholder=""

                />
              </div>
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="30"
                  viewBox="0 0 100 100"
                >
                  <line
                    x1="20"
                    y1="20"
                    x2="80"
                    y2="80"
                    stroke="#000"
                    stroke-width="15"
                  />
                  <line
                    x1="20"
                    y1="80"
                    x2="80"
                    y2="20"
                    stroke="#000"
                    stroke-width="15"
                  />
                </svg>
              </span>
              <div className="">
                <input
                  {...register("Dimension3")}
                  name="Dimension3"
                  className={`border w-[80px] rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 ${errors ? "border-red-500" : ""
                    }`}
                  type="text"
                  placeholder=""

                />
              </div>
              <p className="text-xs mt-2">Cm</p>


            </div>
            <div>

            </div>


            {/* Unit weight */}
            <div className="flex gap-2 mt-2">
              <p className="flex text-xs gap-2 items-center">
                Unit Weight
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="30"
                    viewBox="10 10 100 100"
                  >
                    <circle cx="50" cy="50" r="40" fill="black" />
                    <text
                      x="40"
                      y="70"
                      font-family="italic"
                      font-size="60"
                      fill="white"
                    >
                      i
                    </text>
                  </svg>
                </span>
              </p>{" "}


              <div className="flex gap-10 ms-20 text-xs">
                <div className="">
                  <input {...register("Weight")} type="radio" name="Weight" value="<=7Kg" className="radio" /> {"<" + '='}7Kg <br />
                  <input {...register("Weight")} type="radio" name="Weight" value="25.1kg - 39.9kg" className="radio " /> 25.1kg - 39.9kg
                </div>
                <div>
                  <input {...register("Weight")} type="radio" name="Weight" value="7.1Kg - 25kg" className="radio " /> 7.1Kg - 25kg <br />
                  <input {...register("Weight")} type="radio" name="Weight" value="40kg - 70kg" className="radio " /> 40kg - 70kg
                </div>
              </div>


            </div>



            {/* Division */}
            <div className="flex gap-2 mt-2">
              <p className="flex text-xs gap-2 items-center">
                Division<span className="text-red-400"> * </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="30"
                    viewBox="10 10 100 100"
                  >
                    <circle cx="50" cy="50" r="40" fill="black" />
                    <text
                      x="40"
                      y="70"
                      font-family="italic"
                      font-size="60"
                      fill="white"
                    >
                      i
                    </text>
                  </svg>
                </span>
              </p>{" "}


              <div className="ms-[90px]">
                <select
                placeholder="Please select"
                  onClick={divitionHandler}
                  {...register("Division")}
                  name="Division"
                  className="text-xs w-80 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="">Consumer Electronics</option>
                  {
                    data?.map(d => <option value={d?.Division}>{d?.Division}</option>)
                  }
                  {/* <option value="Home">Home</option>
      <option value="Personal & Lifestyle">Personal & Lifestyle</option>
      <option value="Family">Family</option>
      <option value="Consumables">Consumables</option>
      <option value="Media">Media</option>
      <option value="Office & Business">Office & Business</option> */}
                </select>
              </div>
            </div>


            {/* Depertment */}
            <div className="flex gap-2 mt-2">
              <p className="flex text-xs gap-2 items-center">
                Department<span className="text-red-400"> * </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="30"
                    viewBox="10 10 100 100"
                  >
                    <circle cx="50" cy="50" r="40" fill="black" />
                    <text
                      x="40"
                      y="70"
                      font-family="italic"
                      font-size="60"
                      fill="white"
                    >
                      i
                    </text>
                  </svg>
                </span>
              </p>{" "}


              <div className="ms-[70px]">
                <select
                placeholder="Please select"
                  {...register("Department")}
                  name="Department"
                  onClick={CategoryHandler}
                  className="text-xs w-80 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                >

                  {
                    divition?.map(d => <option value={d}>{d}</option>)
                  }
                  {/* <option value="Electronic Accessories">Electronic Accessories</option>
      <option value="Cameras">Cameras</option>
      <option value="Gaming">Gaming</option>
      <option value="Computers & Laptops">Computers & Laptops</option>
      <option value="Computers & Components">Computers & Components</option>
      <option value="TV & audio">TV & audio</option>
      <option value="Mobile">Mobile</option> */}
                </select>
              </div>
            </div>



            {/* Category */}
            <div className="flex gap-2 mt-2">
              <p className="flex text-xs gap-2 items-center">
                Category<span className="text-red-400"> * </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="30"
                    viewBox="10 10 100 100"
                  >
                    <circle cx="50" cy="50" r="40" fill="black" />
                    <text
                      x="40"
                      y="70"
                      font-family="italic"
                      font-size="60"
                      fill="white"
                    >
                      i
                    </text>
                  </svg>
                </span>
              </p>{" "}


              {/* todo: make category section dynamically  */}

              <div className="ms-[85px]">
                <select
                placeholder="Please select"
                  {...register("Category")}
                  name="Category"
                  className="text-xs w-80 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                >
                  {/* <option value="">Pick One</option> */}
                  {
                    categories.map(c => <option value={c}>{c}</option>)
                  }
                  <option value="option1">Stethoscopes → Stethoscopes</option>
                  <option value="option2">Smoking Alternatives & Electronic Cigarettes → Hookah Pipes</option>
                  <option value="option3">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Accessories</option>
                  <option value="option4">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Coals</option>
                  <option value="option5">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Coil Wires, Wicks & Cotton</option>
                  <option value="option5">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Replacement Pipes</option>
                  <option value="option5">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Storage & Cases</option>
                  <option value="option5">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Tips</option>
                  <option value="option5">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Tongs</option>
                  <option value="option5">moking Alternatives & Electronic Cigarettes → Smoking Alternative Devices</option>
                  <option value="option5">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Refills</option>
                  <option value="option5">Smoking Alternatives & Electronic Cigarettes → Vaping Devices</option>
                  <option value="option5">Smoking Alternatives & Electronic Cigarettes → Vaping Refills</option>
                  <option value="option5">Health Care → Adult Nappies</option>
                  <option value="option5">Health Care → Biometric Monitors → Blood Glucose Meters</option>
                  <option value="option5">Health Care → Biometric Monitors → Blood Pressure Monitors</option>
                  <option value="option5">Health Care → Biometric Monitors → Body Weight Scales</option>
                  <option value="option5">Health Care → Biometric Monitors → Medical Thermometers</option>
                  <option value="option5">Health Care → Biometric Monitors → Pulse Oximeters</option>
                  <option value="option5">Health Care → Coffins</option>
                  <option value="option5">Health Care → DNA Ancestry Tests</option>
                  <option value="option5">Health Care → Ear Devices</option>
                  <option value="option5">Health Care → First Aid → Antiseptics & Cleaning Supplies</option>
                  <option value="option5">Health Care → First Aid → Burns & Blisters</option>
                  <option value="option5">Health Care → First Aid → Cotton Wool & Swabs</option>
                  <option value="option5">Health Care → First Aid → Equipment</option>
                  <option value="option5"></option>
                  <option value="option5"></option>
                  <option value="option5"></option>
                  <option value="option5"></option>
                  <option value="option5"></option>
                  <option value="option5"></option>
                </select>
              </div>


            </div>




            {/* Sellings Price */}
            <div className="flex gap-2 mt-2">
              <p className="flex text-xs gap-2 items-center">
                Selling Price<span className="text-red-400"> * </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="30"
                    viewBox="10 10 100 100"
                  >
                    <circle cx="50" cy="50" r="40" fill="black" />
                    <text
                      x="40"
                      y="70"
                      font-family="italic"
                      font-size="60"
                      fill="white"
                    >
                      i
                    </text>
                  </svg>
                </span>
              </p>{" "}



              <div className="ms-[70px]">
                <div className="flex">
                  {/* <div className="bg-slate-400 px-3 rounded-r-none rounded-md">R</div> */}
                  <div className={`border border-r-1 rounded-r-none rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 ${errors ? "border-red-500" : ""
                    }`}>R</div>
                  <input
                    // id="inputField"
                    {...register("Price")}
                    name="Price"
                    defaultValue='0'
                    className={`border w-[280px] border-s-0 rounded-s-none rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 ${errors ? "border-red-500" : ""
                      }`}
                    type="text"
                    placeholder=""

                  />
                </div>
                {errors && (
                  <p className="text-red-500 text-xs mt-1"><span>Package dimensions are required.</span></p>
                )}
              </div>
            </div>




            {/* Sellings Price */}
            <div className="flex gap-2 mt-2">
              <p className="flex text-xs gap-2 items-center">
                Cost of Product
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="30"
                    viewBox="10 10 100 100"
                  >
                    <circle cx="50" cy="50" r="40" fill="black" />
                    <text
                      x="40"
                      y="70"
                      font-family="italic"
                      font-size="60"
                      fill="white"
                    >
                      i
                    </text>
                  </svg>
                </span>
              </p>{" "}



              <div className="ms-[66px]">
                <div className="flex">
                  {/* <div className="bg-slate-400 px-3 rounded-r-none rounded-md">R</div> */}
                  <div className={`border border-r-1 rounded-r-none rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 ${errors ? "border-red-500" : ""
                    }`}>R</div>
                  <input
                    // id="inputField"
                    {...register("Cost_of_Product")}
                    name="Cost_of_Product"
                    defaultValue='0.00'
                    className={`border w-[280px] border-s-0 rounded-s-none rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 ${errors ? "border-red-500" : ""
                      }`}
                    type="text"
                    placeholder=""

                  />
                </div>
                {errors && (
                  <p className="text-red-500 text-xs mt-1"><span>Package dimensions are required.</span></p>
                )}
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <p className="text-xs">Required <span className="text-red-500">*</span></p>
              <div>

                <button className="px-4 py-2 bg-primary rounded text-white font-semibold text-xs">Calculate</button>

              </div>
            </div>





          </form>
         
            {
              SuccessFee>0|| SuccessFee<0? <div className="bg-white hover:shadow-2xl mt-10 pt-2 w-[600px] rounded-lg mx-10 px-2"><table className="w-full text-sm border-none shadow-slate-300  rounded-lg">
              <tr>
                <th></th>
                <th>Leadtime</th>
                <th>In-Stock</th>
              </tr>
              <tr className="border-x-2">
                <td className="border-none border-separate border-e-2"><input type="checkbox" checked className="p-1 ms-2 bg-slate-300"  />Inclued VAT</td>
                <td  className=" border-b-0"></td>
                <td  className=" border-b-0"></td>
              </tr>
              <tr className="border-x-2 ">
                <td className="border-none font-semibold ps-2 mt-2 pt-3">Revenue</td>
                <td className="border-b-0 border-t-0"></td>
                <td className="border-b-0 border-t-0"></td>
              </tr>
              <tr className="border-x-2">
                <td className="border-none ps-2 mt-2 flex items-center">Selling Price<FaInfo className="rounded-full bg-black text-white p-[1px]"/> </td>
                <td className="border-b-0 border-t-0 text-center">R {price} </td>
                <td className="border-b-0 border-t-0 text-center">R {price} </td>
              </tr>
              <tr className="border-x-2">
                <td className="border-none ps-2 pt-4 mt-2 font-semibold">Takealot Fees</td>
                <td className="border-b-0 border-t-0"></td>
                <td className="border-b-0 border-t-0"></td>
              </tr>
              <tr className="border-x-2">
                <td className="border-none ps-2 mt-2 flex items-center gap-2">Success Fees <FaInfo className="rounded-full bg-black text-white p-[1px]"/></td>
                <td className="border-b-0 border-t-0 text-center"> R {SuccessFee} </td>
                <td className="border-b-0 border-t-0 text-center">  R {SuccessFee}</td>
              </tr>
              <tr className="border-x-2">
                <td className="border-none ps-2 mt-2 flex items-center gap-2">Fulfilment Fees <FaInfo className="rounded-full bg-black text-white p-[1px]"/></td>
                <td className="border-b-0 border-t-0 text-center">R {fulfilmentFees}</td>
                <td className="border-b-0 border-t-0 text-center"> R  {fulfilmentFees}</td>
              </tr>
              <tr className="border-x-2">
                <td className="border-none ps-2 pt-5 mt-5 font-semibold">Net Sales</td>
                <td className="border-b-0 border-t-0 text-center pt-5 mt-5 font-semibold">R {price-totalFees}</td>
                <td className="border-b-0 border-t-0 text-center pt-5 mt-5 font-semibold"> R  {price-totalFees}</td>
              </tr>
              <tr className="border-x-2 ">
                <td className="border-none ps-2 pt-5 mt-5 flex items-center gap-2">Cost Of Product <FaInfo className="rounded-full bg-black text-white p-[1px]"/></td>
                <td className="border-b-0 border-t-0  pt-2  items-center text-center   mt-5 ">
                <div className="flex w-full pt-1">
                <div className="border px-1">R</div>
                <input className="border rounded w-36 text-right px-2" type="text" defaultValue={costOfProduct} disabled />
                </div>
                </td>
                <td className="border-b-0 border-t-0 items-center  text-center pt-2 mt-5 ">
               <div className="flex w-full text-right pt-1">
               <div className="border px-1">R</div>
                <input className="border rounded w-36 text-right px-2 " type="text" defaultValue={costOfProduct} disabled/>
               </div>
                   </td>
              </tr>
              <tr className="border-x-2 ">
                <td className="border-none ps-2 pt-5 flex items-center gap-2">Cost to Ship to Takealot DC <FaInfo className="rounded-full bg-black text-white p-[1px]"/></td>
                <td className="border-b-0 border-t-0  pt-2  items-center text-center   mt-5 ">
                <div className="flex w-full pt-1">
                <div className="border px-1">R</div>
                <input className="border rounded w-36 text-right px-2" type="text" defaultValue={0.00} disabled />
                </div>
                </td>
                <td className="border-b-0 border-t-0 items-center  text-center pt-2 mt-5 ">
               <div className="flex w-full text-right pt-1">
               <div className="border px-1">R</div>
                <input className="border rounded w-36 text-right px-2 " type="text" defaultValue={0.00} disabled/>
               </div>
                   </td>
              </tr>
              <tr className="border-x-2 ">
                <td className="border-none ps-2 pt-5 flex items-center gap-2 ">Other Costs <FaInfo className="rounded-full bg-black text-white p-[1px]"/></td>
                <td className="border-b-0 border-t-0  pt-2  items-center text-center   mt-5 ">
                <div className="flex w-full pt-1">
                <div className="border px-1">R</div>
                <input className="border rounded w-36 text-right px-2" type="text" defaultValue={0.00} disabled />
                </div>
                </td>
                <td className="border-b-0 border-t-0 items-center  text-center pt-2 mt-5 ">
               <div className="flex w-full text-right pt-1">
               <div className="border px-1">R</div>
                <input className="border rounded w-36 text-right px-2 " type="text" defaultValue={0.00} disabled/>
               </div>
                   </td>
              </tr>
              <tr className="border-x-2">
                <td className="border-none ps-2 pt-5 mt-5 font-semibold">Net Profitability</td>
                <td className="border-b-0 border-t-0 text-center pt-5 mt-5 font-semibold"></td>
                <td className="border-b-0 border-t-0 text-center pt-5 mt-5 font-semibold"> </td>
              </tr>
              <tr className="border-x-2">
                <td className="border-none ps-2  mt-5 ">Net Profit</td>
                <td className="border-b-0 border-t-0 text-center ">R-{totalFees}</td>
                <td className="border-b-0 border-t-0 text-center "> R-{totalFees}</td>
              </tr>
              <tr className="border-x-2">
                <td className="border-none ps-2  mt-5 ">Net Margin</td>
                <td className="border-b-0 border-t-0 text-center ">{price-totalFees/100}%</td>
                <td className="border-b-0 border-t-0 text-center ">{price-totalFees/100}%</td>
              </tr>
             
            </table>
            <hr />
            <i className="text-sm">These are estimates only and exclude subscription fees, avoidable fees, and other costs your business might incur. See the Sell on Takealot page for fees.</i>
           
            </div>:<></>
            }

          
        </div>
      </div>
      <div className="text-right">
        <button className=" -rotate-90  -mr-6 bg-blue-600 px-4 py-2 rounded text-white text-xs">Calculate</button>
      </div>
    </div>

  );
};

export default FeeEstimator;
