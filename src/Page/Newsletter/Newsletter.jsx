import React from 'react';
import { useForm } from 'react-hook-form';
import useProfile from '../../hooks/useProfile';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useNewsletter from '../../hooks/useNewsletter';

const Newsletter = () => {
  const [axiosSecure] = useAxiosSecure();
  const [userInfo] = useProfile();
  const [newsletters, refetch] = useNewsletter();
  console.log(newsletters);
  const { register, formState: { errors }, handleSubmit } = useForm();
  
  const onSubmit = async (data) => {
    const letterData={
      Afrikaans: data?.Afrikaans ? data?.Afrikaans : false,

      Auto_DIY: data?.Auto_DIY ? data?.Auto_DIY : false, 

      Baby_Toddler: data?.Baby_Toddler ? data?.Baby_Toddler : false,

      Beauty: data?.Beauty ? data?.Beauty : false,

      Books: data?.Books ? data?.Books : false,

      Camping_Outdoor: data?.Camping_Outdoor ? data?.Camping_Outdoor : false,

      Daily_Deals: data?.Daily_Deals ? data?.Daily_Deals : false,

      Electronics: data?.Electronics ? data?.Electronics : false,

      Gaming: data?.Gaming ? data?.Gaming : false,

      Fashion: data?.Fashion ? data?.Fashion : false,

      Garden_Pool_Patio: data?.Garden_Pool_Patio ? data?.Garden_Pool_Patio : false,

      General: data?.General ? data?.General : false,

      Health_Personal_Care: data?.Health_Personal_Care ? data?.Health_Personal_Care : false,

      Home_Kitchen: data?.Home_Kitchen ? data?.Home_Kitchen : false,

      Liquor: data?.Liquor ? data?.Liquor : false,

      Luggage_Travel: data?.Luggage_Travel ? data?.Luggage_Travel : false,

      Movies_TV: data?.Movies_TV ? data?.Movies_TV : false,

      Music: data?.Music ? data?.Music : false,

      Office_Stationery: data?.Office_Stationery? data?.Office_Stationery : false,

      Pets: data?.Pets? data?.Pets : false,

      Rate_Review: data?.Rate_Review? data?.Rate_Review : false,

      Sport: data?.Sport? data?.Sport : false,

      Toys: data?.Toys? data?.Toys : false,

      Wish_List_Items_on_Sale: data?.Wish_List_Items_on_Sale? data?.Wish_List_Items_on_Sale : false,

      unsubscribe: data?.unsubscribe? data?.unsubscribe : false,

      email: userInfo?.email
    }

    const response = await axiosSecure.patch(`/user-newsletter-subscriptions/${userInfo?.email}`, letterData)
    if(response.data.insertedId || response.data.modifiedCount > 0){
      Swal.fire({
        title: 'Success!',
        text: 'Newsletter Updated!',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      refetch();
    }

    // console.log(letterData);
}
    return (
<section>
<div className="text-lg font-semibold text-[#4d4d4f] mb-5">Newsletter Subscriptions</div>

<div className='w-full bg-white shadow p-6'>
<p className='mb-3 text-[12px] font-normal text-[#4d4d4f]'>Email Address: <span className='font-semibold'>{userInfo?.email}</span></p>
<p className='text-[#000] text-sm font-bold'>Tell us what you're interested in:</p>

<form className='mt-7 mb-3 w-full' onSubmit={handleSubmit(onSubmit)}>

<div className='grid grid-cols-1 lg:grid-cols-3 gap-10 w-full'>
<div className='w-full flex flex-col gap-10'>
<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.General && true } {...register("General")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">General</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Afrikaans && true} {...register("Afrikaans")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Afrikaans</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Beauty && true} {...register("Beauty")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Beauty</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Daily_Deals && true} {...register("Daily_Deals")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Daily Deals</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Gaming && true} {...register("Gaming")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Gaming</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Home_Kitchen && true} {...register("Home_Kitchen")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">
Home & Kitchen</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Movies_TV && true} {...register("Movies_TV")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">
Movies & TV</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Pets && true} {...register("Pets")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">
Pets</span> 
  </label>
</div>
</div>


<div className='w-full flex flex-col gap-10'>
<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Rate_Review && true} {...register("Rate_Review")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Rate & Review</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Auto_DIY && true} {...register("Auto_DIY")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Auto & DIY</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Books && true} {...register("Books")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">
Books</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Electronics && true} {...register("Electronics")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Electronics</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Garden_Pool_Patio && true} {...register("Garden_Pool_Patio")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Garden, Pool & Patio</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Liquor && true} {...register("Liquor")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">
 Liquor</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Music && true} {...register("Music")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">
    Music</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Sport && true} {...register("Sport")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Sport</span> 
  </label>
</div>
</div>


<div className='w-full flex flex-col gap-10'>
<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Wish_List_Items_on_Sale && true} {...register("Wish_List_Items_on_Sale")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Wish List Items on Sale</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Baby_Toddler && true} {...register("Baby_Toddler")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Baby & Toddler</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Camping_Outdoor && true} {...register("Camping_Outdoor")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">
    Camping & Outdoor</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Fashion && true} {...register("Fashion")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Fashion</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Health_Personal_Care && true} {...register("Health_Personal_Care")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">
Health & Personal Care</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Luggage_Travel && true}  {...register("Luggage_Travel")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">
 Luggage & Travel</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Office_Stationery && true}  {...register("Office_Stationery")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">
Office & Stationery</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.Toys && true} {...register("Toys")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Toys</span> 
  </label>
</div>
</div>
</div>

<div className='my-8'>
<p className='text-xs font-normal'>You will receive newsletters based on your interests, recent orders and browsing behaviour.</p>
</div>

<div className='mt-3 mb-8'>
<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={newsletters?.unsubscribe && true} {...register("unsubscribe")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Unsubscribe from all Takealot newsletters</span> 
  </label>
</div>
</div>

<div className='sub-btn'>
<input type="submit" value="Save Preferences" className='px-5 py-3 rounded text-xs font-medium text-white bg-primary'/>
</div>



</form>
</div>
</section>
    );
};

export default Newsletter;