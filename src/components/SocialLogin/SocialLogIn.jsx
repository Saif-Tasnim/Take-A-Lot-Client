import React from 'react';
import facebook from "../../assets/icons/facebook.png";
import google from "../../assets/icons/google.png";
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import useProfile from '../../hooks/useProfile';
const SocialLogIn = ({ title1, title2 }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const { googleIn } = useAuth();

    const handleGoogle = () => {
        const [userInfo, refetch] = useProfile();
        googleIn()
            .then(async(res) => {
                const loggedUser = res.user;
                const newData = {
                    email: loggedUser.email,
                    name: loggedUser.displayName,
                    photo: loggedUser.photoURL
                }
                // console.log(newData);
                Swal.fire({
                    title: 'Success!',
                    text: 'Sign In Successful',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })

                const result = await axios.post("http://localhost:5000/users", newData)
                if(result.data.insertedId){
                    navigate(from, { replace: true })
                    Swal.fire({
                        title: 'Success!',
                        text: 'Sign In Successful',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    refetch()
                    
                }

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
    return (
        <section className='w-full text-sm'>
            {
                title1 === "Login with Google" ? <div className="divider text-gray-400">or</div> : ""
            }
            <div className='flex flex-col lg:flex-row items-center justify-evenly w-full gap-3'>
                <div className='inline-flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-400 font-normal w-full lg:w-fit cursor-pointer' onClick={handleGoogle}>
                    <img src={google} alt="google" className='w-6' />
                    <p className='text-center w-full lg:text-left'>{title1}</p>
                </div>

                <div className='inline-flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-400 font-normal w-full lg:w-fit cursor-pointer'>
                    <img src={facebook} alt="facebook" className='w-6' />
                    <p className='text-center w-full lg:text-left'>{title2}</p>
                </div>
            </div>
            {
                title1 === "Register with Google" ? <div className="divider text-gray-400">or</div> : ""
            }
        </section>
    );
};

export default SocialLogIn;