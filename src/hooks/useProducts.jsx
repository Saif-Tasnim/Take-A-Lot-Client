    import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useProducts = () => {
    const {data: allProducts=[] , refetch} =useQuery({
        queryKey:["all-products"],
        queryFn: async()=> {
            const res = await axios.get("https://take-a-lot-server-two.vercel.app/all-products")
            return res.data;
        }
    })
    return [allProducts, refetch]
};

export default useProducts;