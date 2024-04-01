import React, { useEffect, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import SocialLogIn from "../../components/SocialLogin/SocialLogIn";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Register.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import useProfile from "../../hooks/useProfile";

const RegisterPage = () => {
    const [userInfo, refetch] = useProfile();
    const {updateUser, signUp, userVerify , user} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"
    const [type, setType] = useState("password");
    const [IsShow, setIsShow] = useState(false);
    const [error, setError] = useState("");
    const {
      register,
      formState: { errors },
      handleSubmit, reset, formState
    } = useForm();
    const [allCodes, setAllCodes] = useState([]);
  
    useEffect(() => {
      fetch("https://take-a-lot-server-two.vercel.app/all-country-code")
        .then((res) => res.json())
        .then((data) => setAllCodes(data));
    }, []);
  
    // console.log(allCodes);
  
    const handleShow = () => {
      setType("text");
    };
  
    const handleHide = () => {
      setType("password");
    };
  
    const onSubmit = async (data) => {
      const password = data.password;
      if (password.length < 8) {
        return setError("Password must be eight characters in length")
      }
      if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
        return setError("At least one special character include in your password")
      } else {
        console.log(data);
  
        signUp(data?.email, data?.password)
        .then((res) => {
            const loggedUser = res.user;
  const display_url = "https://i.ibb.co/jwkFMLB/User-Avatar-Profile-PNG.png"
            updateUser(loggedUser, data?.firstName, display_url)
                .then(async () => {
                  const newUser = {
                    email: data.email,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    phone: data.number,
                    countryCode: data.countryCode,
                    agreeWithNewslettersReceive : data.agreeWithNewslettersReceive ? "agree" : "disagree"
                }
                    const res = await axios.post("http://localhost:5000/users", newUser)
                    if (res.data.insertedId) {
                        userVerify()
                            .then(() => {
                                navigate(from, { replace: true })
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'Sign up successful and check your email to verify!',
                                    icon: 'success',
                                    confirmButtonText: 'Ok'
                                })
                                refetch();
                                console.log(user);
                                reset()
                                setError("")
                            })
                    }
                })
  
  
        })
        .catch(error => {
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
  
        })
      }
  
    };
    React.useEffect(() => {
      if (formState.isSubmitSuccessful) {
        reset({ something: "" })
      }
    }, [formState, reset])
    return (
        <div className="flex items-center justify-center my-14">
            <div className="text-left bg-white px-9 py-5 rounded shadow">
                <h3 className="text-xl font-extrabold">Register</h3>
                <div className='social-register my-3'>
                    <SocialLogIn title1="Register with Google" title2="Register with Facebook" />
                </div>


                <div className='register-form mt-5'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-10 w-full'>


                        <div className="inputGroup">


                            <input type="text" required className='inputField' {...register("firstName", { required: true })}
                                aria-invalid={errors.firstName ? "true" : "false"} />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label className='inputLabel'>First Name</label>

                            {errors.firstName?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>First Name is required</p>}
                        </div>

                        <div className="inputGroup">


                            <input type="text" required className='inputField' {...register("lastName", { required: true })}
                                aria-invalid={errors.lastName ? "true" : "false"} />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label className='inputLabel'>Last Name</label>

                            {errors.lastName?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Last Name is required</p>}
                        </div>


                        <div className="inputGroup">


                            <input type="email" required className='inputField' {...register("email", { required: true })}
                                aria-invalid={errors.email ? "true" : "false"} />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label className='inputLabel'>Email Address</label>

                            {errors.email?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Email is required</p>}
                        </div>


                        <div className="inputGroup">


                            <input type={type} required className='inputField' {...register("password", { required: true })}
                                aria-invalid={errors.password ? "true" : "false"} />
                            <div className='absolute right-3 top-3 cursor-pointer' onClick={() => setIsShow(!IsShow)}>
                                {
                                    IsShow ? <FaEyeSlash className='h-5 w-5 text-primary' onClick={handleHide} /> : <FaEye className='h-5 w-5 text-primary' onClick={handleShow} />
                                }
                            </div>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label className='inputLabel'>Password</label>

                            {errors.password?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Password is required</p>}
                            <p className='font-semibold text-red-600'>{error} <span className='text-xs font-medium text-gray-500'>At least 8 characters and 1 special character or number</span></p>
                        </div>

                        <div className='w-full'>
                            <div className='flex items-end w-full gap-4'>
                                <div className='w-1/3'>
                                    <label className='text-xs text-[#999]'>Code</label>
                                    <select {...register("countryCode", { required: true })} className='py-2 px-2 border-b-2 border-[#c9c7c7] text-sm font-medium text-gray-500 bg-transparent' aria-invalid={errors.countryCode ? "true" : "false"}>
                                        {
                                            allCodes.map(cCode => <option key={cCode?._id} value={cCode?.dial_code}>{cCode?.code} ({cCode?.dial_code})</option>)
                                        }
                                    </select>
                                </div>
                                <div className="inputGroup w-full">


                                    <input type="tel" required className='inputField' {...register("number", { required: true })}
                                        aria-invalid={errors.number ? "true" : "false"} />
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



                        <div className='flex flex-col space-y-1'>
                            <label className="cursor-pointer label relative">
                                <input type="checkbox" className="checkbox checkbox-primary" {...register("agreeWithNewslettersReceive ", { required: false })}
                                    aria-invalid={errors.agreeWithNewslettersReceive ? "true" : "false"} />
                                <p className="label-text absolute left-10 text-xs font-medium text-gray-500 mt-1"> I want to receive offers and wish list newsletters
                                </p>
                            </label>
                        </div>


                        <div className='text-center'>
                            <input type="submit" value="Continue" className='bg-primary w-full py-2 rounded bg-opacity-90 text-center font-semibold text-white cursor-pointer' />
                        </div>

                    </form>

                    <div className='text-center my-5 text-xs font-medium text-gray-500'>
                        By clicking on 'Continue', you agree to our <Link to="/" className='text-primary'>Terms and Conditions</Link> and confirm that you are over 18 years of age


                    </div>

                </div>
            </div>
        </div>
    );
};

export default RegisterPage;