import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useWishlist = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: lists = [], refetch} = useQuery({
        queryKey: ["wishlistItems", user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user-wish-list-items?email=${user?.email}`)
            return res.data;

        }
    })
    return [lists, refetch]
};

export default useWishlist;