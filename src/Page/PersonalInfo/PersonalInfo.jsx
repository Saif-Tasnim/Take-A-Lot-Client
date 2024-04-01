import React, { useEffect, useState } from 'react';
import "./info.css"
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useProfile from '../../hooks/useProfile';
import bcrypt from "bcryptjs-react";
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const PersonalInfo = () => {
    const {user , updatePass, passReset, updateUserEmail,updateUserName} = useAuth();
    const [userInfo, refetch] = useProfile();
    // console.log(userInfo);
    const [axiosSecure] = useAxiosSecure();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/account/personal-details"

    const { register, formState: { errors }, handleSubmit,formState, reset } = useForm();
    const [nameEditField , setNameEditField] =useState(false);
    const [type, setType] = useState("password");
    const [IsShow, setIsShow] = useState(false);
    const [emailEditField , setEmailEditField] =useState(false);
    const [passEditField , setPassEditField] =useState(false);
    const [phoneEditField , setPhoneEditField] =useState(false);

    const [businessEditField , setBusinessEditField] =useState(false);

    const [allCodes, setAllCodes] = useState([]);

    useEffect(()=>{
        fetch("https://take-a-lot-server-two.vercel.app/all-country-code")
        .then(res=>res.json())
        .then(data=>setAllCodes(data))
    },[])

    const onSubmit = async (data) => {
        
        // Pass Update
        if(data?.currentPassword && data?.newPassword){
            if(data.currentPassword && data.newPassword){
                const isPasswordValid = await bcrypt.compare(data.currentPassword, userInfo?.password);
                if(isPasswordValid){
                    updatePass(data?.newPassword)
                    .then(async()=>{
                        const res = await axiosSecure.patch(`/user-password-update/${userInfo?._id}`,{password: data?.newPassword})
                        console.log(res.data);
                        if(res.data.modifiedCount > 0){
                            Swal.fire({
                                title: 'Success!',
                                text: 'Password updated!',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                              })
                              refetch();
                              setPassEditField(false)
                              reset();
                              navigate("")
                        }
                    })
                    // setNameEditField(false)
                    // setEmailEditField(false)
                    // setPhoneEditField(false)
                    // setBusinessEditField(false)
                 
                }else{
                    Swal.fire({
                        title: 'Error!',
                        text: 'Please give your current password correctly!',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                      })
                }
               
            }else{
               return ()=>{
                Swal.fire({
                    title: 'Error!',
                    text: 'Please give your current password and new password!',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
               }
            }
        }
// Password Update
        if(data?.email && data?.password){
            if(data.email && data.password){
                const isPasswordValid = await bcrypt.compare(data.password, userInfo?.password);
                if(isPasswordValid){
                    updateUserEmail(data?.email)
                    .then(async()=>{
                        const res = await axiosSecure.patch(`/user-email-update/${userInfo?._id}`,{email: data?.email})
                        // console.log(res.data);
                        if(res.data.modifiedCount > 0){
                            Swal.fire({
                                title: 'Success!',
                                text: 'Email updated!',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                              })
                              refetch();
                              setEmailEditField(false)
                              reset();
                              navigate("")
                        }
                    })
                    // setNameEditField(false)
                    // setPhoneEditField(false)
                    // setBusinessEditField(false)
                 
                }else{
                    Swal.fire({
                        title: 'Error!',
                        text: 'Please give your password correctly!',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                      })
                }
               
            }
        }

        // Name Update
        if(data?.firstName && data?.lastName){
            updateUserName(data?.firstName)
            .then(async()=>{
                const res = await axiosSecure.patch(`/user-name-update/${userInfo?._id}`,{firstName: data?.firstName, lastName: data?.lastName})
                // console.log(res.data);
                if(res.data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Email updated!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                      refetch();
                      setNameEditField(false)
                      reset();
                      navigate("")
                }
            })
            // setBusinessEditField(false)
        }

        // Mobile Number update
        if(data?.countryCode && data?.number){
           
                const res = await axiosSecure.patch(`/user-phone-number-update/${userInfo?._id}`,{countryCode: data?.countryCode, number: data?.number})
                // console.log(res.data);
                if(res.data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Mobile number updated!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                      refetch();
                      setPhoneEditField(false)
                      reset();
                      navigate("")
                }
        }

        // Business Details
        if(data?.businessName && data?.vatNumber){
            const res = await axiosSecure.patch(`/user-business-details-update/${userInfo?._id}`,{businessName: data?.businessName, vatNumber: data?.vatNumber})
                if(res.data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Business details updated!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                      refetch();
                      setBusinessEditField(false)
                      reset();
                      navigate("")
                }
        }



    }

    const closeField = ()=>{
        setNameEditField(false)
        setPassEditField(false)
        setEmailEditField(false)
        setPhoneEditField(false)
        setBusinessEditField(false)
    }
    const handleShow = () => {
        setType("text")
    }

    const handleHide = () => {
        setType("password")
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
          reset({ something: "" })
        }
      }, [formState, reset]);

      const handleResetEmail = ()=>{
        const email = userInfo?.email;
        passReset(email)
        .then(()=>{
            Swal.fire({
                title: 'Success!',
                text: 'Password reset email send!!',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })
      }

    return (
        <section className='w-full'>
<div className='sect-title w-full'>
<h2 className="text-lg font-semibold text-[#4d4d4f]">Personal Details</h2>
</div> 
{/* TODO Functionality */}
<div className='my-4  w-full'>
{/* Name */}
<div className='w-full px-8 py-6 bg-white rounded shadow info-field cursor-pointer' onClick={()=>setNameEditField(true)}>

{
    nameEditField ? <div>
        <p className='text-[#0a0a0a] text-base font-semibold'>Edit Your Name</p>
        <div className='mt-6 mb-3'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-10 w-full'>


<div className="inputGroup">  


      <input defaultValue={userInfo?.firstName} type="text" required className='inputField' {...register("firstName", { required: true })}
aria-invalid={errors.firstName ? "true" : "false"}/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label className='inputLabel'>First Name</label>

      {errors.firstName?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>First Name is required</p>}
    </div>

    <div className="inputGroup">  


<input defaultValue={userInfo?.lastName} type="text" required className='inputField' {...register("lastName", { required: true })}
aria-invalid={errors.lastName ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Last Name</label>

{errors.lastName?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Last Name is required</p>}
</div>

<div className='flex items-center justify-end w-full my-3 gap-3 flex-col lg:flex-row'>
<input type='submit' value="Cancel" className='px-10 py-2 border rounded text-sm font-medium border-[#4d4d4f] hover:bg-[#4d4d4f] hover:text-white cursor-pointer' onClick={closeField} />
<input type="submit" className='px-10 py-2 rounded text-sm font-medium border border-primary text-white bg-primary cursor-pointer' value="Save"/>
</div>
</form>
        </div>
    </div> 
    :<div className='w-full flex items-center justify-between'>
    <div>
        <p className='text-[#0a0a0a] text-base font-semibold'>Your Name</p>
        <p className='text-[#4d4d4f] text-sm'>{userInfo?.firstName} {userInfo?.lastName}</p>
    </div>
    <div>
    <button className='px-14 py-2 text-xs font-semibold text-[#4d4d4f] border border-[#4d4d4f] edit-btn rounded'>Edit</button>
    </div>
    </div>
}

</div>



{/* Email */}
<div className='w-full px-8 py-6 bg-white rounded shadow info-field cursor-pointer my-3' onClick={()=>setEmailEditField(true)}>

{
    emailEditField ? <div>
        <p className='text-[#0a0a0a] text-base font-semibold'>Edit Email Address</p>
        <div className='mt-6 mb-3'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-10 w-full'>


    <div className="inputGroup">  


<input type="email" defaultValue={userInfo?.email} required className='inputField' {...register("email", { required: true })}
aria-invalid={errors.email ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Email Address</label>

{errors.email?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Email is required</p>}
<p className='text-red-600'><span className='text-xs text-gray-500'>We will send an OTP via email to verify this email address</span></p>
</div>

<div className="inputGroup">  


<input type={type} required className='inputField' {...register("password", { required: true })}
aria-invalid={errors.password ? "true" : "false"}/>
<div className='absolute right-3 top-3 cursor-pointer' onClick={() => setIsShow(!IsShow)}>
{
 IsShow ? <FaEyeSlash className='h-5 w-5 text-primary' onClick={handleHide} /> : <FaEye className='h-5 w-5 text-primary' onClick={handleShow} />
}
                                </div>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Password</label>

{errors.password?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Password is required</p>}
</div>

<div className='flex items-center justify-end w-full my-3 gap-3 flex-col lg:flex-row'>
<input type='submit' value="Cancel" className='px-10 py-2 border rounded text-sm font-medium border-[#4d4d4f] hover:bg-[#4d4d4f] hover:text-white cursor-pointer' onClick={closeField} />
<input type="submit" className='px-10 py-2 rounded text-sm font-medium border border-primary text-white bg-primary cursor-pointer' value="Send OTP"/>
</div>
</form>
        </div>
    </div> 
    :<div className='w-full flex items-center justify-between'>
    <div>
        <p className='text-[#0a0a0a] text-base font-semibold'>Email Address</p>
        <p className='text-[#4d4d4f] text-sm'>{userInfo?.email}</p>
    </div>
    <div>
    <button className='px-14 py-2 text-xs font-semibold text-[#4d4d4f] border border-[#4d4d4f] edit-btn rounded'>Edit</button>
    </div>
    </div>
}

</div>



{/* password */}
<div className='w-full px-8 py-6 bg-white rounded shadow info-field cursor-pointer' onClick={()=>setPassEditField(true)}>

{
    passEditField ? <div>
        <p className='text-[#0a0a0a] text-base font-semibold'>Reset Password</p>
        <div className='mt-6 mb-3'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-10 w-full'>


        <div className="inputGroup">  


<input type={type} required className='inputField' {...register("currentPassword", { required: true })}
aria-invalid={errors.currentPassword ? "true" : "false"}/>
<div className='absolute right-3 top-3 cursor-pointer' onClick={() => setIsShow(!IsShow)}>
{
 IsShow ? <FaEyeSlash className='h-5 w-5 text-primary' onClick={handleHide} /> : <FaEye className='h-5 w-5 text-primary' onClick={handleShow} />
}
                                </div>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Current password</label>

{errors.currentPassword?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Password is required</p>}
</div>


<div className='w-full flex justify-end' onClick={handleResetEmail}>
<p className='text-[11px] font-normal text-primary hover:underline'>Forgot Your Password?</p>
</div>


<div className="inputGroup">  


<input type={type} required className='inputField' {...register("newPassword", { required: true })}
aria-invalid={errors.newPassword ? "true" : "false"}/>
<div className='absolute right-3 top-3 cursor-pointer' onClick={() => setIsShow(!IsShow)}>
{
 IsShow ? <FaEyeSlash className='h-5 w-5 text-primary' onClick={handleHide} /> : <FaEye className='h-5 w-5 text-primary' onClick={handleShow} />
}
                                </div>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>New password</label>

{errors.newPassword?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Password is required</p>}
</div>




<div className='flex items-center justify-end w-full my-3 gap-3 flex-col lg:flex-row'>
<input type='submit' value="Cancel" className='px-10 py-2 border rounded text-sm font-medium border-[#4d4d4f] hover:bg-[#4d4d4f] hover:text-white cursor-pointer' onClick={closeField} />
<input type="submit" className='px-10 py-2 rounded text-sm font-medium border border-primary text-white bg-primary cursor-pointer' value="Save"/>
</div>
</form>
        </div>
    </div> 
    :<div className='w-full flex items-center justify-between'>
    <div>
        <p className='text-[#0a0a0a] text-base font-semibold'>Password</p>
        <p className='text-[#4d4d4f] text-sm'>********</p>
    </div>
    <div>
    <button className='px-14 py-2 text-xs font-semibold text-[#4d4d4f] border border-[#4d4d4f] edit-btn rounded'>Reset</button>
    </div>
    </div>
}

</div>


{/* Number */}
<div className='w-full px-8 py-6 bg-white rounded shadow info-field cursor-pointer my-3' onClick={()=>setPhoneEditField(true)}>

{
    phoneEditField ? <div>
        <p className='text-[#0a0a0a] text-base font-semibold'>Edit Mobile Number</p>
        <div className='mt-6 mb-3'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-10 w-full'>

        <div className='w-full'>
<div className='flex items-end w-full gap-4'>
    <div className='w-1/3'>
        <label className='text-xs text-[#999]'>Code</label>
    <select {...register("countryCode", { required: true })} className='py-2 px-2 border-b-2 border-[#c9c7c7] text-sm font-medium text-gray-500 bg-transparent' aria-invalid={errors.countryCode ? "true" : "false"}>
        {
            allCodes.map(cCode=><option key={cCode?._id}  value={cCode?.dial_code }>{cCode?.code} ({cCode?.dial_code})</option>)
        }
      </select>
    </div>
<div className="inputGroup w-full">  


<input type="tel" required defaultValue={userInfo?.phone ? userInfo?.phone : "123456789"} className='inputField' {...register("number", { required: true })}
aria-invalid={errors.number ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Mobile Number</label>

{errors.number?.type === 'required' && <p role="alert" className='text-error font-medium'>Mobile number must be at least 10 digits</p>}
</div>
</div>
{errors.countryCode?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Country Code is required</p>}
<p className='text-[11px] font-medium text-gray-500 mt-1'>We will send an OTP via SMS to verify this number
</p>
</div>


<div className='flex items-center justify-end w-full my-3 gap-3 flex-col lg:flex-row'>
<input type='submit' value="Cancel" className='px-10 py-2 border rounded text-sm font-medium border-[#4d4d4f] hover:bg-[#4d4d4f] hover:text-white cursor-pointer' onClick={closeField} />
<input type="submit" className='px-10 py-2 rounded text-sm font-medium border border-primary text-white bg-primary cursor-pointer' value="Save"/>
</div>
</form>
        </div>
    </div> 
    :<div className='w-full flex items-center justify-between'>
    <div>
        <p className='text-[#0a0a0a] text-base font-semibold'>Mobile Number</p>
        <p className='text-[#4d4d4f] text-sm'><span>{userInfo?.countryCode}</span> <span>{userInfo?.phone}</span></p>
    </div>
    <div>
    <button className='px-14 py-2 text-xs font-semibold text-[#4d4d4f] border border-[#4d4d4f] edit-btn rounded'>Edit</button>
    </div>
    </div>
}

</div>


{/* Business */}
<div className='w-full px-8 py-6 bg-white rounded shadow info-field cursor-pointer' onClick={()=>setBusinessEditField(true)}>

{
    businessEditField ? <div>
        <p className='text-[#0a0a0a] text-base font-semibold'>Add Business Details</p>
        <div className='mt-6 mb-3'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-10 w-full'>


<div className="inputGroup">  


      <input type="text" defaultValue={userInfo?.businessName ? userInfo?.businessName : ""} className='inputField' {...register("businessName", { required: false })}
aria-invalid={errors.businessName ? "true" : "false"}/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label className='inputLabel'>Business Name
</label>

      {errors.businessName?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Business Name is required</p>}
    </div>

    <div className="inputGroup">  


<input type="text" defaultValue={userInfo?.vatNumber ? userInfo?.vatNumber : ""}   className='inputField' {...register("vatNumber", { required: false })}
aria-invalid={errors.vatNumber ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>VAT Number
</label>

{errors.vatNumber?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>VAT Number is required</p>}
</div>

<div className='flex items-center justify-end w-full my-3 gap-3 flex-col lg:flex-row'>
<input type='submit' value="Cancel" className='px-10 py-2 border rounded text-sm font-medium border-[#4d4d4f] hover:bg-[#4d4d4f] hover:text-white cursor-pointer' onClick={closeField} />
<input type="submit" className='px-10 py-2 rounded text-sm font-medium border border-primary text-white bg-primary cursor-pointer' value="Save"/>
</div>
</form>
        </div>
    </div> 
    :<div className='w-full flex items-center justify-between'>
    <div>
        <p className='text-[#0a0a0a] text-base font-semibold'>Business Details</p>
        
        <p className='text-sm text-primary'>Why add business details?</p>
    </div>
    <div>
    <button className='px-14 py-2 text-xs font-semibold text-[#4d4d4f] border border-[#4d4d4f] edit-btn rounded'>Add</button>
    </div>
    </div>
}

</div>

</div>
        </section>
    );
};

export default PersonalInfo;