import React, { useEffect, useState } from 'react';
import { HiXMark } from 'react-icons/hi2';
import SocialLogIn from '../../components/SocialLogin/SocialLogIn';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import "../Register/Register.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const LoginPage = () => {
    const {signIn} = useAuth();
    const [type, setType] = useState("password");
    const [IsShow, setIsShow] = useState(false);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"
    const { register, formState: { errors }, handleSubmit , reset, formState } = useForm();

    // console.log(allCodes);

    const handleShow = () => {
        setType("text")
    }

    const handleHide = () => {
        setType("password")
    }

    const onSubmit = async (data) => {
        signIn(data?.email, data?.password)
        .then(res => {
            const loggedUser = res.user;
            navigate(from, { replace: true })
            Swal.fire({
                title: 'Success!',
                text: 'Sign In Successful',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            reset();
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
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
          reset({ something: "" })
        }
      }, [formState, reset])
    return (
            <div className="flex items-center justify-center my-14">
                <div className="text-left bg-white px-9 py-5 rounded shadow">
                    <h3 className="text-xl font-extrabold">Login</h3>

                    <div className='register-form mt-5'>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-10 w-full'>


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

                            </div>




                            <div className='text-center'>
                                <input type="submit" value="Login" className='bg-primary w-full py-2 rounded bg-opacity-90 text-center font-semibold text-white cursor-pointer' />
                            </div>

                        </form>

                        <div className='social-register my-3'>
                            <SocialLogIn title1="Login with Google" title2="Login with Facebook" />
                        </div>
                        <div className="divider"></div>
                        <Link to="/account/register" className='text-center my-5 text-xs font-medium text-gray-500'>
                            New to Takealot? <label htmlFor="register_modal" className="text-primary cursor-pointer">Register</label>

                        </Link>

                    </div>
                </div>
            </div>
    );
};

export default LoginPage;