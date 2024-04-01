import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: carts = [], refetch} = useQuery({
        queryKey: ["cartItems", user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {

            const res = await axiosSecure.get(`/get-user-cart-items?email=${user?.email}`)
            return res.data;

        }
    })
    return [carts, refetch]
};

export default useCart;