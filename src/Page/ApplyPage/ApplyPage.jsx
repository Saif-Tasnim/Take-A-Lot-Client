import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import "../Register/Register.css"
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const ApplyPage = () => {
    const [axiosSecure] = useAxiosSecure();
    const [categoryList, setCategory] = useState([]);
    const [labelShow1, setLabelShow1] = useState(false);
    const [vatNo, setVatNo] = useState(false);
    const [labelShow2, setLabelShow2] = useState(false);
    const [labelShow3, setLabelShow3] = useState(false);
    const [labelShow4, setLabelShow4] = useState(false);
    const [revenue, setRevenue] = useState("");
    // const [stockSource, setStockSource] = useState("");
    const [carryStock, setCarryStock] = useState("");
    const { register, formState: { errors }, handleSubmit,formState, reset } = useForm();

    useEffect(()=>{
        fetch("https://take-a-lot-server-two.vercel.app/all-category")
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])

    const onSubmit = async (data) => {


        const newSellerData = {
            sellerFirstName: data?.firstName,
            sellerLastName: data?.lastName,
            sellerEmail: data?.email,
            sellerPhoneNumber: data?.phone ? data?.phone : "",
            sellerMobileNumber: data?.mobile ? data?.mobile : "",
            hearAboutTakealot : data?.hearAboutTakealot ? data?.hearAboutTakealot : "",
            companyName: data?.companyName,
            ownerFirstName: data?.ownerFirstName,
            ownerLastName: data?.ownerLastName,
            ownerEmail: data?.ownerEmail,
            category: data?.category,
            companyWebsite: data?.website,
            sellerOrCompanySocialMedia: data?.media ? data?.media : "",
            urlWebsiteLinkProducts: data?.URLWebsiteLink,
            isSouthBased: data?.southAfricaYes ? "Yse" : "No",
            isVATRegistered: data?.vatRegisterYes ? "Yes" : "No",
            VATNumber: data?.VATNumber ? data?.VATNumber : "",
            monthlyRevenue: revenue,
            businessRegNumberOrIndividualId: data?.businessResIndividualId,
            uniqueProducts: data?.numberOFProd,
            allYourBrands: data?.allYourBrands,
            sourceOfStock: data?.sourceYourStock,
            carryStock : data?.carryStockYes ? data?.carryStockYes : "No",
            havePhysicalStore: data?.haveStore ? data?.haveStore : data?.haveStoreNo,
            supplyRetailOutlets: data?.supplyRetail ? data?.supplyRetail : data?.supplyRetailNo,
            sell_hand_crafted_items: data?.sell_hand_crafted_items ? "Yes" : "No",
            haveRegisteredAccount: data?.registeredAccountYes ? data?.registeredAccountYes : data?.registeredAccountNo ? data?.registeredAccountNo : data?.registeredAccountOther,
            comments: data?.comments,
            date: new Date(),
            status: "Pending"
        }
        const response = await axiosSecure.post("/new-seller-request", newSellerData);
        if(response.data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Your account is pending for admin approval! Please wait we will review your account request soon.',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            reset();
            setLabelShow1(false);
            setLabelShow2(false);
            setLabelShow3(false);
            setLabelShow4(false);
            setRevenue("");
            setVatNo(false);
            setCarryStock(false)
        }
    }
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
          reset({ something: "" })
        }
      }, [formState, reset])
    return (
        <section className='my-14 flex items-center justify-center min-h-[calc(100px - 100vh)]'>
<div className='form-container'>
<div className='text-center'>
<p className='text-3xl text-[#000] font-semibold'>Apply to sell on Takealot Marketplace</p>
<p className='my-2'>Becoming a Takealot Marketplace seller is easy. <br />
Simply complete the form below and we'll be in touch within 10 business days.</p>
</div>

<div className='mt-6 shadow bg-white rounded p-4 w-[97%] lg:w-[650px] mx-auto'>
<p className='text-lg text-[#000] font-semibold mb-10'>How can we get in touch?</p>


<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-10 w-full'>

<div className="inputGroup">  
<input type="text" required className='inputField' {...register("firstName", { required: true })}
aria-invalid={errors.firstName ? "true" : "false"}/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label className='inputLabel'>First Name</label>

      {errors.firstName?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter your first name</p>}
</div>

<div className="inputGroup">  
<input type="text" required className='inputField' {...register("lastName", { required: true })}
aria-invalid={errors.lastName ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Last Name</label>

{errors.lastName?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter your last name</p>}
</div>


<div className="inputGroup">  
<input type="email" required className='inputField' {...register("email", { required: true })}
aria-invalid={errors.email ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Email</label>

{errors.email?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter a valid email address</p>}
</div>

<div className="inputGroup lg:w-1/2">  
<input type="tel" required className='inputField' {...register("phone")}
aria-invalid={errors.phone ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Phone Number <small>(optional)</small></label>

{errors.phone?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter your phone number</p>}
</div>

<div className="inputGroup lg:w-1/2">  
<input type="tel" required className='inputField' {...register("mobile", { required: true })}
aria-invalid={errors.mobile ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Mobile Number</label>

{errors.mobile?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter your mobile number</p>}
</div>

<div className="inputGroup">
{
    !labelShow1&& <label className='inputLabel'>Where did you hear about Takealot Marketplace?
    </label>
}
<select {...register("hearAboutTakealot", { required: true })} className='inputField text-xs' onClick={()=>setLabelShow1(true)}>
<option defaultValue=""></option>
<option value="Found ability to sell as a customer of Takealot">Found ability to sell as a customer of Takealot</option>
<option value="Colleague or Friend Referral">Colleague or Friend Referral</option>
<option value="Google">Google</option>
<option value="Facebook">Facebook</option>
<option value="Tik Tok">Tik Tok</option>
<option value="Youtube">Youtube</option>
<option value="Linkedin">Linkedin</option>

</select>


{/* <input type="email" required className='inputField' {...register("email", { required: true })}
aria-invalid={errors.email ? "true" : "false"}/> */}
{
    labelShow1&& <label className='inputLabel'>Where did you hear about Takealot Marketplace?
    </label>
}
<span className="highlight"></span>
<span className="bar"></span>


{errors.hearAboutTakealot?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please select where you heard about Takealot marketplace
</p>}
<div className='border-b mt-14'></div>
</div>

<div>
<p className='text-lg text-[#000] font-semibold'>Tell us about your business</p>
</div>


<div className="inputGroup">  
<input type="text" required className='inputField' {...register("companyName", { required: true })}
aria-invalid={errors.companyName ? "true" : "false"}/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label className='inputLabel'>Company Name</label>

      {errors.companyName?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter your company name
</p>}
</div>

<div className="inputGroup">
{
    !labelShow2&& <label className='inputLabel'>Category
    </label>
}
<select {...register("category", { required: true })} className='inputField text-xs' onClick={()=>setLabelShow2(true)}>
<option defaultValue=""></option>

{
    categoryList?.map(cat=><option key={cat?._id} value={cat?.category}>{cat?.category}</option>)
}
</select>


{/* <input type="email" required className='inputField' {...register("email", { required: true })}
aria-invalid={errors.email ? "true" : "false"}/> */}
{
    labelShow2&& <label className='inputLabel'>Please select a category
    </label>
}
<span className="highlight"></span>
<span className="bar"></span>


{errors.hearAboutTakealot?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please select where you heard about Takealot marketplace
</p>}
</div>


<div className="inputGroup">  
<input type="text" required className='inputField' {...register("website")}
aria-invalid={errors.website ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Website <small>(Optional)</small></label>

{errors.website?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter your Website</p>}
<p><small className='text-[#9b9b9b]'>e.g. www.yourcompany.com</small></p>
</div>


<div className="inputGroup">  
<textarea type="text" required className='inputField' {...register("media")}
aria-invalid={errors.media ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Social Media <small>(Optional)</small></label>

{errors.media?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter your accounts</p>}
<p><small className='text-[#9b9b9b]'>Add links to any of your accounts (1 per line)</small></p>
</div>


<div className="inputGroup">  
<input type="url" required className='inputField' {...register("URLWebsiteLink")}
aria-invalid={errors.URLWebsiteLink ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>URL website link to your products or catalogue
</label>

{errors.URLWebsiteLink?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter your URL website link</p>}
<p><small className='text-[#9b9b9b]'>Google drive, Dropbox or other URL link to your product range</small></p>
</div>


<div className='w-full flex flex-col space-y-1'>
<label><small className='text-[#9b9b9b]'>Are you based in South Africa?</small></label>


<div className='w-full lg:w-3/4 flex flex-col lg:flex-row justify-between'>

<div className='flex flex-col space-y-1'>
<label className="cursor-pointer label relative">
<input type="checkbox"  className="checkbox checkbox-secondary" {...register("southAfricaYes")}
aria-invalid={errors.southAfricaYes ? "true" : "false"} />
<span className="label-text absolute left-10">Yes</span>
</label>
</div>

<div className='flex flex-col space-y-1'>
<label className="cursor-pointer label relative">
<input type="checkbox" className="checkbox checkbox-secondary" {...register("southAfricaNo")}
aria-invalid={errors.southAfricaNo ? "true" : "false"} />
<span className="label-text absolute left-10">No</span>
</label>
</div>

</div>
</div>


<div className='w-full flex flex-col space-y-1'>
<label><small className='text-[#9b9b9b]'>Are you VAT registered?</small></label>

<fieldset className='flex flex-col gap-2 mt-2'>
<div className="flex items-center gap-2 w-full bg-gray-100 px-3 py-3 rounded" >
<input type="radio" value="yes" {...register("vatRegisterYes")}  onClick={()=>setVatNo(true)}/>
<label><small>Yes</small></label>
</div>
<div className="flex items-center gap-2 w-full bg-gray-100 px-3 py-3 rounded">
<input type="radio" value="no" {...register("vatRegisterNo")} onClick={()=>setVatNo(false)}/>
<label><small>No</small></label>
</div>
</fieldset>


</div>


{
    vatNo && <div className="inputGroup">  
    <input type="text" required className='inputField' {...register("VATNumber", { required: true })}
    aria-invalid={errors.VATNumber ? "true" : "false"}/>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label className='inputLabel'>VAT Number
    </label>
    
          {errors.VATNumber?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter your VAT number</p>}
    </div>
}


<div className='w-full flex flex-col space-y-1'>
<label><small className='text-[#9b9b9b]'>Monthly Revenue</small></label>

<fieldset className='flex flex-col gap-2 mt-2'>
<div className="flex items-center gap-2 w-full bg-gray-100 px-3 py-3 rounded" >
<input type="radio" value="Less than R20k" {...register("revenue1", { required: revenue === "" ? true : false })} onClick={()=>setRevenue("Less than R20k")}/>
<label><small>Less than R20k</small></label>
</div>

<div className="flex items-center gap-2 w-full bg-gray-100 px-3 py-3 rounded">
<input type="radio" value="R20k - R50k" {...register("revenue2", { required: revenue === "" ? true : false })} onClick={()=>setRevenue("R20k - R50k")}/>
<label><small>R20k - R50k</small></label>
</div>

<div className="flex items-center gap-2 w-full bg-gray-100 px-3 py-3 rounded">
<input type="radio" value="R50k - R100k" {...register("revenue6", { required: revenue === "" ? true : false })} onClick={()=>setRevenue("R50k - R100k")}/>
<label><small>R50k - R100k</small></label>
</div>

<div className="flex items-center gap-2 w-full bg-gray-100 px-3 py-3 rounded">
<input type="radio" value="R100 - R500k" {...register("revenue4", { required: revenue === "" ? true : false })} onClick={()=>setRevenue("R100 - R500k")}/>
<label><small>R100 - R500k</small></label>
</div>

<div className="flex items-center gap-2 w-full bg-gray-100 px-3 py-3 rounded">
<input type="radio" value="More than R500k" {...register("revenue5", { required: revenue === "" ? true : false })} onClick={()=>setRevenue("More than R500k")}/>
<label><small>More than R500k</small></label>
</div>
</fieldset>


</div>

<div className="inputGroup">  
<input type="text" required className='inputField' {...register("businessResIndividualId")}
aria-invalid={errors.businessResIndividualId ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Business Registration Number / Individual ID number
</label>

{errors.businessResIndividualId?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter your business registration number / individual ID number</p>}

<p className='mt-3 text-lg text-[#000] font-semibold'>Business Owner / Director Details</p>
</div>

<div className="inputGroup">  
<input type="text" required className='inputField' {...register("ownerFirstName" , {required: true})}
aria-invalid={errors.ownerFirstName ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Business Owner First Name</label>

{errors.ownerFirstName?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter the business owner's first name</p>}
<p><small className='text-[#9b9b9b]'>Required for final account registration</small></p>
</div>

<div className="inputGroup">  
<input type="text" required className='inputField' {...register("ownerLastName" , {required: true})}
aria-invalid={errors.ownerLastName ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Business Owner Last Name</label>

{errors.ownerLastName?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter the business owner's last name</p>}
<p><small className='text-[#9b9b9b]'>Required for final account registration</small></p>
</div>

<div className="inputGroup">  
<input type="email" required className='inputField' {...register("ownerEmail" , {required: true})}
aria-invalid={errors.ownerEmail ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Business Owner Email</label>

{errors.ownerEmail?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter the business owner's email</p>}
<p><small className='text-[#9b9b9b]'>Required for final account registration</small></p>

<div className='border-b my-10'></div>
<p className='text-lg text-[#000] font-semibold'>Tell us about your products</p>
</div>


<div className="inputGroup lg:w-1/2"> 


<input type="text" required className='inputField' {...register("numberOFProd" , {required: true})}
aria-invalid={errors.numberOFProd ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Number of Unique Products
</label>

{errors.numberOFProd?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter the number of unique products you sell</p>}

</div>


<div className="inputGroup">  
<textarea type="text" required className='inputField' {...register("allYourBrands" , {required: true})}
aria-invalid={errors.allYourBrands ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>What brands or products do you carry?</label>

{errors.allYourBrands?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter the brands or products you sell</p>}
<p><small className='text-[#9b9b9b]'>Add all your brands (1 per line)</small></p>
</div>


<div className="inputGroup">
{
    !labelShow3&& <label className='inputLabel'>Where do you source your stock?

    </label>
}
<select {...register("sourceYourStock")} className='inputField text-xs' onClick={()=>setLabelShow3(true)}>
<option defaultValue=""></option>
<option value="Manufactured Locally">Manufactured Locally</option>
<option value="Imported">Imported</option>
<option value="Sourced from local suppliers">Sourced from local suppliers</option>
<option value="A mixture of import and local manufacturers">A mixture of import and local manufacturers</option>

</select>



{
    labelShow3&& <label className='inputLabel'>Where do you source your stock?
    </label>
}
<span className="highlight"></span>
<span className="bar"></span>


{errors.sourceYourStock?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please select where you source your stock
</p>}
</div>


<div className='w-full flex flex-col space-y-1'>
<label><small className='text-[#9b9b9b]'>Do you carry stock?</small></label>

<fieldset className='flex flex-col gap-2 mt-2'>
<div className="flex items-center gap-2 w-full bg-gray-100 px-3 py-3 rounded" >
<input type="radio" value="Yes" {...register("carryStockYes", { required: carryStock === "" ? true : false })} onClick={()=>setCarryStock("Yes")}/>
<label><small>Yes</small></label>
</div>
<div className="flex items-center gap-2 w-full bg-gray-100 px-3 py-3 rounded">
<input type="radio" value="No" {...register("carryStockNo", { required: carryStock === "" ? true : false })} onClick={()=>setCarryStock("No")}/>
<label><small>No</small></label>
</div>
</fieldset>


</div>

<div className='w-full flex flex-col space-y-1'>
<label><small className='text-[#9b9b9b]'>Do you have a physical store? <small>(Optional)</small></small></label>

<fieldset className='flex flex-col gap-2 mt-2'>
<div className="flex items-center gap-2 w-full bg-gray-100 px-3 py-3 rounded" >
<input type="radio" value="Yes, I have a store" {...register("haveStore")}/>
<label><small>Yes, I have a store</small></label>
</div>
<div className="flex items-center gap-2 w-full bg-gray-100 px-3 py-3 rounded">
<input type="radio" value="No, I sell through other channels" {...register("haveStoreNo")}/>
<label><small>No, I sell through other channels</small></label>
</div>
</fieldset>


</div>


<div className='w-full flex flex-col space-y-1'>
<label><small className='text-[#9b9b9b]'>Are you a supplier to retail outlets? <small>(Optional)</small></small></label>

<fieldset className='flex flex-col gap-2 mt-2'>
<div className="flex items-center gap-2 w-full bg-gray-100 px-3 py-3 rounded" >
<input type="radio" value="Yes, I supply retail outlets" {...register("supplyRetail")}/>
<label><small>Yes, I supply retail outlets</small></label>
</div>
<div className="flex items-center gap-2 w-full bg-gray-100 px-3 py-3 rounded">
<input type="radio" value="No, I sell through other channels" {...register("supplyRetailNo")}/>
<label><small>No, I sell through other channels</small></label>
</div>
</fieldset>


</div>


<div className="inputGroup">
{
    !labelShow4&& <label className='inputLabel'>Do you sell handmade or hand-crafted items?
    </label>
}
<select {...register("sell_hand_crafted_items", { required: true })} className='inputField text-xs' onClick={()=>setLabelShow4(true)}>
<option defaultValue=""></option>
<option value="Yes">Yes</option>
<option value="No">No</option>

</select>



{
    labelShow4&& <label className='inputLabel'>Do you sell handmade or hand-crafted items?
    </label>
}
<span className="highlight"></span>
<span className="bar"></span>


{errors.sourceYourStock?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please select one
</p>}
</div>

<div className='w-full flex flex-col space-y-1'>
<label><small className='text-[#9b9b9b]'>Have you had a registered account?</small></label>

<fieldset className='flex flex-col gap-2 mt-2'>
<div className="flex items-center gap-2 w-full bg-gray-100 px-3 py-3 rounded" >
<input type="radio" value="Yes" {...register("registeredAccountYes")}/>
<label><small>Yes</small></label>
</div>
<div className="flex items-center gap-2 w-full bg-gray-100 px-3 py-3 rounded">
<input type="radio" value="No" {...register("registeredAccountNo")}/>
<label><small>No</small></label>
</div>
<div className="flex items-center gap-2 w-full bg-gray-100 px-3 py-3 rounded">
<input type="radio" value="I worked on someone else's seller account" {...register("registeredAccountOther")}/>
<label><small>I worked on someone else's seller account</small></label>
</div>
</fieldset>

</div>

<div className='border-b'></div>

<div className="inputGroup pb-14">  
<textarea type="text" required className='inputField' rows={5} {...register("comments")}
aria-invalid={errors.comments ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Do you have any additional comments? <small>(Optional)</small></label>

{errors.comments?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter the comments</p>}

</div>

<div className='w-full flex flex-col lg:flex-row lg:justify-end pb-10 gap-5'>
    <button className='border border-[#4d4d4f] px-6 py-2  text-[#4d4d4f] hover:text-white hover:bg-[#4d4d4f] transition-all duration-300 text-sm font-semibold'>Cancel</button>
<input type="submit" value="Apply to Sell" className='px-3 py-2 border border-primary text-sm font-semibold text-white bg-primary hover'/>
</div>

</form>

</div>
</div>
        </section>
    );
};

export default ApplyPage;