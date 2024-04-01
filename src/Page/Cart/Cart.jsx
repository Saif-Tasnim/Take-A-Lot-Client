import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { FaTrash,FaHeart, FaLock, FaCreditCard, FaTruck } from "react-icons/fa";
const Cart = () => {
    const [carts, refetch] = useCart();
    console.log(carts)

    const totalPrice =carts.map(cart=>cart.totalPrice);
    console.log(totalPrice)
    const total=totalPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(total)
    return (
       <section className='lg:px-5'>
        
      {
        carts.length <= 0 ?  <div className='my-5'>
        <h1 className='text-xl text-[#4d4d4f] font-semibold px-5 lg:px-0'>Shopping Cart</h1>

        <div className='my-5 bg-white rounded shadow py-7 hero flex flex-col items-center gap-5'>

<div className='px-2 py-2 shadow rounded-full bg-white'>
<img src="https://shopfront.takealot.com/b317a38ffe915f6034dfee91ccee142cabe5ca77/static/media/src/images/cart/empty-cart.svg-a3f63604a3d49f7b220a.svg" alt="cart" className='rounded-full'/>
</div>

<p className='text-[#000]'>Your shopping cart is empty</p>

<Link to="/all" className='py-2 px-5 rounded-3xl lg:rounded bg-primary text-white font-medium'>Continue Shopping</Link>


        </div>
    </div>:<div className='w-full flex items-start my-5 mx-auto justify-center gap-10 flex-col lg:flex-row px-2'>
        <div className='w-full border h-fit'>
        <h1 className='font-semibold text-sm ps-10 py-5 bg-white'>Shipped from Takealot Warehouse</h1>
            <div className='w-full p-[1px] bg-black'></div>
        {
            carts.map(carts=>
            <>
            
           <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center bg-white mt-2'>
           <div className='flex gap-2'>
                <img className='lg:w-60 w-40' src={carts.productImage} alt="" />
                <div className='mt-7 space-y-2 text-sm'>
                    <h1 className='lg:whitespace-nowrap'>{carts.productName}</h1>
                    <p>{carts?.brandName}</p>
                    <div className='flex items-center gap-2'>
                        <button className='font-bold'>In stock</button>
                        <p className="tooltip text-[10px] font-semibold bg-gray-200 px-1 " data-tip="This item is in stock in our Johannesburg warehouse and can be shipped from there. You can also collect it unless the item does not comply with our collection rules. Items that cannot be collected are whitegoods, liquor and digital items.">JHB</p>
                <p className="tooltip text-[10px] font-semibold bg-gray-200 px-1 " data-tip="This item is in stock in our Cape Town warehouse and can be shipped from there. You can also collect it yourself from our warehouse during the week or over weekends.">CPT</p> 
                    </div>
                   
                </div>
                
            </div>
           
            <div className='lg:mr-5 w-full px-3'>
               
               <div className='flex lg:flex-col justify-between lg:justify-end items-end'>

<div>
<h1 className='text-xl font-bold text-right'>R {carts.totalPrice}</h1>
</div>

<div className='flex justify-end items-center'>
    
<label htmlFor="1">Qty:</label>
               <select disabled defaultValue={carts.quantity} name="quantity" id="" className='p-2 border-b-4 mt-2 '>

                <option value={carts.quantity}>{carts.quantity}</option>
                {Array.from(Array(30), (e, i) => {
                    return <option key={i} value={i+1}>{i+1}</option>
                  })}
                
               </select>
</div>
               </div>
             
               <div className='my-5 w-full flex gap-4 text-sm text-[#828283] h-full items-center justify-between lg:justify-end'>
                <button className='px-2 py-[1px] hover:bg-[#F4F4F4] flex gap-2 items-center'><FaTrash></FaTrash> Remove</button>
                <button className='px-2 py-[1px] hover:bg-[#F4F4F4] flex gap-2 items-center'><FaHeart className='hover:text-red-500'/> Move To List</button>
               </div>
            </div>
           </div></>
    
       )
        }
 </div>
         {/* cart summary */}
        <div className='w-full lg:w-[30%]'>

        <div className='flex items-center gap-3 bg-sky-100 w-full'>
  <div className='bg-sky-300 pr-6 h-full py-6 rounded-r-[40px]'>
  <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/icon-delivery.svg-289ec5f71b25443056af.svg" alt="Delivery" />
  </div>

  <div className='py-2 space-y-1'>
    <p className='text-[12px] font-medium'><span className='font-light'>You've earned</span> FREE DELIVERY

<span className='font-light'> or </span> FREE COLLECTION.</p>

  </div>
        </div>


       <div className='w-full bg-white rounded h-40 shadow-lg  p-4 mt-5'>
       <h1 className='font-bold text-slate-500'>Cart Summary</h1>
        <div className='flex justify-between items-center mt-5 w-full'>
        <h1 className='font-semibold'>TOTAL: <span className='text-sm text-[#68686A]'>({carts.length} items)</span></h1>
        <h1 className='text-2xl font-bold text-green-700'>R {total}</h1>
        </div>

        <div className='w-full px-3 py-2 mt-2 flex text-center'>
        <Link to="/buy/review" className='w-full py-2 bg-green-600 hover:bg-green-800 text-white  text-sm font-medium shadow'>Proceed to Checkout</Link>
        </div>

       </div>
       <div className='w-full bg-white rounded h-28 shadow-lg mt-5 p-4'>
            <h1 className='flex items-center gap-2 text-sm mt-2 text-[#707072]'><FaLock/> Secure checkout</h1>
            <h1 className='flex items-center gap-2 text-sm mt-1 text-[#707072]'><FaCreditCard/> Many ways to pay</h1>
            <h1 className='flex items-center gap-2 text-sm mt-1 text-[#707072]'><FaTruck/> Fast, reliable delivery</h1>
        </div>
        </div>
       

    </div>
      }


       </section>
    );
};

export default Cart;